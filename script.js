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
    // Toggling Active Link
    // ===============================
    const navLink = document.querySelectorAll(".nav-link");

    function linkAction() {
    navLink.forEach((n) => n.classList.remove("active"));
    this.classList.add("active");

    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
    }

    navLink.forEach((n) => n.addEventListener("click", linkAction));

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
    sr.reveal(".contact-input", { interval: 200 });

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
        "Hola, <br>Yo soy <span class='work-link'>Rodolfo</span> Diseñador Ux Ui",
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
        workLink1: "<span class='work-link'>Ver demo</span>",
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
        workLink1: "<span class='work-link'>View demo</span>",
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
    // Eventos para abrir/cerrar modal
    // (Usando delegación de eventos)
    // ===============================
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
        // Actualizar el texto del modal incluyendo el enlace para el primer proyecto
        let captionHTML = translations[currentLang][`workDesc${index + 1}`];
        if (index === 0) {
            captionHTML += ` <a href="https://malkabian.github.io/DeltaPrueba/" target="_blank">${translations[currentLang].workLink1}</a>`;
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

    // ===============================
    // Inicializar idioma al cargar
    // ===============================
    document.addEventListener("DOMContentLoaded", () => {
    setLanguage(currentLang);
    });

    // ===============================
    // Switch Dark/Light Mode
    // ===============================
    const swith = document.querySelector(".switch");
    const darkModeKey = "darkMode";

    // Cargar preferencia del localStorage al iniciar
    document.addEventListener("DOMContentLoaded", () => {
    const isDarkMode = localStorage.getItem(darkModeKey) === "true";
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        swith.classList.add("dark-mode");
    }
    });

    // Guardar preferencia al hacer clic en el switch
    swith.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    swith.classList.toggle("dark-mode");
    localStorage.setItem(darkModeKey, isDarkMode);
});