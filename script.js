let button_return_top = document.querySelector('a.button-return-top');

window.addEventListener('scroll', function () {
    if (this.scrollY >= 300) {
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


let images_box = document.querySelectorAll('.image-box');


images_box.forEach(function(image_box){
    var scale = 1;
    image_box.addEventListener('click', function(e) {
        const img = image_box.querySelector('img');
        const rect = image_box.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / image_box.offsetWidth) * 100;
        const y = ((e.clientY - rect.top) / image_box.offsetHeight) * 100;
        
        if (scale >= 2){
            scale = 1;
        } else if (scale < 2){
            scale = 3;
        }

        console.log(scale);
        img.style.transformOrigin = `${x}% ${y}%`;
        img.style.transform = `scale(${scale})`;
    })
})

// images_box.forEach(function(image_box){
//     image_box.addEventListener('mousemove', function(e) {
//         const img = image_box.querySelector('img');
//         const rect = image_box.getBoundingClientRect();
//         const x = ((e.clientX - rect.left) / image_box.offsetWidth) * 100;
//         const y = ((e.clientY - rect.top) / image_box.offsetHeight) * 100;
    
//         img.style.transformOrigin = `${x}% ${y}%`;
//         img.style.transform = 'scale(2)';
//       });
    
//       image_box.addEventListener('mouseleave', function() {
//         const img = image_box.querySelector('img');
//         img.style.transformOrigin = 'center';
//         img.style.transform = 'scale(1)';
//       });
// })