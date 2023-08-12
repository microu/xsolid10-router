import solidLogo from "./assets/solid.svg";
import viteLogo from "/vite.svg";
import { useRoutes } from "@solidjs/router";

import routes from "./routes.js";
import NavBar from "./NavBar.jsx";

function App() {
  const Routes = useRoutes(routes);

  const navBarItems = [
    { label: "Home", href: "/" },
    { label: "Counter A", href: "/countera" },
    { label: "Counter B", href: "/counterb" },
    { label: "Counter C", href: "/counterc" },
    { label: "Solar system", href: "/solar-system" },
    { label: "Mars", href: "/solar-object/Mars/" },
    { label: "All the things", href: "/all/the/things" },
    { label: "All page.md", href: "/all/page.md" },
  ];

  return (
    <div id="main">
      <div id="banner">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo vite" alt="Vite logo" />
        </a>
        <div id="banner-title">
          <h2>XSOLID10 - ROUTER</h2>
        </div>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <NavBar items={navBarItems} />
      <div id="main-content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
