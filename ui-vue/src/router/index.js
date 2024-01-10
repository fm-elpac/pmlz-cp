import { createRouter, createWebHashHistory } from "vue-router";
import 首页 from "../v/首页.vue";
import 功能 from "../v/功能.vue";
import 设置 from "../v/设置.vue";
import 关于 from "../v/关于.vue";
import 调试 from "../v/调试.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: 首页,
    },
    {
      path: "/功能",
      component: 功能,
    },
    {
      path: "/设置",
      component: 设置,
    },
    {
      path: "/about",
      component: 关于,
    },
    {
      path: "/debug",
      component: 调试,
    },
  ],
});

export default router;
