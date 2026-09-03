import "/src/styles/main.scss";
import { createHomePage } from "./pages/home";
import { createImprintPage } from "./pages/imprint";

if (location.pathname.endsWith("/imprint.html")) {
  createImprintPage();
} else {
  createHomePage();
}