// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// 'use strict';
//
//

window.onload=function(){
    let switchEle_inner = document.getElementById('switchBtn_inner');

    var streamPlatformHost = "*";

    default_checked = true
    default_checked_inner = true
    default_checked_inner_video = true
    //
    init_check_input()
    function init_check_input(){
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


//
// //switch function onclick

     switchEle_inner.onclick = function(element) {
        console.log("status change switchEle_inner",switchEle_inner.checked);
        console.log(switchEle_inner)
        chrome.storage.sync.set({switchStatus_inner: switchEle_inner.checked}, function() {});
        chrome.alarms.create("unlikeEvent", {"when":Date.now()});
     };

}

