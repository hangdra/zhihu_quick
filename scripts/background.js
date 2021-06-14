
    var initSwitchStatus = false;
    var unlikeExpireInMilsecL = 30*24*60*60*1000;
    var streamPlatformHost = "www.zhihu.com";
    var initVoice = true;

    //if need voice talk
    function voicecTalk(voiceStr){
      console.log('voicecTalk function');
      chrome.storage.sync.get(['voice'], function(result) {
        if(result && result.voice){
          console.log('voicecTalk'+result.voice);
          chrome.tts.speak(voiceStr);
        }
      });
    }
    chrome.alarms.onAlarm.addListener(function(alarm){
      console.log("ararm"+Date.now()+" "+alarm.name);
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {file:"scripts/dislike.js"}
          );
      });
    });

rule_show_action_button ={
          conditions: [new chrome.declarativeContent.PageStateMatcher(
                {pageUrl: {hostEquals: "www.zhihu.com"},})],
                actions: [new chrome.declarativeContent.ShowPageAction()]}
    //set listener at the begging of extension installed
chrome.runtime.onInstalled.addListener(function() {
  console.log('onInstalled over.');
  chrome.storage.sync.set({switchStatus: true}, function() {});
  chrome.storage.sync.set({switchStatus_inner: false}, function() {});
  chrome.storage.sync.set({switchBtnStatus_inner_video: false}, function() {});
  chrome.storage.sync.set({voice: initVoice}, function() {});
  chrome.storage.sync.set({unlikeExpireInMilsec: unlikeExpireInMilsecL}, function() {
    console.log('init over.');
    voicecTalk("插件 知 初始化成功。");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([rule_show_action_button]);
  });
});



     //output if url host is demand
    function hostEquals(inputUrl,tarUrl){
      if (inputUrl && tarUrl){
        var reg = /^http(s)?:\/\/(.*?)\//;
//        console.log("tarUrl:"+tarUrl+" inputUrl:"+inputUrl+" sencond:"+reg.exec(inputUrl)[2]);
        if (reg.exec(inputUrl)&&reg.exec(inputUrl)[2]){
          return reg.exec(inputUrl)[2]==tarUrl;
        }{
          return false;
        }
      }
    }

    function add_clear_alarms(e){
          console.log(e);
           if (hostEquals(e.url, streamPlatformHost) ) {
             console.log("匹配知乎。");
             for(var i=1;i<100;i++){
               chrome.alarms.create("unlikeEvent"+i, {"when":Date.now()+50*i});
             }

         }
    }

    // listen dom loaded and when its cirtical host , we need to put switch on those streamers.
    chrome.webNavigation.onCompleted.addListener(function(e) {
      console.log(e);
           if (hostEquals(e.url, streamPlatformHost) ) {
             // voicecTalk("匹配斗鱼。");
             console.log("webNavigation 匹配知乎。");
             for(var i=1;i<100;i++){
               chrome.alarms.create("unlikeEvent"+i, {"when":Date.now()+50*i});
             }

         }});

chrome.webRequest.onCompleted.addListener(add_clear_alarms, {urls: ["*://"+streamPlatformHost+"/*"]})



