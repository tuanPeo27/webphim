function phongto() {
    document.querySelector('.sidebar').classList.toggle('active');
    document.querySelector('#main-content').classList.toggle('active');

    const bar = document.getElementById('bars');

    if (bar.innerHTML.trim() === '<i class="fa-solid fa-xmark"></i>') {
        bar.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
        bar.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
}
function showSection(visibleSection) {
    const sections = ['nguoidung', 'phim', 'quangcao', 'thongke'];
    sections.forEach(section => {
        document.querySelector(`.${section}`).classList.toggle('hidden', section !== visibleSection);
    });
}
function hienuser() {
    document.querySelector('.u').classList.add('selected');
    document.querySelector('.i').classList.remove('selected');
    document.querySelector('.q').classList.remove('selected');
    document.querySelector('.t').classList.remove('selected');
    showSection('nguoidung');
}

function hienphim() {
    document.querySelector('.i').classList.add('selected');
    document.querySelector('.u').classList.remove('selected');
    document.querySelector('.q').classList.remove('selected');
    document.querySelector('.t').classList.remove('selected');
    showSection('phim');
}

function hienquangcao() {
    document.querySelector('.q').classList.add('selected');
    document.querySelector('.i').classList.remove('selected');
    document.querySelector('.u').classList.remove('selected');
    document.querySelector('.t').classList.remove('selected');
    showSection('quangcao');
}

function hienthongke() {
    document.querySelector('.t').classList.add('selected');
    document.querySelector('.i').classList.remove('selected');
    document.querySelector('.q').classList.remove('selected');
    document.querySelector('.u').classList.remove('selected');
    showSection('thongke');
}