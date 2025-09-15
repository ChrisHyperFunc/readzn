<img src="https://gcore.jsdelivr.net/gh/ChrisHyperFunc/static-storage@main/img/default.png" width="50" height="50">[https://readzn.com/](https://readzn.com/)


[English](README.md) | 简体中文

# Readzn

📚 基于Notion和Next.js构建的知识型网站，致力于打造解决阅读烦恼的一站式平台。通过自动化同步Notion数据库内容，实现零成本维护的知识库系统。特别适合博客、文档站点和个人知识库的搭建。

## 项目背景
随着信息爆炸式增长，如何高效组织和管理知识资源成为痛点。Readzn结合Notion的灵活内容管理和Next.js的高性能渲染，打造开箱即用的知识导航解决方案。

## 技术架构
- **前端框架**: Next.js 12 (SSG静态生成)
- **状态管理**: React Context + useReducer
- **样式方案**: Tailwind CSS + PostCSS
- **内容管理**: Notion官方API + react-notion-x
- **部署平台**: Vercel边缘网络

## 特性亮点 ✨

**🚀 &nbsp;快速响应**
- 快速页面渲染和响应式设计
- 高效的静态生成编译器

**🤖 &nbsp;即时部署**
- 在Vercel上几分钟内完成部署
- 增量重生成，无需在更新Notion内容后重新部署

**🚙 &nbsp;功能完备**
- 评论系统、全宽页面、快速搜索和标签筛选
- RSS订阅、数据分析、Web Vitals等更多功能

**🎨 &nbsp;易于定制**
- 丰富的配置选项，支持中英文界面
- 基于Tailwind CSS构建，方便自定义样式

**🕸 &nbsp;友好URL和SEO**
- 优化的URL结构
- 完善的SEO配置

## 快速开始

### 环境准备
```bash
node >=16.13.0
pnpm >=7.0.0
```

### 配置说明
1. 复制[Notion模板: Readzn Tempate](https://ionized-belly-695.notion.site/1c694aed65db8009b842f609cca39098?v=1c694aed65db81759ffa000cf3d57a46)
2. 在Vercel部署时配置环境变量：

```env
# 必需配置
NOTION_PAGE_ID="your_32char_page_id"  # 在Notion页面URL中获取

# 可选配置
NOTION_ACCESS_TOKEN="secret_xxx"      # 用于私有数据库访问
GA_MEASUREMENT_ID="G-XXXXXXXXXX"      # 谷歌分析ID
```

### 本地开发
```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

### Docker部署
```bash
# 设置环境变量
export NOTION_PAGE_ID=xxx
export IMAGE=readzn:latest

# 构建Docker镜像
docker build -t ${IMAGE} --build-arg NOTION_PAGE_ID .

# 运行容器
docker run -d --name readzn -p 3000:3000 -e NOTION_PAGE_ID=${NOTION_PAGE_ID} ${IMAGE}
```

## 贡献指南

欢迎通过以下方式参与贡献：
1. 在[Issues](https://github.com/ChrisHyperFunc/readzn/issues)提交问题
2. 遵循[Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)分支规范
3. 提交Pull Request前请执行：
```bash
pnpm lint    # ESLint检查
pnpm format  # Prettier格式化
```

## 常见问题


## 许可证

MIT License © 2025 [Readzn]

## 联系我们
📧 反馈邮箱：hyperfunc@protonmail.com
🐞 Bug提交：https://github.com/ChrisHyperFunc/readzn/issues

## 特别感谢
本项目基于[nobelium](https://github.com/craigary/nobelium)项目构建，特别感谢原作者的杰出工作。
