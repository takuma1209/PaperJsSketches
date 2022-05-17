// ここにスケッチ名を指定することができる。
let sketchName = 'My Sketch';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function(){
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);

    project.currentStyle = {
        strokeColor: '#FFFFFF', // 線の色
        fillColor: '#000000', // 塗りの色
        strokeWidth: 2 // 線の幅
    };

    let x = view.viewSize.width * 0.5;
    let y = view.viewSize.height * 0.5;

    let count =400;
    let length = 25;
    let angle = 95; 
    let theta = 0;

    for (let i = 0; i < count; i++) {
        let p = Path.Circle([x + length, y], 50);
        p.rotate(theta, [x, y]);
        theta += angle;
        length += 1;
    }


    // 画面を描く。
    view.draw();
});