import { Buffer } from 'buffer';
import React, { useState } from 'react';
import { AiFillCamera } from 'react-icons/ai';
import './album.css';
const { BlobServiceClient } = require("@azure/storage-blob");
Buffer.from('anything', 'base64');


window.Buffer = window.Buffer || require("buffer").Buffer;


function Album() {
    const [imageUrls, setImageUrls] = useState([]);

    const fetchImages = async () => {
    //     const accountName = "raspiotstorage";

    // const blobServiceClient = BlobServiceClient.fromConnectionString(
    //         "DefaultEndpointsProtocol=https;AccountName=raspiotstorage;AccountKey=OhL3x45bf" +
    //         "zNaMKRCZSyzNOSsVGpfizuqjWwuvuJdoXFjJlIpZtxANUbmRWXENeTxRhTij4WiIevb+ASt9mO+iw=" +
    //         "=;EndpointSuffix=core.windows.net"
        // );
        
        const account = "raspiotstorage";
        const sasToken = "sp=racwdli&st=2023-12-12T07:12:23Z&se=2023-12-30T15:12:23Z&sv=2022-11-02&sr=c&sig=CRP7OTzlBtn%2BnA1ybxy%2FcJoNCQLM38kPvvl5D90FPso%3D";

        const blobServiceClient = new BlobServiceClient(`https://${account}.blob.core.windows.net/?${sasToken}`);  // create a blobServiceClient


    
    const containerClient = blobServiceClient.getContainerClient(
            'raspiotcontainer'
    );

    console.log('\nListing blobs...');
        const blobItems = containerClient.listBlobsFlat();
        const urls = [];

    for await (const blob of blobItems) {
        const tempBlockBlobClient = containerClient.getBlockBlobClient(blob.name); // get the blob url
        urls.push({name: blob.name, url: tempBlockBlobClient.url}); // push the image name and url to the urls array
    }
    
    setImageUrls(urls);
    }

    

    const click = async () => {
        console.log("click");
        await fetchImages();
        console.log(imageUrls);
    }


    return (
        <>
            <header className='header-album'>
                <AiFillCamera size={40} style={{ margin: '0 20px 0 20px' }} />
                Gate Keeper
                <div>
                    ClockDisplay
                </div>
            </header>
            <div className='div-head-text'>
                <p>
                    ITSP 연구실
                </p>
                <p>
                    미래관 501호 ITSP 연구실 출입관리 시스템
                </p>
            </div >

            <div>
                <h1>Reload image</h1>
                <button onClick={click}>click</button>
            </div>

            <div className='div-image-container'>
                {imageUrls && imageUrls.map((blobItem, index) => (
                    <div key={index} className='div-card'>
                        <img src={blobItem.url} />
                        <div className='div-card-text'>
                            <p>
                                Heading
                            </p>
                            <p>
                                This is a media card. You can use this section to describe the content.
                            </p>
                            <div>
                                <button style={{marginRight: '10px'}}>
                                    VIEW
                                </button>
                                <button>
                                    EDIT
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <footer>
                <p>Footer</p>
                <p>Something here to give the footer a purpose</p>
                <p>
                    Copyright &copy;
                    <a href='/'>Your Website</a>
                    2022
                </p>
            </footer>
        </>
    )
}

export default Album
