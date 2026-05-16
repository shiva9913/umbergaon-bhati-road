// =============================================
//  UMBERGAON BHATI ROAD — COMMUNITY WEBSITE
//  JavaScript — Navigation & Market Logic
//  Developer: Shiva Singh
// =============================================

// ---- PAGE NAVIGATION ----
const pages = ['home','hospitals','emergency','transport','market','schools','jobs','news','events','contact'];

function showPage(id) {
  pages.forEach(p => {
    document.getElementById('page-'+p).classList.remove('active');
    const b = document.getElementById('btn-'+p); if(b) b.classList.remove('active');
    const m = document.getElementById('menu-'+p); if(m) m.classList.remove('active');
  });
  document.getElementById('page-'+id).classList.add('active');
  window.scrollTo(0,0);
  const b = document.getElementById('btn-'+id); if(b) b.classList.add('active');
  const m = document.getElementById('menu-'+id); if(m) m.classList.add('active');
}

// ---- SIDE MENU ----
function toggleMenu() {
  document.getElementById('sidemenu').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('show');
}
function closeMenu() {
  document.getElementById('sidemenu').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
}

// ---- MORE MENU POPUP ----
function toggleMoreMenu() {
  const m = document.getElementById('more-menu');
  const o = document.getElementById('more-overlay');
  const isOpen = m.style.display === 'block';
  m.style.display = isOpen ? 'none' : 'block';
  o.style.display = isOpen ? 'none' : 'block';
}
function closeMoreMenu() {
  document.getElementById('more-menu').style.display = 'none';
  document.getElementById('more-overlay').style.display = 'none';
}

// ---- MARKET DATA ----
const marketData = {
  sabzi: {
    title: '🥦 Sabzi — Sunday Bazaar',
    items: [
      { name: 'Aalu (Potato)', price: '₹25/kg' },
      { name: 'Pyaaz (Onion)', price: '₹30/kg' },
      { name: 'Tamatar (Tomato)', price: '₹20/kg' },
      { name: 'Mirchi (Green Chilli)', price: '₹40/kg' },
      { name: 'Bhindi (Ladyfinger)', price: '₹35/kg' },
      { name: 'Gobhi (Cauliflower)', price: '₹30/piece' },
      { name: 'Palak (Spinach)', price: '₹15/bundle' },
      { name: 'Lauki (Bottle Gourd)', price: '₹20/piece' },
      { name: 'Karela (Bitter Gourd)', price: '₹40/kg' },
      { name: 'Brinjal (Baingan)', price: '₹25/kg' },
    ]
  },
  kapde: {
    title: '👗 Kapde — Sunday Bazaar',
    items: [
      { name: 'Saree (Cotton)', price: '₹200 se shuru' },
      { name: 'Saree (Synthetic)', price: '₹350 se shuru' },
      { name: 'Salwar Suit', price: '₹300 se shuru' },
      { name: 'Kurta (Gents)', price: '₹150 se shuru' },
      { name: 'T-Shirt', price: '₹100 se shuru' },
      { name: 'Jeans', price: '₹250 se shuru' },
      { name: 'Kids Dress', price: '₹120 se shuru' },
      { name: 'Dupatta', price: '₹80 se shuru' },
      { name: 'Undergarments', price: '₹50 se shuru' },
      { name: 'School Uniform', price: '₹200 se shuru' },
    ]
  },
  joote: {
    title: '👟 Joote — Sunday Bazaar',
    items: [
      { name: 'Chappal (Gents)', price: '₹80 se shuru' },
      { name: 'Chappal (Ladies)', price: '₹100 se shuru' },
      { name: 'Sandal (Ladies)', price: '₹150 se shuru' },
      { name: 'Sports Shoes', price: '₹250 se shuru' },
      { name: 'School Shoes', price: '₹200 se shuru' },
      { name: 'Bellies (Girls)', price: '₹120 se shuru' },
      { name: 'Boots (Gents)', price: '₹300 se shuru' },
    ]
  },
  ghar: {
    title: '🏠 Ghar Saman — Sunday Bazaar',
    items: [
      { name: 'Plastic Dabba Set', price: '₹100 se shuru' },
      { name: 'Steel Bartan', price: '₹150 se shuru' },
      { name: 'Broom / Jhadu', price: '₹30 se shuru' },
      { name: 'Bucket', price: '₹60 se shuru' },
      { name: 'Chatai / Mat', price: '₹80 se shuru' },
      { name: 'Plastic Shelf', price: '₹200 se shuru' },
      { name: 'Mop / Pocha', price: '₹50 se shuru' },
      { name: 'Tawa / Pan', price: '₹120 se shuru' },
    ]
  },
  cosmetics: {
    title: '💄 Cosmetics — Sunday Bazaar',
    items: [
      { name: 'Face Cream', price: '₹50 se shuru' },
      { name: 'Lipstick', price: '₹30 se shuru' },
      { name: 'Bindi / Chudi', price: '₹10 se shuru' },
      { name: 'Mehendi Cone', price: '₹20 se shuru' },
      { name: 'Kajal', price: '₹25 se shuru' },
      { name: 'Hair Oil', price: '₹40 se shuru' },
      { name: 'Soap / Shampoo', price: '₹20 se shuru' },
      { name: 'Nail Polish', price: '₹15 se shuru' },
    ]
  },
  masale: {
    title: '🌾 Masale — Sunday Bazaar',
    items: [
      { name: 'Haldi (Turmeric)', price: '₹180/kg' },
      { name: 'Lal Mirchi Powder', price: '₹200/kg' },
      { name: 'Dhaniya Powder', price: '₹160/kg' },
      { name: 'Jeera (Cumin)', price: '₹300/kg' },
      { name: 'Garam Masala', price: '₹400/kg' },
      { name: 'Rai (Mustard)', price: '₹120/kg' },
      { name: 'Methi Dana', price: '₹150/kg' },
      { name: 'Saunf (Fennel)', price: '₹200/kg' },
    ]
  }
};

