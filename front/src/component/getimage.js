// const {DefaultAzureCredential} = require('@azure/identity');
// const {BlobServiceClient} = require("@azure/storage-blob");
// const { v1: uuidv1 } = require("uuid");


// async function getimage() {
//         console.log("Azure Blob storage v12 - JavaScript quickstart sample");

//         // Quick start code goes here
//                 const account = 'raspiotstorage';
//         const sasToken = '?sv=2022-11-02&ss=bfqt&srt=c&sp=rwdlacupiytfx&se=2023-12-31T14:47:43Z&st=2023-12-12T06:47:43Z&spr=https,http&sig=KbodWIcWTHVupKc3K7fFks1PaMchLyH7tHDk4Padykw%3D';

//   const blobServiceClient = new BlobServiceClient(`https://${account}.blob.core.windows.net/?${sasToken}`);  // create a blobServiceClient


//         const containerClient = blobServiceClient.getContainerClient(
//             'raspiotcontainer'
//         );

//         console.log('\nListing blobs...');
//         const blobItems = containerClient.listBlobsFlat();
//         const urls = [];

//         for await (const blob of blobItems) {
//             const tempBlockBlobClient = containerClient.getBlockBlobClient(blob.name); // get the blob url
//             urls.push({ name: blob.name, url: tempBlockBlobClient.url }); // push the image name and url to the urls array
//             console.log(blob.name);
//         }

//         // // List the blob(s) in the container.
//         // for await(const blob of containerClient.listBlobsFlat()) {
//         //     // Get Blob Client from name, to get the URL
//         //     const tempBlockBlobClient = containerClient.getBlockBlobClient(blob.name);

//         //     // Display blob name and URL
//         //     console.log(`\n\tname: ${blob.name}\n\tURL: ${tempBlockBlobClient.url}\n`);

//         //     const blockBlobClient = containerClient.getBlockBlobClient(blob.name);

//         //     urls.push({name: blob.name, url: tempBlockBlobClient.url}); // push the image name and url to the urls array

//         //     // const downloadBlockBlobResponse = await blockBlobClient.download(0);
//         //     // console.log('\nDownloaded blob content...');
//         //     // console.log(
//         //     //     '\t',
//         //     //     await streamToText(downloadBlockBlobResponse.readableStreamBody)
//         //     // );

//         // }

// }

// getimage();

// /*
// // Get a block blob client
// const blockBlobClient = containerClient.getBlockBlobClient(blobName);

// // Get blob content from position 0 to the end In Node.js, get downloaded data
// // by accessing downloadBlockBlobResponse.readableStreamBody In browsers, get
// // downloaded data by accessing downloadBlockBlobResponse.blobBody
// const downloadBlockBlobResponse = await blockBlobClient.download(0);
// console.log('\nDownloaded blob content...');
// console.log(
//     '\t',
//     await streamToText(downloadBlockBlobResponse.readableStreamBody)
// );


// */

// /*
// import { useEffect } from 'react';
// import './App.css';




// const fetchImages = async () => {
//     if (!account || !sasToken || !containerName) { // check if the credentials are set
//         alert(
//             'Please make sure you have set the Azure Storage credentials in the .env file'
//         );
//         return;
//     }
//     try {
//         setLoading(true); // Turn on loading
//         const blobItems = containerClient.listBlobsFlat(); // get all blobs in the container
//         const urls = [];
//         for await(const blob of blobItems) {
//             const tempBlockBlobClient = containerClient.getBlockBlobClient(blob.name); // get the blob url
//             urls.push({name: blob.name, url: tempBlockBlobClient.url}); // push the image name and url to the urls array
//         }
//         setImageUrls(urls); // set the urls array to the imageUrls state
//     } catch (error) {
//         console.error(error); // Handle error
//     } finally {
//         setLoading(false); // Turn off loading
//     }
// };

// //save an Image
// const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!file) { // check if the file is selected
//         alert('Please select an image to upload');
//         return;
//     }
//     if (!account || !sasToken || !containerName) { // check if the credentials are set
//         alert(
//             'Please make sure you have set the Azure Storage credentials in the .env file'
//         );
//         return;
//     }
//     try {
//         setLoading(true);
//         const blobName = `${new Date().getTime()}-${file.name}`; // Specify a default blob name if needed
//         const blobClient = containerClient.getBlockBlobClient(blobName); // get the blob client
//         await blobClient.uploadData(file, {
//             blobHTTPHeaders: {
//                 blobContentType: file.type
//             }
//         }); // upload the image
//         await fetchImages(); // fetch all images again after the upload is completed
//     } catch (error) {
//         console.error(error); // Handle error
//     } finally {
//         setLoading(false); // Turn off loading
//     }
// };

// // delete an Image
// const handleDelete = async (blobName) => {
//     if (!account || !sasToken || !containerName) { // check if the credentials are set
//         alert(
//             'Please make sure you have set the Azure Storage credentials in the .env file'
//         );
//         return;
//     }
//     try {
//         setLoading(true); // Turn on loading
//         const blobClient = containerClient.getBlockBlobClient(blobName); // get the blob client
//         await blobClient.delete(); // delete the blob
//         fetchImages(); // fetch all images again after the delete is completed
//     } catch (error) {
//         console.log(error) // Handle error
//     } finally {
//         setLoading(false); //
//     }
// };

// // fetch all images when the page loads
// useEffect(() => {
//     fetchImages();
// }, [])

// */