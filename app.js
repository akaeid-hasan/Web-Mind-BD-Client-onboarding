
const CONFIG = {
  endpoint: 'https://formspree.io/f/xqperyzd',
  storageKey: 'webmind_client_onboarding_v4'
};

const STEPS = [
  {
    kicker: '01 · WEBSITE & BUSINESS DETAILS',
    title: 'ওয়েবসাইট ও ব্যবসার তথ্য',
    desc: 'Brand, contact, existing website, এবং প্রয়োজনীয় business information চাইলে এই step-এর section ON করুন।',
    groups: [
      {
        title: 'Business Basics',
        desc: 'Brand / business name, contact info, address এবং changes জানান।',
        fields: [
          { label:'Brand / Business Name', name:'business_name', placeholder:'যেমন: আপনার business / brand name' },
          { label:'Existing Website URL', name:'existing_website', placeholder:'https://example.com' },
          { label:'Contact Person’s Name', name:'contact_person', placeholder:'যার সঙ্গে যোগাযোগ করব' },
          { label:'Phone / WhatsApp Number', name:'phone_whatsapp', placeholder:'01XXXXXXXXX' },
          { label:'Email Address', name:'email_address', placeholder:'name@example.com' },
          { label:'Business Address', name:'business_address', type:'textarea', placeholder:'Business / office / store address', full:true },
          { label:'New Information or Changes Needed', name:'changes_needed', type:'textarea', placeholder:'আগের info থেকে কী পরিবর্তন বা নতুন কিছু দরকার তা লিখুন...', full:true }
        ]
      },
      {
        title: 'WooCommerce Store Settings',
        desc: 'Store address, selling countries, shipping locations, currency ইত্যাদি দিতে চাইলে এই section ON করুন।',
        fields: [
          { label:'Store Address Line 1', name:'store_address_line_1', placeholder:'Address line 1' },
          { label:'Store Address Line 2', name:'store_address_line_2', placeholder:'Address line 2' },
          { label:'City', name:'store_city', placeholder:'City' },
          { label:'Country / State', name:'store_country_state', placeholder:'যেমন: Bangladesh — Dhaka' },
          { label:'Postcode / ZIP', name:'store_zip', placeholder:'Postcode / ZIP' },
          { label:'Website Currency', name:'website_currency', placeholder:'যেমন: BDT / USD' },
          { label:'Selling Location(s)', name:'selling_locations', type:'textarea', placeholder:'যেমন: Sell to all countries / specific countries', full:true },
          { label:'Shipping Location(s)', name:'shipping_locations', type:'textarea', placeholder:'যেমন: Ship to all countries you sell to / specific countries', full:true },
          { label:'Default Customer Location', name:'default_customer_location', placeholder:'যেমন: Shop base address / no location by default' }
        ]
      }
    ]
  },
  {
    kicker: '02 · CONTENT & BRAND ASSETS',
    title: 'কনটেন্ট ও ব্র্যান্ড অ্যাসেট',
    desc: 'Link বা text — যেভাবে সহজ হয় সেভাবে content, product list, design reference, assets শেয়ার করুন।',
    groups: [
      {
        title: 'Content / Assets',
        desc: 'এই section ON করলে content, doc link, drive link, reference site link-এর field দেখাবে।',
        fields: [
          { label:'Website Content — Google Docs Link or Text', name:'website_content', type:'textarea', placeholder:'Google Docs link দিন বা সরাসরি content লিখুন...', full:true },
          { label:'Product List — Google Sheets Link or Text', name:'product_list', type:'textarea', placeholder:'Google Sheets link দিন বা product list লিখুন...', full:true },
          { label:'Logo / Product Images / Brand Assets — Google Drive Link', name:'brand_assets_link', type:'textarea', placeholder:'Google Drive / Dropbox / asset link', full:true },
          { label:'Reference Website Links', name:'reference_links', type:'textarea', placeholder:'যে website দেখে design / layout বুঝতে হবে তার link দিন...', full:true },
          { label:'Content & Design Notes', name:'content_design_notes', type:'textarea', placeholder:'Design preference, section instruction, layout note ইত্যাদি লিখুন...', full:true }
        ]
      }
    ]
  },
  {
    kicker: '03 · SOCIAL MEDIA',
    title: 'সোশ্যাল মিডিয়া',
    desc: 'শুধু যেসব social link প্রয়োজন সেগুলো দিন। বাকিগুলো empty রাখলেও সমস্যা নেই।',
    groups: [
      {
        title: 'Social Media Links',
        desc: 'এই section ON করলে social media field দেখাবে।',
        fields: [
          { label:'Facebook Page URL', name:'facebook_page_url', placeholder:'https://facebook.com/yourpage' },
          { label:'Instagram URL', name:'instagram_url', placeholder:'https://instagram.com/yourpage' },
          { label:'TikTok URL', name:'tiktok_url', placeholder:'https://tiktok.com/@yourpage' },
          { label:'YouTube URL', name:'youtube_url', placeholder:'https://youtube.com/@yourpage' },
          { label:'Other Social Media Links', name:'other_social_links', type:'textarea', placeholder:'অন্যান্য social media link এখানে দিন...', full:true }
        ]
      }
    ]
  },
  {
    kicker: '04 · DELIVERY INFORMATION',
    title: 'ডেলিভারি তথ্য',
    desc: 'Shipping / delivery setup প্রয়োজন হলে এই step-এর section ON করুন। না হলে OFF রেখেই next করুন।',
    groups: [
      {
        title: 'Shipping / Delivery Info',
        desc: 'এই section ON করলে delivery area, charge, COD, free delivery ইত্যাদির field দেখাবে।',
        fields: [
          { label:'Delivery Areas', name:'delivery_areas', type:'textarea', placeholder:'যেমন: ঢাকা / সারা বাংলাদেশ / specific area', full:true },
          { label:'Delivery Charges', name:'delivery_charges', type:'textarea', placeholder:'যেমন: ঢাকার ভিতরে 70, বাইরে 120', full:true },
          { label:'Estimated Delivery Time', name:'estimated_delivery_time', placeholder:'যেমন: 1–3 working days' },
          { label:'Cash on Delivery Availability', name:'cod_availability', placeholder:'যেমন: Available / selected areas only' },
          { label:'Free Delivery Conditions', name:'free_delivery_conditions', placeholder:'যেমন: above 2000 BDT' },
          { label:'Additional Delivery Instructions', name:'additional_delivery_instructions', type:'textarea', placeholder:'Extra delivery rules or instruction...', full:true }
        ]
      }
    ]
  },
  {
    kicker: '05 · PAYMENT & POLICIES',
    title: 'পেমেন্ট ও পলিসি',
    desc: 'Payment method, instructions, return / privacy policy প্রয়োজন হলে section ON করুন।',
    groups: [
      {
        title: 'Payment Information',
        desc: 'এই section ON করলে payment related field দেখাবে।',
        fields: [
          { label:'Accepted Payment Methods', name:'accepted_payment_methods', type:'textarea', placeholder:'যেমন: bKash, Nagad, COD, Bank transfer', full:true },
          { label:'Payment Instructions', name:'payment_instructions', type:'textarea', placeholder:'যদি নির্দিষ্ট instruction থাকে, এখানে লিখুন...', full:true }
        ]
      },
      {
        title: 'Policies',
        desc: 'এই section ON করলে return / exchange / refund / privacy / terms field দেখাবে।',
        fields: [
          { label:'Return / Exchange / Refund Policy — Text or Document Link', name:'return_exchange_refund_policy', type:'textarea', placeholder:'Policy text অথবা document link দিন...', full:true },
          { label:'Privacy Policy / Terms & Conditions — Text or Document Link', name:'privacy_terms_policy', type:'textarea', placeholder:'Policy text অথবা document link দিন...', full:true }
        ]
      }
    ]
  },
  {
    kicker: '06 · ADDITIONAL NOTES',
    title: 'অতিরিক্ত নির্দেশনা',
    desc: 'যা পরে শেয়ার করবেন, special request, বা extra note — সব এখানে দিতে পারবেন।',
    groups: [
      {
        title: 'Additional Notes',
        desc: 'Final extra note বা later shared file info দিতে চাইলে এই section ON করুন।',
        fields: [
          { label:'Special Requests or Instructions', name:'special_requests', type:'textarea', placeholder:'Any special request / instruction...', full:true },
          { label:'Information or Files to Be Shared Later', name:'files_shared_later', type:'textarea', placeholder:'পরে যেসব info / file দেবেন তা এখানে লিখুন...', full:true }
        ]
      }
    ]
  }
];

