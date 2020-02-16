# notes-node-server

nodejs 项目用于给前端提供api接口；

## 技术栈

* 语言：TypeScript
* web框架：egg 
* ORM框架：Sequelize 
* 打包管理：Webpack 
* 运维：PM2 
* 数据库：postgresql / mongodb / redis
* 测试：mocha

----

数据库应用场景

postgresql ：

* 复杂的业务逻辑
* 重要的数据

mongodb :

* 应用服务器的日志记录
* 存储一些监控数据
* 待完善的新功能

redis ：

* 临时数据
* 缓存

nodejs 后端； 提供api


## 项目构建

组件式地构建项目，有着微服务的概念；

把文件按照功能分类，而非按照文件的角色分类。

例如：

不应该：
  controller中放入所有模块的controller

应该：
  在各个模块中定义

## 定义私有包

我们应该把各个服务公共的，都在使用的内容，打成一个私有包，供所有项目使用。
这样，在修改时可以同时修改。

## 应用和服务分离

- API声明应该在 app.js 文件里面
- 服务器网络声明，应该在 /bin/www 文件里面

## 分层配置

分层配置有助于查找条目和维护庞大的配置文件



参考文章

[mongodb 使用场景](https://www.cnblogs.com/williamjie/p/10416294.html)

[node 最佳实践](https://github.com/goldbergyoni/nodebestpractices/blob/master/README.chinese.md)
