/*
Unit: Hectopascals
Example: 99999,9

ATMOSPHERIC-PRESSURE-OBSERVATION sea level pressure
ATMOSPHERIC-PRESSURE-OBSERVATION sea level pressure quality code
*/

export interface PressureRecord {
    pressureValue: number,
    pressureQC: string
}

export function parsePressure <PressureRecord>(string: string) {
    const [pressure, qc] = string.split(',')
    return {
        pressureValue: pressure !== "99999" ? parseInt(pressure, 10) / 10 : null,
        pressureQC: qc
    }
}

// ATMOSPHERIC-PRESSURE-OBSERVATION identifier
// MA1
// Page 88

// ATMOSPHERIC-PRESSURE-CHANGE identifier
// MD1
// Page 89

// GEOPOTENTIAL-HEIGHT-ISOBARIC-LEVEL
// ME1
// Page 90

// ATMOSPHERIC-PRESSURE-OBSERVATION (STP/SLP)
// MF1
// Page 91

// ATMOSPHERIC-PRESSURE-OBSERVATION
// MG1
// Page 92

// ATMOSPHERIC-PRESSURE-OBSERVATION FOR THE MONTH
// MH1
// Page 93

// ATMOSPHERIC-PRESSURE-OBSERVATION FOR THE MONTH
// MK1
// Page 94