# eslint-config-growth

> 前端团队统一 eslint config

## 安装

```shell
npm install -D eslint eslint-config-growth
```

## 使用

### .eslintrc.js 中使用

```js
// web端
module.exports = {
  extends: ['eslint-config-growth/web']
}

// 小程序端
module.exports = {
  extends: ['eslint-config-growth/mp']
}
```

### 或 package.json 中使用

```json
{
  "eslintConfig": {
    "extends": ["eslint-config-growth/web"]
  }
}

{
  "eslintConfig": {
    "extends": ["eslint-config-growth/mp"]
  }
}
```
