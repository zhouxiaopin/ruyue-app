var deviceWidth = Math.min(750, document.documentElement.clientWidth);
document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
// 1:100

// 通过监听事件，时刻的动态的修改font-size的大小(屏幕宽度变化时,font-size的大小也随着变化)
// window.addEventListener("resize", function(e) {
//   // 获取屏幕宽度
//   deviceWidth = Math.min(750, document.documentElement.clientWidth);
//   document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
//   console.log('pin')
// });
