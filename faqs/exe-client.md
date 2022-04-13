### 找不到VCRUNTIME140_1.dll

`影响范围`：3.x全版本

`问题原因`：缺少VC运行库2015

`解决办法`：1.安装VC++2015    2.升级到3.0.13或者以上版本

### 360卫士报毒/拦截

`影响范围`：2.x全版本\~3.x全版本

`问题原因`：360误报危险文件，本程序相关所有代码均开源，请自行审查

`解决办法`：此问题无解，目前只能手动加入白名单

### HTTP请求/连接失败

```
HTTPResponseException(HTTP请求/连接失败(通常是网络原因))
```

`影响范围`：3.x全版本

`问题原因`：网络原因导致请求超时，从而判定为连接失败

`解决办法`：多次尝试启动，或者等网好一点时再试。如果实在不能解决，请手动在浏览器里打开对话框中以`http(s)://`开头的那个URL，如果出现文件下载对话框或者显示内容为yaml格式，则正常工作，其它情况请根据报错信息自行解决。

### The .minecraft directory not found

```
MCDirectoryNotFoundException: The .minecraft directory not found.
```

`影响范围`：3.x全版本

`问题原因`：未将主程序放到相应的位置上，正确的位置：

+ `.minecraft`同级目录下
+ `.minecraft/`目录下
+ `.minecraft/updater/`目录下

主程序只能放在这几个位置，否则无法正常启动

注：配置文件只能放在`.minecraft/updater/updater.yml`，请不要随主程序移动

`解决办法`：将主程序移动到上面任意路径之一，都可以正常识别

### 找不到配置文件

```
ConfigFileNotFoundException(找不到配置文件)
```

`影响范围`：3.x全版本

`问题原因`：未将配置文件`updater.yml`放到`.minecraft/updater/updater.yml`

`解决办法`：将配置文件移动到正确的位置

### 服务端返回了无法解码的数据

```
UnableToDecodeException服务端返回了无法解码的数据(非yaml格式)
```

`影响范围`：3.x全版本

`问题原因`：服务端的配置不正确

`解决办法`：请手动在浏览器里打开对话框中以`http(s)://`开头的那个URL，如果出现文件下载对话框或者显示内容为yaml格式，则正常工作，其它情况请根据报错信息自行解决。

注：对话框中只会显示一小部分返回的内容，而且位置标记因为不是等宽字体的原因也无法准确反映错误位置，你可以打开日志文件`.minecraft/updater/updater.log`并滑到最下面或者搜索`RAWDATA`关键字，就能看到详细报错的行和列的位置

（[跳转链接](troubleshoot-with-logs.md)）

### 连接关闭/传输中断

```
ConnectionClosedException连接关闭/传输中断(通常是网络原因)
```

`影响范围`：3.x全版本

`问题原因`：网络原因导致传输中断

`解决办法`：请等待5\~10分钟网络稳定以后再试

> 此报错和程序本身无关，通常是网络原因，不是程序BUG。

### 不正确的HTTP状态码

```
UnexpectedHttpCodeExcepetion不正确的HTTP状态码(未处于2xx-3xx之间)
```

`影响范围`：3.x全版本

`问题原因`：服务端并未返回正常的200状态码（即使是301或者302也不行）

`解决办法`：请手动在浏览器里打开对话框中以`http(s)://`开头的那个URL，并根据具体情况自行解决。

> 此报错和程序本身无关，而是HTTP服务器的问题，不是本程序的BUG。

### 未知的工作模式

```
UnknownWorkModeException未知的工作模式
```

`影响范围`：3.1全版本

`问题原因`：服务端配置文件里的`mode`设置不正确

`解决办法`：将服务端配置文件里的`mode`设置为下列值之一：`common`、`exist`

### 重定向次数过多

```
MaxRedirectionReachedException重定向次数过多
```

`影响范围`：3.x全版本

`问题原因`：HTTP3xx跳转次数过多（超过10次以上）此问题为HTTP服务器的技术性问题，与本软件无关！

`解决办法`：减少跳转次数

### 重定向出错

```
RedirectionFailedException重定向出错
```

`影响范围`：3.x全版本

`问题原因`：HTTP3xx响应头中找不到Location属性，无法完整此次跳转。此问题为HTTP服务器的技术性问题，与本软件无关！

`解决办法`：请寻求HTTP服务器管理员的帮助

### 更新规则带-号时不更新任何文件

`详情`：没有更新任何文件，而且日志里显示，带`-`符号的路径末尾出现一个`\n`

`影响范围`：服务端3.x（仅php服务端）

`问题原因`：php服务端的yaml解析程序的bug所导致

`解决方法`：（任选其一）

+ 避免更新路径里带有`-`符号，
+ 升级php服务端版本到3.1（客户端不用做任何改动）

### 有歧义的文件类型

```
AmbiguousFileTypeEeception(有歧义的文件类型(内部错误))
```

`影响范围`：3.x全版本

`问题原因`：小工具的bug所导致

`解决办法`：升级小工具的版本到v3.0.1

### 找不到res.yml（404问题）

`影响范围`：3.x全版本

1.当使用PHP服务端时

`问题原因`：客户端配置错误

`解决方法`：将客户端配置文件里的`api`选项，从`.yml`结尾换成`.php`结尾（前提是没有使用URLrewrite）

2.当使用静态服务端时

`问题原因`：自己使用后台或者COSBrowser手动管理了文件

`解决方法`：改为全程使用小工具上传

### The "path" argument must be type string

`The "path" argument must be type string, Received type number(1)`

`影响范围`：Exe客户端全版本

`问题原因`：当遇到文件名是纯数字的文件时会触发这个问题，具体原因与YAML规范有关

`解决方案`：参考[这里](#YAML规范导致的Int和String的问题)

### EPERM: operation not permitted, opendir xxx

`EPERM: operation not permitted, opendir 'c:\Documents and Settings'`

`影响范围`：Exe客户端3.x

`问题原因`：把程序误放到了C盘根目录执行，因为尝试读取了系统保护的目录，没有权限，因此报错

`解决方法`：把程序放到子目录里运行，不要放到盘符的根目录下执行

### EPERM: operation not permitted, open 'xxxxx/updater.log'

`影响范围`：Exe客户端3.x

`问题原因`：误把日志文件设置了只读属性或者隐藏属性

`解决方法`：取消日志文件的只读属性或者隐藏属性。如果需要，可以配置文件里禁用日志或者修改生成位置

### EPERM: operation not permitted, lstat 'xxxxx/updater.log'

`影响范围`：Exe客户端4.x

`问题原因`：日志文件被包含进了更新规则里

`解决方法`：从更新规则里排除日志文件，或者将日志文件移动位置，或者禁用日志文件输出

### EBUSY: resource busy or locked, unlink 'xxxxx/xxx.xxx'

`影响范围`：Exe客户端3.x/4.x

`问题原因`：对应文件被锁定/占用

`解决方法`：关闭占用的进程。或者检查Minecraft进程是否退出

### .minecraft目录更新误在了程序所在目录

`影响范围`：Exe客户端3.x/4.0.0

`问题原因`：当程序没有放在`.minecraft`同级目录时会出现这个问题，这个是程序BUG

`解决方法`：升级到4.0.1或者更高版本

### 启动失败出现LittleWrapper Error occurred

倒数第二/三行为：`cause: failed to open the file: xxx.exe`

倒数第一行为：`probable reason: xxxx (123)`（注意这个123）

`影响范围`：Exe客户端全版本

`问题原因`：程序运行路径包含无效的字符

`解决方法`：检查路径里是否存在特殊符号，或者尝试在英文路径下运行