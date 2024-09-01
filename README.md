## Getting started

First, install all dependencies:

```bash
npm install
```

Add your API tokens: 
- Request tokens from https://api-portal.tfl.gov.uk/product#product=2357355709892
- Assign tokens to APP_ID and APP_KEY in src/utils/config.ts

Tokens are required to make requests to the https://api.tfl.gov.uk/

Now, time to run tests:
```bash
npm run test
```

And to generate an HTML report:
```bash
npm run report
```
## Where to find the latest existing report
The latest report can be found at /reports/cucumber_report.html 

## Known issues
API description for the reference https://api-portal.tfl.gov.uk/api-details#api=Journey&operation=Journey_JourneyResultsByPathFromPathToQueryViaQueryNationalSearchQueryDateQu
1. journeyPreference = "leasttime" - doesn't seem to have any effect at all, at least I couldn't make it work isolated or in combination with other parameters. Hence, the test with the quickest journey is unstable, as there are always 4 options to travel and not only does the given param doesn't eliminate all other options it doesn't even sort the options, I'm currently checking the order of the journey which is unstable.(normally I would ask developers/anyone else from the team whether it's a bug or an issue in how I use the API)
2. timeIs and time - again, not sure that API works as supposed to, I'm selecting from the array the journey with the latest arrival time (Scenario C) and checking if it's less than requested arrival time, if so - consider that requested journey plan was suggested
