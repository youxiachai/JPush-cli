
极光推送Node.js 命令行工具

## Usage

### install

```
npm install -g jpush-cli
```

### init

```
jpush init
```

你就会在当前目录看到一个`jpush_key.json` 的文件, 然后填上你的appkey 和 masterSecret 就可以了

### 推送通知

#### 广播

```
jpush -m HelloWorld
```

#### 指定tag


```
jpush -r 2 -v test -m HelloWorld
```

#### 指定alias

```
jpush -r 3 -v test -m HelloWorld
```

### 推送Android 消息

#### 广播

```
jpush -c -k key -m value
```

#### 指定tag

```
jpush -r 2 -v test -c -k key -m HelloWorld
```

#### 指定alias

```
jpush -r 3 -v test -c -k key -m HelloWorld
```

## 支持本项目
如果你觉得这个项目还不错,就请作者喝杯咖啡吧

[![](http://blog.gfdsa.net/img/pay_encourage.png)](http://me.alipay.com/youxilua)