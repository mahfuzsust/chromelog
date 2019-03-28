// var firstHref = $("a[href^='http']").eq(0).attr("href");
const name = "History";
console.log(window.location.hostname);

chrome.storage.sync.set({ "Hello": "World" }, function () {
    console.log('Value is set to ' + "World");
});


function storeInfo() {
    let key = window.location.hostname;
    let value = 10;
    chrome.storage.sync.set({ key: value }, function () {
        console.log('Value is set to ' + value);
    });


}
var a;


window.onload = function () {
    a = performance.now();
}

window.onbeforeunload = function () {
    b = performance.now();
    console.log('It took ' + (b - a) + ' ms.');
    storeInfo();
}

chrome.storage.sync.get(['Hello'], function (result) {
    console.log('Value currently is ' + result.key);
});

chrome.extension.sendMessage({}, function (response) {
    let logged_in_user = response.email
    console.log("Got user:", logged_in_user);
});
