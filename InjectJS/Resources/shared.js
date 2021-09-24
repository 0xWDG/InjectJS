// InjectJS
// https://github.com/wdg/InjectJS
//
// Licence MIT.
// See: Licence.md
//
// Safari Extension (Sext).

// This file is obsolete.
function readValue(key) {
    if (typeof browser === 'undefined') {
        var val = localStorage.getItem(key)
        return val == null ? undefined : val
    }

    var savedvalue = undefined

    browser.storage.local.get(
        [key],

        function(result) {
            savedvalue = result.value
        }
    );

    if (savedvalue == null) {
        savedvalue = undefined
    }

    return savedvalue
}

function writeValue(key, value) {
    if (typeof browser === 'undefined') {
        return localStorage.setItem(key, JSON.stringify(value))
    }

    browser.storage.local.set({
        key: JSON.stringify(value)
    });
}
