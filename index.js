const pbar = document.getElementById("pbar");

document.addEventListener('scroll', (ev) => {
    const th = document.body.scrollHeight - window.innerHeight;
    const p = (window.scrollY/th) * document.body.clientWidth;

    pbar.style.width = p.toString() + "px";
})