let navSection = document.querySelectorAll("nav li");

// for click event
navSection.forEach((v) => {
    v.onclick = () => {
        setTimeout(() => {
            navSection.forEach((j) => j.classList.remove("active"));
            v.classList.add("active");
        }, 300);
    };
});
// for window scrolldown event

window.onscroll = () => {
    let mainSection = document.querySelectorAll("main section");

    mainSection.forEach((c, j) => {
        let rect = c.getBoundingClientRect().y;
        if (rect < window.innerHeight - 550) {
            navSection.forEach((c) => c.classList.remove("active"));
            navSection[j].classList.add("active");
        }
    });
};