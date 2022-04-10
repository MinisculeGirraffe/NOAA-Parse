
import {QualityCodes} from "../qualityCodes"
/*
Example CIG:  99999,9,9,9
SKY-CONDITION-OBSERVATION ceiling height dimension
SKY-CONDTION-OBSERVATION ceiling quality code
SKY-CONDITION-OBSERVATION ceiling determination code
SKY-CONDITION-OBSERVATION CAVOK code
*/

const ceilingQualityCode = QualityCodes

const ceilingDeterminationCode = {
    "A": "Aircraft",
    "B": "Balloon",
    "C": "Statistically derived",
    "D": "Persistent cirriform ceiling (pre-1950 data)",
    "E": "Estimated",
    "M": "Measured",
    "P": "Precipitation ceiling (pre-1950 data)",
    "R": "Radar",
    "S": "ASOS augmented",
    "U": "Unknown ceiling (pre-1950 data)",
    "V": "Variable ceiling (pre-1950 data)",
    "W": "Obscured"
}

// 'Ceiling and Visibility Okay' 
const ceilingCAVOKCode = {
    "N": "No",
    "Y": "Yes",
    "9": "Missing"
}


export interface SkyConditionRecord {
    ceilingHeight,
    ceilingQC,
    ceilingDC,
    ceilingCAVOK,
}
export function parseCeiling(string: string) {
    const [height,qc,dc,cavok] = string.split(",")

    return {
        ceilingHeight: height !== "9999" ? parseInt(height, 10) : null,
        ceilingQC: qc,
        ceilingDC: dc,
        ceilingCAVOK: cavok
    }
}