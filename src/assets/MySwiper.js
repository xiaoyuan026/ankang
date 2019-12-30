// MySwiper.js
function MySwiper() {
  let picBox = document.getElementById("myscroll");
  // console.log(picBox);
  let pic = picBox.children[0];
  let num = 0; ///控制top值
  let LIWIDTH = 200; //每张图片宽度
  let HEIGHT = 300; //每张图片高度
  // 复制ul里面全部内容一份，为无限循环做前提
  pic.innerHTML += pic.innerHTML;
  let timer = setInterval(autoPlay, 20); //定时器
  function autoPlay() {
    num--;
    if (num < -52 * LIWIDTH) {
      num = 0;
    } else {
      num <= -52 * HEIGHT ? (num = 0) : num;
    }
    pic.style.top = num + "px";
    picBox.onmouseover = function () {
      //鼠标经过大盒子停止定时器timer
      clearInterval(timer);
    };
    picBox.onmouseout = function () {
      // 鼠标移出大盒子，开启定时器，名字还是timer
      timer = setInterval(autoPlay, 20);
    };
  }
}
export {
  MySwiper
}