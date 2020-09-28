let navSection = document.querySelectorAll("nav li");

// for click event
navSection.forEach((c) => {
    c.onclick = () => {
        setTimeout(() => {
            menuSection.forEach((j) => j.classList.remove("active"));
            c.classList.add("active");
        }, 300);
    };
});
// for window scrolldown event

window.onscroll = () => {
    let navSection = document.querySelectorAll("nav section");

    navSection.forEach((c, j) => {
        let rect = c.getBoundingClientRect().x;
        if (rect < window.innerHeight - 200) {
            navSection.forEach((c) => c.classList.remove("active"));
            navSection[j].classList.add("active");
        }
    });
};