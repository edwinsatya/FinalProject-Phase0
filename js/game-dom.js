alert('Please Read menu List Speels, Before start playing this game!!!');
alert('Blue = QUAS, Red = WEX, Yellow = EXORT');
alert('rule for this game : just click image 3 times, for example : click QUAS, QUAS, QUAS. QUAS 3times = ColdSnap');
//input nama
var tanya = true;
while (tanya) {
    var inputNama = prompt('Inputkan Nama Anda');
    if (inputNama !== '' && inputNama !== null) {
        tanya = false;
    } else {
        alert('Harap isi Nama Anda Terlebih Dahulu!')
    }
}
if (tanya === false){
    alert(`Good Luck Have Fun ${inputNama}`);
}
//