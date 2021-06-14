// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// 'use strict';
//
//
window.onload=function(){
     let switchEle = document.getElementById('switchBtn');
     let switchEle_inner = document.getElementById('switchBtn_inner');
     let switchBtn_inner_video = document.getElementById('switchBtn_inner_video');


     default_checked = true
     default_checked_inner = false
     default_checked_inner_video = true
//
    init_check_input()
    function init_check_input(){
         chrome.storage.sync.get(['switchStatus'], function(result) {
            if (result.switchStatus == null){
                chrome.storage.sync.set({switchStatus:default_checked}, function() {});
                if(switchEle.checked!=default_checked){
                    switchEle.click()
                }
            }else{
                switchEle.checked = result.switchStatus
            }
         });
         chrome.storage.sync.get(['switchStatus_inner'], function(result) {
            if (result.switchStatus_inner == null){
                chrome.storage.sync.set({switchStatus_inner:default_checked_inner}, function() {});
                if(switchEle_inner.checked!=default_checked_inner){
                    switchEle_inner.click()
                }
            }else{
                switchEle_inner.checked = result.switchStatus_inner
            }
         });
         chrome.storage.sync.get(['switchBtn_inner_video'], function(result) {
             if (result.switchBtn_inner_video == null){
                 chrome.storage.sync.set({switchBtnStatus_inner_video:default_checked_inner_video}, function() {});
                 if(switchBtn_inner_video.checked!=default_checked_inner_video){
                     switchBtn_inner_video.click()
                 }
             }else{
                 switchBtn_inner_video.checked = result.switchBtn_inner_video
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


//
// //switch function onclick
     switchEle.onclick = function(element) {
        console.log("status change switchEle",switchEle.checked);
        console.log(switchEle)
        chrome.storage.sync.set({switchStatus: switchEle.checked}, function() {});
        chrome.alarms.create("unlikeEvent", {"when":Date.now()});
     };
     switchEle_inner.onclick = function(element) {
        console.log("status change switchEle_inner",switchEle_inner.checked);
        console.log(switchEle_inner)
        chrome.storage.sync.set({switchStatus_inner: switchEle_inner.checked}, function() {});
        chrome.alarms.create("unlikeEvent", {"when":Date.now()});
     };
    switchBtn_inner_video.onclick = function(element) {
     console.log("status change switchBtn_inner_video",switchBtn_inner_video.checked);
     console.log(switchBtn_inner_video)
     chrome.storage.sync.set({switchBtnStatus_inner_video: switchBtn_inner_video.checked}, function() {});
     chrome.alarms.create("unlikeEvent", {"when":Date.now()});
    };
}

