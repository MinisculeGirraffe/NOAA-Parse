import { QualityCodes } from "./qualityCodes.js"
export function parseCodeMapping(code, codeMap) {
    return {
        code: code,
        message: codeMap[code]
    }
}
export function parseNullInt(number, nullValue, scale = 1) {
    return number != nullValue ? parseInt(number, 10) / scale : null
}

export function parseValueRecord (value,nullValue,unit,quality) {
    
}