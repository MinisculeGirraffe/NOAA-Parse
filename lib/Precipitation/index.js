import { parseQualityCode } from "../../utils/qualityCodes.js"
import { parseNullInt } from '../../utils/index.js'
import { characteristic_code, condition_codes, discrepancy_codes, duration_codes } from './codes.js'


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
export function parseAAx(string) {
    const [period, depth, condition, qc] = string.split(',')
    return {
        hours: parseNullInt(period, "99"),
        depth: parseNullInt(depth, "9999", 10), // in MM
        depthUnit: "mm",
        condition: parseConditionCode(condition),
        quality: parseQualityCode(qc)
    }
}

// LIQUID-PRECIPITATION MONTHLY TOTAL
// AB1
//Page 14
// "01836,9,6"
export function parseAB1(string) {
    const [depth, condition, quality] = string.split(',')
    return {
        depth: parseNullInt(depth, "99999", 10),  //in "millimeters"
        depthUnit: "mm",
        condition: parseConditionCode(condition),
        quality: parseQualityCode(quality)
    }
}

// PRECIPITATION-OBSERVATION-HISTORY
// AC1
// Page 15
export function parseAC1(string) {
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
export function parseAD1(string) {
    const [depth, condition, date1, date2, date3, quality] = string.split(',')
    return {
        depth: parseNullInt(depth, "99999", 10),  //in "millimeters"
        depthUnit: "mm",
        dates: parse3DateString(date1, date2, date3),
        condition: parseConditionCode(condition),
        quality: parseQualityCode(quality)
    }
}

// LIQUID-PRECIPITATION, NUMBER OF DAYS WITH SPECIFIC AMOUNTS, FOR THE MONTH
// AE1
// Page 17
// 12,6,08,6,99,9,03,6
function parseAE1(string) {
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
export function parseAG1(string) {
    const [discrepancy, depth] = string.split(',')
    return {
        discrepancy: {
            code: discrepancy,
            message: discrepancy_codes[discrepancy]
        },
        depth: parseNullInt(depth, "999"),
        depthUnit: "mm",
    }
}

// LIQUID-PRECIPITATION MAXIMUM SHORT DURATION, FOR THE MONTH
// AH1-AH6
// Page 19
// 005,0043,9,240214,5 
export function parseAHx(string) {
    const [period, depth, condition, end, quality] = string.split(',')
    return {
        minutes: parseNullInt(period, "999"),
        depth: parseNullInt(depth, "9999", 10), // in MM
        depthUnit: "mm",
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
export const parseAIx = parseAHx

// SNOW-DEPTH identifier
// AJ1
// Page 21
export function parseAJ1(string) {
    const [
        snowDepth, snowCondition, snowQuality,
        waterDepth, waterCondition, waterQuality
    ] = string.split(',')
    return {
        snowDepth: parseNullInt(snowDepth, "9999"), // in CM
        snowDepthUnit: "cm",
        snowCondition: parseConditionCode(snowCondition),
        snowQuality: parseQualityCode(snowQuality),
        waterDepth: parseNullInt(waterDepth, "999999", 10), // in MM
        waterDepthUnit: "mm",
        waterCondition: parseConditionCode(waterCondition),
        waterQuality: parseConditionCode(waterQuality)
    }
}

// SNOW-DEPTH GREATEST DEPTH ON THE GROUND, FOR THE MONTH
// AK1
// Page 22
export function parseAK1(string) {
    const [depth, condition, date, quality] = string.split(',')
    return {
        depth: parseNullInt(depth, "9999"),
        depthUnit: "cm",
        condition: parseConditionCode(condition),
        date: parseDateString(date),
        quality: parseQualityCode(quality)
    }
}

// SNOW-ACCUMULATION
// AL1-AL4
// Page 23
export function parseALx(string) {
    const [hours, depth, condition, quality] = string.split(',')
    return {
        hours: parseNullInt(hours, "99"),
        depth: parseNullInt(depth, "999"), // in CM
        depthUnit: "cm",
        condition: parseConditionCode(condition),
        quality: parseQualityCode(quality)
    }
}

// SNOW-ACCUMULATION GREATEST AMOUNT IN 24 HOURS, FOR THE MONTH
// AM1
// Page 24
export function parseAM1(string) {
    const [depth, condition, date1, date2, date3, quality] = string.split(',')
    return {
        depth: parseNullInt(depth, "9999", 10), // in CM
        depthUnit: "cm",
        condition: parseConditionCode(condition),
        date: parse3DateString(date1, date2, date3),
        quality: parseQualityCode(quality)
    }
}
// SNOW-ACCUMULATION FOR THE DAY/MONTH
// AN1
// Page 25
export function parseAN1(string) {
    const [period, depth, condition, quality] = string.split(',')
    return {
        hours: parseNullInt(period, "999"),
        depth: parseNullInt(depth, "9999", 10), // in CM
        depthUnit: "cm",
        condition: parseConditionCode(condition),
        quality: parseQualityCode(quality)
    }
}

// LIQUID-PRECIPITATION
// AO1-AO4
//Page 26
export function parseAOx(string) {
    const [period, depth, condition, quality] = string.split(',')
    return {
        minutes: parseNullInt(period, "999"),
        depth: parseNullInt(depth, "9999", 10), // in MM
        depthUnit: "mm",
        condition: parseConditionCode(condition),
        quality: parseQualityCode(quality)
    }
}

// 15 Minute LIQUID-PRECIPITATION occurrence
// AP1-AP4
// Page 27
//IMPORTANT NOTE: These data are also provided in the AAx section for typical use in applications. The APx data are mainly intended for quality control processing.
// TODO, Maybe use?