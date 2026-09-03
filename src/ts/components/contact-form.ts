const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showFieldError(fieldName: string, message: string) {
  const errorRef = document.querySelector(`[data-error-for="${fieldName}"]`);
  if (errorRef) errorRef.textContent = message;
}

function validateForm(name: string, email: string, message: string, privacyAccepted: boolean): boolean {
  let isValid = true;

  if (!name.trim()) {
    showFieldError("name", "Bitte gib deinen Namen an.");
    isValid = false;
  } else {
    showFieldError("name", "");
  }

  if (!emailPattern.test(email.trim())) {
    showFieldError("email", "Bitte gib eine gültige E-Mail-Adresse an.");
    isValid = false;
  } else {
    showFieldError("email", "");
  }

  if (!message.trim()) {
    showFieldError("message", "Bitte gib eine Nachricht ein.");
    isValid = false;
  } else {
    showFieldError("message", "");
  }

  if (!privacyAccepted) {
    showFieldError("privacy", "Bitte stimme der Datenverarbeitung zu.");
    isValid = false;
  } else {
    showFieldError("privacy", "");
  }

  return isValid;
}

function buildMailtoLink(name: string, email: string, message: string): string {
  const subject = encodeURIComponent(`Portfolio-Kontakt von ${name}`);
  const body = encodeURIComponent(`${message}\n\n${name} (${email})`);
  return `mailto:kontakt@matthias-tausch.de?subject=${subject}&body=${body}`;
}

export function initContactForm() {
  const formRef = document.querySelector<HTMLFormElement>("#contact-form");
  if (!formRef) return;

  formRef.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = formRef.querySelector<HTMLInputElement>("#contact-name");
    const emailInput = formRef.querySelector<HTMLInputElement>("#contact-email");
    const messageInput = formRef.querySelector<HTMLTextAreaElement>("#contact-message");
    const privacyInput = formRef.querySelector<HTMLInputElement>("#contact-privacy");
    if (!nameInput || !emailInput || !messageInput || !privacyInput) return;

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
    const privacyAccepted = privacyInput.checked;

    if (!validateForm(name, email, message, privacyAccepted)) return;

    window.location.href = buildMailtoLink(name, email, message);
  });
}
