var handlers = [{
    regexp: new RegExp('http(s?):\/\/www\.independent\.co\.uk\/.*'),
    remover: function() {
      document.querySelector(".tp-modal").style = "display: none";
      document.querySelector(".tp-backdrop").style = "display: none";
    }
  },
  {
    regexp: new RegExp('http(s?):\/\/www\.faz\.net\/.*'),
    remover: function() {
      [].forEach.call(
        document.querySelectorAll('body *'),
        function(element) {
          var elementDisplay = element.currentStyle ? element.currentStyle.display : getComputedStyle(element, null).display;
          if (elementDisplay === 'none') {
            element.style = '';
          }
        }
      );
      document.querySelector("#cboxOverlay").style = "display: none";
    }
  },
  {
    regexp: new RegExp('http(s?):\/\/.+tagesanzeiger\.ch\/.*'),
    remover: function() {
      document.querySelector('#tamovl-main-container').style = 'display: none';
      var x = document.getElementsByTagName('style');
      for (i = 0; i < x.length; i++) {
        if (x[i].innerText.indexOf('tamovl') > 0) {
          x[i].remove();
        }
      }
    }
  },
  {
    regexp: new RegExp('http(s?):\/\/.+spiegel\.de\/.*'),
    remover: function() {
      [].forEach.call(
        document.querySelectorAll('*'),
        function(element) {
          element.style = '';
          element.class = '';
        }
      );
      document.querySelector('[class^=sp_veil]').remove();
    }
  },
  {
    regexp: new RegExp('http(s?):\/\/.+zsz\.ch\/.*'),
    remover: function() {
      let nodes = document.querySelectorAll('*[class*="adbl"]');
      if (nodes) {
        nodes.forEach(n => {
          n.parentNode.removeChild(n);
        });
      }
      document.body.setAttribute("class", "");
    }
  }
]

var url = window.location.href;

for (i = 0; i < handlers.length; i++) {
  if (handlers[i].regexp.test(url)) {
    handlers[i].remover();
    break;
  }
}