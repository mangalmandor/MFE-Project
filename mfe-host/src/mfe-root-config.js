import { registerApplication, start } from "single-spa";

// 1. Default Route (Agar URL mein kuch nahi hai, toh /login par bhej do)
if (window.location.pathname === "/") {
  window.history.pushState(null, null, "/login");
}

// 2. React App ko Register Karein (Bina Layout Engine ke)
registerApplication({
  name: "@mfe/react-auth",
  app: () => System.import("@mfe/react-auth"),
  activeWhen: ["/login"], // Jab URL mein /login hoga, tabhi app load hogi
});

registerApplication({
  name: "@mfe/angular-dashboard",
  app: () => System.import("@mfe/angular-dashboard"),
  activeWhen: ["/dashboard"], // Jab URL /dashboard ho
});

// 3. Engine ko start karein
start({
  urlRerouteOnly: true,
});