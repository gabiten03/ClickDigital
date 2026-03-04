const translations = {
    es: {
        boton_reunion: "Agendar Discovery",
        whatsapp_es: "Contactanos",

        menu_quienes_somos: "Agencia",
        menu_servicios: "Soluciones",
        menu_trabajos: "Casos de Éxito",
        menu_contacto: "Contacto",
        
        transformando_ideas: "Potenciando tu Negocio",
        no_creamos_solo: "No escribimos solo",
        disenos: "código",
        creamos_experiencias: "diseñamos eficiencia con IA",

        quienes_somos_titulo: "Llevamos tu empresa al siguiente nivel",
        quienes_somos_texto: "En ClickDigital somos especialistas en integrar tecnología de vanguardia para optimizar operaciones. Ayudamos a empresas a escalar mediante la automatización de procesos repetitivos, el desarrollo de aplicaciones robustas y la implementación estratégica de Inteligencia Artificial.",
        
        soluciones_personalizadas: "Tecnología diseñada para escalar",
        enfoque_web: "Nuestro enfoque se centra en soluciones técnicas que eliminan cuellos de botella: desde agentes de IA que atienden clientes hasta plataformas de gestión logística y salud.",

        desarrollo_app_titulo: "Desarrollo de Software & Apps",
        desarrollo_app_texto: "Creamos aplicaciones móviles y plataformas SaaS a medida integradas con tu ecosistema actual (como Google Workspace). Nos enfocamos en escalabilidad, seguridad y una experiencia de usuario superior.",
       
        mejora_web_titulo: "Web & CRM Operativo",
        mejora_web_texto: "Desarrollamos sitios web de alto rendimiento integrados directamente con tu CRM y sistemas contables. No es solo una web, es el centro de mando de tu negocio.",

        optimiza_procesos_titulo: "Automatización de Procesos (BPA)",
        optimiza_procesos_texto: "Conectamos tus herramientas (Zapier, Make, n8n) para que tu negocio funcione en piloto automático en áreas como:",
        nuestra_mision: "Nuestra misión es liberar a tu equipo de tareas manuales, reducir errores y maximizar la rentabilidad mediante flujos de trabajo inteligentes.",

        conecta_titulo: "Conexión Total de Plataformas",
        conecta_texto: "Sincronizamos tus aplicaciones para una gestión eficiente y datos en tiempo real entre ventas, logística y administración.",

        ia_titulo: "Inteligencia Artificial Aplicada",
        ia_texto: "Implementamos agentes inteligentes y modelos de lenguaje (RAG) que transforman la forma en que interactúas con tus clientes y datos:",
     
        integration_message: "Ya sea un CRM bancario, una plataforma de booking o un sistema de logística, hacemos que todo trabaje en perfecta armonía con IA.",
        nuestros_trabajos: "Nuestros Casos de Éxito",
        todos: "Todos",
        web: "Web & CRM",
        app: "Apps & Software",
        ecommerce: "E-Commerce",
        diseno_medida: "IA & Automatización",

        tienes_proyecto: "¿Listo para automatizar tu crecimiento?",
        hablemos: "Hablemos.",

        whatsapp: "WhatsApp",
        direccion: "Dirección",
        ciudad: "Buenos Aires, Argentina",

        ai_team_message: "Nuestro equipo se encarga de que la IA se convierta en la herramienta clave para optimizar tus operaciones y mejorar la satisfacción del cliente."
    },
    en: {
        boton_reunion: "Book Discovery Call",
        whatsapp_es: "Contact Us",

        menu_quienes_somos: "Agency", 
        menu_servicios: "Solutions",
        menu_trabajos: "Success Stories",
        menu_contacto: "Contact",
        
        transformando_ideas: "Empowering Your Business",
        no_creamos_solo: "We don't just write",
        disenos: "code",
        creamos_experiencias: "we design efficiency with AI",

        quienes_somos_titulo: "Taking your company to the next level",
        quienes_somos_texto: "At ClickDigital, we specialize in integrating cutting-edge technology to optimize operations. We help companies scale through the automation of repetitive processes, robust application development, and strategic AI implementation.",
        
        soluciones_personalizadas: "Technology designed to scale",
        enfoque_web: "Our focus is on technical solutions that eliminate bottlenecks: from AI agents that serve customers to logistics and health management platforms.",

        desarrollo_app_titulo: "Software & App Development",
        desarrollo_app_texto: "We create custom mobile apps and SaaS platforms integrated with your current ecosystem (like Google Workspace). We focus on scalability, security, and superior user experience.",

        mejora_web_titulo: "Web & Operational CRM",
        mejora_web_texto: "We develop high-performance websites integrated directly with your CRM and accounting systems. It's not just a website; it's your business command center.",

        optimiza_procesos_titulo: "Business Process Automation (BPA)",
        optimiza_procesos_texto: "We connect your tools (Zapier, Make, n8n) so your business runs on autopilot in areas such as:",
        nuestra_mision: "Our mission is to free your team from manual tasks, reduce errors, and maximize profitability through intelligent workflows.",

        conecta_titulo: "Total Platform Connection",
        conecta_texto: "We synchronize your applications for efficient management and real-time data between sales, logistics, and administration.",

        ia_titulo: "Applied Artificial Intelligence",
        ia_texto: "We implement intelligent agents and language models (RAG) that transform how you interact with your customers and data:",

        integration_message: "Whether it's a banking CRM, a booking platform, or a logistics system, we make everything work in perfect harmony with AI.",
        nuestros_trabajos: "Our Success Stories",
        todos: "All",
        web: "Web & CRM",
        app: "Apps & Software",
        ecommerce: "E-Commerce",
        diseno_medida: "AI & Automation",

        tienes_proyecto: "Ready to automate your growth?",
        hablemos: "Let's talk.",

        whatsapp: "WhatsApp",
        direccion: "Address",
        ciudad: "Buenos Aires, Argentina",

        ai_team_message: "Our team ensures that AI becomes the key tool for optimizing your operations and improving customer satisfaction."
    }
};

// Lógica para el switch de idioma
function setLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Guardar preferencia
    localStorage.setItem('selectedLang', lang);
}

document.addEventListener("DOMContentLoaded", () => {
    const langToggle = document.getElementById("langToggle");
    
    // Cargar idioma guardado o defecto es
    const savedLang = localStorage.getItem('selectedLang') || 'es';
    if (langToggle) {
        langToggle.checked = (savedLang === 'es');
        setLanguage(savedLang);

        langToggle.addEventListener("change", () => {
            const newLang = langToggle.checked ? "es" : "en";
            setLanguage(newLang);
        });
    }
});