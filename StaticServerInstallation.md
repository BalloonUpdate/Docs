## 静态服务端

> 静态服务端适合部署到对象存储，内容分发网络，或者其它静态服务器上

1. 把整个`静态服务端`文件夹解压到桌面上（或者其它任何地方）

![image-20210822235328280](assets/staticserver-all-files.png)

| 文件              | 用途                                   |
| ----------------- | -------------------------------------- |
| updater/res       | 存放要参与更新的文件                   |
| updater/index.yml | 服务端的配置文件                       |
| config.yml        | 小工具的配置文件                       |
| Tool.exe          | 小工具的主程序文件（用来一键上传）     |
| 上传.bat          | 启动小工具主程序的脚本（推荐这样启动） |

2. 将要更新文件，比如模组文件，复制到`updater/res/.minecraft/mods/`里面（`.minecraft/mods/`目录请自行创建）

![image-20210823000009863](assets/staticserver-inside-mods.png)

3. 将其它要参与更新的文件同样按上面的方法，复制到对应的目录上（比如Vexview的贴图复制到`updater/res/.minecraft/vexview/textures/`下）
4. 编辑服务端配置文件`updater/index.yml`，在`paths`下写上所有需要参与更新路径，默认只有一个`mods`文件夹

```yaml
version: "3.0" # 不要修改
server_type: "static" # 不要修改
update: 'res' # 不要修改

# 更新模式，建议保持默认
mode: "common"
# 参与更新的路径，一行一个，可以写多个
# 另外路径分隔符只能使用正斜线！禁止使用反斜线
paths:
  - .minecraft/mods
```

更多示例可以参考[这里](ServerConfigurationExamples.md)

