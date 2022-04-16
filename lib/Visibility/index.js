import { parseCodeMapping, parseNullInt } from "../../utils"
import { QualityCodes } from "../qualityCodes"
import * as codes from './codes.js'
/*
Example: VIS: 999999,9,9,9
VISIBILITY-OBSERVATION distance dimension - in Meters
VISIBILITY-OBSERVATION distance quality code
VISIBILITY-OBSERVATION variability code
VISIBILITY-OBSERVATION quality variability code
*/

export function parseVIS(string) {
    const [distance, distanceQC, distanceVariable, distanceVariableQC] = string.split(',')

    return {

        distance: {
            value: parseNullInt(distance, "999999"),
            quality: parseCodeMapping(distanceQC,QualityCodes)
        },
        distance_variable: parseCodeMapping(distanceVariable,codes.distanceVariabilityCode),
        distance_variable_quality: parseCodeMapping(distanceVariableQC,QualityCodes)
    }
}

// RUNWAY-VISUAL-RANGE-OBSERVATION
// ED1
// Page 53

function parseED1 (string) {
    const [] = string.split(",")
    return {

    }
}