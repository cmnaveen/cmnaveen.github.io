document.addEventListener("DOMContentLoaded", function () {
  // Check if we've already shown a festival popup this session
  if (sessionStorage.getItem('svadotsava_festival_shown')) {
    return;
  }

  const festivals = [
    {
      id: 'rama-navami',
      start: '2026-03-26T00:00:00+05:30',
      end: '2026-03-27T23:59:00+05:30',
      html: `
  <div id="rama-navami-modal" class="festival-modal" style="display: none;">
    <div class="festival-modal-content">
      <button class="festival-close-btn" onclick="closeFestivalModal('rama-navami-modal')" aria-label="Close">&times;</button>
      <img src="assets/images/festivals/sri_rama_parivar.png" alt="Sri Rama Parivar" class="festival-img" />
      <div class="festival-gold-subtitle">✦ A CELEBRATION OF VIRTUE ✦</div>
      <h2 class="festival-title">Happy Sri Rama Navami</h2>
      <p class="festival-msg">May Sri Rama’s divine blessings fill your home with peace, guide your path with dharma,
        and bless your life with eternal joy and prosperity. Jai Shri Ram! 🙏</p>
      <div class="festival-chant">॥ जय श्री राम ॥</div>
      <button class="festival-enter-btn" onclick="closeFestivalModal('rama-navami-modal')">Enter Site</button>
    </div>
  </div>`
    },
    {
      id: 'hanuman-jayanthi',
      start: '2026-05-11T00:00:00+05:30',
      end: '2026-05-13T23:59:59+05:30',
      html: `
  <div id="hanuman-jayanthi-modal" class="festival-modal" style="display: none;">
    <div class="festival-modal-content">
      <button class="festival-close-btn" onclick="closeFestivalModal('hanuman-jayanthi-modal')" aria-label="Close">&times;</button>
      <img src="assets/images/festivals/hanuman_jayanthi.png" alt="Lord Hanuman" class="festival-img" />
      <div class="festival-gold-subtitle">✦ STRENGTH · DEVOTION · SERVICE ✦</div>
      <h2 class="festival-title">Happy Hanuman Jayanthi</h2>
      <p class="festival-msg">He carried a mountain. He crossed an ocean. He bowed only to Ram.<br />May His fearless
        devotion ignite that same fire in you. 🚩</p>
      <div class="festival-chant" style="display:flex;align-items:center;justify-content:center;gap:18px;flex-wrap:wrap;">
        <span>॥ जय हनुमान ॥</span>
        <span style="opacity:0.45;font-size:1.2rem;">✦</span>
        <span>॥ जय श्री राम ॥</span>
      </div>
      <button class="festival-enter-btn" onclick="closeFestivalModal('hanuman-jayanthi-modal')">Enter Site</button>
    </div>
  </div>`
    },
    {
      id: 'vaisakhi',
      start: '2026-04-13T00:00:00+05:30',
      end: '2026-04-14T23:59:59+05:30',
      html: `
  <div id="vaisakhi-modal" class="festival-modal" style="display: none;">
    <div class="festival-modal-content">
      <button class="festival-close-btn" onclick="closeFestivalModal('vaisakhi-modal')" aria-label="Close">&times;</button>
      <img src="assets/images/festivals/vaisakhi.png" alt="Vaisakhi Tamil New Year Vishu" class="festival-img" />
      <div class="festival-gold-subtitle">✦ HARVEST · RENEWAL · NEW BEGINNINGS ✦</div>
      <h2 class="festival-title">Happy Vaisakhi / Tamil New Year / Vishu</h2>
      <p class="festival-msg">May this auspicious day bless your home with abundance, usher in a radiant new beginning,
        and fill every moment of the year ahead with joy, health, and prosperity. 🌾</p>
      <div class="festival-chant" style="display:flex;align-items:center;justify-content:center;gap:18px;flex-wrap:wrap;">
        <span>ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖ਼ਾਲਸਾ</span>
        <span style="opacity:0.45;font-size:1.2rem;">✦</span>
        <span>இனிய தமிழ் புத்தாண்டு</span>
      </div>
      <button class="festival-enter-btn" onclick="closeFestivalModal('vaisakhi-modal')">Enter Site</button>
    </div>
  </div>`
    },
    {
      id: 'adi-shankaracharya',
      start: '2026-04-20T00:00:00+05:30',
      end: '2026-04-21T23:59:59+05:30',
      html: `
  <div id="adi-shankaracharya-modal" class="festival-modal" style="display: none;">
    <div class="festival-modal-content">
      <button class="festival-close-btn" onclick="closeFestivalModal('adi-shankaracharya-modal')" aria-label="Close">&times;</button>
      <img src="assets/images/festivals/adi_shankaracharya.png" alt="Adi Shankaracharya" class="festival-img" />
      <div class="festival-gold-subtitle">✦ WISDOM · ADVAITA · DIVINE CONSCIOUSNESS ✦</div>
      <h2 class="festival-title">Happy Adi Shankaracharya Jayanti</h2>
      <p class="festival-msg">Tuesday, April 21, 2026, marks the 1238th birth anniversary (Jayanti) of Adi Shankaracharya.<br/>May his teachings of Advaita Vedanta inspire wisdom, inner peace, and spiritual awakening in your life. 🙏</p>
      <div class="festival-chant">॥ शिवोऽहम् ॥</div>
      <button class="festival-enter-btn" onclick="closeFestivalModal('adi-shankaracharya-modal')">Enter Site</button>
    </div>
  </div>`
    },
    {
      id: 'narasimha-jayanti',
      start: '2026-04-29T00:00:00+05:30',
      end: '2026-04-30T23:59:59+05:30',
      html: `
  <div id="narasimha-jayanti-modal" class="festival-modal" style="display: none;">
    <div class="festival-modal-content">
      <button class="festival-close-btn" onclick="closeFestivalModal('narasimha-jayanti-modal')" aria-label="Close">&times;</button>
      <img src="assets/images/festivals/narasimha_jayanti.png" alt="Lord Narasimha" class="festival-img" />
      <div class="festival-gold-subtitle">✦ PROTECTION · DEVOTION · COURAGE ✦</div>
      <h2 class="festival-title">Happy Narasimha Jayanti</h2>
      <p class="festival-msg">Thursday, April 30, 2026, marks the auspicious occasion of Narasimha Jayanti.<br/>May the divine protector shield you from all negativity and bless your family with strength, courage, and ultimate peace. 🙏</p>
      <div class="festival-chant">॥ ॐ नमो भगवते नरसिंहाय ॥</div>
      <button class="festival-enter-btn" onclick="closeFestivalModal('narasimha-jayanti-modal')">Enter Site</button>
    </div>
  </div>`
    },
    {
      id: 'rath-yatra',
      start: '2026-07-15T00:00:00+05:30',
      end: '2026-07-16T23:59:59+05:30',
      html: `
  <div id="rath-yatra-modal" class="festival-modal" style="display: none;">
    <div class="festival-modal-content">
      <button class="festival-close-btn" onclick="closeFestivalModal('rath-yatra-modal')" aria-label="Close">&times;</button>
      <img src="assets/images/festivals/rath_yatra.png" alt="Puri Rath Yatra" class="festival-img" />
      <div class="festival-gold-subtitle">✦ DEVOTION · JOURNEY · LIBERATION ✦</div>
      <h2 class="festival-title">Happy Rath Yatra</h2>
      <p class="festival-msg">As Lord Jagannath rides His magnificent chariot, may His blessings carry you through
        life's journey with grace, unwavering faith, and eternal joy. Jai Jagannath! 🚩</p>
      <div class="festival-chant">॥ जय जगन्नाथ ॥</div>
      <button class="festival-enter-btn" onclick="closeFestivalModal('rath-yatra-modal')">Enter Site</button>
    </div>
  </div>`
    },
    {
      id: 'ganesh-chaturthi',
      start: '2026-09-13T00:00:00+05:30',
      end: '2026-09-14T23:59:59+05:30',
      html: `
  <div id="ganesh-chaturthi-modal" class="festival-modal" style="display: none;">
    <div class="festival-modal-content">
      <button class="festival-close-btn" onclick="closeFestivalModal('ganesh-chaturthi-modal')" aria-label="Close">&times;</button>
      <img src="assets/images/festivals/ganesh_chaturthi.png" alt="Ganesh Chaturthi" class="festival-img" />
      <div class="festival-gold-subtitle">✦ WISDOM · SUCCESS · NEW BEGINNINGS ✦</div>
      <h2 class="festival-title">Happy Ganesh Chaturthi</h2>
      <p class="festival-msg">May Lord Ganesha remove every obstacle from your path, bless you with wisdom, and shower
        your life with peace, prosperity, and happiness. Ganpati Bappa Morya! 🐘</p>
      <div class="festival-chant">॥ गणपति बप्पा मोरया ॥</div>
      <button class="festival-enter-btn" onclick="closeFestivalModal('ganesh-chaturthi-modal')">Enter Site</button>
    </div>
  </div>`
    },
    {
      id: 'dussehra',
      start: '2026-10-19T00:00:00+05:30',
      end: '2026-10-20T23:59:59+05:30',
      html: `
  <div id="dussehra-modal" class="festival-modal" style="display: none;">
    <div class="festival-modal-content">
      <button class="festival-close-btn" onclick="closeFestivalModal('dussehra-modal')" aria-label="Close">&times;</button>
      <img src="assets/images/festivals/dussehra.png" alt="Dussehra Vijayadashami" class="festival-img" />
      <div class="festival-gold-subtitle">✦ VICTORY OF GOOD OVER EVIL ✦</div>
      <h2 class="festival-title">Happy Dussehra</h2>
      <p class="festival-msg">On this day Lord Rama vanquished Ravana — may you too triumph over every darkness within
        and around you. May truth, righteousness, and dharma always prevail! 🏹</p>
      <div class="festival-chant">॥ जय श्री राम ॥</div>
      <button class="festival-enter-btn" onclick="closeFestivalModal('dussehra-modal')">Enter Site</button>
    </div>
  </div>`
    },
    {
      id: 'diwali',
      start: '2026-11-07T00:00:00+05:30',
      end: '2026-11-08T23:59:59+05:30',
      html: `
  <div id="diwali-modal" class="festival-modal" style="display: none;">
    <div class="festival-modal-content">
      <button class="festival-close-btn" onclick="closeFestivalModal('diwali-modal')" aria-label="Close">&times;</button>
      <img src="assets/images/festivals/diwali.png" alt="Diwali" class="festival-img" />
      <div class="festival-gold-subtitle">✦ LIGHT · PROSPERITY · JOY ✦</div>
      <h2 class="festival-title">Happy Diwali</h2>
      <p class="festival-msg">May the divine light of Diwali illuminate your home and heart, fill your life with
        prosperity, and dispel every shadow of doubt and sorrow. From darkness to light — Shubh Deepawali! 🪔✨</p>
      <div class="festival-chant">॥ शुभ दीपावली ॥</div>
      <button class="festival-enter-btn" onclick="closeFestivalModal('diwali-modal')">Enter Site</button>
    </div>
  </div>`
    }
  ];

  const now = Date.now();
  let activeFestivalHtml = '';
  let activeModalId = '';

  // Navratri logic is dynamic based on all 9 days
  const navratriStart = new Date('2026-10-10T00:00:00+05:30').getTime();
  const navratriEnd = new Date('2026-10-18T23:59:59+05:30').getTime();

  if (now >= navratriStart && now <= navratriEnd) {
    const dayDiff = Math.floor((now - navratriStart) / 86400000);
    const navratriDay = Math.min(9, Math.max(1, dayDiff + 1));
    const deities = ["Maa Shailputri", "Maa Brahmacharini", "Maa Chandraghanta", "Maa Kushmanda", "Maa Skandamata", "Maa Katyayani", "Maa Kalaratri", "Maa Mahagauri", "Maa Siddhidatri"];
    const todayDeity = deities[navratriDay - 1];

    activeModalId = 'navratri-modal';
    activeFestivalHtml = `
  <div id="navratri-modal" class="festival-modal" style="display: none;">
    <div class="festival-modal-content">
      <button class="festival-close-btn" onclick="closeFestivalModal('navratri-modal')" aria-label="Close">&times;</button>
      <img src="assets/images/festivals/navratri_day${navratriDay}.png" alt="Navratri Day ${navratriDay} - ${todayDeity}" class="festival-img" />
      <div class="festival-gold-subtitle">✦ NAVRATRI DAY ${navratriDay} &bull; ${todayDeity.toUpperCase()} ✦</div>
      <h2 class="festival-title">Happy Sharad Navratri</h2>
      <p class="festival-msg">May the nine divine forms of Maa Durga bless you with strength, courage, and infinite
        grace during these sacred nine nights of worship and devotion. Jai Mata Di! 🪔</p>
      <div class="festival-chant">॥ जय माता दी ॥</div>
      <button class="festival-enter-btn" onclick="closeFestivalModal('navratri-modal')">Enter Site</button>
    </div>
  </div>`;
  } else {
    for (let f of festivals) {
      if (now >= new Date(f.start).getTime() && now <= new Date(f.end).getTime()) {
        activeFestivalHtml = f.html;
        activeModalId = f.id + '-modal';
        break;
      }
    }
  }

  if (activeFestivalHtml) {
    document.body.insertAdjacentHTML('beforeend', activeFestivalHtml);
    setTimeout(function () {
      const modal = document.getElementById(activeModalId);
      if (modal) {
        modal.style.display = 'flex';
        void modal.offsetWidth; // trigger reflow
        modal.classList.add('show');
        sessionStorage.setItem('svadotsava_festival_shown', 'true');
      }
    }, 500);
  }
});

function closeFestivalModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('show');
    setTimeout(function () {
      modal.style.display = 'none';
      modal.remove(); // Clean up from DOM
    }, 600);
  }
}
