import { TempRecord } from "./lib/AirTempObservation/temp"
import { PressureRecord } from "./lib/AtmosphericPressureObservation"
import { PrecipitationRecord } from "./lib/LiquidPrecipitation"
import { SkyConditionRecord } from "./lib/SkyConditionObservation"
import { VisibilityRecord } from "./lib/VisibilityObservation"
import { WindRecord } from "./lib/WindObservation"
interface Row {
    Station: String
    Date: Date
    Source: String
    Latitude: Number,
    Longitude: Number,
    Elevation: Number
    Name: String
    Report_Type: String,
    Call_Sign: String
    Quality_Control: String,
    WND: WindRecord
    CIG: SkyConditionRecord
    VIS: VisibilityRecord
    TMP: TempRecord
    DEW: TempRecord
    SLP: PressureRecord
    AA1: PrecipitationRecord
    AA2,  //Liquid Percipitation
    AA3, //Liquid Percipitation
    AA4, //Liquid Percipitation
    AB1, //LIQUID-PRECIPITATION MONTHLY TOTAL identifier TODO
    AC1, //PRECIPITATION-OBSERVATION-HISTORY identifier TODO
    AD1, // LIQUID-PRECIPITATION GREATEST AMOUNT IN 24 HOURS, FOR THE MONTH identifier TODO
    AE1, // LIQUID-PRECIPITATION, NUMBER OF DAYS WITH SPECIFIC AMOUNTS, FOR THE MONTH identifier TODO
    AG1 // PRECIPITATION-ESTIMATED-OBSERVATION identifier TODO
    AH1, // LIQUID-PRECIPITATION MAXIMUM SHORT DURATION, FOR THE MONTH identifier TODO
    AH2,
    AH3,
    AH4,
    AH5,
    AH6,
    AI1, // LIQUID-PRECIPITATION MAXIMUM SHORT DURATION, FOR THE MONTH identifier TODO
    AI2,
    AI3,
    AI4,
    AI5,
    AI6,
    AJ1, // SNOW-DEPTH identifier, TODO
    AK1, //SNOW-DEPTH GREATEST DEPTH ON THE GROUND, FOR THE MONTH identifier TODO,
    AL1, // SNOW-ACCUMULATION occurrence identifier
    AL2,
    AL3,
    AL4,
    AM1,  //SNOW-ACCUMULATION GREATEST AMOUNT IN 24 HOURS, FOR THE MONTH identifier,
    AN1, //  SNOW-ACCUMULATION FOR THE DAY/MONTH occurrence identifier
    AO1, // LIQUID-PRECIPITATION occurrence identifier
    AO2,
    AO3,
    AO4,
}