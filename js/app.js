const inputs = document.querySelectorAll('input');
const textarea = document.querySelector('textarea');
const header = document.querySelector('header');

textarea.addEventListener('click', function() {
    this.classList.add('focus-textarea');
    this.nextElementSibling.classList.add('focus-label');
});

inputs.forEach(input => {
    input.addEventListener('click', function() {
        this.classList.add('focus-input');
        this.nextElementSibling.classList.add('focus-label');
    });
});


