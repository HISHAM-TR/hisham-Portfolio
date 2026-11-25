/**
 * Main Portfolio JavaScript
 * Handles Theme Management (Dark/Light), Interactive Projects Showcase,
 * Project Details Modal, Smooth Scroll Spy, Live Stats Counter, Contact Actions & Toast Alerts.
 */

// ==========================================
// 1. Projects Data Store
// ==========================================
const projectsData = [
  {
    id: "studio-alharam",
    title: "استوديو الحرم — منصة إدارة التسجيلات الصوتية",
    category: "saas",
    categoryLabel: "منصات سحابية SaaS",
    url: "https://studio.basmatandalusia.cc/",
    displayUrl: "studio.basmatandalusia.cc",
    previewImg: "assets/images/studio-hero.jpg",
    logoImg: "assets/images/studio-logo.png",
    shortDesc: "منصة سحابية متكاملة لإدارة تسجيلات القرّاء والكتب، مراحل التدقيق والمونتاج الصوتي، ومتابعة النشر والمستحقات في بيئة عمل موحدة.",
    longDesc: "نظام إدارة محتوى صوتي متقدم صُمم خصيصاً للمؤسسات القرآنية واستوديوهات التسجيل الصوتي. يتيح النظام إدارة القرّاء والكتب وفصول التسجيل، وتوزيع مهام التصحيح والمراجعة، إضافة إلى مسار عمل احترافي للمهندسين والمشرفين ومتابعة المستحقات المالية لكل طرف.",
    highlights: [
      "إدارة هرمية للقرّاء، المصاحف، الكتب، وفصول التسجيل الصوتي.",
      "تتبع دقيق لمراحل التصحيح اللغوي، المونتاج الصوتي، والاعتماد النهائي.",
      "لوحة تحكم إدارية ومتابعة مالية للمستحقات مع نظام إشعارات ذكي.",
      "واجهة مستخدم عربية كاملة RTL مدروسة بدقة لسهولة وسرعة العمل اليومي."
    ],
    tags: ["Next.js", "React", "Tailwind CSS", "Audio Flow", "SaaS Architecture", "RTL"],
    badgeClass: "badge-saas",
    bannerClass: "banner-studio",
    iconSymbol: "🎙️"
  },
  {
    id: "basmat-andalusia",
    title: "بصمة أندلسية — حلول رقمية وتطوير ويب احترافي",
    category: "agency",
    categoryLabel: "مواقع وشركات رقمية",
    url: "https://www.basmatandalusia.cc/",
    displayUrl: "www.basmatandalusia.cc",
    previewImg: "assets/images/basmat-preview.svg",
    logoImg: "assets/images/basmat-favicon.svg",
    shortDesc: "البوابة الرسمية لشركة بصمة أندلسية للحلول البرمجية، متخصصة في تطوير المواقع وتطبيقات الويب المخصصة وتصميم واجهات UI/UX حديثة.",
    longDesc: "الموقع التعريفي والخدمي لشركة بصمة أندلسية. تم تصميمه وبرمجته ليعكس احترافية الشركة ورؤيتها الرقمية. يتميز بتصميم عصري يدمج الأصالة العربية مع أحدث أساليب التصميم التفاعلي، وسرعة تحميل استثنائية مع هيكلة SEO كاملة ومحسنة لمحركات البحث.",
    highlights: [
      "تصميم بصري راقٍ وعصري متوافق بنسبة 100% مع كافة الشاشات والأجهزة.",
      "أداء فائق وتحقيق أعلى درجات معايير Core Web Vitals في سرعة التحميل.",
      "هيكلة متقدمة لتهيئة محركات البحث (SEO) وتفاعل سلس ومدروس.",
      "منظومة مرنة لعرض الخدمات ونماذج الأعمال والتواصل السريع."
    ],
    tags: ["Modern JS", "Responsive UI", "SEO Architecture", "Core Web Vitals", "UX/UI"],
    badgeClass: "badge-agency",
    bannerClass: "banner-basmat",
    iconSymbol: "✨"
  },
  {
    id: "webp-converter",
    title: "محول صيغ الصور الفوري WebP Converter",
    category: "tools",
    categoryLabel: "أدوات وسيرفرلس",
    url: "https://converter.hichemmadina.workers.dev/",
    displayUrl: "converter.hichemmadina.workers.dev",
    previewImg: "assets/images/converter-preview.svg",
    logoImg: null,
    shortDesc: "أداة ويب سحابية فائقة السرعة لتحويل وضغط الصور بصيغة WebP معتمدة على Cloudflare Workers و Edge Computing لمعالجة فورية.",
    longDesc: "أداة خدمية خفيفة وقوية مخصصة لمطوري المواقع وصنّاع المحتوى. تعمل على حوسبة الحافة (Edge Computing) لتقليل حجم الصور بنسبة تصل إلى 85% مع الحفاظ على أعلى درجات النقاوة والوضوح، مما يقلل استهلاك النطاق الترددي ويضاعف سرعة تحميل المواقع.",
    highlights: [
      "معالجة وتحويل لحظي دون تأخير بالاعتماد على خوادم Cloudflare Workers.",
      "دعم السحب والإفلات (Drag & Drop) المتعدد للصور مع معاينة فورية للحجم والجودة.",
      "واجهة مظلمة عصرية مستوحاة من أفضل أدوات التطوير الحديثة.",
      "تقليل ملحوظ في حجم الملفات مع المحافظة على دقة الألوان وتفاصيل الصورة."
    ],
    tags: ["Cloudflare Workers", "Serverless", "Edge Computing", "Canvas API", "WebP"],
    badgeClass: "badge-tools",
    bannerClass: "banner-converter",
    iconSymbol: "⚡"
  }
];

