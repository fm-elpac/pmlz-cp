<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { P_VER } from "../conf.js";
import { 格式化json } from "@/util/json.js";
import { electron版本 } from "@/api/ea/mod.js";
import c下半简单 from "@/c/框架/下半简单.vue";
import c代码块 from "@/c/简单/代码块.vue";
import c块按钮 from "@/c/简单/块按钮.vue";

const electronjs版本 = ref("");

onMounted(async () => {
  electronjs版本.value = 格式化json(await electron版本());
});

const router = useRouter();

function 调试() {
  router.push({
    path: "/debug/sys",
  });
}

const license = `\
pmlz-cp: 胖喵小窝中控台 (web-ui)
Copyright (C) 2024  secext2022

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
`;
</script>

<template>
  <c下半简单 class="v-关于">
    <div class="关于信息">
      <h2>pmlz-cp</h2>
      <p>版本 {{ P_VER }}</p>
      <p>项目网址: https://github.com/fm-elpac/pmlz-cp</p>

      <v-divider :thickness="4" />
      <p>electronjs 版本:</p>
      <c代码块 :文本="electronjs版本" />
      <h3>LICENSE</h3>
      <c代码块 :文本="license" />
    </div>
    <c块按钮 文本="进入调试界面" 按键="d" @点击="调试" />
  </c下半简单>
</template>

<style scoped>
.关于信息 {
  margin-bottom: 2em;
}

.关于信息 h2 {
  font-size: 2.6em;
  margin-bottom: 0.4em;
}

.关于信息 h3 {
  font-size: 2em;
  margin: 1em 0 0.5em 0;
}

.关于信息 p {
  font-size: 1.6em;
  margin-bottom: 0.4em;
}

.v-divider {
  margin: 2em 0 1em 0;
}
</style>
