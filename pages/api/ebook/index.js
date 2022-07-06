import fs from 'fs';

export const config = {
    api: {
        bodyParser: false,
    },
};

const CHUNK_SIZE_IN_BYTES = 100000;
export default function handler(req, res) {
    const { method } = req;
    switch (method) {
        case 'GET':
            //read file use '/api/ebook' at src to use

            const filestream = fs.createReadStream('./ebooks/Building.pdf');
            const fileSize = fs.statSync('./ebooks/Building.pdf').size;

            const headers = {
                'Content-Length': fileSize,
                'Content-Type': 'application/pdf',
            };
            res.writeHead(206, headers);
            filestream.pipe(res);
            break;
        case 'POST':
            res.status(200).json({ message: 'success!' });
            break;
        default:
            res.status(405).json({ error: `Method ${method} not allowed` });
    }
}
