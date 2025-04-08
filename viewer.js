function animateCounter(element, start, end, duration = 2000) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentValue = Math.floor(progress * (end - start) + start);
        element.textContent = currentValue;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// API'den sayıyı al
fetch('https://counter.fuzem-com.workers.dev/')
    .then(response => response.json())
    .then(data => {
        const counterElement = document.getElementById('viewer-count');
        const startValue = 0;
        const endValue = data.count;
        animateCounter(counterElement, startValue, endValue);
    });
