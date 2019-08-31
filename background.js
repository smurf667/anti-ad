function handleClick(tab) {
  console.log('this is tab', tab);
  tab.executeScript({
    file: "remove-message.js"
  });
// browser.tabs.executeScript({
}

browser.browserAction.onClicked.addListener(function(){
  browser.tabs.executeScript({
    file: "remove-message.js"
  });
});