5. 到这里就可以上传到自己服务器了，如果是上传到对象存储，建议使用[小工具上传](#小工具使用教程)，如果需要控制细节，也是支持手动上传的
7. 上传完成后，服务端就配置完毕了，然后是客户端

## 客户端安装

!> 在安装之前，务必备份原有客户端，以防配置出错误删文件！

1. 下载并解压客户端zip包，把主程序和配置文件一起解压到`.minecraft/updater`目录下（需要手动创建`updater/`目录）

![client-inside-updater](assets/client-inside-updater.png)

2. 打开并配置`updater.yml`，并将对象存储/服务器上的`index.yml`的URL填到api选项后面

3. 如果你喜欢，可以把客户端程序，移动到启动器旁边，并且可以改成别的文件名（比如：`点击更新mods.exe`等等），但是，客户端程序只有放在以下路径才能正常工作：`.minecraft`同级目录(启动器旁)、`.minecraft/`下，`.minecraft/updater/`下

![out_mcdir](assets/out_mcdir.png)

5. 到这里所有的安装工作已经结束了，开始启动测试效果吧！

## 后续维护

得益于软件的同步式更新架构，后续的客户端维护其实是非常简单的：

+ 给客户端新增文件：在服务端**添加**对应的文件，然后进行一次同步，客户端那边就会同步更新
+ 删除客户端的文件：在服务端**删除**对应的文件，然后进行一次同步，客户端那边就会同步更新
+ 更新客户端的文件：在服务端**替换**对应的文件，然后进行一次同步，客户端那边就会同步更新

不仅仅是文件，文件夹也是和上面一样的更新逻辑。这样，服务端的内容，就会自动同步到客户端那边。如果没有按预期更新，请检查一下对应的文件/目录是否忘了添加更新规则。

## 高级功能

[AdvancedTopic.md](AdvancedTopic.md ':include')

## 小工具使用教程

小工具的出现，是为了解决上传文件到对象存储的问题，小工具会在上传时自动计算出最小的上传操作（增量上传），提高效率，节省时间。推荐使用以下服务商，因为支持一键上传很方便：

+ 阿里云对象存储（推荐）
+ 腾讯云对象存储（推荐）
+ FTP/FTPS
+ SFTP（不推荐，谨慎使用）

> 不建议在后台一个一个文件地手动上传，因为这样**很容易**造成校验文件和实际内容对不上，导致更新出错！（使用手动上传模式没有此限制）

使用方法

1. 编辑配置文件`config.yml`，点击下方对应的配置教程，然后保存关闭

<!-- tabs:start -->

#### **腾讯云**

>   上传操作会清空**所有**现有文件，在配置前务必备份桶内的**所有的文件**，否则会造成文件丢失！也不要忘记将桶的权限设置为**公有读私有写**，否则无法是访问的！

这里以腾讯云为例，**只需要修改下面列出的部分**，其它部分请保持默认，不要给删掉了

```yaml
# 填写tencent表示要上传到腾讯云
service_provider: tencent

# 然后需要填写tencent部分，使用腾讯云的话，aliyun/ftp/sftp 部分可以留空
tencent:
  bucket: update-system      # 桶名
  secret_id: abcdefg         # 访问秘钥的id
  secret_key: a1b2c3d4e5f6g7 # 访问秘钥的key
  region: ap-nanjing         # 桶的地域
```

#### **阿里云**

>  上传操作会清空**所有**现有文件，在配置前务必备份桶内的**所有的文件**，否则会造成文件丢失！也不要忘记将桶的权限设置为**公共读**，否则无法是访问的！

这里以阿里云为例，只需要修改下面列出的部分，其它部分请保持默认，不要给删掉了

```yaml
# 填写aliyun表示要上传到阿里云
service_provider: aliyun

# 然后需要填写 aliyun 部分，使用阿里云的话，tencent/ftp/sftp 部分可以留空
aliyun:
  bucket: update-system                # 桶名
  access_id: abcdefg                   # 访问秘钥的id
  access_key: a1b2c3d4e5f6g7           # 访问秘钥的key
  region: oss-cn-chengdu.aliyuncs.com  # 桶的地域
```

#### **FTP**

> 在配置前，极其建议提前备份FTP内**所有的文件**！

这里以FTP为例，**只需要修改下面列出的部分**，其它部分请保持默认，不要给删掉了

```yaml
# 填写ftp表示要上传到ftp
service_provider: ftp

# 然后需要填写 ftp 部分，使用 ftp 的话，aliyun/tencent/sftp 部分可以留空
ftp:
  host: 127.0.0.1 # 主机地址
  port: 21        # 端口（通常是21）
  user: ab        # 用户名
  password: ab    # 密码
  base_path: /    # 上传到哪个路径，支持子目录，默认是根目录，必须以/开头，结尾不做要求
  secure: false   # 是否启用FTPS
```

因为一些原因，**FTPS模式下**无法校验服务端证书（请自行确保证书是可信的）

#### **SFTP**

>  上传操作会清空 `BasePath` 下**所有**现有文件，请务必**做好备份**，并严格检查 `BasePath` 字段，否则会造成文件丢失！

这里以SFTP为例，只需要修改下面列出的部分，其它部分请保持默认，不要给删掉了

```yaml
# 填写 sftp 表示要上传到 sftp
service_provider: sftp

sftp:
  host: 127.0.0.1       # 主机地址
  port: 22              # 端口（SSH 默认端口 22）
  user: non-root        # 用户名，尽量避免使用 root
  password: password    # 分两种情况，若 usePkey 为 true 且 私钥被加密，请填入私钥密码，否则请留空；若为 false，请填入密码
  usePkey: false        # 密钥对认证开关
  pkeyFile: id_rsa      # 私钥文件名，可使用相对路径，目前仅支持 OpenSSH 格式的 RSA 私钥

  # 警告：此选项必须谨慎填写，如果填写错误可能导致数据丢失或者系统严重损坏！
  # 极其不建议使用 root 用户进行上传，建议新建一个用户专门用于上传，并严格限制其读写权限
  # basePath 建议使用 /home/<user>/updater 这类路径，并只保留上传 user 对自己 home 目录的读写权限
  basePath: /tmp        # 上传到哪个路径，支持子目录，默认是 /tmp 目录防止意外，这里必须以 / 开头（即绝对路径），结尾不做要求
```

#### **手动部署/手动上传（高级）**

如果不想使用小工具的一键上传功能，可以仅把小工具当做`目录校验文件`生成器，并使用适合自己的方式手动上传到任意地方。每次上传之前，都需要重新生成或者说更新一下`目录校验文件`

目录校验文件是一个与目录同名的`.yml`结尾的文件，默认情况下通常是`res.yml`，放在其对应的目录旁边

> 为什么要使用目录校验文件?

因为客户端完全依赖目录校验文件去计算自身与服务端的文件差异，如果文件夹内的文件有变动，就需要重新生成一次，否则客户端无法感知到服务端的文件修改

目录校验文件包含了目录里所有文件结构和信息（子目录结构、每个文件的校验和大小等）感兴趣可以亲自打开文件看一下结构。

> 如何生成

生成校验文件可以使用小工具来生成（删除掉小工具的配置文件，只保留一个主程序，小工具就会进入**校验文件生成模式**，而不是上传模式）

具体操作方法是把`res`的**父目录**（默认情况下，就是与小工具同级的`updater`文件夹）拖到小工具上松开，就会在`res`文件夹旁边生成一个同名`.yml`文件，但建议写个批处理来进行操作，更加简单（如果使用批处理进行，那么可将要被生成的目录路径的**上一级**，作为参数传递给小工具，绝对路径和相对路径均可）

批处理示例（可以直接复制使用）：

```
@echo off
Tool-v3.1.2.exe updater
echo "校验文件已生成/更新"
pause
```

在生成好校验文件以后，请将校验文件和参与更新的文件一起上传到自己的服务器上

#### **完整配置参考**

仅供参考，不建议直接复制！

```yaml
# 是否在上传时显示调试数据
debug: false

# 是否跳过生成校验文件阶段，不要修改此选项！
# 如果调整为true则只会上传文件，不会重新生成校验文件
upload_only: false

# 上传完成后，是否不自动退出
# 设置为false后会直接退出，不会显示"任意键退出.."字样
show_any_key_to_exit: false

# 上传到哪里？
# 腾讯云请填写 tencent
# 阿里云请填写 aliyun
# FTP 请填写 ftp
# SFTP 请填写 sftp
service_provider: tencent

# 腾讯云需要填写此部分
tencent:
  # 桶名
  bucket: 
  # 访问秘钥的id
  secret_id: 
  # 访问秘钥的key
  secret_key: 
  # 桶的地域
  region: ap-nanjing
  
  # 缓存文件的文件名。用来实现增量上传
  # 此文件会存储到桶里（而不是本地），删除此文件可以进行一次全量上传
  # 只支持放置在桶的根目录（也就是说这里只能填写文件名不能填写一个路径）
  cache_file: .cache.yml

  # 按文件名自动添加http headers
  header_rules:
    # 正则表达式(按相对路径匹配，此路径不包含要上传的文件夹本身)
    - pattern: '.gz$'
    # 添加的http headers
      headers:
        Content-Encoding: gzip
  
# 阿里云需要填写此部分
aliyun:
  # 桶名
  bucket: 
  # 访问秘钥的id
  access_id: 
  # 访问秘钥的key
  access_key: 
  # 桶的地域
  region: oss-cn-chengdu.aliyuncs.com
  
  # 缓存文件的文件名。用来实现增量上传
  # 此文件会存储到桶里（而不是本地），删除此文件可以进行一次全量上传
  # 只支持放置在桶的根目录（也就是说这里只能填写文件名不能填写一个路径）
  cache_file: .cache.yml

  # 按文件名自动添加http headers
  header_rules:
    # 正则表达式(按相对路径匹配，此路径不包含要上传的文件夹本身)
    - pattern: '.gz$'
    # 添加的http headers
      headers:
        Content-Encoding: gzip

# FTP需要填写此部分
ftp:
  host: 127.0.0.1
  port: 21
  user: ab
  password: ab
  
  # 上传到哪个路径，支持子目录，默认是根目录，这里必须以/开头，结尾不做要求
  base_path: /
  
  # 缓存文件的文件名。用来实现增量上传
  # 此文件会存储到FTP服务器上（而不是本地），删除此文件可以进行一次全量上传
  # 只支持放置在根目录（也就是说这里只能填写文件名不能填写一个路径）
  cache_file: .cache.yml
  
  # 启用TLS加密（FTPS）
  secure: false
  
  # 高级参数，登录后是否立即发送prot_p命令
  prot_p: false

# SFTP 需要填写此部分
sftp:
  host: 127.0.0.1
  port: 22
  user: non-root

  # 如果使用 密码认证（usePkey 为 false），请填入密码
  # 如果使用 密钥对认证（usePkey 为true） 且 私钥被加密，请填入私钥密码，否则请留空
  password: password

  # 是否使用密钥对认证
  usePkey: false

  # 私钥文件名，可使用相对路径，目前仅支持 OpenSSH RSA 私钥（格式如下）
  # -----BEGIN RSA PRIVATE KEY-----
  # I9no9NE9sjKCAQEAt0JNJh+DzjjedIIE68sAA2qNi2+AMZy0cMciqLogIBABsBub
  # ...省略多行...
  # TLudhHIwG/0yKSmCtEo5KWl6sqjawFEE0qrWZL3QTP8ofHcEe8c=
  # -----END RSA PRIVATE KEY-----
  # 如果私钥被加密，请在上面的 password 字段填入私钥密码
  pkeyFile: id_rsa

  # 上传到哪个路径，支持子目录，默认是 /tmp 目录防止意外，这里必须以 / 开头，结尾不做要求
  # 警告：此选项必须谨慎填写，如果填写错误可能导致数据丢失或者系统严重损坏！
  # 极其不建议使用 root 用户进行上传，建议新建一个用户专门用于上传，并严格限制其读写权限
  # basePath 建议使用 /home/<user>/updater 这类路径，并只保留上传 user 对自己 home 目录的读写权限
  basePath: /tmp

  # 缓存文件的文件名。用来实现增量上传
  # 此文件会存储到 SFTP 服务器上（而不是本地），删除此文件可以进行一次全量上传
  # 只支持放置在 basePath 下（也就是说这里只能填写文件名不能填写一个路径）
  cacheFile: .cache.yml 
```

<!-- tabs:end -->


3. 运行`上传.bat`，开始上传
4. 上传完成后，直接关掉窗口就可以
