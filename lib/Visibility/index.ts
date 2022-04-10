import { QualityCodes } from "../qualityCodes"

/*
Example: VIS: 999999,9,9,9
VISIBILITY-OBSERVATION distance dimension - in Meters
VISIBILITY-OBSERVATION distance quality code
VISIBILITY-OBSERVATION variability code
VISIBILITY-OBSERVATION quality variability code
*/
const distanceQualityCode = QualityCodes

const distanceVariabilityCode = {
    "N": "Not variable",
    "V": "Variable",
    "9": "Missing"
}

const distanceQualityVariabilityCode = QualityCodes


export interface VisibilityRecord {
    distanceValue: number,
    distanceQC: string,
    distanceVariable: string
    distanceVariableQC: string
}

export function parseVisibility(string: string) {
    const [distance, distanceQC, distanceVariable, distanceVariableQC] = string.split(',')

    return {
        distanceValue: distance !== "999999" ? parseInt(distance, 10) : null,
        distanceQC: distanceQC,
        distanceVariable: distanceVariable,
        distanceVariableQC: distanceVariableQC
    }
}

// RUNWAY-VISUAL-RANGE-OBSERVATION
// ED1