// 前面补 0
// 输入: n 数字, l 最小长度
export function z(n, l) {
  let o = "" + n;
  while (o.length < l) {
    o = "0" + o;
  }
  return o;
}

// 输出格式: 2024-01-11 06:50
// 输入: d = new Date()
export function 格式化时间(d) {
  const y = d.getFullYear();
  const M = z(d.getMonth() + 1, 2);
  const D = z(d.getDate(), 2);
  const h = z(d.getHours(), 2);
  const m = z(d.getMinutes(), 2);

  return `${y}-${M}-${D} ${h}:${m}`;
}

// 输出格式: 06:50
// 输入: d = new Date()
export function 格式化时分(d) {
  const h = z(d.getHours(), 2);
  const m = z(d.getMinutes(), 2);

  return `${h}:${m}`;
}

// 输出格式: 03
// 输入: d = new Date()
export function 格式化秒(d) {
  const s = z(d.getSeconds(), 2);

  return s;
}

// 输出格式: ["06", "50", "03"]
// 输入: d = new Date()
export function 格式化时分秒(d) {
  const h = z(d.getHours(), 2);
  const m = z(d.getMinutes(), 2);
  const s = z(d.getSeconds(), 2);

  return [h, m, s];
}

// 输出格式: 三
// 输入: d = new Date()
export function 格式化星期(d) {
  const w = d.getDay();
  const o = [
    "日",
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
  ];

  return o[w];
}
