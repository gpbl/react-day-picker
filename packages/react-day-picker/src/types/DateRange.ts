/**
 * Represent a matcher to match a range of dates. The range can be open.
 * Differently from [[DateIntervalMatcher]], the dates here are included.
 */
export type DateRange = { from: Date | undefined; to?: Date | undefined };
