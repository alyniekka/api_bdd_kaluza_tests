import fetch from 'node-fetch';

interface JourneyParams {
  from: string;
  to: string;
  app_id?: string;
  app_key?: string;
}

const BASE_URL = 'https://api.tfl.gov.uk/journey/journeyresults';

export async function getJourneyResults(params: JourneyParams) {
  const { from, to, app_id, app_key, ...queryParams }: JourneyParams = params;

  // Base URL
  let url = `${BASE_URL}/${encodeURIComponent(from)}/to/${encodeURIComponent(to)}?app_id=${app_id}&app_key=${app_key}`;

  // Append other query parameters to the URL
  Object.entries(queryParams).forEach(([key, value]) => {
    if (value !== undefined) {
      if (Array.isArray(value)) {
        // If the parameter is an array, join it with commas (e.g., mode=bus,tube)
        url += `&${key}=${value.join(',')}`;
      } else {
        url += `&${key}=${encodeURIComponent(String(value))}`;
      }
    }
  });
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch journey results: ${response.statusText}`);
  }

  return await response.json();
}
