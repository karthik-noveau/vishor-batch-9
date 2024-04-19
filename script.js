const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;

toggleBtn.addEventListener('click',() =>{
    body.classList.toggle('dark-mode');
});
