import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "赛博家庭食谱",
  description: "好好吃饭,快乐健康",
  // srcDir: '../z-n-morgan-book/行囊/web学记',
  // srcDir: '../../z-n-morgan-book/行囊/英语',
  srcExclude: ['**/README.md', '**/TODO.md'],
  outDir: '../docs',
  base: '/cyber-foods-menu.github.io', 
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '炒菜', link: '/stir-fry/stir-fry' },
      { text: '炖菜', link: '/markdown-examples' },
      { text: '点心', link: '/markdown-examples' },
      { text: '饮品', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '炒菜',
        items: [
          { text: '炒菜首页', link: '/stir-fry/stir-fry' },
          { text: '临沂炒鸡', link: '/stir-fry/临沂炒鸡' },
          { text: '辣椒炒肉', link: '/stir-fry/辣椒炒肉' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
