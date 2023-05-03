// InjectJS
// https://github.com/wdg/InjectJS
//
// Licence MIT.
// See: Licence.md
//
// Safari Extension (Safari Test Extension / STE).

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
});

window.addEventListener("DOMContentLoaded", function (e) {
    console.log("PAGE LOADED")

    var el = document.createElement("script")
    el.type = "text/Javascript"
    el.innerText = "function domain(domainName,runFunc){const re=new RegExp(domainName);if(location.href.match(re)!==null){if(typeof runFunc==='function'){runFunc()}}}"

    document.getElementsByTagName('head')[0].appendChild(el);

    browser.storage.local.get(function (item) {
        console.log(item)
        var data = JSON.parse(item["SETTINGS"])
        console.log(data)

        for(const rule of data.rules){
            console.log("Rule: " + rule)
            const re = new RegExp(rule.domain);
            console.log("Regex: " + re)
            console.log("Match: " + location.href.match(re))

            if(location.href.match(re) !== null) {
                var script = rule.script;

                script += "\n;console.log(\"Finished Injecting\");"
                console.log("run: " + script)
                var injectElement = document.createElement("script")
                injectElement.type = "text/Javascript"

                var injElScriptText = document.createTextNode(script);
                injectElement.appendChild(injElScriptText);

                document.getElementsByTagName('head')[0].appendChild(injectElement);
            } else {
                console.log("Rule not injected / ", rule)
            }
        }
    });
});
