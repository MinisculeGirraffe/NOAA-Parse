import * as Precipitation from "./Precipitation/index.js"
import * as CloudSolar from './CloudSolar/index.js'
import * as Wind from './Wind/index.js'
import * as Temperature from './Temperature/index.js'
import * as Pressure from './Pressure/index.js'

import util from "util"

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
        Latitude: parseFloat(obj.LATITUDE, 10),
        Longitude: parseFloat(obj.LONGITUDE, 10),
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
        },
        Secondary: {
         ...parseCatagory(obj, Precipitation),
        ...parseCatagory(obj,CloudSolar)
        }
    }

}


const obj = {
    STATION: '72228013876',
    DATE: '2003-01-31T23:53:00',
    SOURCE: 'C',
    LATITUDE: '33.56556',
    LONGITUDE: '-86.745',
    ELEVATION: '187.5',
    NAME: 'BIRMINGHAM AIRPORT, AL US',
    REPORT_TYPE: 'FM-15',
    CALL_SIGN: 'BHM  ',
    QUALITY_CONTROL: 'V020',
    WND: '270,5,N,0052,5',
    CIG: '01036,5,M,N',
    VIS: '016000,5,N,1',
    TMP: '+0094,5',
    DEW: '+0011,5',
    SLP: '10169,5',
    AA1: '01,0000,9,5',
    GD1: '3,99,5,+01036,5,9',
    GD2: '4,99,5,+01524,5,9',
    GF1: '08,99,1,99,9,99,9,99999,9,99,9,99,9',
    KA1: '999,M,+0128,1',
    KA2: '999,N,+0083,1',
    MA1: '10169,5,99999,9',
    MD1: '5,1,001,1,+999,9',
    MW1: '00,1',
    REM: 'MET101METAR KBHM 312353Z 27010KT 10SM BKN034 OVC050 09/01 A3003 RMK AO2 SLP169 T00940011 10128 20083 55001;',
    EQD: 'Q01+000000PRSWM2N01 00000JPWTH 0'
}


//console.log(util.inspect(parseObject(obj), { showHidden: false, depth: null, colors: true }));
//test


