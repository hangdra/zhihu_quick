// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// 'use strict';
//
//

window.onload=function(){
    let switchEle_inner = document.getElementById('switchBtn_inner');

//    var platformHost = ["https://tieba.baidu.com/*","https://www.youtube.com/*"];
    var platformHost = /^http(s)?:\/\/.*(baidu|youtube).com\/.*/;

//    var streamPlatformHost = "*";

    default_checked = true
    default_checked_inner = true
    default_checked_inner_video = true
    //
    init_check_input()
    function init_check_input(){
         chrome.storage.local.get(['web_switchStatus_inner'], function(result) {
            console.log("result",result)
            if (result.web_switchStatus_inner == null){
                console.log("if status: switchStatus_inner null")
                chrome.storage.local.set({'web_switchStatus_inner':default_checked_inner}, function() {});
                if(switchEle_inner.checked!=default_checked_inner){
                    switchEle_inner.click()
                }
            }else{
                switchEle_inner.checked = result.web_switchStatus_inner
                console.log("if status: switchStatus_inner ",result.web_switchStatus_inner)
            }
         });

    }
    chrome.alarms.onAlarm.addListener(function(alarm){
        console.log("pop:ararm"+Date.now()+" "+alarm.name);
//        chrome.tabs.query({ active: true, currentWindow: true , url: "*://"+streamPlatformHost+"/*"}, function(tabs) {
        chrome.tabs.query({ active: true, currentWindow: true} , function(tabs) {

            if (chrome.runtime.lastError){
                console.log("Whoops.. " + chrome.runtime.lastError.message);
            }else{
                if ((tabs != undefined )&& (tabs.length != 0 )){
                    console.log("pop:web thing",tabs)
                    if (platformHost.exec(tabs[0].url)&&platformHost.exec(tabs[0].url)[0]){
                        console.log("pop:web thing running")
                        chrome.tabs.executeScript(
                            tabs[0].id,
                            {file:"scripts/dislike.js"});
                    }
                };
            }
        });
    });

// //switch function onclick
     switchEle_inner.onclick = function(element) {
        console.log("status change switchEle_inner",switchEle_inner.checked);
        console.log(switchEle_inner)
        chrome.storage.local.set({'web_switchStatus_inner': switchEle_inner.checked}, function() {});
        chrome.alarms.create("unlikeEvent", {"when":Date.now()+300});
     };
}

