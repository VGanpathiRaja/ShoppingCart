
const radioButtons = document.querySelectorAll('.select-radio input[type="radio"]');
radioButtons.forEach(radio => {
    radio.addEventListener('change', function() {
        radioButtons.forEach(rb => rb.closest('.select-radio').classList.remove('active'));
        this.closest('.select-radio').classList.add('active');
    });
});