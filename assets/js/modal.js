// Modal category
document.getElementById('header-nav__catbtn').onclick = () => {
    document.getElementById('modal__category').style.display = "block";
}

// Modal menu
document.getElementById('header-middle-right__icon--menu').onclick = () => {
    document.getElementById('modal__menu').style.display = "block";
}

// Modal search
document.getElementById('header-middle-right__icon--search').onclick = () => {
    document.getElementById('modal__search').style.display = "block";
}

// Modal cart
document.getElementById('header-middle-right__icon--cart').onclick = () => {
    document.getElementById('modal__cart').style.display = "block";
}

document.querySelectorAll('.modal__clsicon, .modal__overlay').forEach(( e ) => {
    e.onclick = () => {
        document.querySelectorAll('.modal').forEach((e) => {
            e.style.display = "none";
        });
    }
});