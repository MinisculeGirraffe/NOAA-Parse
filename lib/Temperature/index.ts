export interface TempRecord {
    tempValue: Number | null,
    tempQC: string | null,
}

/*
const codes = {
    "Temperature": {
        parser: ParseTemp,
        codes: ["TMP"]
    },
    "Dewpoint": {
        parser: ParseDewTemp,
        codes: ["DEW"]
    },
    "Extreme Air Temperature": {
        parser: parseExtremeTemp,
        codes: ["KA1", "KA2", "KA3", "KA4"]
    },
    "Average Air Temperature": {
        parser: parseAverageAirTemp,
        codes: ["KB1", "KB2", "KB3"]
    },
    "Extreme Air Temperature For Month": {
        parser: parseExtremeTempMonth,
        codes: ["KC1", "KC2", "KC3"]
    },
    "Heating Cooling Degree Days": {
        parser: parseHeatingCoolingDegreeDays,
        codes: ["KD1","KD2"]
    },
    "Extreme Temps Exceeding Criteria for Month": {
        parser: parseExtremeTempExceedingCriteriaMonth,
        codes: ["KE1"]
    },
    "Heating-Cooling Degree Days": {
        parser: parseHeatingCoolingDegreeDays,
        codes: ["KD1,KD2"]
    },
    "Hourly Calculated Temp": {
        parser: parseHourlyCalculatedTemp,
        codes: ["KF1"]
    },
    "Hourly Calculated Temp 2": {
        parser: parseHourlyCalculatedTemp2,
        codes: ["KG1","KG2"]
    }

}
*/
// For TMP and DEW
export function ParseTMP(input) {
    const keys = ["temperature","temperature_quality"]
    const [tmpStr, qc] = input.split(',')
    return {
        temperature: tmpStr != "+9999" ? parseInt(tmpStr, 10) / 10 : null,
        temperature_quality: qc
    }
}
export function parseDEW(input) {
    const [tmpStr, qc] = input.split(',')
    return {
        dew_temperature: tmpStr != "+9999" ? parseInt(tmpStr, 10) / 10 : null,
        dew_temperature_quality: qc
    }
}

// EXTREME-AIR-TEMPERATURE
// KA1-KA4
// Page 82
function parseKAx (string) {
    const [] = string.split(",")
    return {

    }
}

// AVERAGE-AIR-TEMPERATURE
// KB1-KB3
// Page 83
function parseKBx (string) {
    const [] = string.split(",")
    return {

    }
}

// EXTEME-AIR-TEMPERATURE FOR THE MONTH
// KC1-KC2
// Page 84
function parseKCx (string) {
    const [] = string.split(",")
    return {

    }
}

// HEATING-COOLING-DEGREE-DAYS
// KD1-KD2
// Page 85
function parseKDx (string) {
    const [] = string.split(",")
    return {

    }
}


// EXTREME TEMPERATURES, NUMBER OF DAYS EXCEEDING CRITERIA, FOR THE MONTH
// KE1
// Page 85
function parseKE1 (string) {
    const [] = string.split(",")
    return {

    }
}

// Hourly Calculated Temperature
// KF1
// Page 87
function parseKF1 (string) {
    const [] = string.split(",")
    return {

    }
}

// Hourly Calculated Temperature
// KG1-KG2
// Page 87
function parseKGx (string) {
    const [] = string.split(",")
    return {

    }
}


