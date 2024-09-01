import { Given, When, Then } from '@cucumber/cucumber';
import { requestJourney } from '../../src/utils/requestHelper.js';
import { addressFormatter } from '../../src/utils/addressHelper.js';
import { expect } from 'chai';
import moment from 'moment';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

Given('{string} is traveling on {string}',
  function (subject: string, travelDate: string) {
    this.date = travelDate;
  }
);

When(/^(.+) requests the(?: "([^"]+)")? journey plan$/,
  async function (subject: string, journeyPreference?: string) {
    if (!this.from) {
      throw new Error('The starting location ("from") is not set.');
    }

    if (!this.to) {
      throw new Error('The destination ("to") is not set.');
    }

    this.params = {
      from: this.from,
      to: this.to,
    };

    if (journeyPreference == 'quickest') {
      this.params.journeyPreference = 'LeastTime';
    }

    if (this.date) {
      this.params.date = moment(this.date, 'DD.MM.YYYY').format('YYYYMMDD');
    }

    if (this.time) {
      this.params.time = this.time;
    }

    if (this.timeIs) {
      this.params.timeIs = this.timeIs;
    }

    this.journeyResponse = await requestJourney(this.params);
  }
);

Then(/^(.+) should receive the(?: "([^"]+)")? journey plan$/,
  function (subject: string, journeyPreference?: string) {
    expect(this.journeyResponse.journeys).to.be.an('array').that.is.not.empty;
    expect(this.journeyResponse.journeyVector.from).to.equal(this.from);
    expect(this.journeyResponse.journeyVector.to).to.equal(this.to);

    if (journeyPreference == 'quickest') {
      const journeyDurations = this.journeyResponse.journeys.map(
        (journey: any) => journey.duration
      );
      const firstJourneyDuration = this.journeyResponse.journeys[0].duration;
      const minimalDuration = Math.min(...journeyDurations);
      expect(firstJourneyDuration).to.equal(
        minimalDuration,
        'First journey should have the minimal duration'
      );
    }

    if (journeyPreference && this.time && this.timeIs) {
      if (this.timeIs == 'arriving') {
        const journeyArrivalTimes = this.journeyResponse.journeys.map(
          (journey: any) => moment(journey.arrivalDateTime).toISOString()
        );
        const maxArrivalTime = new Date(Math.max(...journeyArrivalTimes.map((time: string) => new Date(time).getTime())));
        const requestedDateTime = moment(`${this.date} ${this.time}`, "DD.MM.YYYY HHmm").toISOString();

        const requestedDate = new Date(requestedDateTime);
        expect(maxArrivalTime.getTime()).to.be.lessThan(
          requestedDate.getTime(),
          `The expected time ${maxArrivalTime} of arrival is greater than requested ${requestedDate}`);
      }
    }
  }
);

Given('The travel date is {string}', function (date: string) {
  this.date = date;
});

Given('{string} is at {string}',
  function (role: string, startLocation: string) {
    this.from = addressFormatter(startLocation);
  }
);

Given('{string} wants to travel to {string}',
  function (role: string, endLocation: string) {
    this.to = addressFormatter(endLocation);
  }
);

Given('{string} needs to arrive at the destination by {string}',
  function (role: string, timeOfArrival: string) {
    this.time = moment(timeOfArrival, ['h:mma', 'hh:mma']).format('HHmm');
    this.timeIs = 'arriving';
  }
);
