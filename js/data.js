// ============================================================
// محتوى الموقع - عدّل هنا فقط لتغيير النصوص والبيانات الشخصية
// Site content - edit ONLY this file to change text & personal data
// ============================================================

// نصوص الواجهة (أزرار، عناوين أقسام، نماذج) بالعربي والإنكليزي
const STRINGS = {
    ar: {
        "nav.home": "الرئيسية",
        "nav.about": "نبذة عني",
        "nav.experience": "الخبرات",
        "nav.campaigns": "الإنجازات",
        "nav.projects": "الأعمال",
        "nav.contact": "تواصل",

        "hero.greeting": "أهلاً، أنا",
        "hero.cta1": "تواصل معي",
        "hero.cta2": "شاهد أعمالي",

        "about.title": "نبذة عني",
        "about.subtitle": "تعرّف على مسيرتي وخلفيتي العلمية",
        "about.educationTitle": "التعليم",

        "category.all": "الكل",
        "category.web": "تطوير ويب",
        "category.mobile": "تطبيقات موبايل",
        "category.marketing": "سوشال ميديا ماركتنج",

        "experience.title": "مسار الخبرة العملية",
        "experience.subtitle": "أهم المحطات والشركات التي عملت معها",

        "campaigns.title": "أرقام وإنجازات",
        "campaigns.subtitle": "نتائج حقيقية من مشاريع وحملات سابقة",

        "projects.title": "أعمالي ومشاريعي",
        "projects.subtitle": "مجموعة من المشاريع والحملات التي نفّذتها",
        "projects.viewProject": "عرض التفاصيل",
        "projects.visitLink": "زيارة الصفحة",

        "contact.title": "تواصل معي",
        "contact.subtitle": "عندك مشروع أو فكرة؟ خلّينا نتكلم",
        "contact.infoTitle": "معلومات التواصل",
        "contact.form.name": "الاسم",
        "contact.form.email": "البريد الإلكتروني",
        "contact.form.subject": "الموضوع",
        "contact.form.message": "رسالتك",
        "contact.form.submit": "إرسال الرسالة",
        "contact.form.sending": "جاري الإرسال...",
        "contact.form.success": "شكراً {name}! وصلتني رسالتك، وسأرد عليك قريباً.",
        "contact.form.error": "صار خطأ أثناء الإرسال، جرّب مرة ثانية أو راسلني على الإيميل مباشرة.",

        "footer.rights": "جميع الحقوق محفوظة.",

        "meta.portfolio": "معرض أعمال",
        "lang.switch": "Switch to English",
        "lightbox.close": "إغلاق"
    },
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.campaigns": "Achievements",
        "nav.projects": "Work",
        "nav.contact": "Contact",

        "hero.greeting": "Hi, I'm",
        "hero.cta1": "Contact Me",
        "hero.cta2": "View My Work",

        "about.title": "About Me",
        "about.subtitle": "Get to know my background and education",
        "about.educationTitle": "Education",

        "category.all": "All",
        "category.web": "Web Development",
        "category.mobile": "Mobile Apps",
        "category.marketing": "Social Media Marketing",

        "experience.title": "Work Experience",
        "experience.subtitle": "Key milestones and companies I've worked with",

        "campaigns.title": "Numbers & Achievements",
        "campaigns.subtitle": "Real results from past projects and campaigns",

        "projects.title": "My Work & Projects",
        "projects.subtitle": "A selection of projects and campaigns I've delivered",
        "projects.viewProject": "View Details",
        "projects.visitLink": "Visit Page",

        "contact.title": "Get In Touch",
        "contact.subtitle": "Have a project or idea? Let's talk",
        "contact.infoTitle": "Contact Info",
        "contact.form.name": "Name",
        "contact.form.email": "Email",
        "contact.form.subject": "Subject",
        "contact.form.message": "Your Message",
        "contact.form.submit": "Send Message",
        "contact.form.sending": "Sending...",
        "contact.form.success": "Thank you {name}! Your message has been received, I'll get back to you soon.",
        "contact.form.error": "Something went wrong. Please try again or email me directly.",

        "footer.rights": "All rights reserved.",

        "meta.portfolio": "Portfolio",
        "lang.switch": "التبديل إلى العربية",
        "lightbox.close": "Close"
    }
};

