
import { parseQualityCode, QualityCodes } from "../qualityCodes"
import { ceilingCAVOKCode, ceilingDeterminationCode, skyCoverageCode, cloudTypeCode, skyCharacteristicCode, convectiveCloudCode, verticalDatumCode } from "./codes"
import { parseCodeMapping, parseNullInt } from "../../utils/index"
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
        height: parseNullInt(height, "9999"),
        quality: parseQualityCode(qc),
        determination: parseCodeMapping(dc, ceilingDeterminationCode),
        CAVOK: parseCodeMapping(cavok, ceilingCAVOKCode)
    }
}

// SKY-COVER-LAYER
// GA1-GA6
// Page 54
function parseGAx(string) {
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
function parseGDx(string) {
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
function parseGE1(string) {
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
function parseGF1(string) {
    const [
        totalCoverage, totalOpaqueCoverage, totalCoverageQuality,
        totalLowestCoverage, totalLowestCoverageQuality,
        lowCloudGenusCode, lowCloudGenusQuality,
        lowCloudBaseHeight, lowCloudBaseHeightQuality,
        midCloudGenusCode, midCloudGenusQuality,
        highCloudGenusCode, highCloudGenusQuality
    ] = string.split(",")
    return {

    }
}


// BELOW-STATION-CLOUD-LAYER
// GG1-GG6
// Page 62
function parseGGx(string) {
    const [] = string.split(",")
    return {

    }
}


// Hourly Solar Radiation Section
// GH1
// Page 63
function parseGH1(string) {
    const [] = string.split(",")
    return {

    }
}

// SUNSHINE-OBSERVATION
// GJ1
// Page 65
function parseGJ1(string) {
    const [] = string.split(",")
    return {

    }
}


// SUNSHINE-OBSERVATION
// GK1
// Page 66
function parseGK1(string) {
    const [] = string.split(",")
    return {

    }
}

// SUNSHINE-OBSERVATION FOR THE MONTH
// GL1
// Page 66
function parseGL1(string) {
    const [] = string.split(",")
    return {

    }
}


// Solar Irradiance Section
// GM1
// Page 66
function parseGM1(string) {
    const [] = string.split(",")
    return {

    }
}

// Solar Radiation Section
// GN1
// Page 69
function parseGN1(string) {
    const [] = string.split(",")
    return {

    }
}

// Net Solar Radiation Section
// GO1
// Page 71
function parseGO1(string) {
    const [] = string.split(",")
    return {

    }
}

// Modeled Solar Irradiance Section
// GP1
// Page 72
function parseGP1(string) {
    const [] = string.split(",")
    return {

    }
}

// Hourly Solar Angle Section
// GQ1
// Page 73
function parseGQ1(string) {
    const [] = string.split(",")
    return {

    }
}


// Hourly Extraterrestrial Radiation Section
// GR1
// Page 74
function parseGR1(string) {
    const [] = string.split(",")
    return {

    }
}
