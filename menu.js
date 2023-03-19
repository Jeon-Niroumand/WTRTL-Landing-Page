function toggle() {
   menu = document.getElementById("menu")
   hamburger = document.getElementById("hamburger")
   done = document.getElementById("done")
   if(menu.style.display == 'block') {
    menu.style.display = 'none';
    done.style.display = 'none';
    hamburger.style.display = 'block';
    }
    else {
        menu.style.display = 'block';
        hamburger.style.display = 'none';
        done.style.display = 'block'
    }
}
