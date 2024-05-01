var main = document.querySelector(".main");
var cursor = document.querySelector(".cursor");
var image = document.querySelector(".image");

main.addEventListener("mousemove", (event) => {
    gsap.to(".cursor", {
        x: event.x,
        y: event.y,
        scale :2,
        backgroundColor: "#ffffff5c"
    });
});

image.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
        scale: 5,
        backgroundColor: "transparent" 
    });
});

image.addEventListener("mouseleave", () => {
    cursor.innerHTML = ""; 
    gsap.to(cursor, {
        scale: 1,
    });
});