const form = document.getElementById('clientForm');
const stepContainer = document.getElementById('stepContainer');
const stepPills = document.getElementById('stepPills');
const progressBar = document.getElementById('progressBar');
const stepCount = document.getElementById('stepCount');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const formError = document.getElementById('formError');
const enabledSections = document.getElementById('enabledSections');
const successContent = document.getElementById('successContent');
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

let currentStep = 0;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
}

function fieldMarkup(field, stepIndex, groupIndex, fieldIndex) {
  const id = `field_${stepIndex}_${groupIndex}_${fieldIndex}`;
  const label = `<span>${escapeHtml(field.label)}</span>`;
  const help = field.help ? `<small>${escapeHtml(field.help)}</small>` : '';
  const className = field.type === 'textarea' ? 'textarea' : field.type === 'select' ? 'select' : 'input';
  let control = '';

  if (field.type === 'textarea') {
    control = `<textarea class="${className}" id="${id}" name="${field.name}" placeholder="${escapeHtml(field.placeholder || '')}"></textarea>`;
  } else if (field.type === 'select') {
    const options = (field.options || []).map(opt => `<option value="${escapeHtml(opt)}">${escapeHtml(opt)}</option>`).join('');
    control = `<select class="${className}" id="${id}" name="${field.name}">${options}</select>`;
  } else {
    control = `<input class="${className}" id="${id}" name="${field.name}" type="text" placeholder="${escapeHtml(field.placeholder || '')}">`;
  }

  return `<label class="field ${field.full ? 'full' : ''}">${label}${control}${help}</label>`;
}

