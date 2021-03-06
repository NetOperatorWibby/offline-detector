/* eslint-env browser, jquery */ "use strict";



//------------------------------
// On/Offline Detector
//------------------------------

function update() {
  if (!navigator.onLine) {
    var appOfflineDiv = document.createElement("div");

    appOfflineDiv.id = "app-offline";
    appOfflineDiv.innerHTML = "YOU ARE OFFLINE<br/>Please reconnect and refresh the page to resume activity";

    document.getElementsByTagName("body")[0].appendChild(appOfflineDiv);

    appOfflineDiv.style.top = "42%";
    appOfflineDiv.style.left = 0;
    appOfflineDiv.style.backgroundColor = "#ff4136";
    appOfflineDiv.style.color = "white";
    appOfflineDiv.style.cursor = "default";
    appOfflineDiv.style.fontSize = "1rem";
    appOfflineDiv.style.fontWeight = 600;
    appOfflineDiv.style.lineHeight = "1.33";
    appOfflineDiv.style.padding = "1rem";
    appOfflineDiv.style.position = "fixed";
    appOfflineDiv.style.textAlign = "center";
    appOfflineDiv.style.width = "100%";
    appOfflineDiv.style.zIndex = 999;
  }
}

window.addEventListener("offline", update);
window.addEventListener("online", update);

update();
