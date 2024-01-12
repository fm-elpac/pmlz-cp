import { kv } from "./kv.ts";

// 设置数据在数据库中保存的位置
const K_CONF = "conf";

// 读取设置数据
export async function conf_get(键列表) {
  const 键 = 键列表.map((k) => [K_CONF, k]);
  const 数据 = await kv().getMany(键);

  const 结果 = {};
  for (let i of 数据) {
    结果[i.key[1]] = i.value;
  }
  return 结果;
}

// 保存设置数据
export async function conf_set(数据) {
  const t = kv().atomic();

  for (let i of Object.keys(数据)) {
    t.set([K_CONF, i], 数据[i]);
  }

  const r = await t.commit();
  if (!r.ok) {
    throw new Error(JSON.stringify(数据));
  }
}
