import React, { useState } from 'react';
import { AiFillCamera } from 'react-icons/ai';
import './album.css';

import axios from 'axios';



const httpCli = axios.create();
// default 설정 key 설정 등등. ..
httpCli.defaults.baseURL = 'http://localhost:8000';
// httpCli.defaults.withCredentials = true;
httpCli.defaults.timeout = 25000;




function Album() {
    const [imageUrls, setImageUrls] = useState([]);

    const getData = async () => {
    try {
        const data = (await httpCli.get('/'))
        
        console.log(data)
        setImageUrls(data.data.reverse());
    } catch (error) {
        console.log(error)
        return undefined;
    }
    }

    
    const click = async () => {
        console.log("click");
        await getData();
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
                <button onClick={click}>Reload image</button>
            </div>

            <div className='div-image-container'>
                {imageUrls && imageUrls.map((blobItem, index) => (
                    <div key={index} className='div-card'>
                        <img src={blobItem.url} />
                        <div className='div-card-text'>
                            <p>
                                {blobItem.name.substr(6,7)}
                            </p>
                            <p>
                                time : {blobItem.name.substr(14,26)}
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
