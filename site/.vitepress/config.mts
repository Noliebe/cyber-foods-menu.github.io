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
      { text: '炒菜', link: '/stir-fry/临沂炒鸡' },
      { text: '炖菜', link: '/stew/青菜丸子粉丝汤@nz' },
      // { text: '点心', link: '/markdown-examples' },
      { text: '饮品', link: '/beverages/茉酸奶' }
    ],

    sidebar: [
      {
        text: '炒菜',
        items: [
          // { text: '炒菜首页', link: '/stir-fry/stir-fry' },
          { text: '临沂炒鸡', link: '/stir-fry/临沂炒鸡' },
          { text: '辣椒炒肉', link: '/stir-fry/辣椒炒肉' }
        ]
      },
      {
        text: '炖菜',
        items: [
          // { text: '炒菜首页', link: '/stir-fry/stir-fry' },
          { text: '青菜丸子粉丝汤@nz', link: '/stew/青菜丸子粉丝汤@nz' }
        ]
      },
      {
        text: '饮品',
        items: [
          // { text: '炒菜首页', link: '/beverages/beverages' },
          { text: '茉酸奶', link: '/beverages/茉酸奶' },
          { text: '奶茶', link: '/beverages/奶茶' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Noliebe/cyber-foods-menu.github.io' }
    ]
  }
})
