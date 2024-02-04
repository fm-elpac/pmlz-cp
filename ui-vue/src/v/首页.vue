<script setup>
import c运行时长 from "@/c/sys/运行时长.vue";
import c内存占用 from "@/c/sys/内存占用.vue";
import c平均负载 from "@/c/sys/平均负载.vue";
import c内存占用条 from "@/c/sys/内存占用条.vue";
import c屏幕亮度 from "@/c/sys/屏幕亮度.vue";
</script>

<template>
  <div class="v-首页">
    <div class="todo">(首页)</div>

    <div class="系统信息">
      <p>
        <c屏幕亮度 class="s" />
      </p>
      <p>
        <c内存占用 class="s" />
        <c平均负载 class="s" />
        <c运行时长 />
      </p>
      <c内存占用条 />
    </div>
  </div>
</template>

<style scoped>
.v-首页 {
  padding: 0.8em;

  height: 100%;
  display: flex;
  flex-direction: column;
}

.todo {
  flex-grow: 1;
}

.系统信息 p {
  font-size: 1.2em;
  margin-bottom: 0.4em;
}

.系统信息 .s {
  margin-right: 1em;
}
</style>
