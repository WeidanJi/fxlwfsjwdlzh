
document.write("<script language=javascript src='Canvas2Image.js'></script>");
var videoElem;
var videoDiv;
function createvideo() {
    videoElem = document.createElement("video");
    videoElem.width = 640;
    videoElem.height = 480;
    videoDiv = document.getElementById("videopanel");
    videoDiv.appendChild(videoElem);
    var vtype = 'mp4';
    videoElem.setAttribute('src','testvideo2.'+vtype);
}
function drawvideo()
{
    //第一个复制video的画布
    icanvas = document.getElementById("icanvas");
    var context = icanvas.getContext("2d");
    context.drawImage(videoElem,0,0,videoElem.width,videoElem.height);
}

//真正的截图方法
function drawimg()
{
//第二个截图的画布
    var firstcanvas = document.getElementById("icanvas");
    var icanvasimg = document.getElementById("icanvasimg");
    var contextimg = icanvasimg.getContext("2d");
    contextimg.drawImage(firstcanvas,0,0,firstcanvas.width,firstcanvas.height);
}

function convertCanvasToImage()
{
    var icanvasimg = document.getElementById("icanvasimg");
    Canvas2Image.saveAsPNG(icanvasimg);
}


window.onload=function () {
    createvideo();
    videoElem.play();
    //每100毫秒在第一个canvas里进行截图
    setInterval(drawvideo,100);

    var clickbtn = document.getElementById('clickme');
    clickbtn.onclick=function () {
        drawimg();
    };
    var clickbtn2 =document.getElementById('ibutton');
    clickbtn2.onclick=function () {
        convertCanvasToImage();
    }
};


