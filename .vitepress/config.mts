import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "🧊氷犬 Iceinu Project.",
  description: "氷犬Bot使用文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "开发文档", link: "/docs/intro" },
      { text: "适配器", link: "/adapters/adapter_list" },
    ],

    sidebar: {
      "/adapters/": [
        {
          text: "Adapters",
          items: [
            { text: "适配器列表", link: "/adapters/adapter_list" },
            {
              text: "通用",
              collapsed: false,
              items: [
                { text: "Satori适配器", link: "/adapters/satori" },
                { text: "Onebot适配器", link: "/adapters/onebot" },
              ],
            },
            {
              text: "NTQQ",
              collapsed: false,
              items: [
                { text: "LagrangeGo适配器", link: "/adapters/lagrange_go" },
              ],
            },
          ],
        },
      ],
      "/docs/": [
        {
          text: "Documents",
          items: [{ text: "简介", link: "/docs/intro" }],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/Iceinu-Project" },
    ],
  },
});
