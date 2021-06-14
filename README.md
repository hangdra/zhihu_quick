# 知乎quick

[![status](https://img.shields.io/badge/status-stable-green.svg)](https://github.com/tychxn/jd-assistant)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![star, issue](https://img.shields.io/badge/star%2C%20issue-welcome-brightgreen.svg)](https://github.com/tychxn/jd-assistant)


![知乎quick][logo]

[logo]: https://user-images.githubusercontent.com/10275628/120307519-aa0a8100-c305-11eb-9d5f-3be586a0d623.png "Logo of 知乎quick"

  给 [知乎](https://www.zhihu.com/) 网页用户提供一款[Chrome 浏览器](https://www.google.cn/intl/zh-CN/chrome/) 扩展程序，屏蔽广告，并提供极精简模式。

### zhihu信息越来越少的今天，还有广告？？？？一个chrome 浏览器扩展程序帮助你解决烦恼！！
![知乎quick](https://user-images.githubusercontent.com/10275628/120310743-4d10ca00-c309-11eb-9414-d81d7a672e35.png)
### 简介

  本程序为 [Chrome 浏览器](https://www.google.cn/intl/zh-CN/chrome/) 的扩展插件，给用[知乎](https://www.zhihu.com/) 的用户提供一款浏览器扩展程序，屏蔽广告，并且可以开启极速预览，插件内所有操作均可撤销。

### 功能

1. 屏蔽广告。
2. 开启极速模式(图片,视频不再展示提升页面内文章容量，去除知乎内置右边栏)。
3. 关闭极速模式。
3. 插件借助 [chrome.storage API](https://developer.chrome.com/apps/api_index) 可跨设备使用而无需再次设置，1 次屏蔽，终生不见。

## 目录

* [运行环境](#运行环境)
* [可能需要的第三方软件](#可能需要的第三方软件)
* [下载安装与使用](#下载安装与使用)
* [使用教程图文版本](#使用教程图文版本)
* [依赖的权限](#依赖的权限)
* [或许会添加的功能与更新](#或许会添加的功能与更新)

### <div id="env">运行环境:</div>

- [Chrome 浏览器](https://www.google.cn/intl/zh-CN/chrome/) \(<https://www.google.cn/intl/zh-CN/chrome/>\)

### <div id="third">可能需要的第三方软件:</div>

- \[可选\] \[ [360压缩](https://yasuo.360.cn/) \]
- \[可选\] \[ [Git BASH](https://gitforwindows.org/) \]


### <div id="howToUse">下载安装与使用:</div>

>- 下载  
>>1. 通过 \[[Git BASH](https://gitforwindows.org/) \]克隆或者点击 [Download Zip](https://github.com/hangdra/zhihu_ads_remove/archive/refs/heads/main.zip) 下载本项目。  
>
>- 安装  
>>2. 在 [Chrome 浏览器](https://www.google.cn/intl/zh-CN/chrome/)  地址栏输入[chrome://extensions](chrome://extensions) 进入扩展程序页面。
>>3. 打开<kbd>开发者模式</kbd>（扩展程序页面右上角）。    
>>4. 点击<kbd>加载已解压的扩展程序</kbd>并选择项目下载目录  （例如：F:\code\zhihu_ads_remove）。    
>
>- 使用     
>>5. **左键点击**地址栏右侧<kbd>知乎quick</kbd>![知乎quick](https://user-images.githubusercontent.com/10275628/120307519-aa0a8100-c305-11eb-9d5f-3be586a0d623.png "Logo of 知乎quick")按钮 。    
>>6. 按钮如果为打开模式，那么自动对所有图片进行移除，关闭按钮图片复现。  

### <div id="howToUseInStoryMode">使用教程图文版本:</div>

- ✖️ 还未支持

### <div id="privilege">软件功能与依赖的权限:</div>

- 读取本地数据 [✘]
- 采集用户数据 [✘]
- 外网通信 [✘]
- 使用[chrome.storage API](https://developer.chrome.com/apps/api_index) 存储，检索，追踪用户插件内设置数据 [✔]
- 插件可进行活动的域名：[知乎](https://www.zhihu.com/)\(<https://www.zhihu.com/>\) [✔]
- 使用[chrome.tts API](https://developer.chrome.com/apps/api_index) 进行语音提示 [✔]
- 使用[chrome.webNavigation API](https://developer.chrome.com/apps/api_index) 获取页面状态，便于在页面加载完成后与页面交互 [✔]
- 使用[chrome.alarms API](https://developer.chrome.com/apps/api_index) 进行代码调度，延迟或直接运行代码逻辑 [✔]
- 以上未提到但程序中使用的权限: [activeTab API、declarativeContent API、webRequest](https://developer.chrome.com/apps/api_index) [✔]
- 其它 [✘]

### <div id="never">或许会添加的功能与更新:</div>

- [ ] 国际化（英文播报，日文播报 等)
- [ ] 优化

[Download Zip]: (/hangdra/zhihu_ads_remove/archive/master.zip)
[360压缩]: (https://yasuo.360.cn/)
[Git BASH]: (https://gitforwindows.org/)
[知乎]: (https://www.zhihu.com/)
[Chrome 浏览器]: (https://www.google.cn/intl/zh-CN/chrome/)


