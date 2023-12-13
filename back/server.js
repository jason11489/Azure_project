const {BlobServiceClient} = require("@azure/storage-blob");
const express = require('express');
// import express from 'express';

const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

console.log("Azure Blob storage v12 - JavaScript quickstart sample");

const accountName = "raspiotstorage";

const blobServiceClient = BlobServiceClient.fromConnectionString(
    "DefaultEndpointsProtocol=https;AccountName=raspiotstorage;AccountKey=OhL3x45bf" +
    "zNaMKRCZSyzNOSsVGpfizuqjWwuvuJdoXFjJlIpZtxANUbmRWXENeTxRhTij4WiIevb+ASt9mO+iw=" +
    "=;EndpointSuffix=core.windows.net"
);

const containerClient = blobServiceClient.getContainerClient(
    'raspiotcontainer'
);

async function getimage() {

    console.log('\nListing blobs...');
    const blobItems = containerClient.listBlobsFlat();
    const urls = [];

    for await(const blob of blobItems) {
        const tempBlockBlobClient = containerClient.getBlockBlobClient(blob.name); // get the blob url
        urls.push({name: blob.name, url: tempBlockBlobClient.url}); // push the image name and url to the urls array
    }

    return urls;
}

const server = async () => {

    app.get('/', async (req, res) => {
        const tiger = await getimage();
        console.log(tiger);
        res.send(tiger);
    })

    app.listen(8000, () => {
        console.log('server start on 8000')
    });

}

server();