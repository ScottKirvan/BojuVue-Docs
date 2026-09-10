import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "BojuVue-Docs",
  description: "TODO - Replace with your project description.",
  base: '/BojuVue-Docs/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/ScottKirvan/BojuVue-Docs' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ScottKirvan/BojuVue-Docs' },
      { icon: 'discord', link: 'https://discord.gg/TN6XJSNK5Y' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © Scott Kirvan'
    }
  }
})
