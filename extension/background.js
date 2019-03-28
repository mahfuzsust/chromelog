chrome.identity.getProfileUserInfo(function (info) { email = info.email; });
var userId;
function getRandomToken() {
    // E.g. 8 * 32 = 256 bits token
    var randomPool = new Uint8Array(32);
    crypto.getRandomValues(randomPool);
    var hex = '';
    for (var i = 0; i < randomPool.length; ++i) {
        hex += randomPool[i].toString(16);
    }
    return hex;
}

chrome.storage.sync.get('userid', function (items) {
    var userid = items.userid;
    if (userid) {
        useToken(userid);
    } else {
        userid = getRandomToken();
        chrome.storage.sync.set({ userid: userid }, function () {
            useToken(userid);
        });
    }
    function useToken(userid) {
        userId = userid;
    }
});

var store = function (email, host, time) {
    var url = "http://localhost:3000/logs/insert";
    var json = JSON.stringify({ "email": email, "host": host, "time": time });
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    }
    xhr.send(json);
}

chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.key == "store") {
        store(email, new URL(sender.url).hostname, 1);
    }
    if (request.key == "user") {
        sendResponse({email: email});
    }
});