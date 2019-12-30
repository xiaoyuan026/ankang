  // MyHeader.js
  function MyPlay () {
  // header.js
  // 功能一:鼠标移到视频区域显示按钮，鼠标离开视频区域隐藏按钮
  // 1：获取父元素
  let container = document.getElementById("container");
  // 2: 获取视频元素
  let v2 = document.getElementById("v2");
  // 3:获取按钮
  let control = document.getElementById("control");
  // 4:获取按钮中的图片
  let img = document.querySelector("#control img");
  // 5:为父元素绑定鼠标进入离开的事件
  container.onmouseenter = function () {
    control.style.display = "block"
  }
  container.onmouseleave = function () {
    control.style.display = "none"
  }
  // 功能二:当鼠标点击播放按钮视频播放或者暂停
  control.onclick = function (event) {
    //元素 a button submit image
    event.preventDefault();
    // 判断是否暂停
    if (v2.paused) {
      v2.play();
      // 图片路径写相对路径,相对 URL - 指向网站内的文件
      // ××××××××××××××××img.src = "../../public/banner/pause.png";绝对路径错××××××××××××××××
      img.src = "/banner/pause.png";
      console.log(img.src)
    } else {
      v2.pause();
      img.src = "/banner/play.png";
    }
  }
};

export {
  MyPlay
}