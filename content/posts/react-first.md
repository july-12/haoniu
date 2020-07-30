---
title: "React First"
date: 2020-07-29T10:56:46+08:00
draft: false
summary: this is about react intro
myname: "tanyb"
tags: ['js', 'css']
moods: ['happy']
---

## Other

{{% test color="red" %}}
this is **inner**  content
{{% /test %}}

## Intro

    this is nice framework


## Usage

```bash
    $ npm install react react-dom
```

### Demo

{{< highlight javascript >}}
    const container = document.getElementById('app')
    const App = () => {
        return <div> this is app </div>
    }
    render(<App />, container)
{{<  /highlight >}}

```javascript
    const container = document.getElementById('app')
    const App = () => {
        return <div> this is app </div>
    }
    render(<App />, container)
```
