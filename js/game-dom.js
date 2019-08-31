// alert('Please Read menu List Speels, Before start playing this game!!!');
// alert('Blue = QUAS, Purple = WEX, Yellow = EXORT');
// alert('rule for this game : just click image 3 times, for example : click QUAS, QUAS, QUAS. QUAS 3times = ColdSnap');
// //input nama
// var tanya = true;
// while (tanya) {
//     var inputNama = prompt('Inputkan Nama Anda');
//     if (inputNama !== '' && inputNama !== null) {
//         tanya = false;
//     } else {
//         alert('Harap isi Nama Anda Terlebih Dahulu!')
//     }
// }
// if (tanya === false){
//     alert(`Good Luck Have Fun ${inputNama}`);
// }
//isiGame
function getPilihanComputer () {
    const comp = Math.random();
    if (comp <= 0.10) {
        return 'cold_snap';
    }
    if (comp > 0.10 && comp <= 0.20) {
        return 'alacrity';
    }
    if (comp > 0.20 && comp <= 0.30) {
        return 'chaos_meteor';
    }
    if (comp > 0.30 && comp <= 0.40) {
        return 'deafening_blast';
    }
    if (comp > 0.40 && comp <= 0.50) {
        return 'emp';
    }
    if (comp > 0.50 && comp <= 0.60) {
        return 'forge_spirit';
    }
    if (comp > 0.60 && comp <= 0.70) {
        return 'ghost_walk';
    }
    if (comp > 0.70 && comp <= 0.80) {
        return 'ice_wall';
    }
    if (comp > 0.80 && comp <= 0.90) {
        return 'sun_strike';
    }
    return 'tornado';
};

function getHasil (comp, player) {
    if (player === comp){
        return 'Nice Combo';
    } else {
        return 'Try Again';
    }
};

var comboPlayer = ''
//quas
const pQuas = document.querySelector('.quas');
(pQuas.addEventListener('click', function(){
    comboPlayer += 'q';
    if (comboPlayer.length === 3) {
        const pilComputer = getPilihanComputer();
        const pilPlayer = comboPlayer;
        const hasil = getHasil(pilComputer, pilPlayer);
        comboPlayer = '';
        console.log('comp :' + pilComputer);
        console.log('player :' + pilPlayer);
        console.log('hasil :' + hasil);
    }
}))
//wex
const pWex = document.querySelector('.wex');
(pWex.addEventListener('click', function(){
    comboPlayer += 'w';
    if (comboPlayer.length === 3) {
        const pilComputer = getPilihanComputer();
        const pilPlayer = comboPlayer;
        const hasil = getHasil(pilComputer, pilPlayer);
        comboPlayer = '';
        console.log('comp :' + pilComputer);
        console.log('player :' + pilPlayer);
        console.log('hasil :' + hasil);
    }
}))
//exort
const pExort = document.querySelector('.exort');
(pExort.addEventListener('click', function(){
    comboPlayer += 'e';
    if (comboPlayer.length === 3) {
        const pilComputer = getPilihanComputer();
        const pilPlayer = comboPlayer;
        const hasil = getHasil(pilComputer, pilPlayer);
        comboPlayer = '';
        console.log('comp :' + pilComputer);
        console.log('player :' + pilPlayer);
        console.log('hasil :' + hasil);
    }
}))

        
