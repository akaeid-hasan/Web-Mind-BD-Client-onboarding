/**
 * AGENCY SETTINGS — edit these four values only.
 * Create a form at https://formspree.io and paste its endpoint below.
 */
const SETTINGS = {
  agencyName: 'Web Mind BD',
  logoUrl: '', // e.g. 'https://yourdomain.com/logo.png' or 'assets/logo.png'
  formspreeEndpoint: 'https://formspree.io/f/xqperyzd',
  projectLabel: 'Client Onboarding'
};

const form = document.getElementById('clientForm');
const steps = [...document.querySelectorAll('.step')];
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const errorBox = document.getElementById('formError');
const STORAGE_KEY = 'agency_client_onboarding_draft_v1';
let activeStep = 0;

// Agency branding is set from one place.
document.getElementById('agencyName').textContent = SETTINGS.agencyName;
document.getElementById('agencyFooter').textContent = SETTINGS.agencyName;
document.getElementById('copyrightYear').textContent = new Date().getFullYear();
document.title = `Client Onboarding | ${SETTINGS.agencyName}`;
document.querySelector('.header-tag').lastChild.textContent = ` ${SETTINGS.projectLabel}`;
if (SETTINGS.logoUrl) {
  const brandImage = document.getElementById('brandImage');
  brandImage.src = SETTINGS.logoUrl;
  brandImage.alt = `${SETTINGS.agencyName} logo`;
  brandImage.hidden = false;
  document.getElementById('brandIcon').hidden = true;
  brandImage.addEventListener('error', () => {
    brandImage.hidden = true;
    document.getElementById('brandIcon').hidden = false;
  });
}

function showError(message) {
  errorBox.textContent = message;
  errorBox.hidden = false;
  errorBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
function clearError() { errorBox.textContent = ''; errorBox.hidden = true; }
function showStep(index) {
  activeStep = Math.max(0, Math.min(steps.length - 1, index));
  steps.forEach((el, i) => { el.hidden = i !== activeStep; el.classList.toggle('is-active', i === activeStep); });
  document.getElementById('stepCount').textContent = `STEP ${String(activeStep + 1).padStart(2, '0')} / ${String(steps.length).padStart(2, '0')}`;
  document.getElementById('progressBar').style.width = `${(activeStep + 1) * 100 / steps.length}%`;
  backBtn.hidden = activeStep === 0;
  nextBtn.hidden = activeStep === steps.length - 1;
  submitBtn.hidden = activeStep !== steps.length - 1;
  clearError();
  if (activeStep === steps.length - 1) updateReview();
  if (window.matchMedia('(max-width: 920px)').matches) document.getElementById('formCard').scrollIntoView({ block: 'start', behavior: 'smooth' });
}
function isStepValid(index) {
  const fields = steps[index].querySelectorAll('input,textarea,select');
  for (const field of fields) {
    if (!field.checkValidity()) {
      field.reportValidity();
      field.focus();
      return false;
    }
  }
  return true;
}
function selectedPayments() {
  return [...document.querySelectorAll('[data-payment]:checked')].map(el => el.dataset.payment).join(', ');
}
function updateReview() {
  const value = name => (form.elements.namedItem(name)?.value || 'দেওয়া হয়নি').trim() || 'দেওয়া হয়নি';
  const data = [
    ['Business', value('business_name')],
    ['Contact', value('contact_person')],
    ['Email', value('email')],
    ['Support number', value('support_number')],
    ['Dhaka delivery', value('shipping_inside_dhaka') === 'দেওয়া হয়নি' ? 'দেওয়া হয়নি' : '৳' + value('shipping_inside_dhaka')],
    ['Outside Dhaka', value('shipping_outside_dhaka') === 'দেওয়া হয়নি' ? 'দেওয়া হয়নি' : '৳' + value('shipping_outside_dhaka')],
    ['Payment methods', selectedPayments() || 'দেওয়া হয়নি']
  ];
  const panel = document.getElementById('reviewPanel');
  panel.replaceChildren();
  const heading = document.createElement('h3');
  heading.textContent = 'আপনার দেওয়া তথ্যের সারাংশ';
  panel.appendChild(heading);
  for (const [label, val] of data) {
    const row = document.createElement('div'); row.className = 'review-item';
    const labelEl = document.createElement('span'); labelEl.textContent = label;
    const strong = document.createElement('strong'); strong.textContent = val;
    row.append(labelEl, strong); panel.appendChild(row);
  }
}

nextBtn.addEventListener('click', () => { if (isStepValid(activeStep)) { saveDraft(); showStep(activeStep + 1); } });
backBtn.addEventListener('click', () => { saveDraft(); showStep(activeStep - 1); });

function saveDraft() {
  try {
    const fields = [...form.querySelectorAll('input:not([type="hidden"]), textarea, select')];
    const data = {};
    fields.forEach(field => {
      if (field.name === '_gotcha') return;
      const key = field.dataset.payment ? `payment_${field.dataset.payment}` : (field.id === 'consent' ? 'consent' : field.name);
      if (!key) return;
      data[key] = field.type === 'checkbox' ? field.checked : field.value;
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) { /* Private browsing / disabled storage: continue without autosave. */ }
}
function restoreDraft() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY); if (!raw) return;
    const data = JSON.parse(raw);
    [...form.querySelectorAll('input:not([type="hidden"]), textarea, select')].forEach(field => {
      const key = field.dataset.payment ? `payment_${field.dataset.payment}` : (field.id === 'consent' ? 'consent' : field.name);
      if (!key || !(key in data)) return;
      if (field.type === 'checkbox') field.checked = !!data[key];
      else field.value = data[key];
    });
  } catch (e) { /* Corrupted or inaccessible local storage: ignore. */ }
}
form.addEventListener('input', saveDraft);
form.addEventListener('change', saveDraft);
restoreDraft();
showStep(0);

