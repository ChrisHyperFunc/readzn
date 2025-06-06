// next-seo.config.js
let BLOG

try {
  // 尝试直接导入配置
  BLOG = require('./blog.config')
} catch (error) {
  console.error('无法加载 blog.config.js，使用默认配置')
  // 提供默认配置以防止错误
  BLOG = {
    title: '默认标题',
    link: 'https://example.com',
    author: '默认作者',
    seo: { keywords: [] }
  }
}

const SEO = {
  titleTemplate: `%s | ${BLOG.title}`,
  defaultTitle: `${BLOG.title} - 发现全球优质免费电子书、漫画绘本、小说与教育学术资源`,
  description: '阅读指南为您精选全球优质免费电子书、漫画绘本、小说、有声读物、学术论文和杂志资源网站，提供便捷的阅读资源导航，让知识触手可及。',
  canonical: BLOG.link,
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: BLOG.link,
    siteName: BLOG.title,
    title: `${BLOG.title} - 发现全球优质免费电子书、漫画绘本、小说与教育学术资源`,
    description: '阅读指南为您精选全球优质免费电子书、漫画绘本、小说、有声读物、学术论文和杂志资源网站，提供便捷的阅读资源导航，让知识触手可及。',
    images: [
      {
        url: `${BLOG.link}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: '阅读指南',
      },
    ],
  },
  twitter: {
    handle: '@阅读指南',
    site: '@阅读指南',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: BLOG.seo.keywords.join(', '),
    },
    {
      name: 'author',
      content: BLOG.author,
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'icon',
      href: '/favicon.png',
    },
    {
      rel: 'icon',
      href: '/favicon.dark.png',
      media: '(prefers-color-scheme: dark)',
    },
  ],
}

module.exports = SEO
