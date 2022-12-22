// this file is used for detail page in category( like  dota2,lol ... etc)

var svgs = document.querySelectorAll("div a svg")
var images = document.querySelectorAll("div .RichContent-cover")
var top_tags = document.querySelectorAll("div ul li.Tabs-item.AppHeader-Tab.Tabs-item--noMeta:not(:first-child)")
var top_right_settings = document.querySelectorAll("div.AppHeader-userInfo div div.Popover button")
var top_right_settings2 = document.querySelectorAll("div.AppHeader-userInfo > div > a")
var navs = document.querySelectorAll("nav.TopstoryTabs.TopstoryPageHeader-tabs")

var ads = document.querySelectorAll("div .Pc-feedAd-container")
var rights = document.querySelectorAll("div .GlobalSideBar")
var rights_question = document.querySelectorAll("div .Question-sideColumn")
var right_side_div = document.querySelectorAll("div .Question-sideColumn")
var right_side_div2 = document.querySelectorAll("div.Topstory-container > div[data-za-detail-view-path-module]")
var question_container =document.querySelectorAll("div .Question-mainColumn")
var question_container_list = document.querySelectorAll("div.Question-main div.ListShortcut")
var main_container =document.querySelectorAll("div .Topstory-mainColumn")
var rights_SearchSideBar =document.querySelectorAll("div .SearchSideBar")
var SearchMain_container =document.querySelectorAll("div .SearchMain")

var video_in =document.querySelectorAll("div.VideoContributionAnswer-video")
var video_in_question =document.querySelectorAll("div.ZVideoItem-video")
var video_in_question2 =document.querySelectorAll("div.RichText-video")
var iframes = document.querySelectorAll("iframe")
var video_in_question3 = document.querySelectorAll("div.RichText-ZVideoLinkCardContainer")
var video_in_question4 = document.querySelectorAll("div.VideoAnswerPlayer-video")

var images_all = document.querySelectorAll("img")
//ArticleItem-image
var user_self_image = document.querySelectorAll("img.Avatar")
//////console.log ("typeof ",typeof(svgs))
var all_objs = []
all_objs = all_objs.concat(svgs,rights,top_tags,navs,right_side_div2,top_right_settings,top_right_settings2,rights_question,rights_SearchSideBar)

var main_container_objs = []
main_container_objs = main_container_objs.concat(main_container,question_container,SearchMain_container,question_container_list)
////log_str("f99513df718693d2996c91c4f091a7cf",svgs)
//show_or_hidden()


var obj_inner = []
obj_inner = obj_inner.concat(images_all,images)

var obj_inner_video = []
obj_inner_video = obj_inner_video.concat(video_in,video_in_question,video_in_question2,video_in_question3,video_in_question4,iframes)


show_or_hidden()
//record_all_img_loaded()

//var storage_name = "sg2e"

//var original_map = new Map();chrome.storage.local.set({storage_name: new Map()}, function() {});
////log_str("f99513df718693d2996c91c4f091a7cf","user_self_image:"+user_self_image.length)
////log_str("f99513df718693d2996c91c4f091a7cf","length images_all:"+images_all.length)
function log_str(patten,...obj_ins){
    log_bool = false
    for (var obj_in of obj_ins) {
        if (String(obj_in).includes(patten)) {
          log_bool=true;
          break;
        }
      }
    if (log_bool){
        //console.log("f99513df718693d2996c91c4f091a7cf",...obj_ins)
    }
}

//function src_style_get(src){
//  storage_map = null
//  //log_str("f99513df718693d2996c91c4f091a7cf",'src_style_get function',src);
//  chrome.storage.local.get(["sg2e"], function(result) {
//    log_str("f99513df718693d2996c91c4f091a7cf","(get fun) result:",result,"src",src)
//    if(result && result["sg2e"]){
//        //log_str("f99513df718693d2996c91c4f091a7cf","result not null")
//        //log_str("f99513df718693d2996c91c4f091a7cf",'(get fun)storage_name:',result["sg2e"]);
//        storage_map = result["sg2e"]
//        //log_str("f99513df718693d2996c91c4f091a7cf","storage_map inner:",storage_map)
//    }else{
//        //log_str("f99513df718693d2996c91c4f091a7cf","result null")
//        storage_map = new Map()
//        //log_str("f99513df718693d2996c91c4f091a7cf","(get fun) inner storage_map",storage_map)
//        chrome.storage.local.set({"sg2e": storage_map}, function() {});
//    }
//      log_str("f99513df718693d2996c91c4f091a7cf","(get fun)storage_map[src]:",storage_map[src])
//      return storage_map[src]
//  });
//}



function hide(item){
    //console.log("hide:",item)
    old_style = item.getAttribute("style")
    new_style = old_style+" ;display: none;"
    item.setAttribute("style",new_style)
}

function show(item){
    //console.log("show:",item)
    old_style = item.getAttribute("style")
    if (String(old_style).includes("display: none;")){
        new_style = old_style.replace("display: none;", "")
        item.setAttribute("style",new_style)
    }
}



//real
//https://tiebapic.baidu.com/forum/pic/item/f99513df718693d2996c91c4f091a7cf.jpg?tbpicau=2022-10-04-05_f99513df718693d2996c91c4f091a7cf
//https://tiebapic.baidu.com/forum/w%3D194%3Bg%3D0/sign=fe75bb3fb203918fd7d139c3650641aa/f99513df718693d2996c91c4f091a7cf.jpg?tbpicau=2022-10-04-05_98784af85d895a5338f9063384a5b73e
//https://tiebapic.baidu.com/forum/pic/item/f99513df718693d2996c91c4f091a7cf.jpg?tbpicau=2022-10-04-05_f99513df718693d2996c91c4f091a7cf

function show_or_hidden(){
    //log_str("f99513df718693d2996c91c4f091a7cf","dislike running")
    //log_str("f99513df718693d2996c91c4f091a7cf","obj_inner",obj_inner)z
    chrome.storage.local.get(['web_switchStatus_inner'], function(result) {
        log_str("f99513df718693d2996c91c4f091a7cf","show_or_hidden result",result)
        if (result.web_switchStatus_inner){//屏蔽
            obj_srcs = new Set();
            for (var item of obj_inner){
                for (var item_one of item){
//                    obj_src = item_one.getAttribute("src")
//                    log_str("f99513df718693d2996c91c4f091a7cf","obj_src:",obj_src)
                    if (obj_srcs.has(item_one)){
                        continue;
                    }else{
                        obj_srcs.add(item_one);
                    }
                    hide(item_one)
                };
            };
        }else{//恢复
            obj_srcs = new Set();
            for (var item of obj_inner){
                for (var item_one of item){
//                    obj_src = item_one.getAttribute("src")
                    if (obj_srcs.has(item_one)){
                        continue;
                    }else{
                        obj_srcs.add(item_one);
                    }
                    show(item_one)
                };
            };
        };
    });
};



var result_of_status = false
<<<<<<< HEAD
chrome.storage.sync.get(['switchStatus_inner'], function(result) {
    result_of_status = result.switchStatus_inner
=======
chrome.storage.local.get(['web_switchStatus_inner'], function(result) {
    result_of_status = result.web_switchStatus_inner
>>>>>>> 57a3119f0e06e528ace1939d134920829cd6c6d1
});
var observer = new MutationObserver(mutations => {
                    if(result_of_status){
                        for(let mutation of mutations) {
                            for(let addedNode of mutation.addedNodes) {
<<<<<<< HEAD
//                               console.log("detect node:",addedNode)
                               if (addedNode.nodeName === "IMG") {
                                      addedNode.setAttribute("style","display:none");
=======
//                                //console.log("we are here2",addedNode.nodeName)
                               if (addedNode.nodeName == "IMG") {
//                                    //console.log("we are here3")
                                    hide(addedNode)
//                                    record_new_image_element(addedNode)
>>>>>>> 57a3119f0e06e528ace1939d134920829cd6c6d1
                               }
                            }
                        }
                    }
                });
<<<<<<< HEAD



=======
>>>>>>> 57a3119f0e06e528ace1939d134920829cd6c6d1
observer.observe(document, { childList: true, subtree: true });
//observer.observe(document, { attributes: true, childList: true, subtree: true });

//chrome.storage.local.get(['unlikes'], function(result) {
//  if(result && result.unlikes && listAllLi){
//    for (var li of listAllLi){
//      if (li && li.querySelector("a") && li.querySelector("a").getAttribute("href")){
//        let roomIdVar = li.querySelector("a").getAttribute("href").substr(1);
//        if (result.unlikes.includes(roomIdVar) ){
//          // alert("here we goinggggg");
//          li.setAttribute("style","display:none");
//          // alert("here we go");
//          //log_str("f99513df718693d2996c91c4f091a7cf","屏蔽成功："+roomIdVar)
//        }
//      }
//    }
//  }
//});
