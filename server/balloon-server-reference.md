## BalloonServer 服务端 Reference

## 监听 IP 和端口

点击 `重载配置并启动服务器` 按钮时，程序将会监听此 `IP`和 `端口`传入的请求。

监听IP默认是`0.0.0.0`也就是监听所有网卡流量，监听端口默认是8080，如果和其它服务有冲突导致启动失败，可以更换一个别的端口再试

## 资源文件夹

程序将会 扫描/监听 的文件夹，默认为 `/res`，**如果无特殊需求，请不要动它。**

资源文件夹是所有客户端的入口，以如果玩家访问除 `res.json` `index.json` `/res` 之外的路径，将会返回 403 错误。

## 最小化更新模式

此选项开启后，程序如果在生成缓存后变动文件，则不需要重新生成缓存文件，程序将会最小化检查差异更新，适合服务器 IO 性能较弱的情况下使用。

关闭后，程序每次更新缓存文件都会完整计算一次资源文件夹。

通常情况下推荐启用，除非在出现了 BUG 的情况下无法正常生成缓存时需要关闭以重新生成缓存。

*此功能以**多线程**方式计算文件差异，相比 LittleServer, 性能**更加优秀**。*
*此功能会在未来的版本内成为程序的一部分，不再提供 启用/关闭 功能*

## 实时文件监听

此选项开启后，启动服务器的同时会启动文件监听服务。

文件监听服务会每隔 5 - 7 秒会统计一次资源文件夹的变化，如果资源一有变化就会**立即**重新生成资源缓存。

此功能使用最小化更新模式的方法生成缓存，并且**不需要**重启服务端。

适合在频繁变动文件的情况下使用此功能。