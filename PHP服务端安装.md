## PHP服务端安装

> PHP服务端是最容易安装的服务端，但前提是你得有个PHP环境
>
> 如何搭建PHP环境不在本文档的范围内，请善用搜索引擎

1. 解压已经下载好的updater服务端Zip包，解压之后文件如下
2. ![dynamic-server](PHP服务端安装/dynamic-server.png)
3. 解压已经下载好的热更新包，并将`UpdaterHotupdatePackage.exe`文件（只解压这一个文件！）解压到服务端`hotupdate`目录下
4. 如果使用的是带`console`后缀的版本需要将文件名修改成与下图保持一致
5. ![dynamic-server-hu-package](PHP服务端安装/dynamic-server-hu-package.png)
6. 无论何时，想要查看热更新包的版本，请点击**右键->属性->详细信息->产品版本**
7. ![inspect-version](PHP服务端安装/inspect-version.png)
8. 编辑`server.json`，可以参考[服务端配置文件](服务端配置文件.md)
9. 将需要更新的文件放到`resources`目录里（完整结构如下），即配置完成
10. ![file_structure_d](PHP服务端安装/file_structure_d.png)

---

服务端安装好之后，就需要安装客户端了

[客户端安装教程](客户端安装教程.md)