function animateCounter(element, start, end, duration = 2000) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentValue = Math.floor(progress * (end - start) + start);
        element.textContent = currentValue;
        
        // Sayı değiştiğinde pulse animasyonu ekle
        if (currentValue > parseInt(element.textContent)) {
            element.classList.add('pulse');
            setTimeout(() => element.classList.remove('pulse'), 1000);
        }
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// API'den sayıyı al ve her 30 saniyede bir güncelle
function updateCounter() {
    fetch('https://counter.fuzem-com.workers.dev/')
        .then(response => response.json())
        .then(data => {
            const counterElement = document.getElementById('viewer-count');
            const startValue = parseInt(counterElement.textContent) || 0;
            const endValue = data.count;
            animateCounter(counterElement, startValue, endValue);
        })
        .catch(error => console.error('Hata:', error));
}

// Sayacı başlat ve her 30 saniyede bir güncelle
updateCounter();
setInterval(updateCounter, 30000);
