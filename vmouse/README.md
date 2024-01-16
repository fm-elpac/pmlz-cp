# 虚拟鼠标

在没有外接硬件鼠标的情况下, 在 Linux 系统中虚拟出一个鼠标.

用于解决 [cage](https://www.hjdskes.nl/projects/cage/) 无法隐藏鼠标指针的问题.

## 安装依赖

- ArchLinux:

  ```sh
  sudo pacman -S python-evdev evemu
  ```

- Debian 12 (Orange pi Zero3):

  ```sh
  sudo apt install python3-evdev evemu-tools
  ```

## 开发运行

```sh
sudo python vmouse.py
```

测试:

```
> cat /run/pmlz-cp/vmouse
/dev/input/event4
> evemu-event /dev/input/event4 --type EV_REL --code REL_X --value 10 --sync
```

## systemd unit 安装

- 复制文件:

  ```
  > sudo mkdir -p /usr/local/lib/pmlz-cp
  > sudo cp vmouse.py /usr/local/lib/pmlz-cp
  > sudo cp pmlz-cp-vmouse.service /etc/systemd/system
  > sudo systemctl daemon-reload
  ```

- 开机自动启动:

  ```
  > sudo systemctl enable pmlz-cp-vmouse.service
  ```

## 参考资料

- python-evdev

  <https://python-evdev.readthedocs.io/en/latest/index.html>

- Linux uinput

  <https://www.kernel.org/doc/html/latest/input/uinput.html>

## 版本信息

```
> uname -a
Linux ARCH-2 6.6.10-zen1-1-zen #1 ZEN SMP PREEMPT_DYNAMIC Fri, 05 Jan 2024 16:20:18 +0000 x86_64 GNU/Linux
> python --version
Python 3.11.6
> pacman -Ss python-evdev
extra/python-evdev 1.6.1-2 [已安装]
    Python bindings for the Linux input subsystem
```

TODO
