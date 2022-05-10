// ここにスケッチ名を指定することができる。
let sketchName = 'ランダム雲';

function pickRandom(array){
    let i = Math.floor(Math.random() * array/length);
    return array[i];
}

let randomRangeX = 30;
let ramdomRangeY = 20;

function drawCloud(x,y){
     for (let i = 0; i < 10; i++){
         let rand_x = Math.random() * randomRangeX - randomRangeX * 0.5;
         let rand_y = Math.random() * randomRAngeY - randomRangeY * 0.5;
         let sizeX = Math.random() * 20 + 20;
         let sizeY = Math.random() * 10 + 10;
         Path.Oval([x + rand_x, y + rand_y],[sizeX, sizeY]);
     }
}



window.addEventListener('load', function(){
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);

    let bg = Path.Rectangle([0,0],view.viewSize);
    
    let x = view.viewSize.width * 0.25;
    let y = view.viewSize.height * 0.3;
    let rectSize = [200, 300];

    // 長方形を追加する。
    let rect = new Path.Rectangle([x, y], rectSize);
    rect.strokeColor = 'black';

    // 画面を描く。
    view.draw();
});