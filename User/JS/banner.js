function displayAd() {
    const ads = JSON.parse(localStorage.getItem('quangcao')) || []; 
    const container = document.getElementById('banner-container');
    container.innerHTML = '';
    ads.forEach(ad => {
        const adHTML = `
            <div class="banner-slide">
                <img src="${ad.image}" alt="${ad.id}">
            </div>
        `;
        container.innerHTML += adHTML; 
    });
}
displayAd();
let currentBanner = 0;
const banner = document.querySelectorAll('.banner-slide');

function showBanner(index) {
    banner.forEach((banner, i) => {
        banner.style.display = i === index ? 'flex' : 'none';
    });
}

function goToBanner(index) {
    currentBanner = index;
    showBanner(currentBanner);
}

function autoSlide() {
    currentBanner = (currentBanner + 1) % banner.length;
    showBanner(currentBanner);
}

setInterval(autoSlide, 3000);

showBanner(currentBanner);