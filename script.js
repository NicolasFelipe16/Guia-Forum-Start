let button_return_top = document.querySelector('a.button-return-top');

window.addEventListener('scroll', function () {
    if (this.scrollY >= 600) {
        button_return_top.style.opacity = 1;
        button_return_top.style.pointerEvents = 'all';
    } else {
        button_return_top.style.opacity = 0;
        button_return_top.style.pointerEvents = 'none';
    }
});

let main__section_dropdown_list_items = document.querySelectorAll('.main__section-dropdown-list-item');

main__section_dropdown_list_items.forEach(function (item){
    item.addEventListener('click', function(){
        item.classList.toggle('open');
        item.classList.toggle('close');
    }
)})