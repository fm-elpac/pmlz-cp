// 键盘按键操作框架
import { computed, onMounted, onUnmounted, ref } from "vue";

const etc = {
  // 存储注册的按键回调
  回调: {},

  // 显示按键帮助信息
  帮助: ref(false),
};

function 注册按键回调(按键, 回调, 冲突) {
  if (null == etc.回调[按键]) {
    etc.回调[按键] = [
      {
        回调,
        冲突,
      },
    ];
  } else {
    etc.回调[按键].push({
      回调,
      冲突,
    });

    // 同一个按键被多次注册, 设置冲突
    if (etc.回调[按键].length > 1) {
      for (let i of etc.回调[按键]) {
        i.冲突.value = true;
      }
      // DEBUG
      console.log("kb: 按键冲突 " + 按键);
    }
  }
}

function 取消按键回调(按键, 回调) {
  if (etc.回调[按键] != null) {
    etc.回调[按键] = etc.回调[按键].filter((x) => x.回调 != 回调);

    // 如果只剩一个注册, 取消冲突
    if (etc.回调[按键].length == 1) {
      etc.回调[按键][0].冲突.value = false;
      // DEBUG
      console.log("kb: 按键冲突消失 " + 按键);
    }
  }
}

function 检查回调(按键) {
  if (etc.回调[按键] != null) {
    // 只有不存在冲突时才触发回调
    if (etc.回调[按键].length == 1) {
      etc.回调[按键][0].回调();
    }
  }
}

export function 初始化键盘控制() {
  // 捕捉所有按键消息
  document.body.addEventListener("keyup", (e) => {
    //console.log(e);

    // 切换帮助信息 (Shift+F1)
    if ((e.key == "F1") && (e.shiftKey)) {
      etc.帮助.value = !etc.帮助.value;
      return;
    }

    检查回调(e.key);
  });
}

// hook
// 返回: { 按键帮助文本, 冲突 }
export function useKb(按键, 回调) {
  const 冲突 = ref(false);

  onMounted(() => {
    // 如果按键为空, 不注册
    if ((null == 按键) || (按键.length > 0)) {
      注册按键回调(按键, 回调, 冲突);
    }
  });

  onUnmounted(() => {
    取消按键回调(按键, 回调);
  });

  const 按键帮助文本 = computed(() => {
    if (etc.帮助.value && (按键 != null) && (按键.length > 0)) {
      let 键名 = 按键;
      if (键名.length == 1) {
        键名 = 键名.toUpperCase();
      }

      let 冲突标记 = "";
      if (冲突.value) {
        冲突标记 = "!";
      }

      return ` (${冲突标记}${键名})`;
    }
    return "";
  });

  return { 按键帮助文本, 冲突 };
}

// hook: 使用键盘 上下键 进行滚动
export function useKbScroll(ref) {
  const scrollY = 160;

  useKb("ArrowUp", () => {
    ref.value.scrollBy({
      top: -scrollY,
      behavior: "smooth",
    });
  });

  useKb("ArrowDown", () => {
    ref.value.scrollBy({
      top: scrollY,
      behavior: "smooth",
    });
  });
}
