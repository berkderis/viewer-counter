(async function() {
  try {
    const res = await fetch("https://counter.fuzem-com.workers.dev/", {
      mode: "cors"
    });
    const data = await res.json();
    const el = document.getElementById("viewer-count");
    if (el && data.count) el.textContent = data.count;
  } catch (e) {
    console.error("Sayaç alınamadı", e);
  }
})();
