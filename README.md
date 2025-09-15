<img src="https://gcore.jsdelivr.net/gh/ChrisHyperFunc/static-storage@main/img/default.png" width="50" height="50"> [https://readzn.com/](https://readzn.com/)

English | [简体中文](README_ZH.md)

# Readzn

📚 A static knowledge navigation website built with Notion and Next.js, focusing on organizing and discovering quality reading resources. Achieve zero-cost maintenance of the knowledge base system through automated synchronization of Notion database content.

## Background
With the explosive growth of information, efficiently organizing and managing knowledge resources has become a pain point. Readzn combines Notion's flexible content management with Next.js's high-performance rendering to create an out-of-the-box knowledge navigation solution.

## Technical Architecture
- **Frontend Framework**: Next.js 12 (SSG Static Generation)
- **State Management**: React Context + useReducer
- **Styling Solution**: Tailwind CSS + PostCSS
- **Content Management**: Notion Official API + react-notion-x
- **Deployment Platform**: Vercel Edge Network

## Highlights ✨

**🚀 &nbsp;Fast and Responsive**
- Fast page rendering and responsive design
- Efficient static generation compiler

**🤖 &nbsp;Instant Deployment**
- Deploy on Vercel in minutes
- Incremental regeneration with no need to redeploy after updating Notion content

**🚙 &nbsp;Feature Complete**
- Comments system, full-width pages, quick search, and tag filtering
- RSS feed, analytics, Web Vitals, and more features

**🎨 &nbsp;Easy Customization**
- Rich configuration options, supporting both English & Chinese interfaces
- Built with Tailwind CSS for easy style customization

**🕸 &nbsp;SEO Friendly**
- Optimized URL structure
- Complete SEO configuration

## Quick Start

### Prerequisites
```bash
node >=16.13.0
pnpm >=7.0.0
```

### Configuration
1. Copy the [Notion template: Readzn Tempate](https://ionized-belly-695.notion.site/1c694aed65db8009b842f609cca39098?v=1c694aed65db81759ffa000cf3d57a46)
2. Configure environment variables when deploying on Vercel:

```env
# Required
NOTION_PAGE_ID="your_32char_page_id"  # Get from Notion page URL

# Optional
NOTION_ACCESS_TOKEN="secret_xxx"      # For private database access
GA_MEASUREMENT_ID="G-XXXXXXXXXX"      # Google Analytics ID
```

### Local Development
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Docker Deployment
```bash
# Set environment variables
export NOTION_PAGE_ID=xxx
export IMAGE=readzn:latest

# Build Docker image
docker build -t ${IMAGE} --build-arg NOTION_PAGE_ID .

# Run container
docker run -d --name readzn -p 3000:3000 -e NOTION_PAGE_ID=${NOTION_PAGE_ID} ${IMAGE}
```

## Contributing

Contributions are welcome in the following ways:
1. Submit issues at [Issues](https://github.com/ChrisHyperFunc/readzn/issues)
2. Follow [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/) branching model
3. Before submitting a Pull Request, please run:
```bash
pnpm lint    # ESLint check
pnpm format  # Prettier formatting
```

## FAQ

## License

MIT License © 2025 [Readzn]

## Contact Us
📧 Feedback Email: hyperfunc@protonmail.com
🐞 Bug Report: https://github.com/ChrisHyperFunc/readzn/issues

## Special Thanks
This project is built based on [nobelium](https://github.com/craigary/nobelium), special thanks to the original author for their outstanding work.
