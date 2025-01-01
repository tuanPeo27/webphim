function displayItems() {
    const items = JSON.parse(localStorage.getItem('phim')) || []; 
    const container = document.getElementById('item-container');
    container.innerHTML = '';
    items.forEach(item => {
        const itemHTML = `
            <div class="item">
                <img src="${item.image}" alt="${item.name}">
                <p>${item.name}</p>
            </div>
        `;
        container.innerHTML += itemHTML; 
    });
}
displayItems();
