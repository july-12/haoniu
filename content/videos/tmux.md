---
title: 'Tmux'
date: 2020-08-07T20:31:48+08:00
draft: true
author: 'tanyb'
tags: ['ux', 'javascript', 'react', 'more']
layout: 'single.video'
coverVideo: 'bg2.png'
playlist: [{ name: 'tmux', duration: 80,  src: "test.mp4", thumbnail: "bg2.png" }]
---

{{< video_player test.mp4  >}}

## 介绍

tmux 是一款非常优秀的图形窗口控制器，能够让你自己终端操作的过程中游刃有余的新增删除，调整大小，切换等操作。

tmux 同时能支持非常优秀的在线人工编译能力。

## 安装

```bash
$ brew install tmux
```

## Demo

### html

```html
<video
    class="video-js video-box"
    controls
    poster="//vjs.zencdn.net/v/oceans.png"
    src="{{ $.Site.Params.cdnUrl }}/videos/{{ .Get 0 }}"
>
    <p class="vjs-no-js">你的浏览器不支持 <code>video</code> 标签.</p>
</video>
```

### css

```css
.video-box {
    padding: 10px;
    border: none;
    outline: none;
}
```

### js

```javascript
const App = (props) => {
    return <div className="hello">{props.name}</div>;
};
```
