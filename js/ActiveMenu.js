document.addEventListener('DOMContentLoaded', function() {
    const Menu = document.querySelectorAll('.allmenuitem');
    console.log(Menu);
    const AllMenuItems = document.querySelectorAll('.menuItem');
    console.log(AllMenuItems);
    const Indicator = document.querySelectorAll('.indicator');
    console.log(Indicator);
    let idxActive = 0;
    const transition = 200;

    Indicator[0].style.left = AllMenuItems[0].offsetLeft + 'px';
    Indicator[0].style.width = AllMenuItems[0].offsetWidth + 'px';

    AllMenuItems.forEach((item, idx) => {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            setTimeout(() => {
                window.location.href = item.getAttribute('href');
            });
            // Retirer la classe 'active' de tous les éléments
            AllMenuItems.forEach(menuItem => menuItem.classList.remove('active'));

            // Forcer un reflow pour enlever le hover
            void item.offsetHeight;

            // Ajouter la classe 'active' à l'élément cliqué
            item.classList.add('active');

            // Déplacer l'indicateur
            Indicator[0].style.transition = `left ${transition}ms, width ${transition}ms`;
            Indicator[0].style.width = item.offsetWidth + 'px';
            Indicator[0].style.left = item.offsetLeft + 'px';

            idxActive = idx;

            // Rediriger vers le href de l'élément cliqué après la transition
            
        });
    });
});




