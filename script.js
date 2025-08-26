// ===============================
// Toggling Menu con cierre al hacer clic fuera
// ===============================
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener("click", (e) => {
            e.stopPropagation();
            nav.classList.toggle("show");
        });

        document.addEventListener("click", (e) => {
            if (
                nav.classList.contains("show") &&
                !nav.contains(e.target) &&
                e.target !== toggle
            ) {
                nav.classList.remove("show");
            }
        });
    }
};

showMenu("nav-toggle", "nav-menu");

// ===============================
// Scroll Reveal Animations
// ===============================
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".home-title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home-img", { delay: 400 });
sr.reveal(".home-social", { delay: 400 });

sr.reveal(".about-img", {});
sr.reveal(".about-subtitle", { delay: 200 });
sr.reveal(".about-text", { delay: 400 });

sr.reveal(".skills-subtitle", { delay: 100 });
sr.reveal(".skills-text", { delay: 150 });
sr.reveal(".skills-data", { interval: 200 });
sr.reveal(".skills-img", { delay: 400 });

sr.reveal(".work-img", { interval: 200 });
sr.reveal(".work-info", { interval: 200 });


// ===============================
// Diccionario de traducciones
// ===============================
const translations = {
    es: {
        logo: "Rodolfo",
        menuHome: "Inicio",
        menuAbout: "Sobre mí",
        menuSkills: "Habilidades",
        menuWork: "Proyectos",
        menuContact: "Contacto",
        homeTitle:
            "Hola, <br>Yo soy <span class='home-title-color'>Rodolfo</span> Diseñador Ux Ui",
        buttonContact: "Contacto",
        aboutSubtitle: "Yo soy Rodolfo",
        aboutText:
            "Diseñador enfocado en crear experiencias cercanas a los usuarios. Además de interfaces intuitivas, basadas en el comportamiento del usuario, con el objetivo de mejorar constantemente la experiencia digital.",
        skillsSubtitle: "Habilidades Profesionales",
        skillsText:
            "Apasionado por el diseño centrado en el usuario, creo experiencias significativas, combinando creatividad e investigación UX. Mi conocimiento en HTML, CSS y JavaScript me permite colaborar fluidamente con equipos de desarrollo para lograr soluciones intuitivas funcionales.",
        workTitle: "Proyectos",
        workTitle1: "Proyecto Delta",
        workDesc1: "Diseño y prototipo de un sitio web para Delta Sports. Se usaron herramientas como Figma y Visual Studio Code.",
        workLink1: "Ver demo",
        workTitle2: "User Persona",
        workDesc2: "Creación de un user persona basado en entrevistas y datos cualitativos para un proyecto de marketing.",
        workTitle3: "Segmentación",
        workDesc3: "Diagrama de segmentación de usuarios para identificar grupos clave y sus necesidades.",
        workTitle4: "Test de usabilidad",
        workDesc4: "Plan y resultados de un test de usabilidad para mejorar la navegación de un sitio web.",
        workTitle5: "Login Industrializa",
        workDesc5: "Diseño de una interfaz de inicio de sesión para una aplicación móvil, con enfoque en la facilidad de uso.",
        workTitle6: "Mapa de Empatía",
        workDesc6: "Mapa de empatía creado para comprender las emociones, pensamientos y motivaciones de los usuarios.",
        contactTitle: "Contacto",
        contactText:
            "Si deseas contactarme, puedes hacerlo a través del siguiente formulario o enviándome un correo a",
        footerCopyright: "© 2025 Todos los derechos reservados",
        formNamePlaceholder: "Nombre",
        formEmailPlaceholder: "Correo Electrónico",
        formMessagePlaceholder: "Tu mensaje",
        formButtonSend: "Enviar",
        formSuccessMessage: "¡Mensaje enviado con éxito!",
        formErrorMessage: "Por favor, completa todos los campos.",
    },
    en: {
        logo: "Rodolfo",
        menuHome: "Home",
        menuAbout: "About Me",
        menuSkills: "Skills",
        menuWork: "Projects",
        menuContact: "Contact",
        homeTitle:
            "Hello, <br>I am <span class='home-title-color'>Rodolfo</span> Ux Ui Designer",
        buttonContact: "Contact",
        aboutSubtitle: "I am Rodolfo",
        aboutText:
            " Designer focused on creating user-friendly experiences. In addition to intuitive interfaces based on user behavior, with the goal of constantly improving the digital experience.",
        skillsSubtitle: "Professional Skills",
        skillsText:
            "Passionate about user-centered design, I create meaningful experiences by combining creativity and UX research. My knowledge of HTML, CSS, and JavaScript allows me to collaborate seamlessly with development teams to achieve intuitive, functional solutions.",
        workTitle: "Projects",
        workTitle1: "Delta Project",
        workDesc1: "Design and prototype of a website for Delta Sports. Tools like Figma and Visual Studio Code were used.",
        workLink1: "View demo",
        workTitle2: "User Persona",
        workDesc2: "Creation of a user persona based on interviews and qualitative data for a marketing project.",
        workTitle3: "Segmentation",
        workDesc3: "User segmentation diagram to identify key groups and their needs.",
        workTitle4: "Usability Test",
        workDesc4: "Plan and results of a usability test to improve website navigation.",
        workTitle5: "Industrializa Login",
        workDesc5: "Design of a login interface for a mobile application, focusing on ease of use.",
        workTitle6: "Empathy Map",
        workDesc6: "Empathy map created to understand the emotions, thoughts, and motivations of users.",
        contactTitle: "Contact",
        contactText:
            "If you want to contact me, you can do so through the following form or by sending me an email at",
        footerCopyright: "© 2025 All rights reserved",
        formNamePlaceholder: "Name",
        formEmailPlaceholder: "Email",
        formMessagePlaceholder: "Your message",
        formButtonSend: "Send",
        formSuccessMessage: "Message sent successfully!",
        formErrorMessage: "Please fill out all fields.",
    },
};

