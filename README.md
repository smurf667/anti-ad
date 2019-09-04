`anti-ad` is a **Firefox** add-on that removes "Ad blocking detected" messages from HTML pages. Some websites overlay their message in a way that after removing them the original content can be viewed.

This is just the source, as getting this installable requires publishing via Mozilla, which I am not prepared to do at this time.

The add-on can be activated using `about:debugging#/runtime/this-firefox` by loading it manually via "Load Temporary Add-on...". Open the project folder and load the `manifest.json` file.

A "campfire" icon will be shown in the menu bar. Clicking it on a website registered with the add-on, removes the "Ad blocking detected" message.

The removal code can be found in [`remove-message.js`](remove-message.js). For each website - matched via a regular expression - a handler can be registered. Example:

```javascript
{
  regexp: new RegExp('http(s?):\/\/www\.independent\.co\.uk\/.*'),
  remover: function() {
    document.querySelector(".tp-modal").style="display: none";
    document.querySelector(".tp-backdrop").style="display: none";
  }
}
```

Pull requests for further websites and improvements welcome.
