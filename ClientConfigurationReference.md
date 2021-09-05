## 客户端配置参考

完整配置文件参考，不建议直接复制！（仅供参考之用途）

```yaml
# 更新服务器的地址，支持子目录，
# 末尾必须明确地以某个文件结尾，比如index.php, index.yml
# 如果只写域名或者ip的话会报错，比如这样： http://mydomain.domain/
# 结尾一般是：index.php 或者 index.yml
# php服务端例子：api: http://127.0.0.1:7750/index.php
# 静态服务端例子：api: https://test-123456.cos.ap-nanjing.myqcloud.com/index.yml
# 单文件服务端例子：api: http://127.0.0.1:8850/index.yml
# 单文件服务端会在启动成功后自动输出API地址，通常情况可以直接复制使用
api: http://127.0.0.1:7750/index.php

# 自定义界面的加载路径，一般是一个相对地址（起始路径: .minecraft/updater）
# 此项必须要指向一个.html文件，比如: assets: 'ui/index.html'
assets: ui/index.html

# 自定义图标文件，，一般是一个相对地址（起始路径: .minecraft/updater）
# 支持png和ico格式，比如: assets: 'ui/icon.png'
icon: ui/icon.png

# 是否自动打开devtools（通常做自定义界面会用到）
# 手动打开方式：Ctrl+Shift+I
dev_tools: true

# 界面/窗口的宽度
window_width: 380

# 界面/窗口的高度
window_height: 130

# 更新完成后，软件退出之前执行的指令
# 可以用来打开启动器等
# 高阶的用法请参考Windows的cmd命令
# 如果需要异步启动程序，可以不用start启动
# 而是在此配置项的最前面加一个+号，代表不阻塞执行
postcalled_command: start https://www.mcbbs.net

# 报错时（网络问题、配置文件等问题出现时），屏幕上显示的自定义错误信息
# 可引导玩家前往官网或者加群
error_message: '是否需要打开服务器官网下载完整客户端?'

# 报错时，当点击屏幕上显示的自定义错误信息下面 确定按钮 后，执行的指令
# 可直接打开某个链接或者执行某个程序
# 只有当error_message存在时error_help才有效
error_help: start https://www.mcbbs.net

# 设置了更新完毕后，窗口延迟多少ms退出
visible_time:  1500

# 文件更新完毕后是否是否不自动退出（需要手动点叉）
# 在开发/调试界面时非常有用。
hold_ui: true

# 前端Cookies持久化保存，会保存到这个文件名里
# 如果要做接入其它网站登录的话，保存Cookies是个很有用的功能
# 就可以实现三方网站记住账号和密码了
persistent_cookies: cookies.yml

# ip打码，开启后，所有弹框中的ip域名部分，会使用星号*代替
# 防止更新服务端地址显示在提示框中泄露
# 注：日志中的ip域名不受此影响
ip_mask: true
```