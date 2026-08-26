import { createErrorPage } from "./404";

export function createImprintPage() {
  const imprintRef = document.querySelector("#app");
  if (!imprintRef) return createErrorPage();
  imprintRef.innerHTML = `
    
    `;
}
