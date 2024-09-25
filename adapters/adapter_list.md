# 适配器列表

🧊 氷犬 采用了模块化可更改的适配器设计，只需要在入口文件`main.go`中修改启用的适配器即可~

应该注意的是，虽然氷犬默认适配器都基于内置的类 Satori 事件模型，但是适配器的开发者仍然可以选择自行编写事件模型，所以要看准适配器的事件模型哦？

| 适配器名称 | 平台 | 事件模型 | 简介 |
| --- | --- | --- | --- |
| [Satori 适配器](./satori.md) | 通用 | Satori | 基于 Satori 协议的通用适配器，需要额外配置协议端（未完成） |
| [Onebot 适配器](./onebot.md) | 通用 | Satori | 基于 Onebot 协议的通用适配器，需要额外配置协议端 （未完成） |
| [Lagrange 适配器](./lagrange_go.md) | NTQQ | Satori | 内置的 NTQQ 适配器，基于[LagrangeGo](https://github.com/LagrangeDev/LagrangeGo)无需再额外连接协议端 |
