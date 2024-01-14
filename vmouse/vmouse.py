# pmlz-cp/vmouse.py
import time
import os

from evdev import UInput, ecodes as c

# DEBUG
print("pmlz-cp: vmouse.py")

设备功能 = {
    c.EV_REL: [
        c.REL_X,
        c.REL_Y,
        # 注意: 必须启用 滚轮 消息, 否则模拟的鼠标无法工作 !
        c.REL_WHEEL,
        c.REL_WHEEL_HI_RES,
        #c.REL_HWHEEL,
        #c.REL_HWHEEL_HI_RES,
    ],
    #c.EV_KEY: [
    #    c.BTN_LEFT,
    #    c.BTN_RIGHT,
    #    c.BTN_MIDDLE,
    #    c.BTN_SIDE,
    #    c.BTN_EXTRA,
    #],
    #c.EV_MSC: [
    #    c.MSC_SCAN,
    #],
}

设备 = UInput(设备功能, name="pmlz-cp virtual mouse", version=0x1)

设备路径 = 设备.device.path
# 将设备路径写入文件
os.makedirs("/run/pmlz-cp", mode=0o755, exist_ok=True)
with open("/run/pmlz-cp/vmouse", "w") as f:
    f.write(设备路径)

print("pmlz-cp: vmouse " + 设备路径)
# 保持运行
while True:
    time.sleep(10)