// ===============================
// Diccionario de traducciones para 'alt' de imágenes
// ===============================
const altTranslations = {
    es: {
        skillsAlt: "Mesa de trabajo con herramientas de diseño",
        alt1: "Maqueta de página web para Delta Airlines",
        alt2: "Diagrama de persona de usuario para un proyecto",
        alt3: "Diagrama de segmentación de clientes",
        alt4: "Esquema de prueba de usabilidad con métricas",
        alt5: "Diseño de interfaz de login para una aplicación",
        alt6: "Mapa de empatía con notas adhesivas"
    },
    en: {
        skillsAlt: "Work table with design tools",
        alt1: "Website mockup for Delta Airlines",
        alt2: "User persona diagram for a project",
        alt3: "Customer segmentation diagram",
        alt4: "Usability test scheme with metrics",
        alt5: "Login interface design for an application",
        alt6: "Empathy map with sticky notes"
    }
};

// ===============================
// Función para cambiar idioma
// ===============================
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-lang]").forEach((el) => {
        const key = el.getAttribute("data-lang");
        if (translations[lang][key]) {
            if (
                el.tagName.toLowerCase() === "input" ||
                el.tagName.toLowerCase() === "textarea"
            ) {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // Actualizar los atributos 'alt' de las imágenes
    document.querySelectorAll("[data-lang-alt]").forEach((el) => {
        const key = el.getAttribute("data-lang-alt");
        if (altTranslations[lang][key]) {
            el.alt = altTranslations[lang][key];
        }
    });
}

// ===============================
// Variables del modal
// ===============================
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];
const workContainer = document.querySelector(".work-container");
let currentLang = localStorage.getItem("lang") || "es";
let currentIndex = null;

