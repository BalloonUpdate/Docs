### check_hostname requires server_hostname

`影响范围`：小工具全版本，当使用腾讯对象存储上传文件时会触发

`问题原因`：电脑开启了代理上网导致，此问题属于腾讯COS SDK的问题（初步判断可能和requests库有关）

`解决方案`：尝试关闭代理，或者在虚拟机里使用小工具