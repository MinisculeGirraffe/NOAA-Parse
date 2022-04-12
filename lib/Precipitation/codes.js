export const condition_codes = {
    "1": "Measurement impossible or inaccurate",
    "2": "Trace",
    "3": "Begin accumulated period (precipitation amount missing until end of accumulated period)",
    "4": "End accumulated period",
    "5": "Begin deleted period (precipitation amount missing due to data problem)",
    "6": "End deleted period",
    "7": "Begin missing period",
    "8": "End missing period",
    "E": "Estimated data value (eg, from nearby station)",
    "I": "Incomplete precipitation amount, excludes one or more missing reports, such as one or more 15-minute reports not included in the 1-hour precipitation total",
    "J": "Incomplete precipitation amount, excludes one or more erroneous reports, such as one or more 1-hour precipitation",
    "9": "Missing"
}

export const discrepancy_codes = {
    "0": "Reported amount of precipitation and reported weather agree",
    "1": "Precipitation missing or not reported and none inferred by weather",
    "2": "Precipitation missing, but precipitation inferred by weather",
    "3": "Precipitation reported, but none inferred by weather",
    "4": "Zero precipitation reported, but precipitation inferred by weather",
    "5": "Zero precipitation reported, no precipitation inferred and precipitation not occurring at the reporting station",
    "9": "Missing"
}

export const duration_codes = {
    "0": "Lasted less than 1 hour",
    "1": "Lasted 1 - 3 hours",
    "2": "Lasted 3 - 6 hours",
    "3": "Lasted more than 6 hours",
    "9": "Missing"
}

export const characteristic_code = {
    "C": "Continuous",
    "I": "Intermittent"
}