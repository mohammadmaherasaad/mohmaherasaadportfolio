// منطق الموقع: الترجمة، العرض، والحركات
// Site logic: i18n, rendering, and interactions

const state = {
    lang: localStorage.getItem('lang') || 'ar',
    projectCategory: 'all'
};

function t(key) {
    return (STRINGS[state.lang] && STRINGS[state.lang][key]) || key;
}

function tx(obj) {
    if (!obj) return '';
    return obj[state.lang] || obj.ar || obj.en || '';
}

// ---------- الترجمة العامة لعناصر data-i18n ----------
function applyStaticTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.dataset.i18n);
    });

    document.querySelectorAll('[data-i18n-label]').forEach(el => {
        el.setAttribute('aria-label', t(el.dataset.i18nLabel));
    });

    const html = document.getElementById('htmlRoot');
    html.lang = state.lang;
    html.dir = state.lang === 'ar' ? 'rtl' : 'ltr';

    document.title = `${tx(PROFILE.name)} | ${t('meta.portfolio')}`;

    const langToggle = document.getElementById('langToggle');
    langToggle.textContent = state.lang === 'ar' ? 'EN' : 'AR';
    langToggle.setAttribute('aria-label', t('lang.switch'));
}

// ---------- Hero ----------
function renderHero() {
    document.getElementById('logoText').textContent = tx(PROFILE.name).split(' ')[0];
    document.getElementById('heroName').textContent = tx(PROFILE.name);
    document.getElementById('heroRole').textContent = tx(PROFILE.role);
    document.getElementById('heroTagline').textContent = tx(PROFILE.tagline);
    document.getElementById('footerText').textContent =
        `© ${new Date().getFullYear()} ${tx(PROFILE.name)} — ${t('footer.rights')}`;

    renderSocials('heroSocials');
    renderSocials('contactSocials');
}

const SOCIAL_ICONS = {
    linkedin: '<svg viewBox="0 0 448 512" fill="currentColor"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>',
    github: '<svg viewBox="0 0 496 512" fill="currentColor"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5 21.3 0 42.8 2.9 62.8 8.5 0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"/></svg>',
    youtube: '<svg viewBox="0 0 576 512" fill="currentColor"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>',
    whatsapp: '<svg viewBox="0 0 448 512" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>'
};

function renderSocials(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    Object.entries(PROFILE.social).forEach(([key, url]) => {
        const a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        a.rel = 'nofollow noopener';
        a.className = 'social-icon';
        a.innerHTML = SOCIAL_ICONS[key] || key[0].toUpperCase();
        a.setAttribute('aria-label', key);
        container.appendChild(a);
    });
}

// ---------- About ----------
function renderAbout() {
    const quoteEl = document.getElementById('aboutQuote');
    if (PROFILE.quote) {
        quoteEl.innerHTML = `
            <p class="quote-text">${tx(PROFILE.quote.text)}</p>
            <cite class="quote-ref">${tx(PROFILE.quote.reference)}</cite>
        `;
        quoteEl.style.display = '';
    } else {
        quoteEl.style.display = 'none';
    }

    const list = document.getElementById('educationList');
    list.innerHTML = '';
    PROFILE.education.forEach(edu => {
        const item = document.createElement('div');
        item.className = 'education-item';

        const gpaBadge = edu.gpa ? `<span class="education-gpa">${tx(edu.gpa)}</span>` : '';
        const certificates = edu.certificates || [];
        const certThumbs = certificates
            .map((src, i) => `<button class="education-cert-thumb" type="button" data-cert-index="${i}"><img src="${src}" alt="${tx(edu.degree)}" loading="lazy"></button>`)
            .join('');

        item.innerHTML = `
            <div class="education-dot"></div>
            <div class="education-body">
                <h4>${tx(edu.degree)}</h4>
                <p>${tx(edu.school)}</p>
                <div class="education-meta">
                    <span class="education-period">${edu.period}</span>
                    ${gpaBadge}
                </div>
                <div class="education-certs">${certThumbs}</div>
            </div>
        `;

        item.querySelectorAll('.education-cert-thumb').forEach(btn => {
            const src = certificates[Number(btn.dataset.certIndex)];
            btn.addEventListener('click', () => {
                showLightbox(`
                    <div class="lightbox-media"><img src="${src}" alt="${tx(edu.degree)}"></div>
                    <h3>${tx(edu.degree)}</h3>
                    <p>${tx(edu.school)} &middot; ${edu.period}</p>
                `);
            });
        });

        list.appendChild(item);
    });
}

