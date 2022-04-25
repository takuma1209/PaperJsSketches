// ここにスケッチ名を指定することができる。
let sketchName = '青ベースチェック';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.onload = function() {
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);

    project.currentStyle = {
        strokeColor:'#8783d4', // 線の色
        fillColor:'#8783d4' , // 塗りの色
        strokeWidth: 1 // 線の幅
    };

     Path.Rectangle([0,0],[500,500]);

     
     project.currentStyle = {
        strokeColor:'#c7eeff', // 線の色
        fillColor:'#c7eeff' , // 塗りの色
        strokeWidth: 2 // 線の幅
    };
     Path.Line([0,20],[500,20]);
     Path.Line([0,30],[500,30]);
     Path.Line([0,70],[500,70]);
     Path.Line([0,80],[500,80]);
     Path.Line([0,120],[500,120]);
     Path.Line([0,130],[500,130]);
     Path.Line([0,170],[500,170]);
     Path.Line([0,180],[500,180]);
     Path.Line([0,220],[500,220]);
     Path.Line([0,230],[500,230]);
     Path.Line([0,270],[500,270]);
     Path.Line([0,280],[500,280]);
     Path.Line([0,320],[500,320]);
     Path.Line([0,330],[500,330]);
     Path.Line([0,370],[500,370]);
     Path.Line([0,380],[500,380]);
     Path.Line([0,420],[500,420]);
     Path.Line([0,430],[500,430]);
     Path.Line([0,470],[500,470]);
     Path.Line([0,480],[500,480]);
     Path.Line([20,0],[20,500]);
     Path.Line([30,0],[30,500]);
     Path.Line([70,0],[70,500]);
     Path.Line([80,0],[80,500]);
     Path.Line([120,0],[120,500]);
     Path.Line([130,0],[130,500]);
     Path.Line([170,0],[170,500]);
     Path.Line([180,0],[180,500]);
     Path.Line([220,0],[220,500]);
     Path.Line([230,0],[230,500]);
     Path.Line([270,0],[270,500]);
     Path.Line([280,0],[280,500]);
     Path.Line([320,0],[320,500]);
     Path.Line([330,0],[330,500]);
     Path.Line([370,0],[370,500]);
     Path.Line([380,0],[380,500]);
     Path.Line([420,0],[420,500]);
     Path.Line([430,0],[430,500]);
     Path.Line([470,0],[470,500]);
     Path.Line([480,0],[480,500]);


     project.currentStyle = {
        strokeColor:'#e0d19d', // 線の色
        fillColor:'#e0d19d' , // 塗りの色
        strokeWidth: 5 // 線の幅
    };

     Path.Line([0,50],[500,50]);
     Path.Line([0,100],[500,100]);
     Path.Line([0,150],[500,150]);
     Path.Line([0,200],[500,200]);
     Path.Line([0,250],[500,250]);
     Path.Line([0,300],[500,300]);
     Path.Line([0,350],[500,350]);
     Path.Line([0,400],[500,400]);
     Path.Line([0,450],[500,450]);
     Path.Line([50,0],[50,500]);
     Path.Line([100,0],[100,500]);
     Path.Line([150,0],[150,500]);
     Path.Line([200,0],[200,500]);
     Path.Line([250,0],[250,500]);
     Path.Line([300,0],[300,500]);
     Path.Line([350,0],[350,500]);
     Path.Line([400,0],[400,500]);
     Path.Line([450,0],[450,500]);

    // 画面を描く。
    view.draw();
};