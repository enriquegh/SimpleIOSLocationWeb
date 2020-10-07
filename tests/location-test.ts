const latitude = "37.7869037"
const longitude = "-122.4012196"
const altitude = "19.31"
describe("Location test", () => {
    it("should set location to Sauce SF office", () => {

        browser.url("https://maps.google.com")

        // Check if the "You're missing out text is present and click it"
        // This might interfere with us clicking the location button
        const missingOutBtn = $('.ml-promotion-no-thanks')
        if (missingOutBtn.waitForExist({timeout: 10000})) {
            missingOutBtn.click()
        }

        // Save contexts to see which webview context to get
        const contexts = browser.getContexts();
        const webViewContexts = contexts.filter(context => context.includes("WEBVIEW"))

        // Check if Allow button is present.
        // Might happen where this happens first than promotion
        browser.switchContext("NATIVE_APP")
        const alertOkBtn = $("~OK")
        
        if (alertOkBtn.isExisting()) {
            alertOkBtn.click()
        }
        browser.switchContext(webViewContexts[0])
        
        const myLocationBtn = $('.ml-button-my-location-fab')
        myLocationBtn.click()

        browser.switchContext("NATIVE_APP")

        const alert = $("*//XCUIElementTypeAlert")
        
        if (alert.isExisting()) {
            const alertBtn = $("~Allow")

            if (alertBtn.isExisting()) { // We have Allow location services first
                alertBtn.click()
            }

            const alertOkBtn = $("~OK")

            if (alertOkBtn.isExisting()) {

                alertOkBtn.click()
            }

        }

        // pause for 5 seconds to allow video to show current location
        browser.pause(5000)
        browser.takeScreenshot()
        
        browser.setGeoLocation({
            latitude,
            longitude,
            altitude
        })
        
        // pause for 5 seconds to allow video to show new location
        browser.pause(5000)
        browser.takeScreenshot()

        //TODO: Find a way to verify location actually changed.
        // "Google Maps could not determine your precise location."


    })
})