# WKWebVIew前端调用文档
***此文档仅限于IOS升级WKWebVIew后有效***  

    所有方法都挂载到JiaAppObj对象上，这个对象会在wapCommon.js创建
    没有引用wapCommon.js的自行创建
## **跳转**
### skipto
跳转函数  
```
JiaAppObj.skipto({
    url:url,//跳转的url, 多个环境下不同url, 请自行判断
    is_steep:is_steep,// 是否沉浸式页面, 默认0
    is_dark:is_dark,// 是否滑动到1/3处头部变深色, 此参数基于is_steep=1, 默认0
    is_wkweb:is_wkweb// 是否使用wkwebview框架, 默认1
});
```  

---

## 原生交互操作 ( WKNativeHandler )  

### backforward  
手动触发返回上一页
```
JiaAppObj.backforward({
    city:'shanghai'
});
```
参数为上一页所需要的数据，如不需要传输数据，则不传。在上一页中通过backAccept来接收数据：  
```
JiaAppObj.backAccept = function(obj){
    // obj即为返回前所传数据
    alert(JSON.stringify(obj));
}
```

### appShareFn  
传输分享数据方法, 用户分享的时候原生端调用, 如存在此方法, 则页面默认显示分享icon, 不用手动触发shareEnable  
[jia_share.js](https://mued2.jia.com/js/mobile/activity/jia_share.min.js)中实现
```
JiaAppObj.appShareFn = function(){
        return {
            className:"WKNativeHandler",
            functionName:"share",
            parameter:{
                title:'默认分享标题',
                image:'默认分享图片',
                description:'默认分享描述',
                link:'m.jia.com',
                channel:'jia',
                callback:'shareCallback',//JiaAppObj上的方法
                platform:''//来源：安卓 IOS
            }
        }
    }
```

### shareCallback  
分享回调函数, 此方法可以通过appShareFn里面的callback自行命名, 建议默认shareCallback
```
JiaAppObj.shareCallback = function(success,code,platfrom){
        //true,200,AppStore
    }
```

### shareEnable
是否显示分享按钮  
```
JiaAppObj.shareEnable();
```

### callNumber
拨打电话。 a标签的tel也支持  
```
JiaAppObj.callNumber(123456);
```
### wxPay
支付函数
```
JiaAppObj.wxPay({
    json:'',//必传 支付json串
    callback:''//非必传 支付回调 默认wxPayCallback
});
```

### showPushDialog
app推送
```
JiaAppObj.showPushDialog(33);
```

### comment
未知, 特定页面原生端会自行调用, 暂没测试
```
JiaAppObj.comment({
    comment_id:'',
    comment_user_id:'',
    comment_user_name:''
});
```

### showCommentList
未知, 特定页面原生端会自行调用, 暂没测试
```
JiaAppObj.showCommentList();
```

### setupNavgationBarButtonItem
设置头部显示特定元素, 如城市
```
JiaAppObj.setupNavgationBarButtonItem({
    type:'h5_local_city',
    title:'上海'
});
```

### logout
退出登录
```
JiaAppObj.logout();
```

### getCurrentPosition
获取经纬度, 参数为回调函数名 默认 getCurrentPositionCallback  
```
JiaAppObj.getCurrentPosition('getCurrentPositionCallback');
```
```
JiaAppObj.getCurrentPositionCallback = function(a,lat,lng){
    // true, 纬度, 经度
    alert(lat+','+lng);
};
```
***

## TJJ信息 ( WKNativeTJJ )  

### _getPageID
```
执行方法
JiaAppObj._getPageID();
```
```
接收方法
JiaAppObj.getPageID = function(pageID){
    alert(pageID);
};
```

### _getEventID
```
执行方法
JiaAppObj._getEventID();
```
```
接收方法
JiaAppObj.getEventID = function(eventID){
    alert(eventID);
};
```

### _getObjectID
```
执行方法
JiaAppObj._getObjectID();
```
```
接收方法
JiaAppObj.getObjectID = function(objectID){
    alert(objectID);
};
```

### _getObjectSch
```
执行方法
JiaAppObj._getObjectSch();
```
```
接收方法
JiaAppObj.getObjectSch = function(objectSch){
    alert(objectSch);
};
```
***

## 用户信息 ( WKNativeAppInfo )

### _getSessionId
```
执行方法
JiaAppObj._getSessionId();
```
```
接收方法
JiaAppObj.getSessionId = function(sessionId){
    alert(sessionId);
};
```

### _getUserId
```
执行方法
JiaAppObj._getUserId();
```
```
接收方法
JiaAppObj.getUserId = function(userId){
    alert(userId);
};
```

### _getNickName
```
执行方法
JiaAppObj._getNickName();
```
```
接收方法
JiaAppObj.getNickName = function(nickName){
    alert(nickName);
};
```

### _getPortrait
```
执行方法
JiaAppObj._getPortrait();
```
```
接收方法
JiaAppObj.getPortrait = function(portrait){
    alert(portrait);
};
```

### _getDeviceIMEI
```
执行方法
JiaAppObj._getDeviceIMEI();
```
```
接收方法
JiaAppObj.getDeviceIMEI = function(deviceIMEI){
    alert(deviceIMEI);
};
```

### _getPlatform
```
执行方法
JiaAppObj._getPlatform();
```
```
接收方法
JiaAppObj.getPlatform = function(platform){
    alert(platform);
};
```

### _getChannel
```
执行方法
JiaAppObj._getChannel();
```
```
接收方法
JiaAppObj.getChannel = function(channel){
    alert(channel);
};
```

### _getAppVersion
```
执行方法
JiaAppObj._getAppVersion();
```
```
接收方法
JiaAppObj.getAppVersion = function(appVersion){
    alert(appVersion);
};
```

### _getId
```
执行方法
JiaAppObj._getId();
```
```
接收方法
JiaAppObj.getId = function(id){
    alert(id);
};
```
### _getAppId
```
执行方法
JiaAppObj._getAppId();
```
```
接收方法
JiaAppObj.getAppId = function(appId){
    alert(appId);
};
```
### _getInfo
```
执行方法
JiaAppObj._getInfo();
```
```
接收方法
JiaAppObj.getInfo = function(info){
    alert(info);
};
```

[测试页面](https://m.jia.com/page/app_test.html)
