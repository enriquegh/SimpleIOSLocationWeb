const latitude = "37.7869037"
const longitude = "-122.4012196"
const altitude = "19.31"
describe("Location test", () => {
    it("should set location to Sauce SF office", () => {

        browser.url("https://maps.google.com")

        currentContext = browser.getContext()

        browser.getContexts()

        // Check if the "You're missing out text is presnt and click it"
        // This might interfere with us clicking the location button
        missingOutBtn = $('.ml-promotion-no-thanks')

        if (missingOutBtn.isExisting()) {
            missingOutBtn.click()
        }
        
        myLocationBtn = $('.ml-button-my-location-fab')

        myLocationBtn.click()

        browser.switchContext("NATIVE_APP")

        alert = $("*//XCUIElementTypeAlert")
        
        if (alert.isExisting()) {
            alertBtn = $("~Allow")

            if (alertBtn.isExisting()) { // We have Allow location services first
                alertBtn.click()
            }

            alertOkBtn = $("~OK")

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