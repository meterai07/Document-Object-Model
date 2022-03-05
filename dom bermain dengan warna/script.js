const ubahWarna = document.getElementById("tombolUbahWarna");
// ketika di click warna berubah menjadi lightblue
ubahWarna.onclick = function () {
    // document.body.style.backgroundColor = "lightblue";
    // document.body.setAttribute("class","biru-muda");

    document.body.classList.toggle("biru-muda");
};
// membuat tombol baru
const randomWarna = document.createElement("button");
const teksTombol = document.createTextNode("Acak Warna");
randomWarna.appendChild(teksTombol);
randomWarna.setAttribute("type", "button");
ubahWarna.after(randomWarna);

randomWarna.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")";
});
// membuat rgb slider
const slideMerah = document.querySelector("input[name = slideMerah]");
const slideHijau = document.querySelector("input[name = slideHijau]");
const slideBiru = document.querySelector("input[name = slideBiru]");
slideMerah.addEventListener("input", function () {
    const r = slideMerah.value;
    const g = slideHijau.value;
    const b = slideBiru.value;

    document.body.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")";
});
slideHijau.addEventListener("input", function () {
    const r = slideMerah.value;
    const g = slideHijau.value;
    const b = slideBiru.value;

    document.body.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")";
});
slideBiru.addEventListener("input", function () {
    const r = slideMerah.value;
    const g = slideHijau.value;
    const b = slideBiru.value;

    document.body.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")";
});

document.body.addEventListener("mousemove", function (event) {
    // posisi mouse
    const xPose = Math.round((event.clientX / window.innerWidth) * 255);
    const yPose = Math.round((event.clientY / window.innerHeight) * 255);

    document.body.style.backgroundColor = "rgb("+ xPose +","+ yPose +",100)";

});