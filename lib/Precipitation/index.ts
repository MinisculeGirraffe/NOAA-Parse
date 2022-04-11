import { parseQualityCode } from "../qualityCodes"
import { parseNullInt } from '../../index'

const condition_codes = {
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

const discrepancy_codes = {
    "0": "Reported amount of precipitation and reported weather agree",
    "1": "Precipitation missing or not reported and none inferred by weather",
    "2": "Precipitation missing, but precipitation inferred by weather",
    "3": "Precipitation reported, but none inferred by weather",
    "4": "Zero precipitation reported, but precipitation inferred by weather",
    "5": "Zero precipitation reported, no precipitation inferred and precipitation not occurring at the reporting station",
    "9": "Missing"
}

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

function parseConditionCode(code) {
    return {
        code: code,
        message: condition_codes[code]
    }
}

function parseDateString(date) {
    if (date = "99") return null
    return {
        day: parseNullInt(date.substring(0, 1), "99"),
        hour: parseNullInt(date.substring(2, 3), "99"),
        minute: parseNullInt(date.substring(4, 5), "99")
    }
}

function parse3DateString(date1, date2, date3) {
    return [date1, date2, date3]
        .filter(d => d != "9999")
        .map(d => ({
            start: d.substring(0, 1),
            end: d.substring(2, 3)
        }))
}

// LIQUID-PRECIPITATION
// AA1-AA4
// Page 13
// "01,0000,9,5"
function parsePrecipitation(string) {
    const [period, depth, condition, qc] = string.split(',')
    return {
        hours: parseNullInt(period, "99"),
        depth: parseNullInt(depth, "9999", 10), // in MM
        condition: parseConditionCode(condition),
        quality: parseQualityCode(qc)
    }
}

// LIQUID-PRECIPITATION MONTHLY TOTAL
// AB1
//Page 14
// "01836,9,6"
function parsePrecipitationMonthly(string) {
    const [depth, condition, quality] = string.split(',')
    return {
        depth: parseNullInt(depth, "99999", 10),  //in "millimeters"
        condition: parseConditionCode(condition),
        quality: parseQualityCode(quality)
    }
}

// PRECIPITATION-OBSERVATION-HISTORY
// AC1
// Page 15
function parsePrecipitationHistory(string) {
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
    const [depth, condition, date1, date2, date3, quality] = string.split(',')
    return {
        depth: parseNullInt(depth, "99999", 10),  //in "millimeters"
        dates: parse3DateString(date1, date2, date3),
        condition: parseConditionCode(condition),
        quality: parseQualityCode(quality)
    }
}

// LIQUID-PRECIPITATION, NUMBER OF DAYS WITH SPECIFIC AMOUNTS, FOR THE MONTH
// AE1
// Page 17
// 12,6,08,6,99,9,03,6
function parsePrecipitationDayCountForMonth(string) {
    const [
        point01, point01_quality,
        point10, point10_quality,
        point50, point50_quality,
        point100, point100_quality
    ] = string.split(',')
    return {
        "01": {
            days: parseNullInt(point01, "99"),
            quality: parseQualityCode(point01_quality)
        },
        "10": {
            days: parseNullInt(point10, "99"),
            quality: parseQualityCode(point10_quality)
        },
        "50": {
            days: parseNullInt(point50, "99"),
            quality: parseQualityCode(point50_quality)
        },
        "100": {
            days: parseNullInt(point100, "99"),
            quality: parseQualityCode(point100_quality)
        }
    }
}

// PRECIPITATION-ESTIMATED-OBSERVATION identifier
// AG1
//Page 18
function parsePrecipitationEstimated(string) {
    const [discrepancy, depth] = string.split(',')
    return {
        discrepancy: {
            code: discrepancy,
            message: discrepancy_codes[discrepancy]
        },
        depth: parseNullInt(depth, "999")
    }
}

// LIQUID-PRECIPITATION MAXIMUM SHORT DURATION, FOR THE MONTH
// AH1-AH6
// Page 19
// 005,0043,9,240214,5 
function parsePrecipitationMaxShortForMonth(string) {
    const [period, depth, condition, end, quality] = string.split(',')
    return {
        minutes: parseNullInt(period, "999"),
        depth: parseNullInt(depth, "9999", 10), // in MM
        condition: parseConditionCode(condition),
        end: parseDateString(end),
        quality: parseQualityCode(quality)
    }
}
// LIQUID-PRECIPITATION MAXIMUM SHORT DURATION, FOR THE MONTH
// AI1-AI6
// Page 20
// This data group is identical to the AH1-6 group, for the purpose of allowing up to 12 occurrences of these reports.
// Above function can be used


// SNOW-DEPTH identifier
// AJ1
// Page 21
function parseSnowDepth(string) {
    const [
        snowDepth, snowCondition, snowQuality,
        waterDepth, waterCondition, waterQuality
    ] = string.split(',')
    return {
        snowDepth: parseNullInt(snowDepth, "9999"), // in CM
        snowCondition: parseConditionCode(snowCondition),
        snowQuality: parseQualityCode(snowQuality),
        waterDepth: parseNullInt(waterDepth, "999999", 10), // in MM
        waterCondition: parseConditionCode(waterCondition),
        waterQuality: parseConditionCode(waterQuality)
    }
}

// SNOW-DEPTH GREATEST DEPTH ON THE GROUND, FOR THE MONTH
// AK1
// Page 22
function parseGreatestSnowDepthForMonth(string) {
    const [depth, condition, date, quality] = string.split(',')
    return {
        depth: parseNullInt(depth, "9999"),
        condition: parseConditionCode(condition),
        date: parseDateString(date),
        quality: parseQualityCode(quality)
    }
}

// SNOW-ACCUMULATION
// AL1-AL4
// Page 23
function parseSnowAccumulation(string) {
    const [hours, depth, condition, quality] = string.split(',')
    return {
        hours: parseNullInt(hours, "99"),
        depth: parseNullInt(depth, "999"), // in CM
        condition: parseConditionCode(condition),
        quality: parseQualityCode(quality)
    }
}

// SNOW-ACCUMULATION GREATEST AMOUNT IN 24 HOURS, FOR THE MONTH
// AM1
// Page 24
function parseSnowAccumulationForMonth(string) {
    const [depth, condition, date1, date2, date3, quality] = string.split(',')
    return {
        depth: parseNullInt(depth, "9999", 10), // in CM
        condition: parseConditionCode(condition),
        date: parse3DateString(date1, date2, date3),
        quality: parseQualityCode(quality)
    }
}
// SNOW-ACCUMULATION FOR THE DAY/MONTH
// AN1
// Page 25
function parseSnowAccumulationForDayMonth(string) {
    const [period, depth, condition, quality] = string.split(',')
    return {
        hours: parseNullInt(period, "999"),
        depth: parseNullInt(depth, "9999", 10), // in CM
        condition: parseConditionCode(condition),
        quality: parseQualityCode(quality)
    }
}

// LIQUID-PRECIPITATION
// AO1-AO4
//Page 26
function ParseLiquidPercipitation(string) {
    const [period, depth, condition, quality] = string.split(',')
    return {
        minutes: parseNullInt(period, "999"),
        depth: parseNullInt(depth, "9999", 10), // in MM
        condition: parseConditionCode(condition),
        quality: parseQualityCode(quality)
    }
}
// 15 Minute LIQUID-PRECIPITATION occurrence
// AP1-AP4
// Page 27
//IMPORTANT NOTE: These data are also provided in the AAx section for typical use in applications. The APx data are mainly intended for quality control processing.
// TODO, Maybe use?