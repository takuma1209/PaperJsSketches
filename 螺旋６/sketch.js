// ここにスケッチ名を指定することができる。
let sketchName = '迷彩';

function pickRandom(array) {
    let i = Math.floor(Math.random() * array.length);
    return array[i];
}

let randomRangeX = 40;
let randomRangeY = 20;

function drawCloud(x, y) {
    for (let i = 0; i < 20; i++) {
        let rand_x = Math.random() * randomRangeX - randomRangeX * 1;
        let rand_y = Math.random() * randomRangeY - randomRangeY * 1;
        let sizeX = Math.random() * 10 + 100; 
        let sizeY = Math.random() * 30 + 20;
        let oval = Path.Oval([x + rand_x, y + rand_y], [sizeX, sizeY]);
    }
}

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function() {
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);

    let bg = Path.Rectangle([0, 0], view.viewSize);
    bg.fillColor = null;

    let colors = ["#baa674","#737c42","#796243","#42462b"];

    let randomRange = 100;

    let cloudColor = '#446e26';

    project.currentStyle = {
        strokeColor: null, // 線の色
        fillColor: cloudColor // 塗りの色
    };

    for (let i = 0; i < 100; i++) {
        let x = Math.random() * view.viewSize.width;
        let y = Math.random() * view.viewSize.height;
        project.currentStyle = {
            storokeColor:null,
            fillColor:pickRandom(colors) 
        };
        drawCloud(x, y);
    }


    
    // 画面を描く。
    view.draw();
});