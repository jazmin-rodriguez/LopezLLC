// Finds the estimate form in index.html.
const estimateForm = document.querySelector("#estimateForm");

// Finds the empty paragraph where we show a confirmation message.
const formNote = document.querySelector("#formNote");

// Finds the button that switches the website language.
const languageToggle = document.querySelector("#languageToggle");

// All the English and Spanish text used by the page.
// The names on the left match the data-i18n attributes in index.html.
const translations = {
  en: {
    navServices: "Services",
    navGallery: "Gallery",
    navReviews: "Reviews",
    navEstimate: "Free Estimate",
    headerCta: "Get Estimate",
    languageButton: "Español",
    heroEyebrow: "English & Spanish speaking crew",
    heroTitle: "Painting and remodeling that makes your home feel new again.",
    heroText: "Interior painting, exterior painting, drywall repair, cabinets, floors, backsplash, pressure washing, and detailed finishing work.",
    heroPrimary: "Request a Free Estimate",
    heroSecondary: "View Services",
    whoEyebrow: "Who we are",
    whoTitle: "A reliable local crew for clean, careful home upgrades.",
    whoText: "BrightCraft Painting & Remodeling helps homeowners refresh, repair, and improve their spaces with honest communication, neat job sites, and quality workmanship. We explain the process clearly in English or Spanish and provide free estimates before work begins.",
    servicesEyebrow: "What we do",
    servicesTitle: "Painting, repairs, and remodeling services",
    service1Title: "Interior Painting",
    service1Text: "Walls, ceilings, trim, doors, touch-ups, and complete room transformations.",
    service2Title: "Exterior Painting",
    service2Text: "Fresh exterior finishes that improve curb appeal and protect your home.",
    service3Title: "Cabinet Painting",
    service3Text: "Give kitchens, bathrooms, and built-ins a clean updated look without replacing them.",
    service4Title: "Drywall Repair",
    service4Text: "Patch holes, repair cracks, smooth surfaces, and prep walls for paint.",
    service5Title: "Pressure Washing",
    service5Text: "Clean siding, patios, driveways, fences, and exterior surfaces before painting.",
    service6Title: "Trim & Door Painting",
    service6Text: "Crisp edges, smooth finishes, and detailed prep for high-touch surfaces.",
    service7Title: "Resurfacing",
    service7Text: "Refresh worn surfaces and restore a smoother, cleaner finish.",
    service8Title: "Floors & Backsplash",
    service8Text: "Install and update floors and backsplash areas for a finished remodeled look.",
    galleryEyebrow: "Photo gallery",
    galleryTitle: "Recent project inspiration",
    gallery1: "Interior refresh",
    gallery2: "Cabinet painting",
    gallery3: "Backsplash",
    gallery4: "Flooring",
    gallery5: "Exterior work",
    reviewsEyebrow: "Reviews",
    reviewsTitle: "What customers say",
    review1: "“They painted our living room and repaired drywall before starting. The walls look smooth and the crew was very respectful.”",
    review2: "“Great communication, fair pricing, and clean work. Our cabinets look brand new.”",
    review3: "“They helped us with painting, trim, and backsplash. Everything was finished on time.”",
    estimateEyebrow: "Free estimate",
    estimateTitle: "Tell us what you need. We will follow up with next steps.",
    estimateButton: "Start Request",
    contactEyebrow: "Contact",
    contactTitle: "Leave your contact info and project details.",
    contactText: "Tell us what you want done, where the project is located, and the best way to reach you. We speak English and Spanish.",
    phoneLabel: "Phone:",
    emailLabel: "Email:",
    languagesLabel: "Languages:",
    nameLabel: "Full name",
    phoneFormLabel: "Phone number",
    emailFormLabel: "Email address",
    serviceFormLabel: "Service needed",
    messageLabel: "What do you need or want?",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@example.com",
    messagePlaceholder: "Tell us about the project, rooms, timeline, colors, repairs, or questions.",
    optionChoose: "Choose a service",
    optionInterior: "Interior painting",
    optionExterior: "Exterior painting",
    optionCabinet: "Cabinet painting",
    optionDrywall: "Drywall repair",
    optionPressure: "Pressure washing",
    optionTrim: "Trim & door painting",
    optionResurfacing: "Resurfacing",
    optionFloors: "Floors",
    optionBacksplash: "Backsplash",
    optionRemodeling: "Remodeling project",
    submitButton: "Send Estimate Request",
    formSuccess: "Thank you! Your estimate request has been prepared. Connect this form to email or a booking tool before publishing.",
    footerTagline: "Free estimates • English & Spanish",
    formSending: "Sending your estimate request...",
    formSuccess: "Thank you! Your estimate request has been sent.",
    formError: "Sorry, something went wrong. Please call or email us directly.",
  },
  es: {
    navServices: "Servicios",
    navGallery: "Galería",
    navReviews: "Reseñas",
    navEstimate: "Estimado Gratis",
    headerCta: "Pedir Estimado",
    languageButton: "English",
    heroEyebrow: "Equipo que habla inglés y español",
    heroTitle: "Pintura y remodelación para que su hogar se sienta como nuevo.",
    heroText: "Pintura interior, pintura exterior, reparación de drywall, gabinetes, pisos, backsplash, lavado a presión y acabados detallados.",
    heroPrimary: "Pedir un Estimado Gratis",
    heroSecondary: "Ver Servicios",
    whoEyebrow: "Quiénes somos",
    whoTitle: "Un equipo local confiable para mejoras limpias y cuidadosas en su hogar.",
    whoText: "BrightCraft Painting & Remodeling ayuda a los dueños de casa a renovar, reparar y mejorar sus espacios con comunicación honesta, áreas de trabajo limpias y trabajo de calidad. Explicamos el proceso claramente en inglés o español y ofrecemos estimados gratis antes de comenzar.",
    servicesEyebrow: "Lo que hacemos",
    servicesTitle: "Servicios de pintura, reparaciones y remodelación",
    service1Title: "Pintura Interior",
    service1Text: "Paredes, techos, molduras, puertas, retoques y transformaciones completas de habitaciones.",
    service2Title: "Pintura Exterior",
    service2Text: "Acabados exteriores frescos que mejoran la apariencia y protegen su hogar.",
    service3Title: "Pintura de Gabinetes",
    service3Text: "Renueve cocinas, baños y muebles empotrados sin tener que reemplazarlos.",
    service4Title: "Reparación de Drywall",
    service4Text: "Reparamos agujeros, grietas, superficies irregulares y preparamos paredes para pintar.",
    service5Title: "Lavado a Presión",
    service5Text: "Limpieza de siding, patios, entradas, cercas y superficies exteriores antes de pintar.",
    service6Title: "Pintura de Molduras y Puertas",
    service6Text: "Bordes limpios, acabados lisos y preparación detallada para superficies de uso frecuente.",
    service7Title: "Resurfacing",
    service7Text: "Renovamos superficies desgastadas para lograr un acabado más limpio y uniforme.",
    service8Title: "Pisos y Backsplash",
    service8Text: "Instalación y renovación de pisos y backsplash para un acabado remodelado completo.",
    galleryEyebrow: "Galería de fotos",
    galleryTitle: "Inspiración de proyectos recientes",
    gallery1: "Renovación interior",
    gallery2: "Pintura de gabinetes",
    gallery3: "Backsplash",
    gallery4: "Pisos",
    gallery5: "Trabajo exterior",
    reviewsEyebrow: "Reseñas",
    reviewsTitle: "Lo que dicen los clientes",
    review1: "“Pintaron nuestra sala y repararon el drywall antes de comenzar. Las paredes quedaron lisas y el equipo fue muy respetuoso.”",
    review2: "“Muy buena comunicación, precio justo y trabajo limpio. Nuestros gabinetes parecen nuevos.”",
    review3: "“Nos ayudaron con pintura, molduras y backsplash. Todo se terminó a tiempo.”",
    estimateEyebrow: "Estimado gratis",
    estimateTitle: "Díganos qué necesita. Nosotros le contactaremos con los siguientes pasos.",
    estimateButton: "Comenzar Solicitud",
    contactEyebrow: "Contacto",
    contactTitle: "Deje su información y los detalles del proyecto.",
    contactText: "Cuéntenos qué trabajo desea hacer, dónde está ubicado el proyecto y la mejor forma de contactarle. Hablamos inglés y español.",
    phoneLabel: "Teléfono:",
    emailLabel: "Correo:",
    languagesLabel: "Idiomas:",
    nameLabel: "Nombre completo",
    phoneFormLabel: "Número de teléfono",
    emailFormLabel: "Correo electrónico",
    serviceFormLabel: "Servicio que necesita",
    messageLabel: "¿Qué necesita o qué desea hacer?",
    namePlaceholder: "Su nombre",
    emailPlaceholder: "usted@ejemplo.com",
    messagePlaceholder: "Cuéntenos sobre el proyecto, habitaciones, fecha, colores, reparaciones o preguntas.",
    optionChoose: "Elija un servicio",
    optionInterior: "Pintura interior",
    optionExterior: "Pintura exterior",
    optionCabinet: "Pintura de gabinetes",
    optionDrywall: "Reparación de drywall",
    optionPressure: "Lavado a presión",
    optionTrim: "Pintura de molduras y puertas",
    optionResurfacing: "Resurfacing",
    optionFloors: "Pisos",
    optionBacksplash: "Backsplash",
    optionRemodeling: "Proyecto de remodelación",
    submitButton: "Enviar Solicitud de Estimado",
    formSuccess: "¡Gracias! Su solicitud de estimado está preparada. Conecte este formulario a correo electrónico o una herramienta de citas antes de publicar.",
    footerTagline: "Estimados gratis • Inglés y español",
    formSending: "Enviando su solicitud de estimado...",
    formSuccess: "¡Gracias! Su solicitud de estimado ha sido enviada.",
    formError: "Lo sentimos, algo salió mal. Por favor llámenos o envíenos un correo directamente.",
  }
};

