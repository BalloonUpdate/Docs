## 常见问题解答

如果你在使用JAR版客户端，如果出现了某个错误但在当前页面里找不到的时候，烦请翻看一下正式版客户端的目录中是否有提及对应的问题，因为有一些通用错误，为避免重复，我只会写在正式版客户端的章节，还请大家理解。如果仍然无法解决，请尝试联系我

### 正式版客户端

#### 找不到VCRUNTIME140_1.dll

`影响范围`：3.x全版本

`原因`：缺少VC运行库2015

`解决办法`：1.安装VC++2015    2.升级到3.0.13或者以上版本

#### 360卫士报毒/拦截

`影响范围`：2.x全版本\~3.x全版本

`原因`：360误报危险文件，本程序相关所有代码均开源，请自行审查

`解决办法`：此问题无解，目前只能手动加入白名单

#### 无文件更新直接跳过

```
程序启动后显示"校验文件.."然后直接就退出了
```

`影响范围`：3.x全版本

`原因`：可能性：

1. 所有文件已更新完毕/已是最新
2. 更新规则和实际文件结构不一致导致检测不到

`解决办法`：（任选其一）

1. 完整地重新按文档配置一次（注意不要遗漏任何步骤！）
2. 通过程序日志排查问题（[跳转链接](TroubleshootByLogs.md)）

#### 所有文件被意外清空

```
程序误将Minecraft客户端mods等文件夹下的内容全部清空，即使放新文件进去也会被清空
```

`影响范围`：3.x全版本

`原因`：更新规则里列出的路径有问题，这个路径下没有任何文件所导致。因为本软件客户端是以同步的方式工作的，如果服务端没有任何文件，也会一同将客户端对应目录下的文件清空

`解决办法`：将需要被更新的文件放到服务端上**正确**的目录结构下（如果是静态服务端，不要忘记上传或者更新）

#### HTTP请求/连接失败

```
HTTPResponseException(HTTP请求/连接失败(通常是网络原因))
```

`影响范围`：3.x全版本

`原因`：网络原因导致请求超时，从而判定为连接失败

`解决办法`：多次尝试启动，或者等网好一点时再试。如果实在不能解决，请手动在浏览器里打开对话框中以`http(s)://`开头的那个URL，如果出现文件下载对话框或者显示内容为yaml格式，则正常工作，其它情况请根据报错信息自行解决。

> 此报错和程序本身无关，通常是网络原因，不是程序BUG。

#### The .minecraft directory not found

```
MCDirectoryNotFoundException: The .minecraft directory not found.
```

`影响范围`：3.x全版本

`原因`：未将主程序放到相应的位置上，正确的位置：

+ `.minecraft`同级目录下
+ `.minecraft/`目录下
+ `.minecraft/updater/`目录下

主程序只能放在这几个位置，否则无法正常启动

注：配置文件只能放在`.minecraft/updater/updater.yml`，请不要随主程序移动

`解决办法`：将主程序移动到上面任意路径之一，都可以正常识别

#### 找不到配置文件

```
ConfigFileNotFoundException(找不到配置文件)
```

`影响范围`：3.x全版本

`原因`：未将配置文件`updater.yml`放到`.minecraft/updater/updater.yml`

`解决办法`：将配置文件移动到正确的位置

#### 服务端返回了无法解码的数据

```
UnableToDecodeException服务端返回了无法解码的数据(非yaml格式)
```

`影响范围`：3.x全版本

`原因`：服务端的配置不正确

`解决办法`：请手动在浏览器里打开对话框中以`http(s)://`开头的那个URL，如果出现文件下载对话框或者显示内容为yaml格式，则正常工作，其它情况请根据报错信息自行解决。

注：对话框中只会显示一小部分返回的内容，而且位置标记因为不是等宽字体的原因也无法准确反映错误位置，你可以打开日志文件`.minecraft/updater/updater.log`并滑到最下面或者搜索`RAWDATA`关键字，就能看到详细报错的行和列的位置

（[跳转链接](TroubleshootByLogs.md)）

#### 连接关闭/传输中断

```
ConnectionClosedException连接关闭/传输中断(通常是网络原因)
```

`影响范围`：3.x全版本

`原因`：网络原因导致传输中断

`解决办法`：请等待5\~10分钟网络稳定以后再试

> 此报错和程序本身无关，通常是网络原因，不是程序BUG。

#### 不正确的HTTP状态码

```
UnexpectedHttpCodeExcepetion不正确的HTTP状态码(未处于2xx-3xx之间)
```

`影响范围`：3.x全版本

`原因`：服务端并未返回正常的200状态码（即使是301或者302也不行）

`解决办法`：请手动在浏览器里打开对话框中以`http(s)://`开头的那个URL，并根据具体情况自行解决。

