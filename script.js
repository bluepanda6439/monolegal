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
    'uk': {},
    'en': {},
    'es': {}
};

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