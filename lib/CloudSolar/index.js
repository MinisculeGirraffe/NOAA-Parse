
import { parseQualityCode, QualityCodes } from "../../utils/qualityCodes.js"
import { ceilingCAVOKCode, ceilingDeterminationCode, skyCoverageCode, cloudTypeCode, skyCharacteristicCode, convectiveCloudCode, verticalDatumCode, cloudGenusCodes, cloudTopCode, global_irradiance_data_flag } from "./codes.js"
import { parseCodeMapping, parseNullInt } from "../../utils/index.js"
/*
Example CIG:  99999,9,9,9
SKY-CONDITION-OBSERVATION ceiling height dimension
SKY-CONDTION-OBSERVATION ceiling quality code
SKY-CONDITION-OBSERVATION ceiling determination code
SKY-CONDITION-OBSERVATION CAVOK code
*/

export function parseCIG(string) {
    const [height, qc, dc, cavok] = string.split(",")
    return {
        height: parseNullInt(height, "99999"),
        quality: parseQualityCode(qc),
        determination: parseCodeMapping(dc, ceilingDeterminationCode),
        CAVOK: parseCodeMapping(cavok, ceilingCAVOKCode)
    }
}

// SKY-COVER-LAYER
// GA1-GA6
// Page 54
export function parseGAx(string) {
    const [coverage, coverageQuality, baseHeight, baseHeightQuality, cloudType, cloudTypeQuality] = string.split(",")
    return {
        coverage: parseCodeMapping(coverage, skyCoverageCode),
        coverageQuality: parseCodeMapping(coverageQuality, QualityCodes),
        baseHeight: parseNullInt(baseHeight, "+99999"),
        baseHeightUnit: "Meters",
        baseHeightQuality: parseCodeMapping(baseHeightQuality, QualityCodes),
        cloudType: parseCodeMapping(cloudType, cloudTypeCode),
        cloudTypeQuality: parseCodeMapping(cloudTypeQuality, QualityCodes)
    }
}

// SKY-COVER-SUMMATION-STATE
// GD1-GD6
// Page 55
// 3,99,5,+01524,5,9
export function parseGDx(string) {
    const [
        coverage, coverage2, coverageQuality,
        baseHeight, baseHeightQuality, characteristic
    ] = string.split(",")
    return {
        coverageSummation: parseCodeMapping(coverage, skyCoverageCode),
        coverage: parseCodeMapping(coverage2, skyCoverageCode),
        coverageQuality: parseCodeMapping(coverageQuality, QualityCodes),
        baseHeight: parseNullInt(baseHeight, "+99999"),
        baseHeightUnit: "Meters",
        baseHeightQuality: parseCodeMapping(baseHeightQuality, QualityCodes),
        characteristic: parseCodeMapping(characteristic, skyCharacteristicCode)

    }
}

// SKY-CONDITION-OBSERVATION
// GE1
// Page 57
export function parseGE1(string) {
    const [convectiveCloud, verticalDatum, baseHeightUpper, baseHeightLower] = string.split(",")
    return {
        convectiveCloudAttribute: parseCodeMapping(convectiveCloud, convectiveCloudCode),
        verticalDatum: parseCodeMapping(verticalDatum, verticalDatumCode),
        baseHeightUpper: parseNullInt(baseHeightUpper, "+99999"),
        baseHeightLower: parseNullInt(baseHeightLower, "+99999"),
        baseHeightUnit: "Meters"
    }
}


// SKY-CONDITION-OBSERVATION
// GF1
// Page 58
export function parseGF1(string) {
    const [
        totalCoverage, totalOpaqueCoverage, totalCoverageQuality,
        totalLowestCoverage, totalLowestCoverageQuality,
        lowCloudGenusCode, lowCloudGenusQuality,
        lowCloudBaseHeight, lowCloudBaseHeightQuality,
        midCloudGenusCode, midCloudGenusQuality,
        highCloudGenusCode, highCloudGenusQuality
    ] = string.split(",")
    return {
        total_coverage: parseCodeMapping(totalCoverage, skyCoverageCode),
        total_opaque_coverage: parseCodeMapping(totalOpaqueCoverage, skyCoverageCode),
        total_coverage_quality: parseCodeMapping(totalCoverageQuality, QualityCodes),
        total_lowest_coverage: parseCodeMapping(totalLowestCoverage, skyCoverageCode),
        total_lowest_coverage_quality: parseCodeMapping(totalLowestCoverageQuality, QualityCodes),
        low_cloud_base_height: parseNullInt(lowCloudBaseHeight, "99999"),
        low_cloud_base_height_quality: parseCodeMapping(lowCloudBaseHeightQuality, QualityCodes),
        cloud_genus: {
            low: parseCodeMapping(lowCloudGenusCode, cloudGenusCodes.low[lowCloudGenusCode]),
            low_quality: parseCodeMapping(lowCloudGenusQuality, QualityCodes),
            mid: parseCodeMapping(midCloudGenusCode, (cloudGenusCodes.middle[midCloudGenusCode])),
            mid_quality: parseCodeMapping(midCloudGenusQuality, QualityCodes),
            high: parseCodeMapping(highCloudGenusCode, cloudGenusCodes.high[highCloudGenusCode]),
            high_quality: parseCodeMapping(highCloudGenusQuality, QualityCodes)
        }
    }
}


