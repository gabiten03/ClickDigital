const translations = {
    es: {


        boton_reunion: "Reunión de relevamiento",
        whatsapp_es: "Contactanos",


        menu_quienes_somos: "Quiénes Somos",
        menu_servicios: "Servicios",
        menu_trabajos: "Últimos Trabajos",
        menu_contacto: "Contacto",
        transformando_ideas: "Transformando Ideas",
        no_creamos_solo: "No creamos solo",
        disenos: "diseños",
        creamos_experiencias: "creamos experiencias",

        quienes_somos_titulo: "Quiénes Somos",
        quienes_somos_texto: "Nos enfocamos en ayudar a las empresas a modernizarse mediante la transformación digital. Ofrecemos soluciones de automatización, nuevas tecnologías y diseño web para optimizar la eficiencia y la presencia digital de tu negocio. Nuestro objetivo es que la tecnología y el diseño trabajen juntos para simplificar tareas y potenciar el crecimiento de manera efectiva.",
        soluciones_personalizadas: "Soluciones digitales personalizadas que se adaptan a tus necesidades",
        enfoque_web: "Nuestro enfoque se centra en crear sitios web atractivos, funcionales y de alto rendimiento, así como en desarrollar chatbots inteligentes y soluciones a medida que impulsarán tu presencia en línea.",

        desarrollo_app_titulo: "Desarrollo de Aplicaciones Personalizadas",
        desarrollo_app_texto: "Nuestro proceso optimizado nos permite entregar aplicaciones de alta calidad en tiempo récord, sin comprometer la calidad. Diseñamos interfaces de usuario intuitivas y atractivas que garantizan una experiencia óptima para tus usuarios. Ofrecemos soporte continuo y mantenimiento para asegurar que tu aplicación funcione sin problemas y esté siempre actualizada.",
       

        mejora_web_titulo: "Mejora tu presencia en la Web",
        mejora_web_texto: "Creamos sitios web atractivos y funcionales que representen tu negocio de manera impactante. Desde el diseño de la interfaz hasta la selección de colores y tipografía, nos aseguramos de que tu sitio web tenga un aspecto profesional y atraiga a tu audiencia objetivo.",
 

        optimiza_procesos_titulo: "Optimiza tus procesos para maximizar la eficiencia",
        optimiza_procesos_texto: "Transformar sus operaciones a través de la automatización de procesos clave. Simplificamos y optimizamos flujos de trabajo en áreas críticas como:",
        nuestra_mision: "Nuestra misión es ayudarte a liberar tiempo, reducir errores humanos, y mejorar la productividad mediante soluciones personalizadas para cada etapa de tu negocio.",

        conecta_titulo: "Conecta y automatiza todas tus plataformas para una gestión eficiente",
        conecta_texto: "Integra las aplicaciones que ya usas para crear flujos de trabajo completamente automatizados y eficientes:",
   

        ia_titulo: "Impulsa tu empresa con inteligencia artificial aplicada",
        ia_texto: "Ofrecemos soluciones basadas en IA que mejoran significativamente la toma de decisiones y la experiencia del cliente:",
     
        integration_message: "Ya sea que utilices un CRM, un sistema de facturación o una plataforma de e-commerce, podemos ayudarte a integrarlos para que trabajen en perfecta armonía, haciendo tu negocio más ágil y conectado.",
        nuestros_trabajos: "Nuestros Últimos Trabajos",
        todos: "Todos",
        web: "Web",
        app: "App",
        ecommerce: "E-Commerce",
        diseno_medida: "Diseño a Medida",

        tienes_proyecto: "¿Tienes un proyecto de diseño o una idea ? Hablemos.",
        hablemos: "Hablemos.",

        whatsapp: "WhatsApp",
        direccion: "Dirección",
        ciudad: "Ciudad de Buenos Aires, Argentina",

        ai_team_message: "Nuestro equipo se encarga de que la IA se convierta en una herramienta clave para hacer crecer tu negocio, optimizar operaciones y mejorar la satisfacción del cliente.",
    },
    en: {

           boton_reunion: "Discovery meeting",
        whatsapp_es: "Contact Us",

        menu_quienes_somos: "Who We Are", 
        menu_servicios: "Services",
        menu_trabajos: "Latest Works",
        menu_contacto: "Contact",
        transformando_ideas: "Transforming Ideas",
        no_creamos_solo: "We don't just create",
        disenos: "designs",
        creamos_experiencias: "we create experiences",

        quienes_somos_titulo: "Who We Are",
        quienes_somos_texto: "We focus on helping businesses modernize through digital transformation. We offer automation solutions, new technologies, and web design to optimize efficiency and enhance your business’s digital presence. Our goal is for technology and design to work together to simplify tasks and effectively drive growth.",
        soluciones_personalizadas: "Customized digital solutions tailored to your needs",
        enfoque_web: "Our approach focuses on creating attractive, functional, and high-performance websites, as well as developing intelligent chatbots and tailored solutions to boost your online presence.",

        desarrollo_app_titulo: "Custom Application Development",
        desarrollo_app_texto: "Our optimized process allows us to deliver high-quality applications in record time without compromising quality. We design intuitive and engaging user interfaces that ensure an optimal user experience. We offer continuous support and maintenance to keep your application running smoothly and always up to date.",
     

        mejora_web_titulo: "Enhance Your Web Presence",
        mejora_web_texto: "We create attractive and functional websites that make a strong impression for your business. From interface design to color and typography selection, we ensure your website looks professional and appeals to your target audience.",
  

        optimiza_procesos_titulo: "Optimize Your Processes for Maximum Efficiency",
        optimiza_procesos_texto: "Transform your operations through the automation of key processes. We simplify and optimize workflows in critical areas such as:",
        ventas_texto: "Sales: Automate lead tracking, customer management, and follow-up reminders to maximize conversion opportunities.",
        marketing_texto: "Marketing: Implement automated and segmented campaigns, integrating tools that optimize email marketing, social media management, and detailed performance reporting.",
        gestion_inventario_texto: "Inventory Management: Ensure precise and automated inventory control with restocking alerts, real-time product tracking, and order optimization.",
        nuestra_mision: "Our mission is to help you save time, reduce human errors, and improve productivity through customized solutions for every stage of your business.",

        conecta_titulo: "Connect and Automate All Your Platforms for Efficient Management",
        conecta_texto: "Integrate the applications you already use to create fully automated and efficient workflows:",
 

        ia_titulo: "Boost Your Business with Applied Artificial Intelligence",
        ia_texto: "We offer AI-based solutions that significantly improve decision-making and customer experience:",

integration_message: "Whether you use a CRM, a billing system, or an e-commerce platform, we can help you integrate them so they work in perfect harmony, making your business more agile and connected.",
        nuestros_trabajos: "Our Latest Works",
        todos: "All",
        web: "Web",
        app: "App",
        ecommerce: "E-Commerce",
        diseno_medida: "Custom Design",

        tienes_proyecto: "Do you have a design project or an idea? Let's talk.",
        hablemos: "Let's talk.",

        whatsapp: "WhatsApp",
        direccion: "Address",
        ciudad: "Buenos Aires, Argentina",

          ai_team_message: "Our team ensures that AI becomes a key tool for growing your business, optimizing operations, and improving customer satisfaction."
    }
};

function setLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// script.js
document.addEventListener("DOMContentLoaded", () => {
    const languageSwitcher = document.getElementById("languageSwitcher");
    if (languageSwitcher) {
        languageSwitcher.addEventListener("change", (event) => {
            setLanguage(event.target.value);
        });
    }
});
