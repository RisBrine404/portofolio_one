function toggleBackgroundColor() {
    const body = document.body;
    if (body.style.backgroundColor === 'white') {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }
}
