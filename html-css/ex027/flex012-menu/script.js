const navBar = document.querySelector('nav')

function clickMenu() {
    if(navBar.style.display == 'none') {
        navBar.style.display = 'flex'
    }else{
        navBar.style.display = 'none'
    }
}

function resizeFix() {
    if (window.innerWidth >= 768) {
        navBar.style.display = "flex"
    }else{
        navBar.style.display = "none"
  }
}