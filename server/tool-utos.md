## 新的上传方式

新的上传方式由3个可执行文件组成，并从batch脚本自动执行相应的命令，并不需要手动去敲，这点无须担心

0. 结构文件工具：负责生成`res`目录的结构文件`res.json`
1. 增量上传工具：负责把文件增量上传到对象存储上，会自动跳过未修改的文件
2. 对象存储命令行工具：负责实际的文件上传操作，一般由**增量上传工具**自动调用

在使用新上传方式之前，需要修改配置文件：

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

## **自由化部署**

如果你不使用对象存储，而是使用自己的私有存储服务，新的上传方式同样支持自由化部署，方便大佬们定制自己的文件分发工作流

在**结构文件工具**、**增量上传工具**、**对象存储命令行工具**中，只有**结构文件工具**是必要的，其它两个文件可以根据自己的部署流程自行替换或者直接去掉

**结构文件工具**的命令行参数很简单：`struture-tool.exe updater/res updater/res.json`

+ 第一次参数`updater/res`指定了要从哪个目录生成结构文件
+ 第二个参数`updater/res.json`指定了结构文件的输出路径，文件名一般是`res.json`
  + 如果你需要修改成别的文件名，可以在`index.json`里修改`update`字段。并同时修改`updater/res`目录中的`res`为新的名字，两者名字必须一致，且结构文件后缀必须为`.json`

结构工具是开源项目，使用Python3语言编写，默认提供win x64和linux x64的二进制可执行文件，如果你需要部署到架构的机器上，需要自行使用`pyinstaller build.spec`命令来构建二进制可执行文件

<!-- tabs:end -->

配置完毕后，双击`run.bat`即可开始上传文件

---

## 增量上传工具说明

增量上传工具上传成功后，目录下会生成一个`.state.json`文件，这个文件保存了对象存储桶里的文件结构和校验，用来实现增量上传。

这个文件的内容会在每次上传时自动与桶里的文件同步。因此请不要删除这个文件。

如果删除，则会触发一次全量上传（指重头上传所有文件，但不会删除桶里的现有文件，同名文件仍会被覆盖），比较浪费时间，一般不要删除

## 常见问题

上传时出现报错：`PermissionError: [WinError 5] 拒绝访问`。

此为**增量上传工具**高频率调用**对象存储命令行工具**完成文件上传操作时。被安全软件的启发式防护系统识别为风险行为。请尝试临时关闭安全软件再尝试
