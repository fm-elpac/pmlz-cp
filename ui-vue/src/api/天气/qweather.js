// 和风天气 <https://dev.qweather.com/>

export async function get(url) {
  const 响应 = await fetch(url);
  // 不是 HTTP 2xx 成功响应
  if (!响应.ok) {
    throw new Error("HTTP " + 响应.status);
  }

  // 返回 json 数据
  return await 响应.json();
}

const etc = {
  // 配置项 `weather.url`, 默认值:
  url: "https://devapi.qweather.com",
  // 配置项 `weather.qweather.key`
  key: "",
  // 配置项 `weather.qweather.location`, 默认值:
  location: "101010100",
};

export function qw设置配置(配置) {
  Object.assign(etc, 配置);
}

async function qw_get(url) {
  const URL = `${etc.url}${url}?location=${etc.location}&key=${etc.key}`;
  return await get(URL);
}

// <https://dev.qweather.com/docs/api/weather/weather-now/>
export async function qw实时天气() {
  return await qw_get("/v7/weather/now");
}

// <https://dev.qweather.com/docs/api/weather/weather-daily-forecast/>
export async function qw每日预报() {
  return await qw_get("/v7/weather/7d");
}

// <https://dev.qweather.com/docs/api/weather/weather-hourly-forecast/>
export async function qw小时预报() {
  return await qw_get("/v7/weather/24h");
}
