import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  // 路径名为 “/<REPO>/”
  base: '/cloudnotes2/',
  // 请不要忘记设置默认语言
  lang: 'zh-CN',
  theme: plumeTheme({
    profile: {
      name: 'Cream薄荷糖',
      description: 'Cream薄荷糖的云笔记',
      avatar: 'https://y.creammint.cn/basis/build-img/avatar_2.webp',
      circle: true, // 是否为圆形头像
    },
	navbar: [
      { text: '首页', link: '/', icon: 'material-symbols:home-outline' },
      {
        text: '笔记列表',
        icon: 'material-symbols:article-outline',
        items: [
          {
            items: [
              {
                text: 'Java',
                link: '/vuepress-theme-plume/',
              },
			  {
                text: 'Python',
                link: '/vuepress-theme-plume/',
              },
			  {
                text: '数据库',
                link: '/vuepress-theme-plume/',
              },
            ],
          },
        ],
      },
	  { text: 'Plume主题', link: 'https://plume.pengzhanbo.cn/guide/intro/', icon: 'https://plume.pengzhanbo.cn/plume.png' },
    ],
	notes: {
      dir: '/notes/', // 声明所有笔记的目录
      link: '/', // 声明所有笔记默认的链接前缀， 默认为 '/'
      notes: [
        {
          dir: 'typescript', // 声明笔记的目录，相对于 `notes.dir`
          link: '/typescript/', // 声明笔记的链接前缀
          sidebar: [ // 配置侧边栏
            {
              text: '简介',
              icon: 'mdi:language-typescript', // 侧边栏图标
              items: ['基于Java的摩托车销售网站'] // 简化写法，主题会自动补全为 `foo.md`
            }
          ]
        },
        {
          dir: 'rust',
          link: '/rust/',
          sidebar: [
            { text: '简介', items: ['foo'] }
          ]
        }
      ]
    }
  }),
  bundler: viteBundler(),
})