// ===============================
// Setup del modal
// ===============================
function setupModal() {
    workContainer.addEventListener("click", (event) => {
        const clickedElement = event.target;
        const imageElement = clickedElement.tagName === 'IMG' ? clickedElement : clickedElement.closest('.work-img img');
        if (imageElement) {
            const parentDiv = imageElement.closest(".work-item");
            const index = Array.from(workContainer.children).indexOf(parentDiv);
            if (index !== -1) {
                currentIndex = index;
                modal.style.display = "flex";
                modalImg.src = imageElement.src;
                let captionHTML = translations[currentLang][`workDesc${index + 1}`];
                if (index === 0) {
                    captionHTML += ` <a href="https://malkabian.github.io/DeltaPrueba/" target="_blank" class="modal-link">${translations[currentLang].workLink1}</a>`;
                }
                captionText.innerHTML = captionHTML;
            }
        }
    });

    closeBtn.onclick = () => {
        modal.style.display = "none";
        currentIndex = null;
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            currentIndex = null;
        }
    };
}

// ===============================
// Setup del modo oscuro/claro
// ===============================
function setupDarkMode() {
    const swith = document.querySelector(".switch");
    const darkModeKey = "darkMode";

    const isDarkMode = localStorage.getItem(darkModeKey) === "true";
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        swith.classList.add("dark-mode");
    }

    swith.addEventListener("click", () => {
        const isDarkMode = document.body.classList.toggle("dark-mode");
        swith.classList.toggle("dark-mode");
        localStorage.setItem(darkModeKey, isDarkMode);
    });
}

// ===============================
// Validación del formulario de contacto
// ===============================
function setupContactForm() {
    const form = document.querySelector(".contact-form");
    const formMessage = document.getElementById("form-message");

    if (form) {
        form.addEventListener("submit", (event) => {
            const nameInput = form.querySelector('input[name="name"]');
            const emailInput = form.querySelector('input[name="email"]');
            const messageInput = form.querySelector('textarea[name="message"]');

            formMessage.classList.remove("show");

            // Valida si los campos están vacíos
            if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
                event.preventDefault(); // Detiene el envío del formulario si falla
                formMessage.textContent = translations[currentLang].formErrorMessage;
                formMessage.classList.add("show");
            } else {
                // Si la validación pasa, el formulario se enviará
                formMessage.textContent = translations[currentLang].formSuccessMessage;
                formMessage.classList.add("show");
                // La página se recargará después del envío, gracias al atributo _next de formsubmit.co
                // Puedes eliminar la siguiente línea, ya que el formulario se enviará
                // form.reset(); 
                
                // Si quieres que el mensaje de éxito se muestre un momento antes de la recarga:
                setTimeout(() => {
                    form.submit();
                }, 100); 
                event.preventDefault(); // Previene el envío inmediato para dar tiempo a la función setTimeout
            }
        });
    }
}
// ===============================
// Scroll Spy para la navegación
// ===============================
function setupScrollSpy() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");
    const navMenu = document.getElementById("nav-menu"); // Agrega esta línea

    // Función para manejar el estado activo en los enlaces de navegación
    const navHighlighter = () => {
        let scrollY = window.pageYOffset;

        sections.forEach((current) => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.add("active");
            } else {
                document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.remove("active");
            }
        });
    };

    window.addEventListener("scroll", navHighlighter);

    // Agrega un evento a los enlaces para cerrar el menú en móviles
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (navMenu) {
                navMenu.classList.remove("show");
            }
        });
    });
}
// ===============================
// Botón 'Volver al Inicio'
// ===============================
function setupScrollToTop() {
    const scrollUp = document.querySelector(".scroll-up");
    if (scrollUp) {
        window.addEventListener("scroll", () => {
            // Muestra el botón cuando el desplazamiento vertical es mayor a 560px
            this.scrollY >= 560 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll");
        });
    }
}

// ===============================
// Inicializar todo al cargar
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    setLanguage(currentLang);
    setupModal();
    setupDarkMode();
    setupContactForm();
    setupScrollSpy();
    setupScrollToTop();
});