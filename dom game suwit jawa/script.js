function getPilihanKomputer() {
    let comp = Math.random();
    if (comp < 0.34) return "gajah";
    if (comp >= 0.34 && comp < 0.67) return "orang";
    return "semut";
}

function getHasil(comp, player) {
    if( player == comp ) return hasil = 'SERI!'; 
    if( player == 'gajah' ) return hasil = ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return hasil = ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return hasil = ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
}

function putar() {
    document.querySelector(".info").innerHTML = "Loading...";
    const imgKomputer = document.querySelector(".img-komputer");
    const gambar = ["gajah", "semut", "orang"];
    let count = 0;
    const start = new Date().getTime();

    setInterval(function () {
        if (new Date().getTime() - start > 1000) {
            clearInterval;
            return;
        }

        imgKomputer.setAttribute("src", "gambar/img/" + gambar[count++] + ".png");

        if(count == gambar.length){
            count = 0;
        }
    }, 100)
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (i) {
    i.addEventListener("click", function () {
        const pilihanKomputer = getPilihanKomputer();
        const pilihanPlayer = i.className;
        const hasil = getHasil(pilihanKomputer, pilihanPlayer)
        // console.info(getHasil(getPilihanKomputer(), pGajah.className));

        putar();

        setTimeout(function () {
            const imgComputer = document.querySelector(".img-komputer");
            imgComputer.setAttribute("src","gambar/img/" + pilihanKomputer + ".png");
    
            const info = document.querySelector(".info");
            info.innerHTML = hasil;  
        }, 1000);

    })
});

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//     const PilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(PilihanKomputer, pilihanPlayer)
//     // console.info(getHasil(getPilihanKomputer(), pGajah.className));

//     const imgComputer = document.querySelector(".img-komputer");
//     imgComputer.setAttribute("src","gambar/img/" + PilihanKomputer + ".png");

//     const info = document.querySelector(".info");
//     info.innerHTML = hasil;
// });
// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//     const PilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(PilihanKomputer, pilihanPlayer)
//     // console.info(getHasil(getPilihanKomputer(), pOrang.className));

//     const imgComputer = document.querySelector(".img-komputer");
//     imgComputer.setAttribute("src","gambar/img/" + PilihanKomputer + ".png");

//     const info = document.querySelector(".info");
//     info.innerHTML = hasil;
// });
// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//     const PilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(PilihanKomputer, pilihanPlayer)
//     // console.info(getHasil(getPilihanKomputer(), pSemut.className));

//     const imgComputer = document.querySelector(".img-komputer");
//     imgComputer.setAttribute("src","gambar/img/" + PilihanKomputer + ".png");

//     const info = document.querySelector(".info");
//     info.innerHTML = hasil;
// });