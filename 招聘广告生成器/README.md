# 招聘广告生成器 (Job Description Generator)

一个基于 Next.js 14 和 OpenAI 构建的原生中文招聘广告生成器。该工具旨在通过简单的职位关键信息，利用 AI 动力快速生成专业、吸引人且符合行业标准的招聘文案。

## 🚀 技术栈 (Tech Stack)

本项目采用了现代化的前端技术架构，强调高性能、开发体验和响应式设计。

### 核心框架
- **[Next.js 14](https://nextjs.org/)**: 采用最新的 App Router 架构，利用服务器组件和优化的路由系统提供卓越的性能。
- **[React 18](https://react.dev/)**: 支撑组件化 UI 开发，确保流畅的用户交互体验。
- **[TypeScript](https://www.typescriptlang.org/)**: 全程使用强类型检查，提高代码的健壮性和可维护性。

### AI 集成
- **[OpenAI SDK](https://github.com/openai/openai-node)**: 集成 GPT 模型，负责核心的招聘文案生成逻辑。
- **客户端生成**: 支持用户输入自己的 API Key，所有请求直接从浏览器发送到 OpenAI，保障隐私且支持静态部署方案。

### 样式与 UI
- **[Tailwind CSS](https://tailwindcss.com/)**: 实用优先的 CSS 框架，构建高度定制化的、响应式的现代化界面。
- **[Lucide React](https://lucide.dev/)**: 一套美观的、一致的图标库，增强视觉指引。
- **[React Hot Toast](https://react-hot-toast.com/)**: 用于提供轻量级、响应迅速的状态反馈和错误提示。
- **中文字体优化**: 内置对“楷体”及系统字体的深度优化，确保中文排版的美观度。

### 构建与部署
- **Static Export**: 配置为 `output: 'export'`，允许将项目作为纯静态站点部署到任何 CDN（如 Netlify, Vercel 或 GitHub Pages）。
- **PostCSS/Autoprefixer**: 自动化处理 CSS 浏览器兼容性。

## ✨ 核心功能

- 🤖 **智能生成**：基于职位名称、职责和要求，自动输出结构清晰的招聘简章。
- 📋 **快速复制**：一键将生成的文案复制到剪贴板。
- 📱 **响应式布局**：完美适配 PC、平板和手机屏幕。
- 🎨 **主题美学**：精致的玻璃拟态 (Glassmorphism) 式设计，搭配舒适的色彩方案。
- 🔒 **隐私安全**：API Key 仅存于用户本地浏览器缓存，不经过任何中间服务器。

## 📁 项目结构

```text
├── app/                  # Next.js App Router 路由与组件
│   ├── globals.css       # 全局样式与 Tailwind 配置
│   ├── layout.tsx        # 根布局
│   └── page.tsx          # 核心交互页面
├── utils/                # 工具函数
│   └── openai.ts         # OpenAI API 集成封装
├── public/               # 静态资源
├── tailwind.config.ts    # Tailwind 配置文件
├── tsconfig.json         # TypeScript 配置
└── next.config.js        # Next.js 核心配置
```

## 🛠️ 开始使用

### 环境要求
- Node.js 18.x 或更高版本
- npm 或 yarn

### 本地开发
1. 克隆并进入目录:
   ```bash
   cd 招聘广告生成器
   ```
2. 安装依赖:
   ```bash
   npm install
   ```
3. 运行开发服务器:
   ```bash
   npm run dev
   ```
4. 打开项目: [http://localhost:3000](http://localhost:3000)

### 静态部署 (Netlify 推荐)
本项目已预配置静态导出：
1. 执行构建命令:
   ```bash
   npm run build
   ```
2. 部署 `dist` 目录下的内容。

## 📄 开源协议
MIT
