window.onbeforeunload = function () {
    chrome.extension.sendMessage({ "key": "store" });
}
chrome.extension.sendMessage({ "key": "user" }, function (value) {
    let email = value.email;
    var view_url = "http://localhost:3000";
    if ("http://" + window.location.host == view_url && window.location.pathname != "/logs/" +  email) {
        let newurl = view_url + "/" + email;
        // chrome.extension.sendRequest({ redirect: newurl });
        window.location.replace(newurl);
    }
});