// ---------- Experience timeline ----------
function renderExperience() {
    const list = document.getElementById('timelineList');
    list.innerHTML = '';

    PROFILE.experience.forEach(job => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        const points = job.points.map(p => `<li>${tx(p)}</li>`).join('');
        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-card">
                <span class="timeline-period">${tx(job.period)}</span>
                <h3>${tx(job.role)}</h3>
                <p class="timeline-company">${tx(job.company)} &middot; ${tx(job.location)}</p>
                <ul class="timeline-points">${points}</ul>
            </div>
        `;
        list.appendChild(item);
    });
}

// ---------- Campaign stats ----------
function renderStats() {
    const grid = document.getElementById('statsGrid');
    grid.innerHTML = '';

    PROFILE.campaigns.forEach(stat => {
        const card = document.createElement('div');
        card.className = 'stat-card';
        card.innerHTML = `
            <div class="stat-number" data-target="${stat.value}" data-suffix="${stat.suffix}">0${stat.suffix}</div>
            <div class="stat-label">${tx(stat.label)}</div>
        `;
        grid.appendChild(card);
    });

}

function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const duration = 1500;
    const start = performance.now();

    function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.floor(progress * target);
        el.textContent = value + suffix;
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target + suffix;
    }
    requestAnimationFrame(step);
}

// ---------- Projects ----------
const projectCategoryKeys = ['all', 'web', 'marketing'];
const categoryIcon = { web: '💻', mobile: '📱', marketing: '📈' };

function renderProjectTabs() {
    const tabs = document.getElementById('projectTabs');
    tabs.innerHTML = '';
    projectCategoryKeys.forEach(cat => {
        const tab = document.createElement('button');
        tab.className = 'tab' + (cat === state.projectCategory ? ' active' : '');
        tab.textContent = cat === 'all' ? t('category.all') : t('category.' + cat);
        tab.addEventListener('click', () => {
            state.projectCategory = cat;
            renderProjectTabs();
            renderProjectsGrid();
        });
        tabs.appendChild(tab);
    });
}

function projectMedia(project) {
    const cover = (project.images || [])[0];
    if (cover) {
        return `<img src="${cover}" alt="${tx(project.title)}" loading="lazy">`;
    }
    return `<div class="project-placeholder">${categoryIcon[project.category] || '🗂️'}</div>`;
}

function projectGallery(project) {
    if (project.galleryCards) {
        const cards = project.galleryCards.map(c => `
            <div class="gallery-card">
                <div class="gallery-card-media"><img src="${c.image}" alt="${tx(project.title)}" loading="lazy"></div>
                <div class="gallery-card-caption">${tx(c.caption)}</div>
            </div>
        `).join('');
        return `<div class="gallery-cards-grid">${cards}</div>`;
    }

    const images = project.images || [];
    if (images.length === 0) {
        return `<div class="project-placeholder">${categoryIcon[project.category] || '🗂️'}</div>`;
    }
    if (images.length === 1) {
        return `<div class="lightbox-media"><img src="${images[0]}" alt="${tx(project.title)}"></div>`;
    }
    return `<div class="lightbox-gallery">${images.map(src => `<img src="${src}" alt="${tx(project.title)}" loading="lazy">`).join('')}</div>`;
}

function renderProjectsGrid() {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';

    const filtered = state.projectCategory === 'all'
        ? PROFILE.projects
        : PROFILE.projects.filter(p => p.category === state.projectCategory);

    filtered.forEach((project, i) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.animationDelay = `${i * 0.06}s`;
        card.innerHTML = `
            <div class="project-media">${projectMedia(project)}</div>
            <div class="project-info">
                <span class="project-category">${t('category.' + project.category)}</span>
                <h3>${tx(project.title)}</h3>
                <p>${tx(project.desc)}</p>
                <button class="project-link">${t('projects.viewProject')}</button>
            </div>
        `;
        card.querySelector('.project-link').addEventListener('click', () => {
            const linkBtn = project.link
                ? `<a href="${project.link}" target="_blank" rel="nofollow noopener" class="btn lightbox-visit-link">${t('projects.visitLink')}</a>`
                : '';
            showLightbox(`
                ${projectGallery(project)}
                <h3>${tx(project.title)}</h3>
                <p>${tx(project.desc)}</p>
                ${linkBtn}
            `);
        });
        grid.appendChild(card);
    });
}

function showLightbox(html) {
    document.getElementById('lightboxContent').innerHTML = html;
    document.getElementById('lightbox').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
}

// ---------- Contact info list ----------
function renderContactInfo() {
    const list = document.getElementById('contactInfoList');
    list.innerHTML = `
        <div class="contact-row"><span>📧</span><a href="mailto:${PROFILE.email}" dir="ltr">${PROFILE.email}</a></div>
        <div class="contact-row"><span>📱</span><a href="tel:${PROFILE.phone.replace(/\s/g, '')}" dir="ltr">${PROFILE.phone}</a></div>
        <div class="contact-row"><span>📍</span><span>${tx(PROFILE.location)}</span></div>
    `;
}

// ---------- Full render (called on load + language switch) ----------
function renderAll() {
    applyStaticTranslations();
    renderHero();
    renderAbout();
    renderExperience();
    renderStats();
    renderProjectTabs();
    renderProjectsGrid();
    renderContactInfo();
}

// ---------- Language toggle ----------
document.getElementById('langToggle').addEventListener('click', () => {
    state.lang = state.lang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('lang', state.lang);
    renderAll();
});

// ---------- Mobile menu ----------
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
menuToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active', open);
    menuToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

// ---------- Header scroll effect + active nav ----------
const navbar = document.getElementById('navbar');
const sections = () => document.querySelectorAll('section[id]');
const navLinks = () => document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);

    const scrollPos = window.scrollY + 120;
    sections().forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
            navLinks().forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === '#' + section.id);
            });
        }
    });

    document.getElementById('backToTop').classList.toggle('show', window.scrollY > 400);
});

document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ---------- Lightbox close ----------
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightbox').addEventListener('click', e => {
    if (e.target.id === 'lightbox') closeLightbox();
});

// ---------- Image zoom (click any gallery image for a larger view) ----------
function openImageZoom(src, alt) {
    const img = document.getElementById('imageZoomImg');
    img.src = src;
    img.alt = alt || '';
    document.getElementById('imageZoom').classList.add('open');
}

function closeImageZoom() {
    document.getElementById('imageZoom').classList.remove('open');
}

document.getElementById('lightboxContent').addEventListener('click', e => {
    const img = e.target.closest('.gallery-card-media img, .lightbox-gallery img');
    if (img) openImageZoom(img.src, img.alt);
});

document.getElementById('imageZoom').addEventListener('click', closeImageZoom);

document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (document.getElementById('imageZoom').classList.contains('open')) {
        closeImageZoom();
    } else {
        closeLightbox();
    }
});

// ---------- Contact form: sends the message to PROFILE.email via FormSubmit ----------
document.getElementById('contactForm').addEventListener('submit', async e => {
    e.preventDefault();
    const form = e.target;
    const button = form.querySelector('button[type="submit"]');
    const status = document.getElementById('formStatus');
    const data = Object.fromEntries(new FormData(form));

    button.disabled = true;
    button.textContent = t('contact.form.sending');
    status.className = 'form-status';
    status.textContent = '';

    try {
        const res = await fetch(`https://formsubmit.co/ajax/${PROFILE.email}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                subject: data.subject,
                message: data.message,
                _honey: data._honey,
                _subject: `📩 ${data.subject} — ${data.name}`,
                _template: 'table'
            })
        });
        const result = await res.json();
        if (!res.ok || String(result.success) !== 'true') throw new Error(result.message);

        status.classList.add('success');
        status.textContent = t('contact.form.success').replace('{name}', data.name);
        form.reset();
    } catch (err) {
        status.classList.add('error');
        status.textContent = t('contact.form.error');
    } finally {
        button.disabled = false;
        button.textContent = t('contact.form.submit');
    }
});

// ---------- Scroll reveal animations ----------
function initScrollReveal() {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('[data-aos]').forEach(el => revealObserver.observe(el));
}

// ---------- Stats counter: re-animate every time the section enters view ----------
function initCounterObserver() {
    const statsSection = document.querySelector('.campaigns-section');
    if (!statsSection) return;

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.stat-number').forEach(el => animateCounter(el));
            }
        });
    }, { threshold: 0.3 });

    counterObserver.observe(statsSection);
}

// ---------- Init ----------
// Hide the preloader once content is rendered — don't wait for every image to download
function hidePreloader() {
    document.getElementById('preloader').classList.add('hidden');
}

renderAll();
setTimeout(hidePreloader, 400);
initScrollReveal();
initCounterObserver();