let currentLanguage = "en";

// Updates every element that has a matching translation key.
function updateLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = translations[language][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    element.placeholder = translations[language][key];
  });

  languageToggle.textContent = translations[language].languageButton;
  formNote.textContent = "";
}

// Switches between English and Spanish when the button is clicked.
languageToggle.addEventListener("click", () => {
  const nextLanguage = currentLanguage === "en" ? "es" : "en";
  updateLanguage(nextLanguage);
});

// Runs when someone clicks the form's submit button.
estimateForm.addEventListener("submit", async (event) => {
  // Stops the browser from refreshing the page.
  event.preventDefault();

  // Reads all the answers from the contact form.
  const formData = new FormData(estimateForm);

  // Gets each field by its name="" from the HTML form.
  const name = formData.get("name");
  const phone = formData.get("phone");
  const email = formData.get("email") || "Not provided";
  const service = formData.get("service");
  const message = formData.get("message");

  try {
    // Shows the visitor that the request is being sent.
    formNote.textContent = translations[currentLanguage].formSending;

    // Sends the form data to the Netlify backend function.
    // This is what prevents the visitor's email app from opening.
    const response = await fetch("/.netlify/functions/send-estimate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      // Converts the form answers into JSON so the backend can read them.
      body: JSON.stringify({
        name,
        phone,
        email,
        service,
        message,
        language: currentLanguage
      })
    });

    // If the backend returns an error, move to the catch block below.
    if (!response.ok) {
      throw new Error("Estimate request failed");
    }

    // Shows the success message after the backend sends the email.
    formNote.textContent = translations[currentLanguage].formSuccess;

    // Clears the form fields after a successful send.
    estimateForm.reset();
  } catch (error) {
    // Shows an error message if the backend fails or the email cannot send.
    formNote.textContent = translations[currentLanguage].formError;
  }
});