> 此报错和程序本身无关，而是HTTP服务器的问题，不是本程序的BUG。

#### 未知的工作模式

```
UnknownWorkModeException未知的工作模式
```

`影响范围`：3.1全版本

`原因`：服务端配置文件里的`mode`设置不正确

`解决办法`：将服务端配置文件里的`mode`设置为下列值之一：`common`、`exist`

#### 重定向次数过多

```
MaxRedirectionReachedException重定向次数过多
```

`影响范围`：3.x全版本

`原因`：HTTP3xx跳转次数过多（超过10次以上）此问题为HTTP服务器的技术性问题，与本软件无关！

`解决办法`：减少跳转次数

#### 重定向出错

```
RedirectionFailedException重定向出错
```

`影响范围`：3.x全版本

`原因`：HTTP3xx响应头中找不到Location属性，无法完整此次跳转。此问题为HTTP服务器的技术性问题，与本软件无关！

`解决办法`：请寻求HTTP服务器管理员的帮助

#### 更新规则带-号时不更新任何文件

`详情`：没有更新任何文件，而且日志里显示，带`-`符号的路径末尾出现一个`\n`

`影响范围`：服务端3.x（仅php服务端）

`原因`：php服务端的yaml解析程序的bug所导致

`解决方法`：（任选其一）

+ 避免更新路径里带有`-`符号，
+ 升级php服务端版本到3.1（客户端不用做任何改动）

#### 有歧义的文件类型

```
AmbiguousFileTypeEeception(有歧义的文件类型(内部错误))
```

`影响范围`：3.x全版本

`原因`：小工具的bug所导致

`解决办法`：升级小工具的版本到v3.0.1

#### 找不到res.yml（404问题）

`影响范围`：3.x全版本

##### 1.当使用PHP服务端时

`原因`：客户端配置错误

`解决方法`：将客户端配置文件里的`api`选项，从`.yml`结尾换成`.php`结尾（前提是没有使用URLrewrite）

##### 2.当使用静态服务端时

`原因`：自己使用后台或者COSBrowser手动管理了文件

`解决方法`：改为全程使用小工具上传

#### check_hostname requires server_hostname

`影响范围`：小工具全版本，当使用腾讯对象存储上传文件时会触发

`原因`：电脑开启了代理上网导致，此问题属于腾讯COS SDK的问题（初步判断可能和requests库有关）

`解决方案`：尝试关闭代理，或者在虚拟机里使用小工具

#### The "path" argument must be type string

`The "path" argument must be type string, Received type number(1)`

`影响范围`：正式版客户端全版本

`原因`：当遇到文件名是纯数字的文件时会触发这个问题，具体原因与YAML规范有关

