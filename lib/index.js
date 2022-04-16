import * as Precipitation from "./Precipitation/index.js"
import * as CloudSolar from './CloudSolar/index.js'
import * as Wind from './Wind/index.js'
import * as Temperature from './Temperature/index.js'
import * as Pressure from './Pressure/index.js'


export const parseKey = (key, category) => {
    //Split the imported function names and the actual function into an array
    const parsers = Object.entries(category)
    let values = Object.entries(key)[0]
    // find a parsing function that matches the object key value from the CSV
    let parser = parsers.find(func => func[0].substring(5, 7) == values[0].substring(0, 2))
    if (!parser) return null
    // return the object key with it's parsed value
    return {
        [values[0]]: (parser[1](values[1]))
    }
}

const parseCatagory = (obj, category) => {
    return Object.entries(obj)
        .map(key => parseKey({ [key[0]]: key[1] }, category))
        .reduce((prev, current) => {
            return {
                ...prev,
                ...current
            }
        }, {})
}
export const parseObject = (obj) => {
    return {
        Station: obj.STATION,
        Date: new Date(obj.DATE),
        Source: obj.SOURCE,
        Location: {
            type: "Point",
            coordinates: [parseFloat(obj.LONGITUDE, 10), parseFloat(obj.LATITUDE, 10)]
        },
        Elevation: parseFloat(obj.LONGITUDE, 10),
        Name: obj.NAME,
        Report_Type: obj.REPORT_TYPE,
        Call_Sign: obj.CALL_SIGN,
        Quality_Control: obj.QUALITY_CONTROL,
        Mandatory: {
            Wind: Wind.parseWND(obj.WND),
            Ceiling: CloudSolar.parseCIG(obj.CIG),
            Temperature: Temperature.ParseTMP(obj.TMP),
            Dew_Point: Temperature.parseDEW(obj.DEW),
            Sea_Level_Pressure: Pressure.parseSLP(obj.SLP)
        }
    }

}

