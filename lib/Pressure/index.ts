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

// pressure data
// MA1

// atmospheric pressure change
// MD1

// GEOPOTENTIAL-HEIGHT-ISOBARIC-LEVEL
// ME1

// ATMOSPHERIC-PRESSURE-OBSERVATION (STP/SLP)
// MF1

// ATMOSPHERIC-PRESSURE-OBSERVATION
// MG1

// ATMOSPHERIC-PRESSURE-OBSERVATION FOR THE MONTH
// MH1

// ATMOSPHERIC-PRESSURE-OBSERVATION FOR THE MONTH
// MK1