form.addEventListener('submit', async event => {
  event.preventDefault();
  clearError();
  // Protect against submitting the last step while previous required fields are missing.
  for (let i = 0; i < steps.length; i++) {
    const invalidField = [...steps[i].querySelectorAll('input, textarea, select')].find(field => !field.checkValidity());
    if (invalidField) {
      showStep(i); // Show the section before focusing an invalid field.
      invalidField.focus();
      invalidField.reportValidity();
      showError('অনুগ্রহ করে প্রয়োজনীয় তথ্যগুলো সঠিকভাবে পূরণ করুন।');
      return;
    }
  }
  const endpoint = SETTINGS.formspreeEndpoint;
  if (!/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint)) {
    showError('ফর্মটি এখনো সেটআপ করা হয়নি। Agency-কে Formspree endpoint যোগ করতে বলুন।');
    return;
  }
  document.getElementById('paymentMethods').value = selectedPayments() || 'Not specified';
  document.getElementById('subjectInput').value = `New Website Client Onboarding: ${form.elements.namedItem('business_name').value}`;
  submitBtn.disabled = true;
  const previousText = submitBtn.textContent;
  submitBtn.textContent = 'সাবমিট হচ্ছে…';
  try {
    const res = await fetch(endpoint, {
      method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' }
    });
    if (!res.ok) {
      let msg = 'সাবমিশন সফল হয়নি। আবার চেষ্টা করুন।';
      try { const result = await res.json(); if (Array.isArray(result.errors)) msg = result.errors.map(e => e.message).join(' '); } catch (e) {}
      throw new Error(msg);
    }
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    document.getElementById('formContent').hidden = true;
    document.getElementById('successContent').hidden = false;
    document.getElementById('formCard').scrollIntoView({ behavior: 'smooth', block: 'center' });
  } catch (e) {
    showError(e.message || 'সার্ভারে যোগাযোগ করা যায়নি। ইন্টারনেট সংযোগ চেক করুন।');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = previousText;
  }
});

document.getElementById('newFormBtn').addEventListener('click', () => {
  form.reset();
  try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
  document.getElementById('formContent').hidden = false;
  document.getElementById('successContent').hidden = true;
  showStep(0);
});