// BELOW-STATION-CLOUD-LAYER
// GG1-GG6
// Page 62
export function parseGGx(string) {
    const [coverage, coverage_quality, top_height, top_height_quality, type, type_quality, top, top_quality] = string.split(",")
    return {
        coverage: parseCodeMapping(coverage, skyCoverageCode),
        coverage_quality: parseCodeMapping(coverage_quality, QualityCodes),
        top_height: parseNullInt(top_height, "99999",),
        top_height_unit: "Meters",
        top_height_quality: parseCodeMapping(top_height_quality, QualityCodes),
        type: parseCodeMapping(type, cloudTypeCode),
        type_quality: parseCodeMapping(type_quality, QualityCodes),
        top: parseCodeMapping(top, cloudTopCode),
        top_quality: parseCodeMapping(top_quality, QualityCodes)
    }
}


// Hourly Solar Radiation Section
// GH1
// Page 63
export function parseGH1(string) {
    const [] = string.split(",")
    return {

    }
}

// SUNSHINE-OBSERVATION
// GJ1
// Page 65
// The code that indicates the network’s internal evaluation of the quality status of the hourly average solar radiation.
// Most users will find the preceding quality code SOLARAD_QC to be the simplest and most useful quality indicator.
// Ignoring the flag in the parsed response 

export function parseGJ1(string) {
    const [
        avg_solar_rad, avg_solar_rad_quality, avg_solar_rad_quality_flag,
        min_solar_rad, min_solar_rad_quality, min_solar_rad_quality_flag,
        max_solar_rad, max_solar_rad_quality, max_solar_rad_quality_flag,
        solar_rad_stddev, solar_rad_stddev_quality, solar_rad_stddev_quality_flag
    ] = string.split(",")
    return {
        avg_solar_rad: parseNullInt(avg_solar_rad, "99999", 10),
        avg_solar_rad_quality: parseCodeMapping(avg_solar_rad_quality, QualityCodes),
        min_solar_rad: parseNullInt(min_solar_rad, "99999", 10),
        min_solar_rad_quality: parseCodeMapping(min_solar_rad_quality, QualityCodes),
        max_solar_rad: parseNullInt(max_solar_rad, "99999", 10),
        max_solar_rad_quality: parseCodeMapping(max_solar_rad_quality, QualityCodes),
        solar_rad_units: "watts per square meter",
        solar_rad_stddev: parseNullInt(solar_rad_stddev, "99999", 10),
        solar_rad_stddev_quality: parseCodeMapping(solar_rad_stddev_quality,),
    }
}


// SUNSHINE-OBSERVATION
// GK1
// Page 66
export function parseGK1(string) {
    const [sunshine_percent, sunshine_percent_quality] = string.split(",")
    return {
        sunshine_percent: parseNullInt(sunshine_percent, "999"),
        sunshine_percent_quality: parseCodeMapping(sunshine_percent_quality, QualityCodes)
    }
}

// SUNSHINE-OBSERVATION FOR THE MONTH
// GL1
// Page 66
export function parseGL1(string) {
    const [sunshine_minutes, sunshine_minutes_quality] = string.split(",")
    return {
        sunshine_minutes: parseNullInt(sunshine_minutes, "99999"),
        sunshine_minutes_quality: parseCodeMapping(sunshine_minutes_quality, QualityCodes)
    }
}


// Solar Irradiance Section
// GM1
// Page 66
export function parseGM1(string) {
    const [
        solar_irad_minutes,
        global_irad, global_irad_flag, global_irad_quality,
        direct_beam_irad, direct_beam_irad_flag, direct_beam_irad_quality,
        diffuse_irad, diffuse_irad_flag, diffuse_irad_quality,
        uvb_global_irad, uvb_global_irad_flag, uvb_global_irad_quality
    ] = string.split(",")
    return {
        solar_irad_minutes: parseNullInt(solar_irad_minutes, "9999"),
        global_irad: {
            value: parseNullInt(global_irad, "9999"),
            unit: "watts per square meter",
            flag: parseCodeMapping(global_irad_flag, global_irradiance_data_flag),
            quality: parseCodeMapping(global_irad_quality, QualityCodes)
        },
        direct_beam_irad: {
            value: parseNullInt(direct_beam_irad, "9999"),
            unit: "watts per square meter",
            flag: parseCodeMapping(direct_beam_irad_flag, global_irradiance_data_flag),
            quality: parseCodeMapping(direct_beam_irad_quality, QualityCodes)
        },
        diffuse_irad: {
            value: parseNullInt(diffuse_irad, "9999"),
            unit: "watts per square meter",
            flag: parseCodeMapping(diffuse_irad_flag, global_irradiance_data_flag),
            quality: parseCodeMapping(diffuse_irad_quality, QualityCodes)
        },
        uvb_global_irad: {
            value: parseNullInt(uvb_global_irad, "9999"),
            unit: "milli-watts per square meter",
            flag: parseCodeMapping(uvb_global_irad_flag, global_irradiance_data_flag),
            quality: parseCodeMapping(uvb_global_irad_quality, QualityCodes)
        }
    }
}

// Solar Radiation Section
// GN1
// Page 69
export function parseGN1(string) {
    const [] = string.split(",")
    return {

    }
}

// Net Solar Radiation Section
// GO1
// Page 71
export function parseGO1(string) {
    const [] = string.split(",")
    return {

    }
}

// Modeled Solar Irradiance Section
// GP1
// Page 72
export function parseGP1(string) {
    const [] = string.split(",")
    return {

    }
}

// Hourly Solar Angle Section
// GQ1
// Page 73
export function parseGQ1(string) {
    const [] = string.split(",")
    return {

    }
}


// Hourly Extraterrestrial Radiation Section
// GR1
// Page 74
export function parseGR1(string) {
    const [] = string.split(",")
    return {

    }
}
