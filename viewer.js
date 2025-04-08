
// API URL'inizi ayarlayın
const apiUrl = 'https://counter.fuzem-com.workers.dev/';

// API'den verileri al
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('API yanıtı başarısız: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log("API yanıtı:", data); // Kontrol amaçlı
    
    // DOM elemanına erişim
    const counterElement = document.getElementById('viewer-count');
    
    // Element varsa değeri güncelle
    if (counterElement) {
      counterElement.textContent = data.active_visitors;
      console.log("Sayaç güncellendi:", data.active_visitors);
    } else {
      console.error("'viewer-count' ID'li eleman bulunamadı!");
    }
  })
  .catch(error => {
    console.error("Hata:", error);
  });
