
//"206,1,N,0023,1"
//WIND-OBSERVATION direction angle
//WIND-OBSERVATION direction quality code
const observationTypeCode = {
    "A": "Abridged Beaufort",
    "B": "Beaufort",
    "C": "Calm",
    "H": "5-Minute Average Speed",
    "N": "Normal",
    "R": "60-Minute Average Speed",
    "Q": "Squall",
    "T": "180 Minute Average Speed",
    "V": "Variable",
    "9": "Missing"
}
export interface WindRecord {
    directionValue : number,
    directionQC: string,
    observationTypeCode: string,
    speedValue: number,
    speedQC: string

}
// For WND
export function parseWind<WindRecord>(string: string) {
    const [direction, directionQC, obsTypeCode, speed, speedQC] = string.split(',')

    return {
        directionValue: direction !== "999" ? parseInt(direction, 10) : null,
        directionQC: directionQC,
        observationTypeCode, obsTypeCode,
        speedValue: speed !== "9999" ? parseInt(speed, 10) : null,
        speedQC: speedQC,
    }
}

// Wind Data: SUPPLEMENTARY-WIND-OBSERVATION
// OA1-OA3

// Wind Data: Hourly/Sub-Hourly Wind Section
// OB1-OB2

// Wind Data: WIND-GUST-OBSERVATION
// OC1

// Wind Data: SUPPLEMENTARY-WIND-OBSERVATION
// OD1-OD3

// Wind Data: SUMMARY-OF-DAY-WIND-OBSERVATION
// OE1-OE3

// Relative Humidity -------------------------

// RELATIVE HUMIDITY
// RH1-RH3