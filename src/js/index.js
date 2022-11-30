


addClassHandler('.menu__icon', '.menu__body', '_active');

function addClassHandler(trigerElem, interactiveElem, className) {

    const triger = document.querySelector(trigerElem);
    const interactive = document.querySelector(interactiveElem);


    triger.addEventListener('click', () => {
        if (triger.classList.contains(className)) {
            triger.classList.remove(className);
            interactive.classList.remove(className);
            document.body.style.overflow = '';
        } else {
            triger.classList.add(className);
            interactive.classList.add(className);
            document.body.style.overflow = 'hidden';
        }
    
    })


}