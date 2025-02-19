document.getElementById("convert").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let tab = tabs[0];

        // Check if it's a valid website (not a chrome:// page)
        if (tab.url.startsWith("chrome://") || tab.url.startsWith("chrome-extension://")) {
            alert("This extension cannot modify Chrome system pages.");
            return;
        }

        // Execute the script on the webpage
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: convertToUpperCaseOnPage
        });
    });
});

function convertToUpperCaseOnPage() {
    function convertToUpperCase(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = node.textContent.toUpperCase();
            // if (node.parentElement) {
            //     node.parentElement.style.fontFamily = 'Times New Roman';
            // }
        } else {
            node.childNodes.forEach(convertToUpperCase);
        }
    }
    convertToUpperCase(document.body);
}
