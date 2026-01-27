// auth.js — Auth0 SPA auth for PanAfric Properties (static Netlify site)

const AUTH0_DOMAIN = "panafricproperties.eu.auth0.com";
const AUTH0_CLIENT_ID = "mUe1q5G16VBN1Od6OKsaqUYmHbwIeCGS";

// Where Auth0 should send users back after login
const AUTH0_REDIRECT = window.location.origin + "/academy.html";

const auth0Client = new auth0.WebAuth({
  domain: AUTH0_DOMAIN,
  clientID: AUTH0_CLIENT_ID,
  redirectUri: AUTH0_REDIRECT,
  responseType: "token id_token",
  scope: "openid profile email"
});

function authLogin() {
  auth0Client.authorize();
}

function authHandleRedirect(cb) {
  // Only parse if we have an Auth0 hash in the URL
  if (!window.location.hash || window.location.hash.indexOf("access_token") === -1) {
    cb && cb(false);
    return;
  }

  auth0Client.parseHash((err, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      localStorage.setItem("pap_token", authResult.accessToken);
      localStorage.setItem("pap_user", JSON.stringify(authResult.idTokenPayload || {}));

      // Clean URL (remove #access_token...)
      if (window.history && window.history.replaceState) {
        window.history.replaceState({}, document.title, window.location.pathname);
      }

      cb && cb(true);
    } else {
      if (err) console.error("Auth0 parseHash error:", err);
      cb && cb(false);
    }
  });
}

function authIsLoggedIn() {
  return !!localStorage.getItem("pap_token");
}

function authRequireLogin() {
  if (!authIsLoggedIn()) {
    window.location.href = "login.html";
  }
}

function authLogout() {
  localStorage.removeItem("pap_token");
  localStorage.removeItem("pap_user");

  auth0Client.logout({
    returnTo: window.location.origin + "/",
    clientID: AUTH0_CLIENT_ID
  });
}

function authGetUser() {
  try {
    return JSON.parse(localStorage.getItem("pap_user") || "{}");
  } catch {
    return {};
  }
}
