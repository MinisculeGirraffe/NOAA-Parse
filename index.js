import { parse } from 'csv-parse'

import { parseObject } from './lib/index.js';
import fs from 'fs'
import util from "util"


async function main() {
    let csv = fs.createReadStream('./sample.csv').pipe(
        parse({
            columns: true,
            skipRecordsWithEmptyValues: true,
        })
    )
    let result = []
    for await (const record of csv) {
        const filtered = Object.fromEntries(Object.entries(record).filter(([_, v]) => v != ''));
        result.push( parseObject(filtered))
    }
    console.log(result)
}

main()




