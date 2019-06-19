const latitude = "37.7869037"
const longitude = "-122.4012196"
const altitude = "19.31"
describe("Location test", () => {
    it("should set location to Sauce SF office", () => {

        browser.url("https://maps.google.com")

        currentContext = browser.getContext()

        browser.getContexts()
        
        myLocationBtn = $('.ml-button-my-location-fab')

        myLocationBtn.click()

        browser.switchContext("NATIVE_APP")

        alert = $("*//XCUIElementTypeAlert")
        
        if (alert) {
            alertBtn = $("~OK")
            alertBtn.click()
        }

        // pause for 10 seconds to allow video to show current location
        browser.pause(10000)
        browser.takeScreenshot()
        
        browser.setGeoLocation({
            latitude,
            longitude,
            altitude
        })
        
        // pause for 10 seconds to allow video to show new location
        browser.pause(10000)
        browser.takeScreenshot()

        //TODO: Find a way to verify location actually changed.


    })
})