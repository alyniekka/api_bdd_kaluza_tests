import { generate } from 'cucumber-html-reporter';

const options = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber_report.json',
    output: 'reports/cucumber_report.html',
    reportSuiteAsScenarios: false,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Version": "0.1.1",
        "Test Environment": "PRODUCTION",
        "Browser": "none",
        "Platform": "MacOS",
        "Executed": "Remote",
        "API under tests": "https://api.tfl.gov.uk/journey/journeyresults/"
    },
    failedSummaryReport: true,
};

generate(options);
