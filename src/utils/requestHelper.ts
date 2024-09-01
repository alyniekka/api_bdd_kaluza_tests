import { getJourneyResults } from '../api/journeyApi.js';
import { JourneyParams } from '../api/types';
import { config } from './config.js';

export const requestJourney = async (params: JourneyParams) => {
  try {
    // Add app_id and app_key to the params if not already provided
    const journeyParams: JourneyParams = {
      ...params,
      app_id: params.app_id || config.app_id,
      app_key: params.app_key || config.app_key,
    };
    const result = await getJourneyResults(journeyParams);
    return result;
  } catch (error) {
    console.error(
      `Error fetching journey from ${params.from} to ${params.to}:`,
      error
    );
    throw error;
  }
};
