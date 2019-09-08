browser.browserAction.onClicked.addListener(function(){
  browser.tabs.executeScript({
    file: "remove-message.js"
  });
});
