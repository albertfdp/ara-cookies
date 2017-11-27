const removeCookie = cookie => {
  chrome.cookies.remove({
    name: cookie.name,
    url: 'https://www.ara.cat'
  });
};

// Esborra les cookies quan es clicka l'icona
chrome.browserAction.onClicked.addListener(tab => {
  chrome.cookies.getAll({}, cookies => {
    cookies.forEach(cookie => removeCookie(cookie));
  });
});

// Esborra totes les cookies a mesura que vagin creant-se
chrome.cookies.onChanged.addListener(info => {
  !info.removed && removeCookie(info.cookie);
});
