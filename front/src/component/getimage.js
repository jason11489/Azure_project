//fetch all images
import { useEffect } from 'react';
import './App.css';




const fetchImages = async () => {
    if (!account || !sasToken || !containerName) { // check if the credentials are set
        alert(
            'Please make sure you have set the Azure Storage credentials in the .env file'
        );
        return;
    }
    try {
        setLoading(true); // Turn on loading
        const blobItems = containerClient.listBlobsFlat(); // get all blobs in the container
        const urls = [];
        for await(const blob of blobItems) {
            const tempBlockBlobClient = containerClient.getBlockBlobClient(blob.name); // get the blob url
            urls.push({name: blob.name, url: tempBlockBlobClient.url}); // push the image name and url to the urls array
        }
        setImageUrls(urls); // set the urls array to the imageUrls state
    } catch (error) {
        console.error(error); // Handle error
    } finally {
        setLoading(false); // Turn off loading
    }
};

//save an Image
const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) { // check if the file is selected
        alert('Please select an image to upload');
        return;
    }
    if (!account || !sasToken || !containerName) { // check if the credentials are set
        alert(
            'Please make sure you have set the Azure Storage credentials in the .env file'
        );
        return;
    }
    try {
        setLoading(true);
        const blobName = `${new Date().getTime()}-${file.name}`; // Specify a default blob name if needed
        const blobClient = containerClient.getBlockBlobClient(blobName); // get the blob client
        await blobClient.uploadData(file, {
            blobHTTPHeaders: {
                blobContentType: file.type
            }
        }); // upload the image
        await fetchImages(); // fetch all images again after the upload is completed
    } catch (error) {
        console.error(error); // Handle error
    } finally {
        setLoading(false); // Turn off loading
    }
};

// delete an Image
const handleDelete = async (blobName) => {
    if (!account || !sasToken || !containerName) { // check if the credentials are set
        alert(
            'Please make sure you have set the Azure Storage credentials in the .env file'
        );
        return;
    }
    try {
        setLoading(true); // Turn on loading
        const blobClient = containerClient.getBlockBlobClient(blobName); // get the blob client
        await blobClient.delete(); // delete the blob
        fetchImages(); // fetch all images again after the delete is completed
    } catch (error) {
        console.log(error) // Handle error
    } finally {
        setLoading(false); //
    }
};

// fetch all images when the page loads
useEffect(() => {
    fetchImages();
}, [])
