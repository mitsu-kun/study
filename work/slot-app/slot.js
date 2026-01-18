const symbols = ['🍎', '🍊', '🍋', '🍒', '🍓', '🍉'];
let isSpinning = false;

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function spin() {
    if (isSpinning) return;
    
    isSpinning = true;
    const spinButton = document.querySelector('.spin-button');
    spinButton.disabled = true;
    
    const reels = document.querySelectorAll('.reel');
    const resultDiv = document.querySelector('.result');
    resultDiv.textContent = '';
    resultDiv.classList.remove('win-text');
    
    // リールをスピン
    reels.forEach(reel => {
        reel.classList.remove('win');
        reel.classList.add('spinning');
    });
    
    // ランダムな回転回数
    const spinDurations = [800, 1000, 1200];
    const finalSymbols = [];
    
    reels.forEach((reel, index) => {
        setTimeout(() => {
            // ランダムな結果を決める
            const finalSymbol = getRandomSymbol();
            finalSymbols.push(finalSymbol);
            
            // スピンを止める
            reel.classList.remove('spinning');
            reel.textContent = finalSymbol;
            
            // 全てのリールが止まったかチェック
            if (finalSymbols.length === 3) {
                checkWin(finalSymbols, reels, resultDiv, spinButton);
            }
        }, spinDurations[index]);
    });
}

function checkWin(symbols, reels, resultDiv, spinButton) {
    if (symbols[0] === symbols[1] && symbols[1] === symbols[2]) {
        // WIN!
        resultDiv.textContent = '🎉 大当たり！！！ 🎉';
        resultDiv.classList.add('win-text');
        
        reels.forEach(reel => {
            reel.classList.add('win');
        });
        
        // 効果音的な処理（必要に応じて）
        playWinAnimation();
    } else {
        resultDiv.textContent = 'ハズレ... もう一度！';
        resultDiv.classList.remove('win-text');
    }
    
    isSpinning = false;
    spinButton.disabled = false;
}

function playWinAnimation() {
    const reels = document.querySelectorAll('.reel');
    reels.forEach((reel, index) => {
        setTimeout(() => {
            reel.style.transform = 'scale(1.2)';
            setTimeout(() => {
                reel.style.transform = 'scale(1)';
            }, 100);
        }, index * 150);
    });
}

// スピンボタンのイベントリスナー
document.addEventListener('DOMContentLoaded', () => {
    const spinButton = document.querySelector('.spin-button');
    spinButton.addEventListener('click', spin);
    
    // Enterキーでもスピン
    document.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            spin();
        }
    });
});
