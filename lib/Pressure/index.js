import { parseQualityCode } from "../qualityCodes.js"
import { parseNullInt } from '../../utils/index.js'
import util from "util"

/*
Unit: Hectopascals
Example: 99999,9
SLP
ATMOSPHERIC-PRESSURE-OBSERVATION sea level pressure
ATMOSPHERIC-PRESSURE-OBSERVATION sea level pressure quality code
*/



export function parseSLP (string) {
    const [pressure, quality] = string.split(',')
    return {
        pressure: parseNullInt(pressure,"99999",10),
        unit: "Hectopascals",
        quality: parseQualityCode(quality)
    }
}

// ATMOSPHERIC-PRESSURE-OBSERVATION identifier
// MA1
// Page 88
function parseMA1 (string) {
    const [] = string.split(",")
    return {

    }
}
// ATMOSPHERIC-PRESSURE-CHANGE identifier
// MD1
// Page 89
function parseMD1 (string) {
    const [] = string.split(",")
    return {

    }
}
// GEOPOTENTIAL-HEIGHT-ISOBARIC-LEVEL
// ME1
// Page 90
function parseME1 (string) {
    const [] = string.split(",")
    return {

    }
}

// ATMOSPHERIC-PRESSURE-OBSERVATION (STP/SLP)
// MF1
// Page 91
function parseMF1 (string) {
    const [] = string.split(",")
    return {

    }
}
// ATMOSPHERIC-PRESSURE-OBSERVATION
// MG1
// Page 92
function parseMG1 (string) {
    const [] = string.split(",")
    return {

    }
}

// ATMOSPHERIC-PRESSURE-OBSERVATION FOR THE MONTH
// MH1
// Page 93
function parseMH1 (string) {
    const [] = string.split(",")
    return {

    }
}

// ATMOSPHERIC-PRESSURE-OBSERVATION FOR THE MONTH
// MK1
// Page 94
function parseMK1 (string) {
    const [] = string.split(",")
    return {

    }
}