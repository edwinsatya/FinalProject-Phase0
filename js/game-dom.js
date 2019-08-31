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

function getHasil (comp, player, key) {
    if (player === comp){
        return `Nice Combo! ${key} = ${comp}`;
    } else {
        return 'Try Again';
    }
};

const pilComputer = getPilihanComputer();
const pGambarSoal = document.querySelector('.img-computer');
pGambarSoal.addEventListener('click', function(){
    pGambarSoal.setAttribute('src', '/image/speels/'+pilComputer+'.png');
    
})

const pilihan = document.querySelectorAll('li img');
var comboPlayer = ''
pilihan.forEach(function(pil){
     pil.addEventListener('click', function(){
        const pilPlayer = pil.className;
        if (pilPlayer === 'quas') {
            comboPlayer += 'q';
        }
        if (pilPlayer === 'wex') {
            comboPlayer += 'w';
        }
        if (pilPlayer === 'exort') {
            comboPlayer += 'e';
        }
        if (comboPlayer.length === 3) {
            var resultComboPlayer = comboPlayer;
            var speelNow;
            if (resultComboPlayer === 'qqq') {
                speelNow = 'cold_snap';
            } 
            if (resultComboPlayer === 'www') {
                speelNow = 'emp';
            }
            if (resultComboPlayer === 'eee') {
                speelNow = 'sun_strike';
            }
            if (resultComboPlayer === 'wwe' || resultComboPlayer === 'wew' || resultComboPlayer === 'eww') {
                speelNow = 'alacrity';
            }
            if (resultComboPlayer === 'eew' || resultComboPlayer === 'ewe' || resultComboPlayer === 'wee') {
                speelNow = 'chaos_meteor';
            }
            if (resultComboPlayer === 'qwe' || resultComboPlayer === 'qew' || resultComboPlayer === 'wqe' || resultComboPlayer === 'weq' || resultComboPlayer === 'ewq' || resultComboPlayer === 'eqw') {
                speelNow = 'deafening_blast';
            }
            if (resultComboPlayer === 'eeq' || resultComboPlayer === 'eqe' || resultComboPlayer === 'qee') {
                speelNow = 'forge_spirit';
            }
            if (resultComboPlayer === 'qqw' || resultComboPlayer === 'qwq' || resultComboPlayer === 'wqq') {
                speelNow = 'ghost_walk';
            }
            if (resultComboPlayer === 'qqe' || resultComboPlayer === 'qeq' || resultComboPlayer === 'eqq') {
                speelNow = 'ice_wall';
            }
            if (resultComboPlayer === 'wwq' || resultComboPlayer === 'wqw' || resultComboPlayer === 'qww') {
                speelNow = 'tornado';
            }
            const hasil = getHasil(pilComputer, speelNow, resultComboPlayer);
            console.log('comp :' + pilComputer);
            console.log('player :' + resultComboPlayer + ' ' + speelNow);
            console.log('hasil :' + hasil);
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
            comboPlayer = '';
        }
     })
})

// var comboPlayer = ''
// //quas
// const pQuas = document.querySelector('.quas');
// (pQuas.addEventListener('click', function(){
//     comboPlayer += 'q';
//     if (comboPlayer.length === 3) {
//         const pilComputer = getPilihanComputer();
//         const pilPlayer = comboPlayer;
//         const hasil = getHasil(pilComputer, pilPlayer);
//         comboPlayer = '';
//         console.log('comp :' + pilComputer);
//         console.log('player :' + pilPlayer);
//         console.log('hasil :' + hasil);
//     }
// }))
// //wex
// const pWex = document.querySelector('.wex');
// (pWex.addEventListener('click', function(){
//     comboPlayer += 'w';
//     if (comboPlayer.length === 3) {
//         const pilComputer = getPilihanComputer();
//         const pilPlayer = comboPlayer;
//         const hasil = getHasil(pilComputer, pilPlayer);
//         comboPlayer = '';
//         console.log('comp :' + pilComputer);
//         console.log('player :' + pilPlayer);
//         console.log('hasil :' + hasil);
//     }
// }))
// //exort
// const pExort = document.querySelector('.exort');
// (pExort.addEventListener('click', function(){
//     comboPlayer += 'e';
//     if (comboPlayer.length === 3) {
//         const pilComputer = getPilihanComputer();
//         const pilPlayer = comboPlayer;
//         const hasil = getHasil(pilComputer, pilPlayer);
//         comboPlayer = '';
//         console.log('comp :' + pilComputer);
//         console.log('player :' + pilPlayer);
//         console.log('hasil :' + hasil);
//     }
// }))

        