`解决方案`：参考[这里](#YAML规范导致的Int和String的问题)

#### EPERM: operation not permitted, opendir xxx

`EPERM: operation not permitted, opendir 'c:\Documents and Settings'`

`影响范围`：正式版客户端3.x

`原因`：把程序误放到了C盘根目录执行，因为尝试读取了系统保护的目录，没有权限，因此报错

`解决方法`：把程序放到子目录里运行，不要放到盘符的根目录下执行

#### EPERM: operation not permitted, open 'xxxxx/updater.log'

`影响范围`：正式版客户端3.x

`原因`：误把日志文件设置了只读属性或者隐藏属性

`解决方法`：取消日志文件的只读属性或者隐藏属性。如果需要，可以配置文件里禁用日志或者修改生成位置

#### EPERM: operation not permitted, lstat 'xxxxx/updater.log'

`影响范围`：正式版客户端4.x

`原因`：日志文件被包含进了更新规则里

`解决方法`：从更新规则里排除日志文件，或者将日志文件移动位置，或者禁用日志文件输出

#### .minecraft目录更新误在了程序所在目录

`影响范围`：正式版客户端3.x/4.0.0

`原因`：当程序没有放在`.minecraft`同级目录时会出现这个问题，这个是程序BUG

`解决方法`：升级到4.0.1或者更高版本

### Jar版客户端

#### 配置文件读取失败

检查配置文件文件中server选项是否存在，是否拼写错误，以及是否一个字符串

#### 找不到配置文件

检查Jar包内是否有config.yml文件存在，或者检查Jar文件旁是否存在config.yml，当这两个文件都不存在时，就会出现找不到配置文件的错误了

#### 连接关闭

此错误不是程序的bug，请检查网络问题，当文件下载到一半时如果网络闪断，会弹出这个提示框。

检查方法：请将config.yml里server所填写的地址复制粘贴到浏览器，看能否正常打开

#### 服务器未能响应正确的数据

此错误通常为服务端返回4xx引起，请将config.yml中的server所填写的地址复制粘贴到浏览器打开，如果不能打开，请自行检查服务端设置。

#### 数据无法解码

请将config.yml里server所填写的地址复制粘贴到浏览器打开，如果不是弹出下载或者显示yml格式文本，那么请根据具体信息自行解决问题

#### 找不到.minecraft目录

请将本软件放置到.minecraft目录旁边，或者在配置文件config.yml里手动指定一个更新起始路径

#### java.lang.ClassCastException

`java.lang.ClassCastException: java.lang.Integer cannot be cast to java.lang.String`

`影响范围`：Jar客户端全版本

`原因`：当遇到文件名是纯数字的文件时会触发这个问题，具体原因与YAML规范有关

`解决方案`：参考[这里](#YAML规范导致的Int和String的问题)

### 通用问题

#### YAML规范导致的Int和String的问题

yaml规范会默认把纯数字字符串以字符串的形式保存，在读取的时候读取到的就是整形，而不是字符串。对一些强类型语言来说，这会引发错误

解决方法：

1. 临时解决方法：检查所有参与更新的文件，将所有纯数字的文件名改成非纯数字，需要注意的是，纯数字文件名没有后缀，如果是`1.txt`之类的文件，则不算是纯数字文件名
2. 如果使用静态服务端：升级小工具到3.1.4或者以上版本
3. 如果使用PHP服务端：暂无彻底解决的方法，请使用上方的临时解决
4. 如果使用单文件服务端：升级到0.0.3或者以上的版本



[java-icon]:data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF42lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTA4VDEzOjExOjE4KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0wOFQxMzoxOTo1MSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0xMC0wOFQxMzoxOTo1MSswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozYTY5YWViNy1jMjgxLWVhNDgtOWViMC1jOTJhNTRkODM2OTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NGZkMjBmMzMtZGFhNC0xMjQ3LWE1N2QtYTI1ZGQ0ZGJlMTEzIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NGZkMjBmMzMtZGFhNC0xMjQ3LWE1N2QtYTI1ZGQ0ZGJlMTEzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0ZmQyMGYzMy1kYWE0LTEyNDctYTU3ZC1hMjVkZDRkYmUxMTMiIHN0RXZ0OndoZW49IjIwMjEtMTAtMDhUMTM6MTE6MTgrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6M2E2OWFlYjctYzI4MS1lYTQ4LTllYjAtYzkyYTU0ZDgzNjkzIiBzdEV2dDp3aGVuPSIyMDIxLTEwLTA4VDEzOjE5OjUxKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xy6+mwAAAsFJREFUOI11kc9rXFUUxz/3zvsx8zKTTFJnoiVjxdJQ2xgwUiGgaO0uii66cNG1qy7EbTcuBNcu1H9BEQRBFOrGhajFxo1pKVgmptU0Q2Yy8zK/3pv37r3HRZuSUTzw3Rw+58D5HJWmk2YYBjUg439KJgOUH4EuHG8Hxpg2IuKcc/LvWGtFRCQ/3JPDr6+JiIgTEWftY0ZEnDbGdK21TMUY0BqA/hfv4z29htgcO0lxwmPOGNPVzjmmYi34Pi4b0fnkbXT9NIJmtPklDouDKf4/C8TzsOmQg4/fQM03UNUlJs1fKKxsIH4Jm2dTvGetPWZLKBSLjK9/igrKBKtvMvrmQxau/YQxYMZDUGpKsBYRjuLEYR14S8+jn2jgxGGaN0mamzglKAXq0QlHM/pISJblRGHAjAZvdQO9eBbtFSidfxX59gPCgiLNcqKST7kUkuU51lq8PM9RShEVQ25v73Jj6w9Wlp9l5ZWrSO8eZu0KPVVhsN/l790WW3fv8/pL5zhZW2CcpA8dKKUoeJq7f+3x660dFioz9AYJk9zihy9idZG55g4X19f4/PoNdvbafPTeFQbDEZ5zDoDOQczlSxdYnJ/lu59/59ypp3AoDBrtctbXV/lxc4vqbMQ7ly7Qj2Ps8TeKgM1yatUy5VJIbiylsICZJGil6PaHxP0h7771MsuNOnF/hDiH9/B7QrVS4kGnR+B5LM7PsR8PcSK04wFnTz3JcqPOc8vPEB90ud/qUAwDAFSr1epUy6UTn331A9/fvMPVyxc506hz+88HjJOMYuBzolqmUgrZ3m0zSjM21s+jtcY6OVBx3HNaoX67c49b23sM0xRjLHPlCE9rcmOJhwm5tSzV53nthTOcrFVJ0owg8EXt77ebYRjUZitRhvJIxkMOBym5MaAUCvD9ApWoSDQTYbIJ/dGEwPeCJE3b/wCJ+8v1a6/lFwAAAABJRU5ErkJggg==

