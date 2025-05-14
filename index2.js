let mapel;

document.getElementById("mySubmit").onclick = function(){
    mapel = document.getElementById("myText").value;
    console.log(mapel);
     document.getElementById("myH2").textContent = `Semoga kamu dapat nilai yang bagus ya, di mapel ${mapel}!!`
}