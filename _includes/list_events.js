document.addEventListener("DOMContentLoaded", function() {
  var xhr = new XMLHttpRequest(),
      eventEl = document.getElementById("event-template"),
      locale = eventEl.getAttribute('data-locale'),
      domain = eventEl.getAttribute('data-domain'),
      hash = eventEl.getAttribute('data-hash');
  try {
    xhr.open('GET', (domain + "/events?hash=" + hash + "&locale=" + locale));
    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var listEl = document.getElementById("events-list-wrapper"),
            eventTemplate = eventEl.innerHTML,
            response = xhr.responseText,
            data = response ? JSON.parse(response) : [];

        for (var i = 0; i < data.length; i++) {
          listEl.innerHTML += Mustache.render(eventTemplate, {
            date: decodeURI(data[i].date),
            url: data[i].url,
            title: data[i].title,
            description: data[i].description
          });
        }

        var anchors = document.getElementsByTagName('a');
        for(var i = 0; i < anchors.length; i++) {
          var el = anchors[i],
              href = el.getAttribute('href');

          if (href) {
            el.onclick = function (e) {
              if (!e.ctrlKey && el.getAttribute('target') !== "_blank") {
                window.top.location.href = href;
              } else {
                return true;
              }
            };
          }
        }
      }
    };
  } catch (e) {
    console.log(e);
  }
});