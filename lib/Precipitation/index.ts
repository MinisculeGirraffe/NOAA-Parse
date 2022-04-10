import { parseQualityCode } from "../qualityCodes"

// LIQUID-PRECIPITATION
// AA1-AA4
// Page 13
// "01,0000,9,5"
function parsePrecipitation(string) {
    const conditionCodes = {
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

    const [period, depth, condition, qc] = string.split(',')
    return {
        hours: period != "99" ? parseInt(period, 10) : null,
        depth: depth != "9999" ? parseInt(depth, 10) / 10 : null, //in "millimeters"
        condition: {
            code: condition,
            message: conditionCodes[condition]
        },
        quality: parseQualityCode(qc)
    }
}


// LIQUID-PRECIPITATION MONTHLY TOTAL
// AB1
//Page 14
// "01836,9,6"
function parsePrecipitationMonthly(string) {
    const condition_codes = {
        "1": "Measurement impossible or inaccurate",
        "2": "Trace",
        "9": "Missing"
    }
    const [depth, condition, quality] = string.split(',')
    return {
        depth: depth != "99999" ? parseInt(depth, 10) / 10 : null,  //in "millimeters"
        condition: {
            code: condition,
            message: condition_codes[condition]
        },
        quality: parseQualityCode(quality)
    }
}

// PRECIPITATION-OBSERVATION-HISTORY
// AC1
// Page 15
function parsePrecipitationHistory(string) {
    const duration_codes = {
        "0": "Lasted less than 1 hour",
        "1": "Lasted 1 - 3 hours",
        "2": "Lasted 3 - 6 hours",
        "3": "Lasted more than 6 hours",
        "9": "Missing"
    }
    const characteristic_code = {
        "C": "Continuous",
        "I": "Intermittent"
    }
    const [duration, characteristic, quality] = string.split(',')
    return {
        duration: {
            code: duration,
            message: duration_codes[duration]
        },
        characteristic: {
            code: characteristic,
            message: characteristic_code[characteristic]
        },
        quality: parseQualityCode(quality)
    }
}

// LIQUID-PRECIPITATION GREATEST AMOUNT IN 24 HOURS, FOR THE MONTH
// AD1
// Page 15
// "00579,9,2323,9999,9999,6"
function parsePrecipitationMonthlyGreatest(string) {
    const condition_codes = {
        "1": "Measurement impossible or inaccurate",
        "2": "Trace",
        "3": "The amount occurred on other dates in addition to those listed",
        "4": "Trace amount occurred on other dates in addition to those listed",
        "9": "Missing or N/A"
    }
    const [depth, condition, date1, date2, date3, quality] = string.split(',')
    const dates = [date1, date2, date3]
        .filter(d => d != "9999")
        .map(d => ({
            start: d.substring(0, 1),
            end: d.substring(2, 3)
        }))
    return {
        depth: depth != "99999" ? parseInt(depth, 10) / 10 : null,  //in "millimeters"
        dates: dates,
        condition: {
            code: condition,
            message: condition_codes[condition]
        },
        quality: parseQualityCode(quality)
    }
}

// LIQUID-PRECIPITATION, NUMBER OF DAYS WITH SPECIFIC AMOUNTS, FOR THE MONTH
// AE1
// Page 17
function parsePrecipitationDayCountForMonth(string) {
    const [
        point01, point01_quality,
        point10, point10_quality,
        point50, point50_quality,
        point100, point100_quality
    ] = string.split(',')

    return {
        ".01": {
            days: point01,
            quality: parseQualityCode(point01_quality)
        },
        ".10": {
            days: point10,
            quality: parseQualityCode(point10_quality)
        },
        ".50": {
            days: point50,
            quality: parseQualityCode(point50_quality)
        },
        "1.00": {
            days: point100,
            quality: parseQualityCode(point100_quality)
        }
    }
}



// PRECIPITATION-ESTIMATED-OBSERVATION identifier
// AG1
//Page 18
function parsePrecipitationEstimated(string) {
    const discrepancy_codes = {
        "0": "Reported amount of precipitation and reported weather agree",
        "1": "Precipitation missing or not reported and none inferred by weather",
        "2": "Precipitation missing, but precipitation inferred by weather",
        "3": "Precipitation reported, but none inferred by weather",
        "4": "Zero precipitation reported, but precipitation inferred by weather",
        "5": "Zero precipitation reported, no precipitation inferred and precipitation not occurring at the reporting station",
        "9": "Missing"
    }

    
}

// LIQUID-PRECIPITATION MAXIMUM SHORT DURATION, FOR THE MONTH
// AH1-AH6

// LIQUID-PRECIPITATION MAXIMUM SHORT DURATION, FOR THE MONTH
// AI1-AI6
// Note: This data group is identical to the AH1-6 group, for
// the purpose of allowing up to 12 occurrences of these reports.

// snow depth data
// aj1(x)

// SNOW-DEPTH GREATEST DEPTH ON THE GROUND, FOR THE MONTH
// AK1

// SNOW-ACCUMULATION
// AL1-AL4

// SNOW-ACCUMULATION GREATEST AMOUNT IN 24 HOURS, FOR THE MONTH
// AM1

// SNOW-ACCUMULATION FOR THE DAY/MONTH
// AN1

// LIQUID-PRECIPITATION
// AO1-AO4

// 15 Minute LIQUID-PRECIPITATION occurrence
// AP1-AP4