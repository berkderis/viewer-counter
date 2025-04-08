fetch('https://counter.fuzem-com.workers.dev/')
  .then(response => response.json())
  .then(data => {
    console.log("API response:", data); // API yanıtını konsola yazdır
    
    const visitorElement = document.getElementById('viewer-counter');
    console.log("Element found:", visitorElement); // Element var mı kontrol et
    
    if (visitorElement) {
      visitorElement.textContent = data.active_visitors;
      console.log("Element updated with:", data.active_visitors);
    } else {
      console.error("Element with ID 'active-visitors' not found!");
    }
  })
  .catch(error => {
    console.error("Error fetching visitor data:", error);
  });
