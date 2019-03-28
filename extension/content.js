window.onbeforeunload = function () {
    chrome.extension.sendMessage({ "key": "store" });
}
chrome.extension.sendMessage({ "key": "user" }, function (value) {
    let email = value.email;
    var view_url = "https://chromelog.herokuapp.com";
    if ("https://" + window.location.host == view_url && window.location.pathname != "/logs/" +  email) {
        let newurl = view_url + "/" + email;
        window.location.replace(newurl);
    }
});

