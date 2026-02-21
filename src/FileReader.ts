import fs from 'fs';

function ReadBaseFile(file: string, data: string): void {

    fs.writeFile(file, String(data).toString(), (err) => {

        if (err) {
            throw new Error("Cannot Find File");
        }

        return data;
    })

}

export default ReadBaseFile;