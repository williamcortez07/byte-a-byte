function redirect(url) {
  window.open(url, "_blank");
}

// Auto-redirect opcional después de 10 segundos
setTimeout(() => {
  if (!window.location.href.includes("youtube.com")) {
    window.location.href = "https://www.youtube.com/@byteabyte-k6y";
  }
}, 10000);
