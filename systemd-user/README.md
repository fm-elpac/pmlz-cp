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

## 版本信息

```
> systemctl --version
systemd 255 (255.2-2-arch)
+PAM +AUDIT -SELINUX -APPARMOR -IMA +SMACK +SECCOMP +GCRYPT +GNUTLS +OPENSSL +ACL +BLKID +CURL +ELFUTILS +FIDO2 +IDN2 -IDN +IPTC +KMOD +LIBCRYPTSETUP +LIBFDISK +PCRE2 +PWQUALITY +P11KIT +QRENCODE +TPM2 +BZIP2 +LZ4 +XZ +ZLIB +ZSTD +BPF_FRAMEWORK +XKBCOMMON +UTMP -SYSVINIT default-hierarchy=unified
```

TODO
