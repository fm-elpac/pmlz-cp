# systemd user unit

- 安装位置:

  `~/.config/systemd/user/pmlz-cp.service`

- 启动命令:

  ```sh
  systemctl --user start pmlz-cp
  ```

- 停止:

  ```sh
  systemctl --user stop pmlz-cp
  ```

- 自动启动:

  ```sh
  systemctl --user enable pmlz-cp
  ```

  取消:

  ```sh
  systemctl --user disable pmlz-cp
  ```

TODO
