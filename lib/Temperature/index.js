import { QualityCodes } from '../../utils/qualityCodes.js'
import { parseNullInt, parseCodeMapping } from '../../utils/index.js'


// For TMP and DEW
export function ParseTMP(input) {
    const keys = ["temperature", "temperature_quality"]
    const [tmpStr, qc] = input.split(',')
    return {
        temperature: {
            value: parseNullInt(tmpStr, "+9999", 10),
            unit: "Celsius",
            quality: parseCodeMapping(qc, QualityCodes)
        }
    }
}
export function parseDEW(input) {
    const [tmpStr, qc] = input.split(',')
    return {
        dew_temperature: {
            value: parseNullInt(tmpStr, "+9999", 10),
            unit: "Celsius",
            quality: parseCodeMapping(qc, QualityCodes)
        }
    }
}

// EXTREME-AIR-TEMPERATURE
// KA1-KA4
// Page 82
function parseKAx(string) {
    const [] = string.split(",")
    return {

    }
}

// AVERAGE-AIR-TEMPERATURE
// KB1-KB3
// Page 83
function parseKBx(string) {
    const [] = string.split(",")
    return {

    }
}

// EXTEME-AIR-TEMPERATURE FOR THE MONTH
// KC1-KC2
// Page 84
function parseKCx(string) {
    const [] = string.split(",")
    return {

    }
}

// HEATING-COOLING-DEGREE-DAYS
// KD1-KD2
// Page 85
function parseKDx(string) {
    const [] = string.split(",")
    return {

    }
}


// EXTREME TEMPERATURES, NUMBER OF DAYS EXCEEDING CRITERIA, FOR THE MONTH
// KE1
// Page 85
function parseKE1(string) {
    const [] = string.split(",")
    return {

    }
}

// Hourly Calculated Temperature
// KF1
// Page 87
function parseKF1(string) {
    const [] = string.split(",")
    return {

    }
}

// Hourly Calculated Temperature
// KG1-KG2
// Page 87
function parseKGx(string) {
    const [] = string.split(",")
    return {

    }
}


