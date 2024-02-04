import 喵喵 from "../assets/audio/1_喵喵_喵.ogg";

// 播放声音文件, 一次性
export function 播放声音(url) {
  const a = new Audio(url);
  a.autoplay = true;
}

// 播放 pmlz-cp 启动声音
export function 播放启动声音() {
  播放声音(喵喵);
}
