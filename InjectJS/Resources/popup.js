// InjectJS
// https://github.com/wdg/InjectJS
//
// Licence MIT.
// See: Licence.md
//
// Safari Extension (Sext).

function InjectJS_Log(message, status) {
    // 0 = verbose, 1 = warning/error

    if (status || 0 > 0) {
        document.querySelector(".warning").style.background = 'red';
    }

    document.querySelector(".warning").style.display = 'block';
    document.querySelector(".warning").innerHTML = message

}

document.getElementById("inject").addEventListener("change", function (e) {
    console.log(e.target.value)


    var setting = {
        rules: [
            {
                script: e.target.value,
                domain: "ht.*\://.*"
            }
        ]

    }

    browser.storage.local.set({
        "SETTINGS": JSON.stringify(setting)
    })

    InjectJS_Log("Saved: Inject script <pre>" + JSON.stringify(setting) + "</pre>")
})

document.getElementById("autoinject").addEventListener("change", function (e) {
    console.log(e.target.checked)
    browser.storage.local.set({
        "autoinject": e.target.checked
    })
    InjectJS_Log("Saved: Inject " + (e.target.checked ? "ON":"OFF"));
})

window.addEventListener("DOMContentLoaded", function (e) {
    // LOAD VALUES
    browser.storage.local.get(function (item) {
        if (typeof item["autoinject"] !== "undefined") {
            document.getElementById("autoinject").checked = item["autoinject"];
//            InjectJS_Log("Loaded: Inject " + (item["autoinject"] ? "ON":"OFF"));
        }
    })

    browser.storage.local.get(function (item) {
        if (typeof item["SETTINGS"] !== "undefined") {
            var settings = JSON.parse(item["SETTINGS"])
            if (typeof settings.rules[0] !== "undefined") {
//                InjectJS_Log("Loaded: Inject " + settings.rules[0].script);
                document.getElementById("inject").value = settings.rules[0].script;
            } else {
                InjectJS_Log("SETTINGS: Inject seems corrupt", 1);
            }
        }
    })
})
