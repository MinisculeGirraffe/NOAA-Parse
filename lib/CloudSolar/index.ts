
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

// SKY-COVER-LAYER
// GA1-GA6
// Page 54


// SKY-COVER-SUMMATION-STATE
// GD1-GD6
// Page 55

// SKY-CONDITION-OBSERVATION
// GE1
// Page 57

// SKY-CONDITION-OBSERVATION
// GF1
// Page 58

// BELOW-STATION-CLOUD-LAYER
// GG1-GG6
// Page 62

// Hourly Solar Radiation Section
// GH1
// Page 63

// SUNSHINE-OBSERVATION
// GJ1
// Page 65

// SUNSHINE-OBSERVATION
// GK1
// Page 66

// SUNSHINE-OBSERVATION FOR THE MONTH
// GL1
// Page 66

// Solar Irradiance Section
// GM1
// Page 66

// Solar Radiation Section
// GN1
// Page 69

// Net Solar Radiation Section
// GO1
// Page 71

// Modeled Solar Irradiance Section
// GP1
// Page 72

// Hourly Solar Angle Section
// GQ1
// Page 73

// Hourly Extraterrestrial Radiation Section
// GR1
// Page 74