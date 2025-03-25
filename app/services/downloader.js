import {exec} from "child_process";
class Downloader {
    constructor(url,path) {
        this.url = url;
        this.path = path;
    }

    downloadVideo() {
        exec(`mkdir ${this.path} `,()=>{
            const command = `yt-dlp -o "${this.path}/%(title)s.%(ext)s" ${this.url}`
            process = exec(command);
            process.stdout.on('data', (data) => {
                console.log(data);
            });

            process.stderr.on('data', (data) => {
                console.error(data);
            });

            process.on('close', (code) => {
                console.log(`Child process exited with code ${code}`);
            });

        })

    }
}

export default Downloader;