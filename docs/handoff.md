# 下个会话交接说明

## 当前目标

建设个人实验室网站“硅基漫游指南曾”，用于展示 AI 创作、个人实验和 lab 项目。下一步重点是把第一个项目 `2605-和平博弈` 整理并放到网站上。

## 当前进度

已经完成：

- 明确网站定位：个人实验室 / AI 创作与实验展示空间。
- 确认网站名称：硅基漫游指南曾。
- 确认首页一句话介绍暂定为：
  - 一间不太安分的硅基实验室，收容被 AI 点燃的怪点子和意外产物。
- 确认第一版栏目：
  - 首页。
  - 项目。
  - 关于/联系。
- 确认公众号二维码未来放在关于/联系页。
- 建立 Astro 技术原型。
- 建立 GitHub 仓库并完成同步。
- 完成 Cloudflare 自动部署。

线上地址：

- https://silicon-roaming-guide-zeng.zengli100.workers.dev

GitHub 仓库：

- https://github.com/sunmmy/silicon-roaming-guide-zeng

## 下个会话第一任务

把第一个项目 `2605-和平博弈` 放到网站上。

这个任务建议先做内容整理，再改页面：

1. 阅读 `2605-和平博弈` 项目资料。
2. 提炼网站展示文案。
3. 选出可以展示的截图、报告、可视化或链接。
4. 把项目内容整理成 Markdown。
5. 改造网站项目页，让它从 Markdown 读取项目。
6. 本地构建检查。
7. 同步到 GitHub，等待 Cloudflare 自动部署。

## 下个会话需要优先阅读的文件

个人网站项目内：

- `AGENT.md`
- `docs/requirements.md`
- `docs/infrastructure-plan.md`
- `docs/update-guide.md`
- `docs/progress.md`
- `docs/next-steps.md`
- `docs/tech-plan.md`
- `src/data/profile.ts`
- `src/pages/projects.astro`
- `src/pages/index.astro`
- `src/pages/about.astro`
- `content/projects/_template.md`

第一个项目资料：

- `/Users/caohao/Documents/lab/2605-和平博弈/README.md`
- `/Users/caohao/Documents/lab/2605-和平博弈/static/index.html`
- `/Users/caohao/Documents/lab/2605-和平博弈/static/styles.css`
- `/Users/caohao/Documents/lab/2605-和平博弈/static/app.js`
- `/Users/caohao/Documents/lab/2605-和平博弈/reports/`
- `/Users/caohao/Documents/lab/2605-和平博弈/visuals/`

## 和平博弈项目初步定位

项目名：

- 和平博弈

副标题：

- 自动化 LLM 信任摧毁模拟器

类型：

- AI agent 模拟。
- 政治叙事 / 信任机制实验。
- 个人研究型项目。

从 README 提炼的核心描述：

- 这是一个质性 agent-based simulation 原型。
- 它不做定量预测，也不把任何群体本质化。
- 它用 LLM 驱动六个现实政治位置的群体智能体。
- 它观察同一事件如何被不同位置解释，以及信任如何在解释链条中被消耗。

建议展示重点：

- 这是一个严肃议题和 AI 实验结合的个人项目。
- 重点不在“预测现实”，而在模拟解释链条、信任消耗和修复机制。
- 可以展示项目界面、实验日志、修复机制报告和可视化材料。

## 当前技术状态

项目是 Astro 静态网站。

常用命令：

```bash
npm run dev
npm run build
git status
git add .
git commit -m "message"
git push
```

Cloudflare 会在 `main` 分支更新后自动部署。

## 下个会话建议开场提示

可以直接对新会话说：

> 请阅读 `/Users/caohao/Documents/lab/2605-个人网站/docs/handoff.md`，并继续帮我把 `/Users/caohao/Documents/lab/2605-和平博弈` 作为第一个项目放到“硅基漫游指南曾”网站上。先不要急着改页面，请先阅读相关项目资料，帮我整理项目展示文案和需要展示的素材清单。

