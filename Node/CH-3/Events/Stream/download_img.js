const axios = require('axios');
const fs = require ('fs');
const path = require('path');

const imgurl = 'https://shorturl.at/NyZuy';
const op = path.resolve(__dirname,'downloaded_img.jpg')

async function dwimg(url,oplocation) {
    try{
        const rs = await axios({
            method:'GET',
            url:url,
            resType:'stream'
        });

        const ws = fs.createWriteStream(oplocation);
        rs.data.pipe(ws);

        ws.on('finish',()=>{
            console.log('Image Downloaded');
        });

        ws.on('error',(err)=>{
            console.error("Error Downloading Image",err);
        });
    }catch(err){
        console.error("Error while making request",err);
    }
}

dwimg(imgurl,op);