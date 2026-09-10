import { defineConfig } from 'vitepress'
import { bojuvue } from 'bojuvue/vite'


export default defineConfig({
  title: "BojuVue",
  description: "Shared Vue 3 component library for ScottKirvan's VitePress sites.",
  base: '/BojuVue-Docs/',
  vite: {
    plugins: [bojuvue()],
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      {
        text: 'Components',
        items: [
          { text: 'Overview', link: '/components/' },
          { text: 'BVButton', link: '/components/button' },
          { text: 'BVIconButton', link: '/components/icon-button' },
          { text: 'BVMoreButton', link: '/components/more-button' },
          { text: 'BVPlatformButton', link: '/components/platform-button' },
        ],
      },
      {
        text: 'Appendix',
        items: [
          { text: 'Live Examples', link: '/appendix/examples' },
          { text: 'Troubleshooting', link: '/appendix/troubleshooting' },
        ],
      },
      { text: 'GitHub', link: 'https://github.com/ScottKirvan/BojuVue' }
    ],
    // A single flat sidebar, not one keyed per path prefix — VitePress scopes
    // a keyed sidebar to only the matching section, so a Guide page would
    // never show Components (and vice versa), and the auto-generated
    // prev/next links at the bottom of each page wouldn't cross between
    // them either. One list keeps both sections visible everywhere and
    // chains Installation & Setup straight into the component reference.
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Installation & Setup', link: '/guide/installation' },
        ],
      },
      {
        text: 'Components',
        items: [
          { text: 'Overview', link: '/components/' },
          { text: 'BVButton', link: '/components/button' },
          { text: 'BVIconButton', link: '/components/icon-button' },
          { text: 'BVMoreButton', link: '/components/more-button' },
          { text: 'BVPlatformButton', link: '/components/platform-button' },
        ],
      },
      {
        text: 'Appendix',
        items: [
          { text: 'Live Examples', link: '/appendix/examples' },
          { text: 'Troubleshooting', link: '/appendix/troubleshooting' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ScottKirvan/BojuVue' },
      { icon: 'discord', link: 'https://discord.gg/TN6XJSNK5Y' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © Scott Kirvan'
    }
  }
})
