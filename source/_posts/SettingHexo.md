---
title: Hexo的设置
mathjax: false
categories:
  - 随记
date: 2020-03-12 12:09:17
tags:
---

---
## install basic 
```
install node.js
npm install -g hexo-cli
install pandoc
```

---
如果是从git pull下来的老项目：

```
npm install
```
---
如果是新建项目：

```
hexo init
npm install hexo-deployer-git --save
npm uninstall hexo-renderer-marked --save
npm install hexo-renderer-pandoc --save
```

## NexT
```
git clone https://github.com/theme-next/hexo-theme-next themes/next
```
> _config.yml
>``` yml
>theme: next
>```

---
## unique path
```
npm install hexo-unique-post-path --save
```
> _config.yml
>``` yml
>unique_post_path:
>  type: new2_post_title
>```

```
hexo new2 "blog title"
```