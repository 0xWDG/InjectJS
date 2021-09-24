// InjectJS
// https://github.com/wdg/InjectJS
//
// Licence MIT.
// See: Licence.md
//
// Safari Extension (Sext).

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received MESSAGE: ", request);

    if (request.action === "hello") {
        sendResponse({ farewell: "goodbye" });

        return;
    }

    sendResponse({
        error: "Unknown call \(request), or something went wrong"
    });
});


