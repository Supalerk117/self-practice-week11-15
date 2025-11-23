import Keycloak from "keycloak-js";

const keycloakConfig = {
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
};

const keycloak = new Keycloak(keycloakConfig);
const user = {
  id: null,
  name: null,
  email: null,
  role: null
};
async function initializeKeycloak() {
  try {
    const authenticated = await keycloak.init({ onLoad: "login-required" });

    if (authenticated) {
      console.log("Authenticated ✅,Token:", keycloak.token);
    } else {
      console.warn("Not authenticated ❌");
    }
    if (keycloak.authenticated) {
      console.log("studentID:", keycloak.tokenParsed.preferred_username);
      console.log("studentName:", keycloak.tokenParsed.name);
      console.log("email:", keycloak.tokenParsed.email);
      console.log("role:", keycloak.tokenParsed.realm_access.roles);
    }

    user.id = `${keycloak.tokenParsed.preferred_username}`
    user.name = keycloak.tokenParsed.name
    user.email = keycloak.tokenParsed.email
    user.role = keycloak.tokenParsed.realm_access.roles
    return user 
  } 
  catch (err) {
    console.error("Keycloak init error:", err);
  }
}

function doSignout() {
  keycloak.logout({
    redirectUri: import.meta.env.VITE_REDIRECT_URI,
  });
  sessionStorage.clear();
  localStorage.clear();
  user.id = null
  user.name = null
  user.email = null
}

export { initializeKeycloak, doSignout };