function groupMarkup(group, stepIndex, groupIndex) {
  const targetId = `group_body_${stepIndex}_${groupIndex}`;
  return `
    <div class="optional-group">
      <div class="group-head">
        <div class="group-copy">
          <span class="kicker">OPTIONAL SECTION</span>
          <strong>${escapeHtml(group.title)}</strong>
          <small>${escapeHtml(group.desc)} Toggle ON করলে নিচের field দেখা যাবে।</small>
        </div>
        <div class="switch-wrap">
          <span class="switch-text">Toggle ON</span>
          <label class="switch" aria-label="Toggle ${escapeHtml(group.title)}">
            <input type="checkbox" class="group-toggle" name="toggle_${stepIndex}_${groupIndex}" data-target="${targetId}">
            <span class="slider"></span>
          </label>
        </div>
      </div>
      <div class="group-body" id="${targetId}" hidden>
        <div class="field-grid">
          ${group.fields.map((field, fieldIndex) => fieldMarkup(field, stepIndex, groupIndex, fieldIndex)).join('')}
        </div>
      </div>
    </div>
  `;
}

function stepMarkup(step, stepIndex) {
  return `
    <section class="step" data-step="${stepIndex}" ${stepIndex === 0 ? '' : 'hidden'}>
      <span class="section-kicker">${escapeHtml(step.kicker)}</span>
      <h3>${escapeHtml(step.title)}</h3>
      <p class="step-desc">${escapeHtml(step.desc)}</p>
      ${step.groups.map((group, groupIndex) => groupMarkup(group, stepIndex, groupIndex)).join('')}
      ${stepIndex === STEPS.length - 1 ? '<div class="final-note">সব field optional। প্রয়োজন হলে ON করুন, না হলে OFF রেখেই submit করতে পারবেন।</div><div class="review-box" id="reviewBox"><h4>Enabled Sections Summary</h4><div id="reviewItems"></div></div>' : ''}
    </section>
  `;
}

function render() {
  stepContainer.innerHTML = STEPS.map((step, idx) => stepMarkup(step, idx)).join('');
  stepPills.innerHTML = STEPS.map((step, idx) => `<button type="button" data-step-go="${idx}">${idx + 1}</button>`).join('');
}

function updateTogglePanels() {
  document.querySelectorAll('.group-toggle').forEach(toggle => {
    const panel = document.getElementById(toggle.dataset.target);
    if (!panel) return;
    panel.hidden = !toggle.checked;
    panel.querySelectorAll('input, textarea, select').forEach(el => {
      el.disabled = !toggle.checked;
    });
  });
}

function updateReview() {
  const reviewItems = document.getElementById('reviewItems');
  if (!reviewItems) return;
  const items = [];
  document.querySelectorAll('.group-toggle').forEach(toggle => {
    if (toggle.checked) {
      const title = toggle.closest('.optional-group').querySelector('.group-copy strong').textContent;
      items.push(title);
    }
  });
  enabledSections.value = items.join(' | ');
  reviewItems.innerHTML = items.length ? items.map(item => `<div class="review-item"><strong>${escapeHtml(item)}</strong><span>Enabled</span></div>`).join('') : '<div class="review-item"><strong>No optional section enabled yet</strong><span>You can still submit if needed</span></div>';
}

