// this file is used for detail page in category( like  dota2,lol ... etc)

var svgs = document.querySelectorAll("div a svg")
var images = document.querySelectorAll("div .RichContent-cover")
var ads = document.querySelectorAll("div .Pc-feedAd-container")
var rights = document.querySelectorAll("div .GlobalSideBar")
var rights_question = document.querySelectorAll("div .Question-sideColumn")
var question_container =document.querySelectorAll("div .Question-mainColumn")
var question_container_list = document.querySelectorAll("div.Question-main div.ListShortcut")
var main_container =document.querySelectorAll("div .Topstory-mainColumn")
var rights_SearchSideBar =document.querySelectorAll("div .SearchSideBar")
var SearchMain_container =document.querySelectorAll("div .SearchMain")

var video_in =document.querySelectorAll("div.VideoContributionAnswer-video")
var video_in_question =document.querySelectorAll("div.ZVideoItem-video")
var video_in_question2 =document.querySelectorAll("div.RichText-video")
var iframes = document.querySelectorAll("iframe")
var video_inquestion3 = document.querySelectorAll("div.RichText-ZVideoLinkCardContainer")
var images_all = document.querySelectorAll("img")
//ArticleItem-image
var user_self_image = document.querySelectorAll("img.Avatar")
//console.log ("typeof ",typeof(svgs))
var all_objs = []
all_objs = all_objs.concat(svgs,rights,rights_question,rights_SearchSideBar)

var main_container_objs = []
main_container_objs = main_container_objs.concat(main_container,question_container,SearchMain_container,question_container_list)
//console.log(svgs)
show_or_hidden()


var obj_inner = []
obj_inner = obj_inner.concat(images_all,images)

var obj_inner_video = []
obj_inner_video = obj_inner_video.concat(video_in,video_in_question,video_in_question2,video_inquestion3,iframes)

//console.log("user_self_image:"+user_self_image.length)
//console.log("length images_all:"+images_all.length)
function show_or_hidden(){
    console.log("dislike running")
//    chrome.storage.sync.get(['switchStatus'], function(result) {
////    console.log("show_or_hidden result",result)
//        for (var item of ads){
//            item.setAttribute("style","display:none");
//        };
//        for (var item of main_container_objs){
//            for (var item_one of item){
//                item_one.setAttribute("style","width:100%");
//            };
//        };
//        if (result.switchStatus){
//            for (var item of all_objs){
//                for (var item_one of item){
//                    item_one.setAttribute("style","display:none");
//                };
//            };
//
//        }else{
//            for (var item of main_container_objs){
//                for (var item_one of item){
//                        item_one.setAttribute("style","");
//                };
//            };
//            for (var item of all_objs){
//                for (var item_one of item){
//                    item_one.setAttribute("style","");
//                };
//            };
//        };
//    })
    chrome.storage.sync.get(['web_switchStatus_inner'], function(result) {
    console.log("show_or_hidden result",result)
        if (result.web_switchStatus_inner){
            for (var item of obj_inner){
                for (var item_one of item){
                    var b_is_image_self = false
                    for (var item_user_self of user_self_image){
                        if (item_one == item_user_self){
//                            console.log("find same obj")
                            b_is_image_self = true
                        };
                    };
                    if (!b_is_image_self){
                        item_one.setAttribute("style","display:none");
                    };
                };
            };
        }else{
            for (var item of obj_inner){
                for (var item_one of item){
                    item_one.setAttribute("style","");
                };
            };
        };
    });
};



var result_of_status = false
chrome.storage.sync.get(['web_switchStatus_inner'], function(result) {
    result_of_status = result.web_switchStatus_inner
});
var observer = new MutationObserver(mutations => {
                    if(result_of_status){
                        for(let mutation of mutations) {
                            for(let addedNode of mutation.addedNodes) {
                               if (addedNode.nodeName === "IMG") {
                                      addedNode.setAttribute("style","display:none");
                               }
                            }
                        }
                    }
                });



observer.observe(document, { childList: true, subtree: true });
//chrome.storage.sync.get(['unlikes'], function(result) {
//  if(result && result.unlikes && listAllLi){
//    for (var li of listAllLi){
//      if (li && li.querySelector("a") && li.querySelector("a").getAttribute("href")){
//        let roomIdVar = li.querySelector("a").getAttribute("href").substr(1);
//        if (result.unlikes.includes(roomIdVar) ){
//          // alert("here we goinggggg");
//          li.setAttribute("style","display:none");
//          // alert("here we go");
//          console.log("屏蔽成功："+roomIdVar)
//        }
//      }
//    }
//  }
//});