// ==========================================
// 2. DOM Ready Initialization
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderProjects("all");
  initFilterButtons();
  initNavbarScroll();
  initStatsCounter();
  initContactForm();
  initBackToTop();
  initMobileMenu();
});

// ==========================================
// 3. Theme Manager (Dark / Light)
// ==========================================
function initTheme() {
  const toggleBtn = document.getElementById("themeToggleBtn");
  const storedTheme = localStorage.getItem("portfolio_theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  // Default to dark mode unless user previously chose light
  const initialTheme = storedTheme ? storedTheme : "dark";
  applyTheme(initialTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(newTheme);
      showToast(newTheme === "dark" ? "تم تفعيل الوضع الليلي 🌙" : "تم تفعيل الوضع النهاري ☀️");
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio_theme", theme);
  
  const toggleBtn = document.getElementById("themeToggleBtn");
  if (toggleBtn) {
    toggleBtn.setAttribute("aria-label", theme === "dark" ? "التبديل إلى الوضع النهاري" : "التبديل إلى الوضع الليلي");
    toggleBtn.setAttribute("title", theme === "dark" ? "التبديل إلى الوضع النهاري" : "التبديل إلى الوضع الليلي");
  }
}

// ==========================================
// 4. Render Projects & Filter Logic
// ==========================================
function renderProjects(filterCategory) {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  const filtered = filterCategory === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === filterCategory);

  grid.innerHTML = "";

  filtered.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.setAttribute("data-category", project.category);
    card.style.animation = `slideInToast 0.4s ease-out ${index * 0.1}s backwards`;

    card.innerHTML = `
      <div class="card-browser-bar">
        <div class="browser-dots">
          <span class="browser-dot dot-red"></span>
          <span class="browser-dot dot-yellow"></span>
          <span class="browser-dot dot-green"></span>
        </div>
        <div class="browser-url-pill">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          <span>https://${project.displayUrl}</span>
        </div>
        <span style="width: 32px;"></span>
      </div>

      <div class="project-banner ${project.bannerClass}">
        <span class="project-category-badge">${project.categoryLabel}</span>
        ${project.previewImg ? `<img src="${project.previewImg}" alt="${project.title}" class="project-banner-img" loading="lazy">` : ''}
        <div class="banner-overlay-content" style="${project.previewImg ? 'background: linear-gradient(to top, rgba(7, 9, 14, 0.95) 0%, rgba(7, 9, 14, 0.45) 60%, transparent 100%);' : ''}">
          <div class="banner-logo-wrapper">
            ${project.logoImg ? `<img src="${project.logoImg}" alt="Logo" style="width: 38px; height: 38px; object-fit: contain;">` : `<span style="font-size: 2rem;">${project.iconSymbol}</span>`}
          </div>
          <h4 style="color: #ffffff; font-weight: 800; font-size: 1.15rem; text-shadow: 0 2px 10px rgba(0,0,0,0.8);">${project.title.split('—')[0].trim()}</h4>
        </div>
      </div>

      <div class="project-body">
        <h3 class="project-title">
          <span>${project.title}</span>
        </h3>
        <p class="project-desc">${project.shortDesc}</p>

        <ul class="project-highlights">
          ${project.highlights.slice(0, 2).map(item => `
            <li class="project-highlight-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>${item}</span>
            </li>
          `).join("")}
        </ul>

        <div class="project-tags">
          ${project.tags.map(tag => `<span class="tag-item">${tag}</span>`).join("")}
        </div>

        <div class="project-actions">
          <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="btn-card-visit">
            <span>زيارة الموقع المباشر</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
          <button class="btn-card-details" onclick="openProjectModal('${project.id}')">
            <span>التفاصيل</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

function initFilterButtons() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderProjects(category);
    });
  });
}

// ==========================================
// 5. Project Details Modal
// ==========================================
function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const modalBackdrop = document.getElementById("projectModal");
  const modalContent = document.getElementById("modalContent");
  if (!modalBackdrop || !modalContent) return;

  modalContent.innerHTML = `
    ${project.previewImg ? `
      <div style="width: 100%; height: 200px; border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 1.5rem; border: 1px solid var(--border-subtle);">
        <img src="${project.previewImg}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
    ` : ''}

    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
      <div class="banner-logo-wrapper" style="margin-bottom: 0; width: 56px; height: 56px; background: rgba(99, 102, 241, 0.15); display: flex; align-items: center; justify-content: center;">
        ${project.logoImg ? `<img src="${project.logoImg}" alt="Logo" style="width: 36px; height: 36px; object-fit: contain;">` : `<span style="font-size: 1.8rem;">${project.iconSymbol}</span>`}
      </div>
      <div>
        <span class="project-category-badge" style="position: static; margin-bottom: 0.35rem; display: inline-block;">${project.categoryLabel}</span>
        <h3 style="font-size: 1.4rem; font-weight: 800; color: var(--text-primary);">${project.title}</h3>
      </div>
    </div>

    <p style="font-size: 1.05rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 1.75rem;">
      ${project.longDesc}
    </p>

    <div style="background: var(--bg-tertiary); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 1.5rem; margin-bottom: 1.75rem;">
      <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 1rem; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem;">
        <span style="color: var(--primary-light);">⚡</span> أبرز مميزات النظام وإنجازاته:
      </h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem;">
        ${project.highlights.map(item => `
          <li style="display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.94rem; color: var(--text-secondary); line-height: 1.6;">
            <svg style="color: var(--accent-emerald); margin-top: 4px; flex-shrink: 0;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${item}</span>
          </li>
        `).join("")}
      </ul>
    </div>

    <div style="margin-bottom: 2rem;">
      <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--text-muted);">التقنيات المستخدمة:</h4>
      <div class="project-tags">
        ${project.tags.map(tag => `<span class="tag-item" style="font-size: 0.85rem; padding: 0.4rem 0.85rem;">${tag}</span>`).join("")}
      </div>
    </div>

    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="flex: 1; padding: 0.8rem 1.5rem; font-size: 1rem;">
        <span>زيارة المشروع مباشرة</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>
      <button onclick="closeProjectModal()" class="btn-secondary" style="padding: 0.8rem 1.5rem;">
        <span>إغلاق</span>
      </button>
    </div>
  `;

  modalBackdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modalBackdrop = document.getElementById("projectModal");
  if (modalBackdrop) {
    modalBackdrop.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Close modal on click outside or ESC
window.addEventListener("click", (e) => {
  const modalBackdrop = document.getElementById("projectModal");
  if (e.target === modalBackdrop) {
    closeProjectModal();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProjectModal();
  }
});

// ==========================================
// 6. Navbar Scroll & Active Link Spy
// ==========================================
function initNavbarScroll() {
  const navWrapper = document.querySelector(".navbar-wrapper");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navWrapper?.classList.add("scrolled");
    } else {
      navWrapper?.classList.remove("scrolled");
    }

    // Scroll spy for navigation
    let currentId = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute("id");
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

// ==========================================
// 7. Live Animated Stats Counter
// ==========================================
function initStatsCounter() {
  const statNumbers = document.querySelectorAll(".stat-number[data-target]");
  if (!statNumbers.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statNumbers.forEach(counter => {
          const target = parseInt(counter.getAttribute("data-target"), 10);
          const duration = 1500;
          const stepTime = 30;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.querySelector(".counter-val").textContent = target;
              clearInterval(timer);
            } else {
              counter.querySelector(".counter-val").textContent = Math.floor(current);
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector(".hero-stats");
  if (statsSection) {
    observer.observe(statsSection);
  }
}

// ==========================================
// 8. Contact Form & Action Handlers
// ==========================================
function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("formName")?.value.trim();
    const email = document.getElementById("formEmail")?.value.trim();
    const service = document.getElementById("formService")?.value;
    const message = document.getElementById("formMessage")?.value.trim();

    if (!name || !email || !message) {
      showToast("يرجى ملء جميع الحقول المطلوبة ⚠️");
      return;
    }

    // Compose formatted WhatsApp message
    const formattedText = `مرحباً بك! أنا ${name} (%0Aالبريد: ${email})%0Aالخدمة المطلوبة: ${service}%0Aالرسالة: ${encodeURIComponent(message)}`;
    
    // Show success feedback
    showToast("جاري توجيه رسالتك بنجاح... شكراً لتواصلك! ✨");
    
    // Simulate direct dispatch or optional WhatsApp redirect
    setTimeout(() => {
      // You can replace the number with the developer's verified WhatsApp phone
      const whatsappUrl = `https://api.whatsapp.com/send?text=${formattedText}`;
      window.open(whatsappUrl, "_blank");
      contactForm.reset();
    }, 900);
  });
}

