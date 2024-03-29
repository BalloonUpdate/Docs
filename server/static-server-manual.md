## 静态服务端 Manual

静态服务端是为没法执行PHP脚本或者Java程序的环境所制作的一种服务端（当然可以执行PHP脚本的主机也同样可以使用静态服务端），比如对象存储上。当然不仅限于对象存储，PHP网站主机和自己搭建的宝塔环境也都是可以使用的。

与单文件服务端不同的是，**资源目录缓存**（也就是`res.json`）会提前预先计算好，而不是做实时计算。这样不仅可以部署在纯静态HTTP环境，也能极大提升CPU的处理效率，提高并发的上限。

静态服务端适合那些文件存储的物理位置不在本地的场景，比如对象存储，网站主机，GitPages服务等。如果你的文件都是存储在本地或者说自己电脑上的话，建议使用单文件服务端，体验会比静态服务端更友好

> PHP服务端已经合并到了静态服务端里，相比旧版的PHP服务端，静态服务端的性能更好，而且不依赖任何脚本执行环境（比如JSP，PHP，ASP）。无论是内存占用，还是CPU占用，都比PHP服务端要好的多。

[点击这里](static-server-reference.md)跳转到单文件服务端的参考页面，了解更多用法和技术细节

## 使用教程

1. 首先下载服务端zip包，将`静态服务端`解压到任意位置（建议使用纯英文路径）
2. 如果你要更新模组文件，复制Minecraft客户端中所有的模组文件到`res/.minecraft/mods/`里（目录请自行创建），注意是所有文件。如果你要更新其它文件，同样按上面的方法，复制到`res`目录里对应的路径的目录上（比如vexview的贴图复制到`res/.minecraft/vexview/textures/`下，其它文件同理）
3. 编辑配置文件`updater/index.json`，在`common_mode`下写上所有要进行更新的目录的路径，比如要更新模组文件和vexview的贴图文件可以这样写。需要注意的是，路径分隔符只能使用正斜线（即使是在Windows上），且避免在更新规则中包含`[]`方括号，会导致更新失败（允许玩家自己添加mod可以参考：[更新规则示例、参考链接](filter-rules-reference.md)中的示例2）

```json
{
    "update": "res",
    "common_mode": [
        ".minecraft/mods/*.jar",
        ".minecraft/vexview/textures/**"
    ],
    "once_mode": []
}
```

4. 其它参数无需改动，保持默认即可，保存并关闭配置文件`updater/index.json`
5. 然后需要将所有文件上传到对象存储或者FTP（PHP主机），这里的上传并不需要每次都手动一个个操作。而是使用静态服务端里自带的增量上传工具。目前自带了4个服务商支持：阿里云对象存储、腾讯云对象存储、七牛云对象存储、FTP协议（适用于网站主机）
6. 使用静态服务端里自带的增量上传工具上传不会删除现有文件，没有误删文件的风险。但如果有同名文件，仍然会被覆盖
7. 然后根据你选择的服务商的不同，执行下面不同的步骤

## a.腾讯云对象存储

1. 编辑`tools/tencent/tencent.cos.yaml`文件
   1. 将`cos.base.secretid`修改为你的腾讯云账号的Secret Id（具体方法请查看腾讯云文档）
   2. 将`cos.base.secretkey`修改为你的腾讯云账号的Secret Key（具体方法请查看腾讯云文档）
   3. 将`cos.buckets[0].name`修改为你的桶名（一般是aaa-bbbbb格式，aaa是桶名，bbbbbb是账号id）
   4. 将`cos.buckets[0].endpoint`修改为你桶的地域（一般是cos.ap-xxxxxx.myqcloud.com格式，xxxxxx是地域的拼音）
   5. 其它选项不需要修改，保存并关闭配置文件
2. 运行`静态服务端/run.bat`，然后选择3按回车，即可执行上传操作
3. 将桶的权限设置为**公有读私有写**

## b.阿里云对象存储

