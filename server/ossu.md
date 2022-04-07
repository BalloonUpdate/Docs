## 结构工具+对象存储助手的上传方式

由于静态服务端的环境限制，无法动态返回HTTP内容，因此所有的数据必须进行预计算。结构工具就是用来做这个预计算的，计算的内容就是给`res`目录生成**结构文件**。结构文件是一个与目录同名的`.json`结尾的文件，放在其对应的目录旁边。

静态服务端要用到两个工具：结构工具+对象存储助手。结构工具负责生成结构文件。对象存储助手负责调用对象存储服务商提供的命令行工具上传文件

结构工具和对象存储助手的调用命令行已经写在了批处理文件`run.bat`中，不需要手动调用。但在使用之前，需要先配置对象存储助手的配置文件，目前仅提供了阿里云、腾讯云的教程

<!-- tabs:start -->

## **腾讯云**

1. 在[腾讯云文档中心](https://cloud.tencent.com/document/product/436/63144)下载对象存储命令行工具coscli，并按文档中的步骤，使用`./coscli.exe`命令配置好Secret ID和Secret Key参数
2. 将coscli可执行文件复制到`静态服务端`目录里
3. 将`示例配置文件/config.tencent.yml`复制到`ossu-win32.exe`旁边里并命名为`config.yml`
4. 用文本编辑器打开配置文件`config.yml`并按下面的步骤进行配置
   + 修改`variables.cli`的值为在第1步中你所下载的coscli可执行文件的名称
   + 修改`variables.bucket`的值为`cos://sdfs-12566044`（`sdfs-12566044`为你要上传的桶名）
     + 如果你要上传到子目录，可以写成`cos://sdfs-12566044/subdir`的形式（末尾不要带`/`）
   + 其它选项不需要修改，保存并关闭配置文件

## **阿里云**

1. 在[阿里云帮助中心](https://help.aliyun.com/document_detail/120075.htm)下载对象存储命令行工具ossutil，并按文档中的步骤，使用`ossutil64.exe config`命令配置好Endpoint和AccessKey ID和AccessKey Secret参数
2. 将ossutil可执行文件复制到`静态服务端`目录里
3. 将`示例配置文件/config.aliyun.yml`复制到`ossu-win32.exe`旁边并命名为`config.yml`
4. 用文本编辑器打开配置文件`config.yml`并按下面的步骤进行配置
    + 修改`variables.cli`的值为在第1步中你所下载的ossutil可执行文件的名称
    + 修改`variables.bucket`的值为`oss://sdfssda`（`sdfssda`为你要上传的桶名）
    + 如果你要上传到子目录，可以写成`oss://sdfssda/subdir`的形式（末尾不要带`/`）
        + 其它选项不需要修改，保存并关闭配置文件

## **七牛云**

1. 在[七牛云开发者中心](https://developer.qiniu.com/kodo/1302/qshell)下载对象存储命令行工具qshell，并按文档中的步骤，使用`qshell account`命令配置好AccessKey和SecretKey参数
2. 将qshell可执行文件复制到`静态服务端`目录里
3. 将`示例配置文件/config.qiniuyun.yml`复制到`qshell.exe`旁边并命名为`config.yml`
4. 用文本编辑器打开配置文件`config.yml`并按下面的步骤进行配置
    + 修改`variables.cli`的值为在第1步中你所下载的qshell可执行文件的名称
    + 修改`variables.bucket`的值为`your-bucket-name`（`your-bucket-name`为你要上传的桶名）
    + 如果你要上传到子目录，可以写成`your-bucket-name/subdir`的形式（末尾不要带`/`）
        + 其它选项不需要修改，保存并关闭配置文件

## **手动部署工作流**

如果你希望手动部署到自己的服务器上，可以使用结构工具生成结构文件之后，利用自己的工具上传到自己的服务器上。结构工具使用Python3语言编写，默认提供win x64和linux x64的二进制可执行文件，如果你需要部署到linux 32位或者arm机器上，请自行使用`pyinstaller build.spec`命令构建二进制可执行文件

结构工具仓库链接：https://github.com/updater-for-minecraft/StructureTool

<!-- tabs:end -->

配置完毕后，双击`run.bat`即可开始上传文件

---

## 一些说明

上传成功后，目录下会生成一个`.state.json`文件，这个文件保存了对象存储桶里的文件结构和校验，用来实现增量上传。

这个文件的内容会在每次上传时自动与桶里的文件同步。因此请不要删除这个文件。

如果删除，则会触发一次全量上传（指重头上传所有文件），比较浪费时间，一般不要删除

## 技术细节

> 结构文件的作用

因为客户端完全依赖结构文件去计算自身与服务端的文件差异，如果服务端文件夹内的文件有变动，就需要重新生成，否则客户端无法感知到服务端的文件变动

因此结构文件包含了目录里所有文件结构和信息（子目录结构、每个文件的校验和大小等）感兴趣可以亲自打开文件看一下结构

## 常见问题

使用对象存储助手进行上传时出现报错：`PermissionError: [WinError 5] 拒绝访问`。

请尝试临时关闭安全软件再尝试
