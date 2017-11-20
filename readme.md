# json-convert
[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)]()
[![Github All Releases](https://img.shields.io/github/downloads/lyc923/yc-task-manager/total.svg)]()

Convert json to json you want

## How to use

install

```
npm install json-convert --save
```

convert json

```
var jsonConver = require('json-conver');
var dataFromAjax = {
    title: 2,
    article: {
        time: 'xxx',
        author: 'x'
    }
};
var convertRule = {
    'title': 'subTitle',
    'article.time': 'time',
    'article.author': 'author'
};


/*
 * the json is converted to:
 * {
 *   title: 2,
 *   time: 'xxx',
 *   author: 'x'
 * }
 */
var result = jsonConvert(dataFromAjax, convertRule);

```

## API

### jsonConver(json, rule)

- json <object> a json you want to convert.
- rule <object> a convert rule