1. 编辑`tools/aliyun/aliyun.oos.ini`文件
   1. 将`accessKeyID`修改为你的阿里云账号的accesskey id（具体方法请查看阿里云文档）
   2. 将`accessKeySecret`修改为你的阿里云账号的accesskey secret（具体方法请查看阿里云文档）
   3. 将`endpoint`修改为你桶的地域（一般是oss-cn-xxxxx.aliyuncs.com格式，xxxxx是地域的拼音）
   4. 其它选项不需要修改，保存并关闭配置文件
2. 编辑`tools/aliyun/config.yml`文件
   1. 修改`variables.bucket-name`为你的桶名
3. 运行`静态服务端/run.bat`，然后选择1按回车，即可执行上传操作
4. 将桶的权限设置为**公有读私有写**

## c.七牛云对象存储

1. 在`静态服务端/tools/qiniuyun`目录下打开终端（在目录空白处按Shift+右键，然后点击*启动命令提示符*）
2. 在终端输入`qshell.exe account -L -w -- ak sk name`来配置七牛云工具
   1. `ak`请替换成你七牛云的ak信息
   2. `sk`请替换成你七牛云的sk信息
   3. `name`请替换成你七牛云的账号名（一般是手机号）
   4. 输入`exit`关闭终端
3. 编辑`tools/qiniuyun/config.yml`文件
   1. 修改`variables.bucket`为你的桶名（另外七牛云的桶不区分地域）
   2. 其它选项不需要修改，保存并关闭配置文件
4. 运行`静态服务端/run.bat`，然后选择2按回车，即可执行上传操作

## d.FTP协议

FTP并不是一个具体的服务商，而是指的FTP协议，可以把文件上传到所有支持FTP协议的服务器上，通常我们购买的PHP网站主机都是使用的FTP协议去后台管理文件的

使用ftp协议需要额外安装Java环境，最低Java8，并能在终端中使用java目录访问即可

1. 编辑`tools/ftp/config.yml`文件
   1. 修改`variables.user`为你的FTP用户名
   2. 修改`variables.pass`为你的FTP用户密码
   3. 修改`variables.base-path`为你要将文件上传到哪个目录上（如果未填写路径就是根目录，支持填写子目录（子目录需要自行创建）。另外末尾没有正斜线`/`）
   4. 其它选项不需要修改，保存并关闭配置文件
2. 运行`静态服务端/run.bat`，然后选择4按回车，即可执行上传操作

## 注意事项

增量上传文件之后，就不要再手动修改对应的远端目录，因为这样很容易会造成两边文件对不上，从而上传报错。建议全程使用增量上传工具来维护远端目录的内容。

因为程序为了IO效率，不会真的去索引远端目录有哪些文件，而是将远端目录结构保存到一个**状态文件**（可以理解为单文件服务端的**资源目录缓存**），这个文件叫`remote-structure.json`，存放在`tools`目录下，每次程序执行对远端目录的修改的时候，都会去更新这个状态文件。如果你不小心手动修改了远端文件，从而打乱了两边文件状态的一致性，请先删除远端对应的整个目录，然后删除本地的状态文件`tools/remote-structure.json`，之后重新上传，这样就可以重建两边文件的状态了。

另外`updater/res.json`文件请不要手动编辑，此文件是旁边的`res`目录生成的**资源目录缓存**，是由脚本自动生成并维护的，无需手动管理

注意所有参与更新文件的文件名中请不要包含下列字符，否则会导致更新出错：半角感叹号`!`、波浪号`~`、反引号、星号`*`、Et（And）`&`、Caret`^`、百分号`$`、At`@`、半角冒号`:`、半角分号`;`、半角双引号`"`、反斜线`\`

## 文件管理

得益于软件的同步式更新架构，后续对客户端的文件管理其实是非常简单的：

+ 给客户端新增文件：在服务端**添加**对应的文件，然后进行一次上传，客户端那边就会同步更新
+ 删除客户端的文件：在服务端**删除**对应的文件，然后进行一次上传，客户端那边就会同步更新
+ 更新客户端的文件：在服务端**替换**对应的文件，然后进行一次上传，客户端那边就会同步更新

不仅仅是文件，文件夹也是和上面一样的更新逻辑。这样，服务端的内容，就会自动同步到客户端那边。如果没有按预期更新，请检查一下对应的文件/目录是否忘了添加更新规则。

