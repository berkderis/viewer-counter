(async function() {
  try {
    // Mevcut sayfanın yolunu alıyoruz
    const currentPath = window.location.pathname;
    
    const res = await fetch(`https://viewer-counter.fuzem.workers.dev${currentPath}`, {
      mode: "cors"
    });
    const data = await res.json();
    const el = document.getElementById("viewer-count");
    if (el && data.count) {
      el.textContent = new Intl.NumberFormat('tr-TR').format(data.count);
    }
  } catch (e) {
    console.error("Sayaç alınamadı", e);
  }
})();
