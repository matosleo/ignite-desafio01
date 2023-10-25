import { parse } from 'csv-parse'
import fs from 'node:fs'

const fileToImportPath = new URL('../../import.csv', import.meta.url)

const processFile = async () => {
  const parser = fs
    .createReadStream(fileToImportPath)
    .pipe(
      parse({ from_line: 2 })
    )

  for await (const row of parser) {
    const [title, description] = row

    await fetch('http://localhost:3333/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title, description
      })
    })
  }
}

processFile()