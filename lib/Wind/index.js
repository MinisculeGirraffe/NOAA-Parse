import { QualityCodes } from '../../utils/qualityCodes.js'
import { parseNullInt, parseCodeMapping } from '../../utils/index.js'
import * as codes from './codes.js'
//"206,1,N,0023,1"
//WIND-OBSERVATION direction angle
//WIND-OBSERVATION direction quality code


// For WND
export function parseWND(string) {
    const [direction, directionQC, obsTypeCode, speed, speedQC] = string.split(',')

    return {
        direction: parseNullInt(direction,"999"),
        direction_quality: parseCodeMapping(directionQC,QualityCodes),
        observation: parseCodeMapping(obsTypeCode,codes.observationTypeCode) ,
        speed: parseNullInt(speed,"9999"),
        speed_unit: "Meters per Second",
        speed_quality: parseCodeMapping(speedQC,QualityCodes),
    }
}

// Wind Data: SUPPLEMENTARY-WIND-OBSERVATION
// OA1-OA3
// Page 98
function parseOAx (string) {
    const [] = string.split(",")
    return {

    }
}

// Wind Data: Hourly/Sub-Hourly Wind Section
// OB1-OB2
// Page 99
function parseOBx (string) {
    const [] = string.split(",")
    return {

    }
}

// Wind Data: WIND-GUST-OBSERVATION
// OC1
// Page 101
function parseOCx (string) {
    const [] = string.split(",")
    return {

    }
}
// Wind Data: SUPPLEMENTARY-WIND-OBSERVATION
// OD1-OD3
// Page 101
function parseODx (string) {
    const [] = string.split(",")
    return {

    }
}

// Wind Data: SUMMARY-OF-DAY-WIND-OBSERVATION
// OE1-OE3
// Page 102
function parseOEx (string) {
    const [] = string.split(",")
    return {

    }
}

// RELATIVE HUMIDITY occurrence identifier
// RH1 – RH3
// Page 103
function parseRHx (string) {
    const [] = string.split(",")
    return {

    }
}