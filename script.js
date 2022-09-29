document.querySelectorAll('.nav-menu a').forEach((link) =>{
    link.addEventListener('mouseover', (e) => {
        e.target.style = 'background-color: var(--highlight); border-left-color: var(--highlight)';
        e.target.previousElementSibling.style = 'background-color: var(--highlight)';
    });
    link.addEventListener('mouseout', (e) => {
        e.target.style = 'background-color: none';
        e.target.previousElementSibling.style = 'background-color: none';
    });
});

document.querySelectorAll('.toggable').forEach((elem) => {
    elem.addEventListener('mouseover', (e) => {
        console.log("wassup");
        e.target.classList.add('toggle');
    });
    elem.addEventListener('mouseout', (e) => {
        e.target.classList.remove('toggle');
    });
});