function showStep(stepIndex) {
  currentStep = Math.max(0, Math.min(STEPS.length - 1, stepIndex));
  document.querySelectorAll('.step').forEach((step, index) => {
    step.hidden = index !== currentStep;
  });
  document.querySelectorAll('[data-step-go]').forEach((btn, index) => {
    btn.classList.toggle('active', index === currentStep);
  });
  stepCount.textContent = `STEP ${String(currentStep + 1).padStart(2, '0')} / ${String(STEPS.length).padStart(2, '0')}`;
  progressBar.style.width = `${((currentStep + 1) / STEPS.length) * 100}%`;
  backBtn.hidden = currentStep === 0;
  nextBtn.hidden = currentStep === STEPS.length - 1;
  submitBtn.hidden = currentStep !== STEPS.length - 1;
  updateReview();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function saveDraft() {
  const data = {};
  form.querySelectorAll('input, textarea, select').forEach(el => {
    if (!el.name || el.name === '_gotcha') return;
    if (el.type === 'checkbox') data[el.name] = el.checked;
    else data[el.name] = el.value;
  });
  localStorage.setItem(CONFIG.storageKey, JSON.stringify({ currentStep, data }));
}

function loadDraft() {
  try {
    const raw = localStorage.getItem(CONFIG.storageKey);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (!saved || !saved.data) return;
    form.querySelectorAll('input, textarea, select').forEach(el => {
      if (!el.name || !(el.name in saved.data)) return;
      if (el.type === 'checkbox') el.checked = !!saved.data[el.name];
      else el.value = saved.data[el.name];
    });
    currentStep = Number.isInteger(saved.currentStep) ? saved.currentStep : 0;
  } catch (error) {
    console.error(error);
  }
}

function setError(message) {
  formError.hidden = false;
  formError.textContent = message;
}

function clearError() {
  formError.hidden = true;
  formError.textContent = '';
}

render();
loadDraft();
updateTogglePanels();
showStep(currentStep);

form.addEventListener('input', saveDraft);
form.addEventListener('change', event => {
  if (event.target.classList.contains('group-toggle')) {
    updateTogglePanels();
    updateReview();
  }
  saveDraft();
});

stepPills.addEventListener('click', event => {
  const btn = event.target.closest('[data-step-go]');
  if (!btn) return;
  showStep(Number(btn.dataset.stepGo));
  saveDraft();
});

backBtn.addEventListener('click', () => {
  showStep(currentStep - 1);
  saveDraft();
});

nextBtn.addEventListener('click', () => {
  showStep(currentStep + 1);
  saveDraft();
});

form.addEventListener('submit', async event => {
  event.preventDefault();
  clearError();
  updateReview();
  saveDraft();

  const formData = new FormData(form);
  const subjectSource = formData.get('business_name') || formData.get('contact_person') || 'New Client Update';
  document.getElementById('subjectInput').value = `Web Mind BD — ${subjectSource}`;
  formData.set('_subject', document.getElementById('subjectInput').value);
  formData.set('enabled_sections', enabledSections.value);

  const previousText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = 'জমা হচ্ছে...';

  try {
    const response = await fetch(CONFIG.endpoint, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData
    });

    if (!response.ok) throw new Error('Submission failed');

    form.hidden = true;
    document.querySelector('.helper-bar').hidden = true;
    document.querySelector('.progress-track').hidden = true;
    document.getElementById('stepPills').hidden = true;
    successContent.hidden = false;
    localStorage.removeItem(CONFIG.storageKey);
  } catch (error) {
    setError('দুঃখিত, এই মুহূর্তে form submit করা যায়নি। একটু পর আবার চেষ্টা করুন।');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = previousText;
  }
});

document.getElementById('newFormBtn').addEventListener('click', () => {
  form.reset();
  localStorage.removeItem(CONFIG.storageKey);
  form.hidden = false;
  document.querySelector('.helper-bar').hidden = false;
  document.querySelector('.progress-track').hidden = false;
  document.getElementById('stepPills').hidden = false;
  successContent.hidden = true;
  updateTogglePanels();
  clearError();
  showStep(0);
});