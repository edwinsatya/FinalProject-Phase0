alert('Please Read menu List Speels firts, Before start playing this game!!!');
alert('Blue = QUAS, Purple = WEX, Yellow = EXORT');
alert('Rule for This Game : just click image 3 times, for example : click QUAS/Blue 3times = ColdSnap, You just have 10 chance for see your score, score di bawah 70 = NOOB!');
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
    var score = 0;
    function getHasil (comp, player, key) {
        if (player === comp){
            if (player === 'emp') {
                const sound = new Audio('sounds/emp.mp3');
                sound.play();
            }
            if (player === 'alacrity') {
                const sound = new Audio('sounds/alacrity.mp3');
                sound.play();
            }
            if (player === 'chaos_meteor') {
                const sound = new Audio('sounds/chaos_meteor.mp3');
                sound.play();
            }
            if (player === 'cold_snap') {
                const sound = new Audio('sounds/cold_snap.mp3');
                sound.play();
            }
            if (player === 'deafening_blast') {
                const sound = new Audio('sounds/deafening_blast.mp3');
                sound.play();
            }
            if (player === 'forge_spirit') {
                const sound = new Audio('sounds/forge_spirit.mp3');
                sound.play();
            }
            if (player === 'ghost_walk') {
                const sound = new Audio('sounds/ghost_walk.mp3');
                sound.play();
            }
            if (player === 'ice_wall') {
                const sound = new Audio('sounds/ice_wall.mp3');
                sound.play();
            }
            if (player === 'sun_strike') {
                const sound = new Audio('sounds/sun_strike.mp3');
                sound.play();
            }
            if (player === 'tornado') {
                const sound = new Audio('sounds/tornado.mp3');
                sound.play();
            };
            score += 10;
            return `Nice Combo! ${key} = ${player}`;
        } else {
            return 'Try Again';
        }
    };
    
    function rollTebakSKill () {
        const imgComputer = document.querySelector('.img-computer');
        const imgSkill = getPilihanComputer();
        const waktuMulai = new Date().getTime();
        let i = 0;
        const kocok = ['cold_snap', 'tornado', 'emp', 'ice_wall', 'ghost_walk'];
        setInterval(function(){
            if (new Date().getTime() - waktuMulai > 1000){
                clearInterval;
                return pilComputer;
            }
            while (i <= kocok.length) {
                imgComputer.setAttribute('src', 'image/speels/'+kocok[i]+'.png');
                i++
            }
            imgComputer.setAttribute('src', 'image/speels/'+imgSkill+'.png');
            pilComputer = imgSkill;
        }, 100)
    };
    
    var pilComputer = rollTebakSKill();
    const pGambarSoal = document.querySelector('.img-computer');
    pGambarSoal.addEventListener('click', function(){
        pGambarSoal.setAttribute('src', 'image/speels/'+pilComputer+'.png');
        
    })
    
    const pilihan = document.querySelectorAll('li img');
    var comboPlayer = ''
    var ronde = 0;
    var status = true;

    pilihan.forEach(function(pil){
         pil.addEventListener('click', function(){
             if (ronde === 10) {
                 if (score < 70) {
                    alert(`score anda ${score}, kamu adalah injoker ${inputNama}`);
                    ronde = 0;
                    score = 0;
                    rollTebakSKill();    
                 } else {
                    alert(`score anda ${score}, kamu adalah pro invoker ${inputNama}`);
                    ronde = 0;
                    score = 0;
                    rollTebakSKill();
                }
             }
            const info = document.querySelector('.info');
            info.innerHTML = '';
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
                ronde++
                const castSound = new Audio('sounds/cast.mp3');
                castSound.play();
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
                rollTebakSKill();
            }
         })
    })   
