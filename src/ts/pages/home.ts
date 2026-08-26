import { createErrorPage } from "./404";

export function createHomePage() {
  const homePageRef = document.querySelector("#app");
  if (!homePageRef) return createErrorPage();
  homePageRef.innerHTML = `
    <header>

    <nav>
        <ul>
            <li>About Me</li>
            <li><a href=""></a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </nav>
</header>

<main>
    <section name="welcome" class="welcome">

    </section>
</main>

<footer>
    <a id="imprint">Impressum</a>
</footer>
    `;
}
