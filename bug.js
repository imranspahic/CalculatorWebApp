var dekstop_menu = document.getElementById('header_icon');
dekstop_menu.addEventListener('click', function(){
dekstopmenu();

})

function dekstopmenu() {
document.getElementById("dekstop_menu").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('#header_icon')) {
    var dropdowns = document.getElementsByClassName("dekstop_menu-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
