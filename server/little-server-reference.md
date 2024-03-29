## 单文件服务端Reference

配置文件参考

```yaml
# 监听地址，支持IPV6，默认是0.0.0.0也就是监听本机的所有网卡，一般无需修改此选项
address: 0.0.0.0

# 监听端口，默认是8000，如果冲突了请换一个别的端口
port: 8000

# ssl证书路径（jks格式）
jks-certificate-file:

# ssl证书密码
jks-certificate-pass: 

# 普通更新模式
common_mode:
  - .minecraft/**

# 补全更新模式
once_mode: []
```

## 运行时命令

>  在单文件服务端v4.0.6和更新的版本中，不再支持reload指令，因为高性能模式选项已经被删除，且默认开启，无需再手动刷新缓存

单文件服务端在运行时可以输入一部分指令来执行一些功能，目前仅支持2个指令：

+ ~~reload：简写r，用来在开启高性能模式之后，在不重启程序的情况下重新生成**资源目录缓存**~~
+ stop：简写s，用来退出程序。当然也可以用Ctrl+C退出程序或者直接点右上角的叉也是可以的

## 高性能模式

>  在单文件服务端v4.0.6和更新的版本中，高性能模式选项已经被删除，此功能会默认开启，无需再手动配置。且不需要再手动刷新缓存，程序会处理好各种情况。

~~单文件服务端开启高性能模式之后，会变成一个静态服务端，也就是会预先生成**资源目录缓存**并缓存到内存里，而不是每次都实时生成，可以节省CPU压力，提升性能。开启后，如果对res目录下的文件做了改动，是需要主动打命令来重新生成一次的，不然客户端可能会报错文件找不到。~~

+ ~~开启后，修改res目录下的文件之后，需要打指令reload来重新生成**资源目录缓存**~~
+ ~~关闭时，修改res目录下的文件之后，会自动重新生成**资源目录缓存**，不需要打指令~~

~~如果需要手动删除缓存文件强制重新生成，删除cache.json即可。~~