function copyToClipboard(text, message) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(message || "تم النسخ بنجاح! 📋");
  }).catch(() => {
    showToast("تعذر النسخ، يرجى المحاولة يدوياً ⚠️");
  });
}

// ==========================================
// 9. Toast Notifications
// ==========================================
function showToast(message) {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast toast-success";
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color: var(--accent-emerald);">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="16 12 12 8 8 12"></polyline>
      <line x1="12" y1="16" x2="12" y2="8"></line>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "all 0.3s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(15px)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==========================================
// 10. Back to Top Button
// ==========================================
function initBackToTop() {
  const btn = document.getElementById("backToTopBtn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// ==========================================
// 11. Mobile Drawer Navigation
// ==========================================
function initMobileMenu() {
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobileBackdrop = document.getElementById("mobileDrawerBackdrop");
  const closeDrawerBtn = document.getElementById("closeDrawerBtn");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");
  const drawerCta = document.querySelector(".btn-drawer-cta");

  function openDrawer() {
    mobileDrawer?.classList.add("active");
    mobileBackdrop?.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    mobileDrawer?.classList.remove("active");
    mobileBackdrop?.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (mobileToggle) {
    mobileToggle.addEventListener("click", openDrawer);
  }

  if (closeDrawerBtn) {
    closeDrawerBtn.addEventListener("click", closeDrawer);
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener("click", closeDrawer);
  }

  mobileLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });

  if (drawerCta) {
    drawerCta.addEventListener("click", closeDrawer);
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawer?.classList.contains("active")) {
      closeDrawer();
    }
  });
}

// Expose modal helper globally
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.copyToClipboard = copyToClipboard;
