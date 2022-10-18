document.getElementById('biography-collapse').addEventListener('hidden.bs.collapse', () => {
    document.getElementById('biography-arrow').innerHTML = 'keyboard_arrow_down';
});
document.getElementById('characteristics-collapse').addEventListener('hidden.bs.collapse', () => {
    document.getElementById('characteristics-arrow').innerHTML = 'keyboard_arrow_down';
});
document.getElementById('biography-collapse').addEventListener('shown.bs.collapse', () => {
    document.getElementById('biography-arrow').innerHTML = 'keyboard_arrow_up';
});
document.getElementById('characteristics-collapse').addEventListener('shown.bs.collapse', () => {
    document.getElementById('characteristics-arrow').innerHTML = 'keyboard_arrow_up';
});
