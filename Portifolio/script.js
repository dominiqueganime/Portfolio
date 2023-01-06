
function openMenu() {

    let showMenu = document.getElementById('menu-nav')
    if (showMenu.style.width == "0px") {
        showMenu.style.width = "180px";
    } else {
        showMenu.style.width = "0px";
    }

}