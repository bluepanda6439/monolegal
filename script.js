document.addEventListener('DOMContentLoaded', function() {
    // Set default active page
    const defaultPage = 'o-nas';
    setActivePage(defaultPage);
    
    // Menu item click event
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            
            // Upewnij się, że nie klikamy już aktywnej strony
            const currentActivePage = document.querySelector('.page.active');
            if (currentActivePage && currentActivePage.id === pageId) return;
            
            // Ustaw nową stronę
            setActivePage(pageId);
        });
    });
    
    // Language switcher
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            langButtons.forEach(button => button.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Change the language
            changeLanguage(this.getAttribute('data-lang'));
        });
    });
    
    // Set Polish as default active language
    document.querySelector('.lang-btn[data-lang="pl"]').classList.add('active');
});

// Function to set active page
function setActivePage(pageId) {
    // Najpierw usuń klasę active ze wszystkich stron
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Następnie ustaw aktywną stronę
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
    }
    
    // Zaktualizuj aktywną pozycję w menu
    updateActiveMenuItem(pageId);
}

// Funkcja aktualizująca aktywną pozycję w menu
function updateActiveMenuItem(pageId) {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        if (item.getAttribute('data-page') === pageId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Translations object
const translations = {
    'pl': {
        'o-nas': 'O nas',
        'nasze-uslugi': 'Nasze usługi',
        'porady-prawne': 'Porady prawne',
        'deportacja': 'Deportacja',
        'cennik': 'Cennik',
        'kontakt': 'Kontakt',
        'page-title': 'Mono Legalization - Pomoc prawna dla cudzoziemców',
        'subtitle': 'Pomoc prawna dla cudzoziemców',
        'about-title': 'O nas',
        'services-title': 'Nasze usługi',
        'advice-title': 'Porady prawne',
        'deportation-title': 'Deportacja',
        'prices-title': 'Cennik',
        'contact-title': 'Kontakt',
        // Contact form
        'name-label': 'Imię i nazwisko',
        'email-label': 'E-mail',
        'phone-label': 'Telefon',
        'message-label': 'Wiadomość',
        'submit-button': 'Wyślij',
        'free-consultations': 'Konsultacje są bezpłatne',
        'footer-copyright': '© 2025 Mono Legalization. Wszelkie prawa zastrzeżone.'
    },
    'uk': {
        // Ukraiński - placeholder
        'o-nas': 'Про нас',
        'nasze-uslugi': 'Наші послуги',
        // pozostałe tłumaczenia...
    },
    'en': {
        // Angielski - placeholder
        'o-nas': 'About us',
        'nasze-uslugi': 'Our services',
        // pozostałe tłumaczenia...
    },
    'es': {
        // Hiszpański - placeholder
        'o-nas': 'Sobre nosotros',
        'nasze-uslugi': 'Nuestros servicios',
        // pozostałe tłumaczenia...
    }
};

// Content translations for Polish
const contentTranslations = {
    'pl': {
        'about-content': `
            <p>Poruszanie się po procedurach imigracyjnych w Polsce i Unii Europejskiej może być skomplikowane i przytłaczające - ale nie musisz robić tego sam. Nasza firma specjalizuje się w prawie imigracyjnym, legalizacji pobytu cudzoziemców w UE i zapewnieniu legalnego zatrudnienia w Polsce.</p>
            
            <p>Dlaczego zaufało nam tak wielu klientów? Dzięki silnemu zapleczu prawnemu i specjalistycznemu wykształceniu w zakresie prawa imigracyjnego, rozumiemy każdy szczegół procesu i jesteśmy na bieżąco ze zmieniającymi się przepisami.</p>
            
            <p>Z powodzeniem pomogliśmy wielu klientom z całego świata uzyskać wizy, pozwolenia na pobyt, pozwolenia na pracę i obywatelstwo. Wiemy, co działa, a co nie. Poświęcamy czas, aby zrozumieć Twoją sytuację i dopasować rozwiązania, które najlepiej odpowiadają Twoim potrzebom i celom.</p>
            
            <p>Od dokumentacji i aplikacji po reprezentację i odwołania - jesteśmy z Tobą na każdym kroku. Pomagamy zarówno osobom fizycznym, jak i pracodawcom w dopełnieniu formalności prawnych niezbędnych do legalnego i bezpiecznego podjęcia pracy w Polsce przez cudzoziemców.</p>
            
            <p>Twoją sprawę prowadzimy z zachowaniem pełnej poufności i uczciwości. Dbamy o ochronę Twoich praw i interesów.</p>
        `,
        'services-intro': `Oferujemy pełen zakres usług imigracyjnych i prawnych dostosowanych do potrzeb cudzoziemców mieszkających, pracujących lub planujących osiedlenie się w Polsce i Unii Europejskiej. Nasze usługi obejmują:`,
        'services-items': [
            {
                'title': 'Zezwolenia na pobyt czasowy i stały',
                'description': 'Pomagamy w składaniu wniosków o pobyt czasowy (karta pobytu), pobyt stały oraz zezwolenia na pobyt rezydenta długoterminowego UE.'
            },
            {
                'title': 'Zezwolenia na pracę i legalne zatrudnienie',
                'description': 'Pomagamy cudzoziemcom i pracodawcom w procedurach prawnych związanych z uzyskaniem zezwoleń na pracę i zapewniamy zgodność z polskim prawem pracy.'
            },
            {
                'title': 'Odwołania i zastępstwo procesowe',
                'description': 'Jeśli Twój wniosek zostanie odrzucony, reprezentujemy Cię w odwołaniach przed urzędami imigracyjnymi, sądami administracyjnymi i innymi instytucjami.'
            },
            {
                'title': 'Legalizacja pobytu',
                'description': 'Pomagamy uregulować Twój pobyt w Polsce, jeśli masz nieuregulowaną sytuację.'
            },
            {
                'title': 'Przyspieszenie sprawy',
                'description': 'Rozumiemy, że procedury imigracyjne mogą być czasochłonne, a opóźnienia mogą wpływać na Twoje plany, pracę i życie rodzinne.'
            },
            {
                'title': 'Priorytetowe rozpatrzenie wniosku',
                'description': 'Zapewniamy, że Twoje dokumenty są kompletne, poprawne i złożone bez opóźnień, zmniejszając ryzyko odrzucenia lub niepotrzebnego oczekiwania.'
            },
            {
                'title': 'Kontrola i komunikacja z władzami',
                'description': 'Aktywnie współpracujemy z urzędami imigracyjnymi i agencjami rządowymi, aby monitorować status Twojej sprawy i naciskać na szybsze decyzje.'
            },
            {
                'title': 'Strategiczne planowanie w celu zaoszczędzenia czasu',
                'description': 'Analizujemy Twoją sprawę i sugerujemy najbardziej efektywną ścieżkę prawną, pomagając Ci uniknąć błędów, które kosztują czas i pieniądze.'
            },
        ],
        'deportation-content': `<p>Napiszę tutaj ogólnie czym jest deportacja, jak ją uniknąć i na co zwracać uwagę</p>`,
        'advice-content': `<p>Coś potem wymyślę</p>`,
        'contact-title-form': 'Formularz kontaktowy'
    },
    // Inne języki - placeholdery
    'uk': {
    'about-content': `
    <p>Навігація в імміграційних процедурах у Польщі та Європейському Союзі може бути складною та виснажливою - але вам не потрібно робити це самостійно. Наша компанія спеціалізується на імміграційному праві, легалізації перебування іноземців у ЄС та забезпеченні легального працевлаштування в Польщі.</p>
    <p>Чому нам довіряє так багато клієнтів? Завдяки сильній юридичній підтримці та спеціалізованій освіті в галузі імміграційного права, ми розуміємо кожну деталь процесу і постійно слідкуємо за змінами в законодавстві.</p>
    <p>Ми успішно допомогли багатьом клієнтам з усього світу отримати візи, дозволи на проживання, дозволи на роботу та громадянство. Ми знаємо, що працює, а що ні. Ми приділяємо час, щоб зрозуміти вашу ситуацію та підібрати рішення, які найкраще відповідають вашим потребам і цілям.</p>
    <p>Від документації та заявок до представництва та апеляцій - ми з вами на кожному кроці. Ми допомагаємо як фізичним особам, так і роботодавцям виконати юридичні формальності, необхідні для легального та безпечного працевлаштування іноземців у Польщі.</p>
    <p>Вашу справу ми ведемо з повною конфіденційністю та чесністю. Ми дбаємо про захист ваших прав та інтересів.</p>
    `,
    'services-intro': `Ми пропонуємо повний спектр імміграційних та юридичних послуг, адаптованих до потреб іноземців, які проживають, працюють або планують поселитися в Польщі та Європейському Союзі. Наші послуги включають:`,
    'services-items': [
      {
        'title': 'Дозволи на тимчасове та постійне проживання',
        'description': 'Допомагаємо подавати заяви на тимчасове проживання (карта побиту), постійне проживання та дозволи на довгострокове проживання в ЄС.'
      },
      {
        'title': 'Дозволи на роботу та легальне працевлаштування',
        'description': 'Допомагаємо іноземцям та роботодавцям у юридичних процедурах, пов язаних з отриманням дозволів на роботу, та забезпечуємо відповідність польському трудовому законодавству.'
      },
      {
        'title': 'Апеляції та процесуальне представництво',
        'description': 'Якщо вашу заяву відхилено, ми представляємо вас у апеляціях перед імміграційними органами, адміністративними судами та іншими установами.'
      },
      {
        'title': 'Легалізація перебування',
        'description': 'Допомагаємо врегулювати ваше перебування в Польщі, якщо у вас неврегульована ситуація.'
      },
      {
        'title': 'Прискорення справи',
        'description': 'Ми розуміємо, що імміграційні процедури можуть бути трудомісткими, а затримки можуть впливати на ваші плани, роботу та сімейне життя.'
      },
      {
        'title': 'Пріоритетний розгляд заяви',
        'description': 'Забезпечуємо, що ваші документи є повними, правильними та поданими без затримок, зменшуючи ризик відхилення або непотрібного очікування.'
      },
      {
        'title': 'Контроль та комунікація з органами влади',
        'description': 'Активно співпрацюємо з імміграційними органами та урядовими агентствами, щоб відстежувати статус вашої справи та наполягати на швидших рішеннях.'
      },
      {
        'title': 'Стратегічне планування для економії часу',
        'description': 'Аналізуємо вашу справу та пропонуємо найефективніший юридичний шлях, допомагаючи вам уникнути помилок, які коштують час і гроші.'
      },
    ],
    'deportation-content': `<p>Напишу тут загально, що таке депортація, як її уникнути і на що звертати увагу</p>`,
    'advice-content': `<p>Щось потім придумаю</p>`,
    'contact-title-form': 'Контактна форма'
  },
    'en': {
'about-content': `
    {<p>Navigating immigration procedures in Poland and the European Union can be complicated and overwhelming - but you don't have to do it alone. Our company specializes in immigration law, legalizing the stay of foreigners in the EU, and ensuring legal employment in Poland.</p>
        <p>Why have so many clients trusted us? Thanks to our strong legal background and specialized education in immigration law, we understand every detail of the process and stay up-to-date with changing regulations.</p>
        <p>We have successfully helped many clients from around the world obtain visas, residence permits, work permits, and citizenship. We know what works and what doesn't. We take the time to understand your situation and tailor solutions that best meet your needs and goals.</p>
        <p>From documentation and applications to representation and appeals - we are with you every step of the way. We help both individuals and employers complete the legal formalities necessary for foreigners to legally and safely work in Poland.</p>
        <p>We handle your case with complete confidentiality and integrity. We care about protecting your rights and interests.</p>
        `,
        'services-intro': `We offer a full range of immigration and legal services tailored to the needs of foreigners living, working, or planning to settle in Poland and the European Union. Our services include:`,
        'services-items': [
          {
            'title': 'Temporary and Permanent Residence Permits',
            'description': 'We help with applications for temporary residence (residence card), permanent residence, and EU long-term resident permits.'
          },
          {
            'title': 'Work Permits and Legal Employment',
            'description': 'We assist foreigners and employers with legal procedures related to obtaining work permits and ensure compliance with Polish labor law.'
          },
          {
            'title': 'Appeals and Legal Representation',
            'description': 'If your application is rejected, we represent you in appeals before immigration offices, administrative courts, and other institutions.'
          },
          {
            'title': 'Stay Legalization',
            'description': 'We help regularize your stay in Poland if you have an unregulated situation.'
          },
          {
            'title': 'Case Acceleration',
            'description': 'We understand that immigration procedures can be time-consuming, and delays can affect your plans, work, and family life.'
          },
          {
            'title': 'Priority Application Processing',
            'description': 'We ensure that your documents are complete, correct, and submitted without delays, reducing the risk of rejection or unnecessary waiting.'
          },
          {
            'title': 'Monitoring and Communication with Authorities',
            'description': 'We actively work with immigration offices and government agencies to monitor the status of your case and push for faster decisions.'
          },
          {
            'title': 'Strategic Planning to Save Time',
            'description': 'We analyze your case and suggest the most effective legal path, helping you avoid mistakes that cost time and money.'
          },
        ],
        'deportation-content': `<p>I will write here generally about what deportation is, how to avoid it, and what to pay attention to</p>`,
        'advice-content': `<p>I'll come up with something later</p>`,
        'contact-title-form': 'Contact Form'
    },
    'es': {
        'about-content': `
    <p>Navegar por los procedimientos de inmigración en Polonia y la Unión Europea puede ser complicado y abrumador, pero no tienes que hacerlo solo. Nuestra empresa se especializa en derecho migratorio, legalización de la estancia de extranjeros en la UE y garantizar el empleo legal en Polonia.</p>
    <p>¿Por qué tantos clientes han confiado en nosotros? Gracias a nuestro sólido respaldo legal y educación especializada en derecho migratorio, entendemos cada detalle del proceso y nos mantenemos actualizados con las regulaciones cambiantes.</p>
    <p>Hemos ayudado con éxito a muchos clientes de todo el mundo a obtener visas, permisos de residencia, permisos de trabajo y ciudadanía. Sabemos lo que funciona y lo que no. Nos tomamos el tiempo para entender tu situación y adaptar soluciones que mejor se ajusten a tus necesidades y objetivos.</p>
    <p>Desde la documentación y las solicitudes hasta la representación y las apelaciones, estamos contigo en cada paso del camino. Ayudamos tanto a particulares como a empleadores a completar los trámites legales necesarios para que los extranjeros trabajen de manera legal y segura en Polonia.</p>
    <p>Manejamos tu caso con total confidencialidad e integridad. Nos preocupamos por proteger tus derechos e intereses.</p>
    `,
    'services-intro': `Ofrecemos una gama completa de servicios legales y de inmigración adaptados a las necesidades de extranjeros que viven, trabajan o planean establecerse en Polonia y la Unión Europea. Nuestros servicios incluyen:`,
    'services-items': [
      {
        'title': 'Permisos de residencia temporal y permanente',
        'description': 'Ayudamos con las solicitudes de residencia temporal (tarjeta de residencia), residencia permanente y permisos de residencia de larga duración en la UE.'
      },
      {
        'title': 'Permisos de trabajo y empleo legal',
        'description': 'Asistimos a extranjeros y empleadores en los procedimientos legales relacionados con la obtención de permisos de trabajo y garantizamos el cumplimiento de la legislación laboral polaca.'
      },
      {
        'title': 'Apelaciones y representación legal',
        'description': 'Si tu solicitud es rechazada, te representamos en las apelaciones ante las oficinas de inmigración, tribunales administrativos y otras instituciones.'
      },
      {
        'title': 'Legalización de estancia',
        'description': 'Ayudamos a regularizar tu estancia en Polonia si tienes una situación irregular.'
      },
      {
        'title': 'Aceleración de casos',
        'description': 'Entendemos que los procedimientos de inmigración pueden llevar mucho tiempo, y los retrasos pueden afectar tus planes, trabajo y vida familiar.'
      },
      {
        'title': 'Procesamiento prioritario de solicitudes',
        'description': 'Nos aseguramos de que tus documentos estén completos, correctos y presentados sin demoras, reduciendo el riesgo de rechazo o esperas innecesarias.'
      },
      {
        'title': 'Monitoreo y comunicación con las autoridades',
        'description': 'Trabajamos activamente con las oficinas de inmigración y agencias gubernamentales para monitorear el estado de tu caso y presionar por decisiones más rápidas.'
      },
      {
        'title': 'Planificación estratégica para ahorrar tiempo',
        'description': 'Analizamos tu caso y sugerimos la vía legal más efectiva, ayudándote a evitar errores que cuestan tiempo y dinero.'
      },
    ],
    'deportation-content': `<p>Escribiré aquí en general sobre qué es la deportación, cómo evitarla y a qué prestar atención</p>`,
    'advice-content': `<p>Pensaré en algo más tarde</p>`,
    'contact-title-form': 'Formulario de Contacto'
}}

// Function to change language
function changeLanguage(lang) {
    console.log(`Changing language to: ${lang}`);
    
    // Update page title
    document.title = translations[lang]['page-title'] || translations['pl']['page-title'];
    
    // Update menu items
    document.querySelectorAll('.menu-item').forEach(item => {
        const pageId = item.getAttribute('data-page');
        item.textContent = translations[lang][pageId] || translations['pl'][pageId];
    });
    
    // Update headings
    document.querySelector('#o-nas h2').textContent = translations[lang]['about-title'] || translations['pl']['about-title'];
    document.querySelector('#nasze-uslugi h2').textContent = translations[lang]['services-title'] || translations['pl']['services-title'];
    document.querySelector('#porady-prawne h2').textContent = translations[lang]['advice-title'] || translations['pl']['advice-title'];
    document.querySelector('#deportacja h2').textContent = translations[lang]['deportation-title'] || translations['pl']['deportation-title'];
    document.querySelector('#cennik h2').textContent = translations[lang]['prices-title'] || translations['pl']['prices-title'];
    document.querySelector('#kontakt h2').textContent = translations[lang]['contact-title'] || translations['pl']['contact-title'];
    
    // Update content sections
    if (contentTranslations[lang] && contentTranslations[lang]['about-content']) {
        document.querySelector('#o-nas .content-box').innerHTML = contentTranslations[lang]['about-content'];
    } else if (contentTranslations['pl'] && contentTranslations['pl']['about-content']) {
        document.querySelector('#o-nas .content-box').innerHTML = contentTranslations['pl']['about-content'];
    }
    
    if (contentTranslations[lang] && contentTranslations[lang]['services-intro']) {
        const servicesBox = document.querySelector('#nasze-uslugi .content-box');
        if (servicesBox) {
            let servicesContent = `<p>${contentTranslations[lang]['services-intro']}</p>`;
            
            // Service items container
            servicesContent += `<div class="service-items-grid">`;
            
            // Add service items
            if (contentTranslations[lang]['services-items']) {
                contentTranslations[lang]['services-items'].forEach(item => {
                    servicesContent += `
                        <div class="service-item">
                            <h3>${item.title}</h3>
                            <p>${item.description}</p>
                        </div>
                    `;
                });
            } else if (contentTranslations['pl']['services-items']) {
                contentTranslations['pl']['services-items'].forEach(item => {
                    servicesContent += `
                        <div class="service-item">
                            <h3>${item.title}</h3>
                            <p>${item.description}</p>
                        </div>
                    `;
                });
            }
            
            servicesContent += `</div>`;
            servicesBox.innerHTML = servicesContent;
            
            // Reinitialize service item click events
            initializeServiceItemEvents();
        }
    }
    
    // Update deportation content
    if (contentTranslations[lang] && contentTranslations[lang]['deportation-content']) {
        document.querySelector('#deportacja .content-box').innerHTML = contentTranslations[lang]['deportation-content'];
    } else if (contentTranslations['pl'] && contentTranslations['pl']['deportation-content']) {
        document.querySelector('#deportacja .content-box').innerHTML = contentTranslations['pl']['deportation-content'];
    }
    
    // Update advice content
    if (contentTranslations[lang] && contentTranslations[lang]['advice-content']) {
        document.querySelector('#porady-prawne .content-box').innerHTML = contentTranslations[lang]['advice-content'];
    } else if (contentTranslations['pl'] && contentTranslations['pl']['advice-content']) {
        document.querySelector('#porady-prawne .content-box').innerHTML = contentTranslations['pl']['advice-content'];
    }
    
    // Update contact form
    const contactFormTitle = document.querySelector('.contact-form h3');
    if (contactFormTitle) {
        contactFormTitle.textContent = contentTranslations[lang]?.['contact-title-form'] || contentTranslations['pl']['contact-title-form'];
    }
    
    document.querySelector('label[for="name"]').textContent = translations[lang]['name-label'] || translations['pl']['name-label'];
    document.querySelector('label[for="email"]').textContent = translations[lang]['email-label'] || translations['pl']['email-label'];
    document.querySelector('label[for="phone"]').textContent = translations[lang]['phone-label'] || translations['pl']['phone-label'];
    document.querySelector('label[for="message"]').textContent = translations[lang]['message-label'] || translations['pl']['message-label'];
    document.querySelector('.submit-btn').textContent = translations[lang]['submit-button'] || translations['pl']['submit-button'];
    
    // Update free consultations text
    document.querySelector('.free-consultation').textContent = translations[lang]['free-consultations'] || translations['pl']['free-consultations'];
    
    // Update footer copyright
    document.querySelector('.footer-copyright p').textContent = translations[lang]['footer-copyright'] || translations['pl']['footer-copyright'];
}

// Initialize service item events
function initializeServiceItemEvents() {
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.addEventListener('click', function() {
            // Toggle expanded/collapsed state
            this.classList.toggle('expanded');
            
            // Add animation
            if (this.classList.contains('expanded')) {
                this.style.backgroundColor = 'rgba(212, 175, 55, 0.15)';
                this.style.transform = 'translateX(10px)';
            } else {
                this.style.backgroundColor = '';
                this.style.transform = '';
            }
        });
    });
}

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple form validation
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        if (!nameInput.value.trim()) {
            alert('Proszę podać imię i nazwisko');
            nameInput.focus();
            return;
        }
        
        if (!emailInput.value.trim()) {
            alert('Proszę podać adres email');
            emailInput.focus();
            return;
        }
        
        if (!messageInput.value.trim()) {
            alert('Proszę wpisać wiadomość');
            messageInput.focus();
            return;
        }
        
        // In a real implementation, you would send this data to a server
        alert('Dziękujemy za wiadomość! Odpowiemy najszybciej jak to możliwe.');
        this.reset();
    });
}

// Uruchom inicjalizację po załadowaniu
document.addEventListener('DOMContentLoaded', function() {
    // Utwórz siatki usług na start
    const currentLang = document.querySelector('.lang-btn.active')?.getAttribute('data-lang') || 'pl';
    changeLanguage(currentLang);
    
    // Inicjalizuj eventy na elementach usług
    initializeServiceItemEvents();
});