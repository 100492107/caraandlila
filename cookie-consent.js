(function () {
  var key = "cara_lila_essential_notice_seen_v1";
  try {
    if (window.localStorage.getItem(key) === "1") return;
  } catch (e) {}

  var banner = document.createElement("aside");
  banner.id = "cookie-notice";
  banner.setAttribute("role", "dialog");
  banner.setAttribute("aria-label", "Privacy and cookie notice");
  banner.innerHTML =
    '<div class="cookie-notice-copy">' +
      '<strong>Privacy note</strong>' +
      '<span>This site currently uses only necessary browser storage to remember that you have dismissed this notice. We do not currently use analytics or advertising cookies.</span>' +
    '</div>' +
    '<div class="cookie-notice-actions">' +
      '<a href="/cookies">Learn more</a>' +
      '<button type="button" id="cookie-notice-dismiss">Got it</button>' +
    '</div>';

  document.body.appendChild(banner);

  document.getElementById("cookie-notice-dismiss").addEventListener("click", function () {
    try {
      window.localStorage.setItem(key, "1");
    } catch (e) {}
    banner.remove();
  });
})();