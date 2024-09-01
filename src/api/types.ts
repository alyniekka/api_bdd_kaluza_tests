export interface JourneyParams {
  from: string;
  to: string;
  via?: string;
  nationalSearch?: boolean;
  date?: string;
  time?: string;
  timeIs?: 'Departing' | 'Arriving';
  journeyPreference?: 'LeastTime' | 'LeastChanges' | 'LeastWalking';
  mode?: string[]; // e.g., ['bus', 'tube']
  accessibilityPreference?: string[];
  fromName?: string;
  toName?: string;
  viaName?: string;
  maxTransferMinutes?: number;
  maxWalkingMinutes?: number;
  walkingSpeed?: 'Slow' | 'Average' | 'Fast';
  cyclePreference?: 'AllTheWay' | 'LeaveAtStation' | 'TaxiOnReturn';
  adjustment?: boolean;
  bikeProficiency?: 'Easy' | 'Moderate' | 'Fast';
  alternativeCycle?: boolean;
  alternativeWalking?: boolean;
  applyHtmlMarkup?: boolean;
  useMultiModalCall?: boolean;
  walkingOptimization?: boolean;
  taxiOnlyTrip?: boolean;
  routeBetweenEntrances?: boolean;
  useRealTimeLiveArrivals?: boolean;
  calcOneDirection?: boolean;
  includeAlternativeRoutes?: boolean;
  overrideMultiModalScenario?: boolean;
  combineTransferLegs?: boolean;
  app_id?: string;
  app_key?: string;
}
