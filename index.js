import { parse } from 'csv-parse'
import { transform } from 'stream-transform';

import fs from 'fs'



async function main() {
    let csv = fs.createReadStream('./sample.csv').pipe(
        parse({
            columns: true,
            skipRecordsWithEmptyValues: true,

        })
    )

    for await (const record of csv) {
        const filtered = Object.fromEntries(Object.entries(record).filter(([_, v]) => v != ''));
        
        console.log(filtered)

    }

}

main()




