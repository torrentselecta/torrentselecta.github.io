function menu ( {
    var i, li, lilinks;
    li = document.getElementsByClassName("li");
    for (i = 0; i < li.length; i++) {
        li[i].style.display = "none";
    }
    lilinks = document.getElementsByClassName("lilinks");
    for (i = 0; i < lilinks.length; i++) {
        lilinks[i].className = lilinks[i].className.replace(" active", "");
    }
    document.getElementById(menu).style.display = "block";
    evt.currentTarget.className += " active";
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("navbar");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 5000); // Change image every 3 seconds
}

function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}