// بيانات البروفايل الشخصي - الأقسام والمحتوى
const PROFILE = {
    name: { ar: "محمد ماهر أسعد", en: "Mohammad Maher Asaad" },
    role: { ar: "علم حاسوب | صانع محتوى | مسوّق إلكتروني", en: "Computer Science | Content Creator | Digital Marketer" },
    tagline: {
        ar: "خريج علم حاسوب أسعى لبناء مسيرتي في عالم الـ IT، بخبرة إضافية في صناعة المحتوى والتسويق الإلكتروني تضيف لي بُعدًا مختلفًا.",
        en: "Computer Science graduate building my path in IT — backed by hands-on experience in content creation and digital marketing that sets me apart."
    },

    // معلومات التواصل
    email: "mohammadmaherasaad@gmail.com",
    phone: "+962 79 841 0992",
    location: { ar: "عمّان، الأردن", en: "Amman, Jordan" },
    social: {
        linkedin: "https://www.linkedin.com/in/mohammadmaherasaad/",
        youtube: "https://www.youtube.com/@abumahertube/videos",
        github: "https://github.com/mohammadmaherasaad",
        whatsapp: "https://wa.me/962798410992"
    },

    // آية/حديث شخصي يظهر بقسم "نبذة عني"
    quote: {
        text: {
            ar: "وَأَنْ لَيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ ۝ وَأَنَّ سَعْيَهُ سَوْفَ يُرَىٰ",
            en: "That there is not for man except that [good] for which he strives, and that his effort is going to be seen."
        },
        reference: { ar: "سورة النجم، الآيتان 39-40", en: "Surah An-Najm 53:39-40" }
    },

    education: [
        {
            degree: { ar: "بكالوريوس علم الحاسوب", en: "B.Sc. in Computer Science" },
            school: { ar: "جامعة الشرق الأوسط", en: "Middle East University (MEU)" },
            period: "2022 - 2026",
            gpa: { ar: "91.75 / 100 — تقدير امتياز", en: "91.75 / 100 — Excellent" },
            certificates: ["images/certificate.jpg", "images/certificate-2.jpg"]
        }
    ],

    experience: [
        {
            role: { ar: "متدرب تعلّم آلة (Machine Learning)", en: "Machine Learning Intern" },
            company: { ar: "The Hope International", en: "The Hope International" },
            period: { ar: "3/2026 - 7/2026", en: "3/2026 - 7/2026" },
            location: { ar: "مجمع الأعمال، عمّان", en: "Business Complex, Amman" },
            points: [
                { ar: "تدريب عملي في مجال تعلّم الآلة وتحليل البيانات باستخدام Python", en: "Hands-on training in machine learning and data analysis using Python" },
                { ar: "العمل على معالجة البيانات وبناء نماذج تعلّم آلي قابلة للقراءة والتفسير", en: "Worked on data processing and building interpretable machine learning models" },
                { ar: "تطبيق عملي على مفاهيم تحليل البيانات وتعلّم الآلة ضمن مشاريع تدريبية", en: "Applied practical data analysis and ML concepts through training projects" }
            ]
        },
        {
            role: { ar: "مسؤول سوشال ميديا", en: "Social Media Manager" },
            company: { ar: "Pet Land & Hourih Boutique", en: "Pet Land & Hourih Boutique" },
            period: { ar: "2025 - 2026", en: "2025 - 2026" },
            location: { ar: "عمّان", en: "Amman" },
            points: [
                { ar: "إدارة شاملة لصفحات السوشال ميديا لعلامتين تجاريتين (Pet Land وHourih Boutique) من تصميم وتصوير وإعلانات", en: "Full social media management for two brands (Pet Land & Hourih Boutique), covering design, photography, and ads" },
                { ar: "تصميم المحتوى البصري (بوستات، فيديوهات) وتنفيذ جلسات تصوير للمنتجات", en: "Designed visual content (posts, videos) and led product photography sessions" },
                { ar: "إدارة وتشغيل الحملات الإعلانية المدفوعة لزيادة الوصول والمبيعات", en: "Managed and ran paid ad campaigns to boost reach and sales" }
            ]
        },
        {
            role: { ar: "دعم فني (Help Desk)", en: "Help Desk / Technical Support" },
            company: { ar: "Golden Corner For Inks", en: "Golden Corner For Inks" },
            period: { ar: "4/2025 - 8/2025", en: "4/2025 - 8/2025" },
            location: { ar: "عمّان", en: "Amman" },
            points: [
                { ar: "تقديم دعم فني (Help Desk) لتركيب الطابعات وحل المشاكل التقنية المتعلقة فيها", en: "Provided Help Desk support for printer installation and troubleshooting" },
                { ar: "معالجة مشاكل السوفتوير والهاردوير المرتبطة بأجهزة الطباعة", en: "Resolved software and hardware issues related to printing devices" },
                { ar: "تقديم دعم تقني عام للعملاء وحل المشاكل اليومية", en: "Delivered general technical support to customers and resolved day-to-day issues" }
            ]
        },
        {
            role: { ar: "صانع محتوى تقني", en: "Tech Content Creator" },
            company: { ar: "قناة أبو ماهر تيوب (يوتيوب)", en: "Abu Maher Tube (YouTube Channel)" },
            period: { ar: "2021 - 2025", en: "2021 - 2025" },
            location: { ar: "عن بُعد", en: "Remote" },
            points: [
                { ar: "إنشاء وإدارة قناة يوتيوب شخصية متخصصة بالمحتوى التقني", en: "Created and managed a personal YouTube channel focused on tech content" },
                { ar: "نشر 259 فيديو حققوا أكثر من 22 مليون مشاهدة إجمالية", en: "Published 259 videos generating over 22 million total views" },
                { ar: "بناء قاعدة جمهور وصلت لـ 154 ألف مشترك من الصفر", en: "Grew a subscriber base to 154K followers from scratch" }
            ]
        },
        {
            role: { ar: "دعم فني (Technical Support)", en: "Technical Support" },
            company: { ar: "Blink Connect", en: "Blink Connect" },
            period: { ar: "4/2024 - 6/2024", en: "4/2024 - 6/2024" },
            location: { ar: "عمّان", en: "Amman" },
            points: [
                { ar: "تقديم الدعم الفني للعملاء وحل المشاكل التقنية اليومية بسرعة وكفاءة", en: "Provided technical support to customers and resolved day-to-day technical issues efficiently" },
                { ar: "متابعة طلبات الدعم عبر قنوات مختلفة (هاتف/شات/إيميل) وضمان رضا العملاء", en: "Handled support tickets across multiple channels (phone/chat/email), ensuring customer satisfaction" },
                { ar: "توثيق المشاكل المتكررة والمساهمة في تحسين إجراءات الدعم الفني", en: "Documented recurring issues and helped improve support procedures" }
            ]
        }
    ],

    campaigns: [
        { value: 91.75, suffix: "%", label: { ar: "معدل تراكمي (امتياز)", en: "GPA (Excellent)" } },
        { value: 5, suffix: "+", label: { ar: "خبرات عملية بجهات مختلفة", en: "Work Experiences" } },
        { value: 22, suffix: "M+", label: { ar: "مشاهدة محتوى", en: "Content Views" } },
        { value: 154, suffix: "K+", label: { ar: "متابع / مشترك", en: "Followers / Subscribers" } }
    ],

    // المشاريع: category تكون web أو mobile أو marketing
    // images: مصفوفة مسارات صور، اتركها فاضية [] لحد ما تضيف صورك بمجلد images
    projects: [
        {
            category: "marketing",
            images: ["images/petland-identity.png"],
            title: { ar: "إدارة سوشال ميديا — Pet Land", en: "Social Media Management — Pet Land" },
            desc: {
                ar: "إدارة كاملة لحسابات Pet Land على السوشال ميديا، من التصميم والتصوير إلى الحملات الإعلانية، لرفع التفاعل والوصول.",
                en: "Full social media management for Pet Land — from design and photography to ad campaigns — to boost engagement and reach."
            },
            link: "https://www.instagram.com/petlandjo/"
        },
        {
            category: "marketing",
            images: ["images/youtube-5.png"],
            title: { ar: "صناعة محتوى تقني — قناة أبو ماهر تيوب", en: "Tech Content Creation — Abu Maher Tube" },
            desc: {
                ar: "قناة يوتيوب شخصية بمحتوى تقني، وصلت لـ 154 ألف مشترك و259 فيديو بأكثر من 22 مليون مشاهدة.",
                en: "A personal tech YouTube channel that grew to 154K subscribers and 259 videos with over 22 million views."
            },
            galleryCards: [
                { image: "images/youtube-1.png", caption: { ar: "2.1 مليون مشاهدة", en: "2.1M views" } },
                { image: "images/youtube-2.png", caption: { ar: "1.4 مليون مشاهدة", en: "1.4M views" } },
                { image: "images/youtube-3.png", caption: { ar: "1.2 مليون مشاهدة", en: "1.2M views" } },
                { image: "images/youtube-4.png", caption: { ar: "1 مليون مشاهدة", en: "1M views" } }
            ],
            link: "https://www.youtube.com/@abumahertube"
        },
        {
            category: "web",
            images: ["images/building-cover.png"],
            title: { ar: "نظام إدارة عمارة سكنية", en: "Residential Building Management System" },
            desc: {
                ar: "نظام ويب لإدارة شقق عمارة سكنية: تتبّع الدفعات والمصاريف، وملخص مالي شامل لكل شقة وللعمارة بالكامل.",
                en: "A web system for managing a residential building's apartments: tracking payments and expenses, with a full financial summary per apartment and for the whole building."
            },
            galleryCards: [
                { image: "images/building-summary.png", caption: { ar: "ملخص العمارة", en: "Building Summary" } },
                { image: "images/building-expenses.png", caption: { ar: "المصاريف", en: "Expenses" } },
                { image: "images/building-apartments.png", caption: { ar: "الشقق", en: "Apartments" } },
                { image: "images/building-payments.png", caption: { ar: "الدفعات", en: "Payments" } }
            ],
            link: "https://building-app-one-pi.vercel.app/"
        },
        {
            category: "web",
            images: ["images/hourih-home.png"],
            title: { ar: "متجر حورية بوتيك الإلكتروني", en: "Hourih Boutique Online Store" },
            desc: {
                ar: "متجر إلكتروني لبيع العبايات، مبني على ووردبريس مع نظام دفع وتوصيل وإدارة المخزون بالكامل.",
                en: "A WordPress-based e-commerce store for selling abayas, with a full payment, delivery, and inventory management system."
            },
            galleryCards: [
                { image: "images/hourih-collections.png", caption: { ar: "صفحة المجموعات", en: "Collections Page" } },
                { image: "images/hourih-product.png", caption: { ar: "صفحة المنتج", en: "Product Page" } },
                { image: "images/hourih-checkout.png", caption: { ar: "صفحة الدفع", en: "Checkout Page" } },
                { image: "images/hourih-orders.png", caption: { ar: "متابعة الطلبات", en: "Order Tracking" } }
            ],
            link: "https://hourihboutique.com/home-spices/"
        },
        {
            category: "web",
            images: ["images/novacare-home.png"],
            title: { ar: "Nova Care — نظام إدارة عيادة طبية (مشروع التخرج)", en: "Nova Care — Clinic Management System (Graduation Project)" },
            desc: {
                ar: "نظام ويب متكامل لإدارة العيادات الطبية: حجز مواعيد أونلاين، سجلات طبية رقمية، ولوحات تحكم بستة أدوار مختلفة (مريض، طبيب، ممرض، استقبال، إدارة، مدير النظام). بُني باستخدام Laravel وMySQL مع 94 اختبار آلي.",
                en: "A full-stack clinic management system: online appointment booking, digital medical records, and dashboards for six user roles (patient, doctor, nurse, receptionist, management, admin). Built with Laravel and MySQL, backed by 94 automated tests."
            },
            galleryCards: [
                { image: "images/novacare-admin.png", caption: { ar: "لوحة تحكم المدير", en: "Admin Dashboard" } },
                { image: "images/novacare-doctor.png", caption: { ar: "لوحة تحكم الطبيب", en: "Doctor Dashboard" } },
                { image: "images/novacare-nurse.png", caption: { ar: "لوحة تحكم الممرض", en: "Nurse Dashboard" } },
                { image: "images/novacare-receptionist.png", caption: { ar: "لوحة تحكم الاستقبال", en: "Receptionist Dashboard" } },
                { image: "images/novacare-management.png", caption: { ar: "لوحة التحليلات الإدارية", en: "Management Analytics" } },
                { image: "images/novacare-patient.png", caption: { ar: "مواعيد المريض", en: "Patient Appointments" } }
            ],
            link: "https://github.com/mohammadmaherasaad/nova-care-clinic"
        }
    ]
};
