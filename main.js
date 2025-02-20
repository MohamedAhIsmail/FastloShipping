let up = document.querySelector(".up");
window.onscroll = function () {
    // console.log(this.scrollY);
    if (this.scrollY >= 400) {
        up.classList.add("show");
    } else {
        up.classList.remove("show");
    }
};
up.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    }) 
};
