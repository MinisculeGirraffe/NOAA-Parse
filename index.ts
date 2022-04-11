import { TempRecord } from "./lib/Temperature"
import { PressureRecord } from "./lib/Pressure"
import { SkyConditionRecord } from "./lib/SkyConditionObservation"
import { VisibilityRecord } from "./lib/Visibility"
import { WindRecord } from "./lib/Wind"



export function parseNullInt(number,nullValue,scale = 1) {
   return number != nullValue ? parseInt(number,10) / scale : null
}