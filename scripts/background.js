
var initSwitchStatus = false;
var unlikeExpireInMilsecL = 30*24*60*60*1000;
var streamPlatformHost = "www.zhihu.com";
var PlatformHost=["video.zhihu.com","www.zhihu.com"]
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
    chrome.tabs.query({ active: true, currentWindow: true , url: "*://"+streamPlatformHost+"/*"}, function(tabs) {
        if (chrome.runtime.lastError){
            console.log("Whoops.. " + chrome.runtime.lastError.message);
        }else{
            if ((tabs != undefined )&& (tabs.length != 0 )){
                chrome.tabs.executeScript(
                    tabs[0].id,
                    {file:"scripts/dislike.js"}
                );
            };
       }
     });
});

rule_show_action_button ={
          conditions: [new chrome.declarativeContent.PageStateMatcher(
                {pageUrl: {hostEquals: streamPlatformHost},})],
                actions: [new chrome.declarativeContent.ShowPageAction()]}
    //set listener at the begging of extension installed
chrome.runtime.onInstalled.addListener(function() {
  console.log('onInstalled over.');
  chrome.storage.sync.set({switchStatus: true}, function() {});
  chrome.storage.sync.set({switchStatus_inner: true}, function() {});
  chrome.storage.sync.set({switchBtnStatus_inner_video: true}, function() {});
  chrome.storage.sync.set({voice: initVoice}, function() {});
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([rule_show_action_button]);
  });
});



     //output if url host is demand
function hostEquals(inputUrl,tarUrls){
    var find = false;
    for (tarUrl of tarUrls){
        if (inputUrl && tarUrl){
            var reg = /^http(s)?:\/\/(.*?)\//;
            console.log("inputUrl:",inputUrl,"tarUrls",tarUrls)
            console.log("tarUrl:"+tarUrl+" inputUrl:"+inputUrl+" sencond:"+reg.exec(inputUrl)[2]);
            if (reg.exec(inputUrl)&&reg.exec(inputUrl)[2]){
                if(reg.exec(inputUrl)[2]==tarUrl){
                    find = true;
                }
            }
        }
    }

    console.log("find:",find)
    return find;
}

function add_clear_alarms(e){
    console.log("add_clear_alarms run")
    console.log(e);
    if (hostEquals(e.url, PlatformHost) ) {
        console.log("add_clear_alarms 匹配知乎。");
        for(var i=1;i<100;i++){
            chrome.alarms.create("add_clear_alarms"+i, {"when":Date.now()+50*i});
        }

    }
}

// listen dom loaded and when its cirtical host , we need to put switch on those streamers.
chrome.webNavigation.onCompleted.addListener(function(e) {
    console.log("webNavigation:",e);
    if (hostEquals(e.url, PlatformHost) ) {
    // voicecTalk("匹配斗鱼。");
        console.log("webNavigation 匹配知乎。");
        for(var i=1;i<100;i++){
//                console.log("webNavigation 匹配知乎。createing alarms:"+i);
            chrome.alarms.create("unlikeEvent"+i, {"when":Date.now()+50*i});
        }
     }
});

chrome.webRequest.onCompleted.addListener(add_clear_alarms,{urls:["*://"+streamPlatformHost+"/*"]})



