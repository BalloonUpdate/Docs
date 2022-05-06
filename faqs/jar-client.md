### 配置文件读取失败

`影响范围`：Jar客户端全版本

`问题原因`：配置文件格式不正确，无法按YAML规范读取

`解决方案`：检查配置文件文件中server选项是否存在，是否拼写错误，以及是否一个字符串

### 找不到配置文件

`影响范围`：Jar客户端全版本

`问题原因`：找不到配置文件（在Jar文件旁边找不到`config.yml`，同时Jar文件也也找不到这个问题）

`解决方案`：检查Jar包内是否有config.yml文件存在，或者检查Jar文件旁是否存在config.yml

### 无法连接到更新服务器

`影响范围`：Jar客户端全版本

`问题原因`：无法与服务器的建立TCP连接

`解决方案`：检查服务端是否启动成功，是否需要放开安全组，防火墙，或者需要设置端口映射

### 连接关闭

`影响范围`：Jar客户端全版本

`问题原因`：成功与服务器的建立TCP连接，但是连接意外断开了

`解决方案`：请检查网络质量，当文件下载到一半时如果网络闪断，会弹出这个问题

### HTTP状态码不正确

```
http状态码不正确（不在2xx-3xx之间）
http://xx.com/xxx.yml with httpcode(404)
Error 404, file not found: /res.yml
```

一个例外情况：如果错误信息里的URL指向了`res.yml`文件，且状态码为404

`影响范围`：Jar客户端4.0.0，4.0.1

`问题原因`：程序bug导致访问到了不存在的文件`res.yml`，正确应该为`res.json`

`解决方案`：升级到Jar客户端4.0.2版本或者更高

其它情况：

`影响范围`：Jar客户端全版本

`问题原因`：服务器响应的元数据的HTTP状态码不再3xx-4xx之间

`解决方案`：请将config.yml中的server所填写的地址复制粘贴到浏览器打开，正常情况下服务器会返回json格式或者yaml格式的数据，如果不是，请按实际返回的数据进行问题排查

### 服务器未能响应正确的数据

参考问题：[HTTP状态码不正确](#HTTP状态码不正确)

### 数据无法解码

Json无法解码

`影响范围`：Jar客户端全版本

`问题原因`：客户端配置文件或者服务端返回的数据不是严格的JSON格式

`解决方案`：首先检查客户端配置文件是否严格符合JSON语法要求。如果客户端配置文件没问题，请将config.yml中的server所填写的地址复制粘贴到浏览器打开，正常情况下服务器会返回json格式或者yaml格式的数据，如果不是，请按实际返回的数据进行问题排查

### 找不到.minecraft目录

即使把Jar客户端放到`.minecraft`目录旁也提示找不到的问题

`影响范围`：Jar客户端4.x

`问题原因`：启动Jar文件时，在`打开方式`中选择了以Java启动打开，而非默认Java启动

`解决方案`：将Jar文件设置为默认使用Java运行，然后使用双击方式启动

### HMCL启动时程序卡死

由HMCL启动时程序运行到一半卡死，而单独运行则不会

`影响范围`：Jar客户端4.x

`问题原因`：可能是HMCL启动子进程时的stdout缓冲区太小导致（测试大概2kbyes左右）

`解决方案`：在`java -jar xxx.jar`的后面增加` > nul`语句

### ClassCastException(1)

完整错误信息：`java.lang.ClassCastException: java.lang.Long cannot be cast to java.lang.Integer`

`影响范围`：Jar客户端4.x

`问题原因`：代码对服务端获取到的数据进行解析时未判断数据类型导致

`解决方案`：升级到Jar客户端4.0.3版本或者更高

### ClassCastException(2)

完整错误信息：`java.lang.ClassCastException: java.lang.Integer cannot be cast to java.lang.String`

`影响范围`：Jar客户端3.x

`问题原因`：当遇到文件名是纯数字的文件时会触发这个问题，具体原因与YAML规范有关

`解决方案`：参考通用问题里的：YAML规范导致的Int和String的问题

### _file.listFiles() must not be null

`影响范围`：Jar客户端全版本

`问题原因`：1.把游戏客户端解压到了某个盘的根目录。2.需要更新的目录中包含无权限访问的目录

`解决方法`：不要解压到根目录上。放到有权限的目录中或者使用管理员权限运行

### org.json.JSON.Exception

`A JsonArray text must start with xxx`

`影响范围`：Jar客户端4.1.4 及更早

`问题原因`：程序内部异常捕获错误（实际报错是JSON无法正常解析，检查服务端是否配置正确）

`解决方法`：更新到Jar客户端4.1.5版本或更高

### SocketTimeoutException

connect timed out

`影响范围`：Jar客户端4.1.5及更早

`问题原因`：与服务器建立连接的过程超时

`解决方法`：检查客户端与服务端的网络通断

