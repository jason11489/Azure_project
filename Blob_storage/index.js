const {BlobServiceClient} = require("@azure/storage-blob");
const {DefaultAzureCredential} = require('@azure/identity');
const {v1: uuidv1} = require("uuid");
require("dotenv").config();

const accountName = "kswiotstorage";
if (!accountName)
    throw Error('Azure Storage accountName not found');

const blobServiceClient = new BlobServiceClient(
    `https://${accountName}.blob.core.windows.net`,
    new DefaultAzureCredential()
);

console.log(blobServiceClient);


// Get a reference a container
const containerClient = blobServiceClient.getContainerClient("sensordatacontainer");


// Get a block blob client
const blockBlocClient = containerClient.getBlobBlockClient();


async function downloadBlobToFile(containerClient, blobName, fileNameWithPath) {

    const blobClient = containerClient.getBlobClient(blobName);
    
    await blobClient.downloadToFile(fileNameWithPath);
    console.log(`download of ${blobName} success`);
}

downloadBlobToFile(blobServiceClient, )

async function main() {
    try {
        console.log("Azure Blob storage v12 - JavaScript quickstart sample");

        // Quick start code goes here

    } catch (err) {
        console.err(`Error: ${err.message}`);
    }
}

main()
    .then(() => console.log("Done"))
    .catch((ex) => console.log(ex.message));



