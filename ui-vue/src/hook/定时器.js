import { onMounted, onUnmounted, ref } from "vue";

// 周期定时器 (setInterval), 带自动清理
export function useInterval(回调, 毫秒) {
  const 定时器 = ref(null);

  // 启动
  onMounted(() => {
    定时器.value = setInterval(回调, 毫秒);
  });

  // 清理
  onUnmounted(() => clearInterval(定时器.value));

  return 定时器;
}

// 周期定时器 (1s), 在每秒的开始时更新时间
export function useInterval1s() {
  const 时间 = ref(new Date());
  let 运行 = false;
  let 定时器;

  function 回调() {
    if (运行) {
      const d = new Date();

      const ms = d.getMilliseconds();
      // 到下一秒开始时的毫秒数
      const t = 1e3 - ms;

      // 周期回调
      定时器 = setTimeout(回调, t);
      // 更新时间
      时间.value = d;
    }
  }

  onMounted(() => {
    运行 = true;
    回调();
  });

  // 清理
  onUnmounted(() => {
    运行 = false;
    clearTimeout(定时器);
  });

  return 时间;
}
