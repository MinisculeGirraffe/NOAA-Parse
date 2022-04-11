import { parseQualityCode } from "../qualityCodes"
import { parseNullInt } from '../../index'
import * as codes from './codes'

// PRESENT-WEATHER-OBSERVATION automated occurrence identifier for ASOS/AWOS data
// AT1 – AT8
// Page 28

//AU1 – AU9 
//Page 29

// PRESENT-WEATHER-OBSERVATION automated occurrence identifier
//AW1 - AW4
//Page 30

// PAST-WEATHER-OBSERVATION summary of day occurrence identifier
// AX1 – AX6
// Page 32

// PAST-WEATHER-OBSERVATION manual occurrence identifier
// AY1 - AY2
// Page 33

// PAST-WEATHER-OBSERVATION automated occurrence identifier
// AZ1- AZ2
// Page 34