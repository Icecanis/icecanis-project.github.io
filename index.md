---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "IceinuProject"
  text: "使用文档"
  tagline: 基于Go的模块化聊天机器人开发框架
  actions:
    - theme: brand
      text: 开发文档
      link: /markdown-examples
    - theme: alt
      text: 适配器列表&文档
      link: /api-examples

features:
  - title: 快跑，前面全是饼
    details: 写不完，真的写不完。
  - title: 一套代码，到处使用
    details: 更换适配器即可轻松实现对不同平台的支持，统一的类Satori事件模型让跨平台so easy。
  - title: 事件驱动的消息处理
    details: 消息的接收和发送都基于事件总线的发布/订阅系统，支持自定义事件总线中间件。
  - title: 内置组网部署功能
    details: 更好的负载能力，更高的可用性，支持分布式 / 静态集群 / 动态集群 三种部署模式。
  - title: 可通过插件进行扩展
    details: 氷犬提供统一且高度可扩展的插件接口，只需要一点代码就能轻松定制自己的功能。
  - title: 简单好用的命令解析
    details: 类Alconna的命令分组解析，轻松注册命令匹配各种复杂命令格式。
  - title: Satori 消息支持
    details: 支持直接以Satori标准的XHTML字符串构建消息元素并发送。
  - title: 内置数据库连接池
    details: 通过框架来给插件提供数据库连接，插件开发无需再纠结数据库问题。
  - title: 内置缓存管理器
    details: 内置了Freecache缓存库并进行了封装，轻松实现缓存调用。
---

