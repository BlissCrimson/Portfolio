export function createErrorPage() {
  const errorRef = document.querySelector("#app");
  if (!errorRef) return;
  errorRef.innerHTML = `
    <p>Seite nicht gefunden.</p>
    `;
}
