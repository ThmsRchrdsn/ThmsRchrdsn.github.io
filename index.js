const pbar = document.getElementById("pbar");

document.addEventListener('scroll', (ev) => {
    const th = document.body.scrollHeight - window.innerHeight;
    const p = (window.scrollY/th) * document.body.clientWidth;

    pbar.style.width = p.toString() + "px";
})

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }