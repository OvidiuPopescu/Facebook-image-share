
chrome.contextMenus.create({
  "id": "Image",
  "title": "Share image on Facebook",
  "contexts": ["image"]

},
  chrome.contextMenus.onClicked.addListener(
    function MyImageClick(info, tab){
        console.log("Clicked an image", info, tab)
        chrome.windows.create({
          "url": "https://facebook.com/sharer.php?u=" +info.srcUrl,
      })
  }
 )
);

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse){
   console.log("message", msg)
   sendResponse({"text": "recived the links"});
})
