

// GitHub'daki kodunuza şu değişiklikleri ekleyin
fetch('https://counter.fuzem-com.workers.dev/')
  .then(response => response.json())
  .then(data => {
    console.log("API yanıtı alındı:", data); // API yanıtını görelim
    
    // aktif ziyaretçi sayısını göster
    const viewerCount = document.getElementById('viewer-count');
    if (viewerCount) {
      console.log("Eleman bulundu, değer güncelleniyor:", data.active_visitors);
      viewerCount.textContent = data.active_visitors;
    } else {
      console.error("viewer-count elemanı bulunamadı!");
    }
  })
  .catch(error => {
    console.error("API hatası:", error);
  });
