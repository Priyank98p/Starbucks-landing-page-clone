const hamburger = document.getElementById("hamburger");
const hamburgerIcon = document.getElementById("hamburgerIcon");
const mobileDrawer = document.getElementById("mobileDrawer");
const closeDrawer = document.getElementById("closeDrawer");

let drawerOpen = false;

// Open drawer and change icon
hamburger.addEventListener("click", () => {
    drawerOpen = !drawerOpen;

    if (drawerOpen) {
        mobileDrawer.classList.add("active");
        hamburgerIcon.src = "img/close.svg";
    } else {
        mobileDrawer.classList.remove("active");
        hamburgerIcon.src = "img/hamburger.svg";
    }
});



// Close drawer if clicking outside
window.addEventListener("click", (e) => {
    if (!mobileDrawer.contains(e.target) && !hamburger.contains(e.target)) {
        mobileDrawer.classList.remove("active");
        hamburgerIcon.src = "img/hamburger.svg";
        drawerOpen = false;
    }
});
