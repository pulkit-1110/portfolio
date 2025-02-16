const conf = {
    emailServiceId: String(import.meta.env.VITE_EMAIL_SERVICE_ID),
    templateName: String(import.meta.env.VITE_TEMPLATE_NAME),
    emailId: String(import.meta.env.VITE_EMAIL_ID),
    emailJSPublicKey: String(import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY),
  };

export default conf;