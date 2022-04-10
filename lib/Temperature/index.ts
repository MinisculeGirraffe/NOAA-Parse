export interface TempRecord {
    tempValue: Number | null,
    tempQC: string | null,
}


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

// For TMP and DEW
export function ParseTemp<TempRecord>(input: string) {
    const keys = ["temperature","temperature_quality"]
    const [tmpStr, qc] = input.split(',')
    return {
        temperature: tmpStr != "+9999" ? parseInt(tmpStr, 10) / 10 : null,
        temperature_quality: qc
    }
}
export function ParseDewTemp(input) {
    const [tmpStr, qc] = input.split(',')
    return {
        dew_temperature: tmpStr != "+9999" ? parseInt(tmpStr, 10) / 10 : null,
        dew_temperature_quality: qc
    }
}

// EXTREME-AIR-TEMPERATURE
// KA1-KA4
function parseExtremeTemp(string) {
    let keys = ["extreme_temp", "period_quantity", "max_min", "temp", "temp_quality"]

}

// AVERAGE-AIR-TEMPERATURE
// KB1-KB3
function parseAverageAirTemp() {
    const keys = ['avg_temp', 'period_quantity', 'temp_code', 'temp', 'temp_quality']
}

// EXTEME-AIR-TEMPERATURE FOR THE MONTH
// KC1-KC3
function parseExtremeTempMonth() {
    const keys = ['extreme_temp_month', 'code', 'condition_code', 'temp', 'dates', 'temp_quality']
}

// HEATING-COOLING-DEGREE-DAYS
// KD1-KD2
function parseHeatingCoolingDegreeDays() {
    const keys = ['heating_cooling_degree_days', 'period_quantity', 'code', 'days', 'days_quality']
}


// EXTREME TEMPERATURES, NUMBER OF DAYS EXCEEDING CRITERIA, FOR THE MONTH
// KE1
function parseExtremeTempExceedingCriteriaMonth() {
    const keys = ['extreme_temp_days_exceeding_criteria', 'number_days_max_temp_32lower', 'number_days_max_temp_32lower_quality', 'number_days_max_temp_90higher', 'number_days_max_temp_90higher_quality', 'number_days_min_temp_32lower', 'number_days_min_temp_32lower_quality', 'number_days_min_temp_0lower', 'number_days_min_temp_0lower_quality']
}

// Hourly Calculated Temperature
// KF1
function parseHourlyCalculatedTemp() {
    const keys = ['hourly_calculated_temp', 'derived_air_temp', 'derived_air_temp_quality']
}

// Hourly Calculated Temperature
// KG1-KG2
function parseHourlyCalculatedTemp2() {
    const keys = ['average_dew_point_wet_bulb_trt', 'time_quantity', 'code', 'avg_temp', 'derived_code', 'quality_code']
}


// SOIL-TEMPERATURE
// ST1
//TODO Move Catagory 
function parseSoilTemp () {

}