// ---- MARKET POPUP ----
function showProducts(cat) {
  const data = marketData[cat];
  document.getElementById('popup-title').textContent = data.title;
  let html = '<div style="display:flex;flex-direction:column;gap:8px;">';
  data.items.forEach(item => {
    html += `<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:#f8f9fa;border-radius:10px;border:1px solid #e0e0e0;">
      <span style="font-size:13px;font-weight:500;color:#1a1a2e;">${item.name}</span>
      <span style="font-size:13px;font-weight:700;color:#ff6f00;">${item.price}</span>
    </div>`;
  });
  html += '</div><p style="font-size:11px;color:#888;margin-top:12px;text-align:center;">* Prices Sunday Bazaar ke approximate hain</p>';
  document.getElementById('popup-products').innerHTML = html;
  document.getElementById('product-overlay').style.display = 'block';
  document.getElementById('product-popup').style.display = 'block';
}
function closeProducts() {
  document.getElementById('product-overlay').style.display = 'none';
  document.getElementById('product-popup').style.display = 'none';
}

// ---- NEWS LANGUAGE SWITCHER ----
const langLinks = {
  hi: { gujarat: 'https://www.divyabhaskar.co.in', india: 'https://www.bhaskar.com', audio: 'https://www.newsonair.gov.in', video: 'https://www.youtube.com/@AajTak/live' },
  gu: { gujarat: 'https://www.gujaratsamachar.com', india: 'https://www.sandesh.com', audio: 'https://www.newsonair.gov.in', video: 'https://www.youtube.com/@VtvGujarati/live' },
  en: { gujarat: 'https://timesofindia.indiatimes.com/city/surat', india: 'https://www.ndtv.com', audio: 'https://www.bbc.com/news', video: 'https://www.youtube.com/@ndtvindia/live' },
  mr: { gujarat: 'https://www.loksatta.com', india: 'https://www.lokmat.com', audio: 'https://www.newsonair.gov.in', video: 'https://www.youtube.com/@ZeeMarathi/live' }
};
let currentLang = 'hi';

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active-lang'));
  document.getElementById('lang-' + lang).classList.add('active-lang');
}
function setFormat(fmt) {
  document.querySelectorAll('.fmt-btn').forEach(b => b.classList.remove('active-fmt'));
  document.getElementById('fmt-' + fmt).classList.add('active-fmt');
  document.getElementById('audio-news-section').style.display = fmt === 'audio' ? 'block' : 'none';
  document.getElementById('video-news-section').style.display = fmt === 'video' ? 'block' : 'none';
  if (fmt === 'audio') {
    window.open(langLinks[currentLang].audio, '_blank');
  } else if (fmt === 'video') {
    window.open(langLinks[currentLang].video, '_blank');
  }
}
