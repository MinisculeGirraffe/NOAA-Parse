import { parseQualityCode } from "../qualityCodes"
import { parseNullInt } from '../../index'
import * as codes from './codes'

// PRESENT-WEATHER-OBSERVATION automated occurrence identifier for ASOS/AWOS data
// AT1 – AT8
// Page 28
function parseATx (string) {
    const [] = string.split(",")
    return {

    }
}
//AU1 – AU9 
//Page 29
function parseAUx (string) {
    const [] = string.split(",")
    return {

    }
}

// PRESENT-WEATHER-OBSERVATION automated occurrence identifier
//AW1 - AW4
//Page 30
function parseAWx (string) {
    const [] = string.split(",")
    return {

    }
}
// PAST-WEATHER-OBSERVATION summary of day occurrence identifier
// AX1 – AX6
// Page 32
function parseAXx (string) {
    const [] = string.split(",")
    return {

    }
}
// PAST-WEATHER-OBSERVATION manual occurrence identifier
// AY1 - AY2
// Page 33
function parseAYx (string) {
    const [] = string.split(",")
    return {

    }
}

// PAST-WEATHER-OBSERVATION automated occurrence identifier
// AZ1- AZ2
// Page 34
function parseAZx (string) {
    const [] = string.split(",")
    return {

    }
}