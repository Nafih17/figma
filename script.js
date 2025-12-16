const modal = document.getElementById('alertModal');
const alertBtns = document.querySelectorAll('.alert-btn');
const closeBtn = document.querySelector('.close-modal');
const cancelBtn = document.getElementById('cancelBtn');
const saveBtn = document.getElementById('saveBtn');
const minusBtn = document.getElementById('minusBtn');
const plusBtn = document.getElementById('plusBtn');
const counterInput = document.getElementById('counterValue');
const highlightOrange = document.querySelector('.highlight-orange');

alertBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

function closeModal() {
    modal.style.display = 'none';
}

closeBtn.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);
saveBtn.addEventListener('click', closeModal);

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

minusBtn.addEventListener('click', () => {
    let value = parseInt(counterInput.value);
    if (value > 1) {
        value--;
        counterInput.value = value;
        highlightOrange.textContent = value.toString().padStart(2, '0');
    }
});

plusBtn.addEventListener('click', () => {
    let value = parseInt(counterInput.value);
    value++;
    counterInput.value = value;
    highlightOrange.textContent = value.toString().padStart(2, '0');
});
