import { computed, onMounted, ref } from "vue";
import { useInterval } from "./定时器.js";
import { cp_conf_get } from "@/api/da/mod.js";
import { qw实时天气, qw小时预报, qw设置配置 } from "@/api/天气/qweather.js";

// 获取天气数据, 自动刷新
export function useWeather() {
  const 天气配置 = ref({
    // 天气接口类型
    api: "",
    // 在线服务接口的 URL
    url: "",
    // 刷新数据间隔 (分钟)
    update_m: 10,
    // (可扩展)
  });
  const 天气数据 = ref(null);
  const 天气错误 = ref(null);

  const 天气正在加载 = computed(() =>
    (null == 天气错误.value) && (null == 天气数据.value)
  );

  async function 加载数据() {
    switch (天气配置.value.api) {
      case "qweather":
        {
          const 实时 = await qw实时天气();
          const 结果 = Object.assign({}, 天气数据.value, { 实时 });
          // 首次加载 小时预报
          if (null == 结果.小时预报) {
            结果.小时预报 = await qw小时预报();
          }
          天气数据.value = 结果;
        }
        break;
      default:
        throw new Error("配置错误 (api)");
    }
  }

  async function 加载小时预报() {
    if ("qweather" == 天气配置.value.api) {
      const 小时预报 = await qw小时预报();
      天气数据.value = Object.assign({}, 天气数据.value, { 小时预报 });
    }
  }

  async function 加载配置() {
    try {
      // 加载通用配置
      const 配置 = await cp_conf_get([
        "weather.api",
        "weather.url",
        "weather.update_m",
      ]);
      // 存储配置
      const api = 配置["weather.api"];
      天气配置.value.api = api;
      const url = 配置["weather.url"];
      if (null != url) {
        天气配置.value.url = url;
      }
      const update_m = 配置["weather.update_m"];
      if (null != update_m) {
        天气配置.value.update_m = update_m;
      }

      // 加载配置 qweather
      if ("qweather" == api) {
        const 配置 = await cp_conf_get([
          "weather.qweather.key",
          "weather.qweather.location",
        ]);
        // 存储配置
        const key = 配置["weather.qweather.key"];
        if (null == key) {
          throw new Error("配置错误 (qweather.key)");
        } else {
          qw设置配置({ key });
        }
        const location = 配置["weather.qweather.location"];
        if (null != location) {
          qw设置配置({ location });
        }
        // 通用配置
        if (null != url) {
          qw设置配置({ url });
        }
      } else {
        throw new Error("配置错误 (api)");
      }
      // 触发配置更新
      天气配置.value = Object.assign({}, 天气配置.value);

      // 首次加载数据
      await 加载数据();
    } catch (e) {
      天气错误.value = `配置错误 (${e})`;
    }
  }

  onMounted(加载配置);

  // 只有超过配置值, 才进行更新
  let 更新计数 = 0;
  // 每 30 分钟更新一次小时预报
  let 更新计数_小时预报 = 0;

  async function 检查更新() {
    更新计数 += 1;
    更新计数_小时预报 += 1;
    if (更新计数 > 天气配置.value.update_m) {
      更新计数 = 0;

      await 加载数据();
    }
    if (更新计数_小时预报 > 30) {
      更新计数_小时预报 = 0;
      await 加载小时预报();
    }
  }
  // 每分钟检查一次
  useInterval(检查更新, 60e3);

  return { 天气配置, 天气正在加载, 天气数据, 天气错误 };
}
