# stylelint-config-growth

> 前端团队统一 stylelint config

## 安装

```shell
npm install stylelint stylelint-config-growth
```

## 使用

### .stylelintrc.js 中使用

```js
// web端
module.exports = {
  extends: ['stylelint-config-growth/web']
}

// 小程序端
module.exports = {
  extends: ['stylelint-config-growth/mp']
}
```

### 或 package.json 中使用

```json
{
  "stylelint": {
    "extends": ["stylelint-config-growth/web"]
  }
}

{
  "stylelint": {
    "extends": ["stylelint-config-growth/mp"]
  }
}
```
