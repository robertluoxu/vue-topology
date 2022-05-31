# vue-topology 工作流程图


## Project setup

```
npm i
```

### 运行

```
npm serve
```

### 压缩和编译

```
npm build
```

### 单元测试

```
npm test:unit
```

### lint和fixes文件

```
npm lint
```



### 项目启动预览模式配置：

```json
// public/config.json

{
    "preview": true   // true: 预览模式， false：编辑模式
}

```

### 预览模式下默认加载的流程图json：

```json
// public/node.json

{
    "pens": [
        {
            "type": 0,
            "rect": {
                "x": 478,
                "y": 159,
                "width": 120,
                "height": 40,
         ...
```



