# Simple iOS Location Web
[![Build Status](https://travis-ci.com/enriquegh/SimpleIOSLocationWeb.svg?branch=master)](https://travis-ci.com/enriquegh/SimpleIOSLocationWeb)

This repository contains a very simple iOS Appium test that shows the user's current location and then changes it.

This test was created to test Sauce Lab's RDC location feature where a real device can have a mocked location.


## Testing
Travis runs a very simple test on Appium to confirm that the location feature is working as intended.
This runs on a cronjob weekly.

If you want to try this yourself run the following:

```bash
npm test
```
Make sure to add the SAUCE_RDC_API_KEY environment variable first.
