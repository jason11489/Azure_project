import axios from 'axios';
import React, { useState } from 'react';
import { AiFillCamera } from 'react-icons/ai';
import './album.css';
import format from './format';
import Loading from './loading';



const httpCli = axios.create();
// default 설정 key 설정 등등. ..
httpCli.defaults.baseURL = 'http://localhost:8000';
// httpCli.defaults.withCredentials = true;
httpCli.defaults.timeout = 25000;




function Album() {
    const [imageUrls, setImageUrls] = useState([]);
    const [loading, setLoading] = useState(false);

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
        setLoading(true);
        await getData();
        setLoading(false);
    }


    return (
        <>
            {loading && <Loading />}
            <header className='header-album'>
                <AiFillCamera size={45} style={{ margin: '0 20px 0 20px' }} />
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
                                {blobItem.name.substr(26,4) + "년 " + format(blobItem.name)[1] + " " + blobItem.name.substr(14,2) + "일 " +format(blobItem.name)[0]}
                            </p>
                            <p>
                                {blobItem.name.substr(17,2) + "시 " + blobItem.name.substr(20,2) + "분"}
                            </p>
                            {/* <div>
                                <button style={{marginRight: '10px'}}>
                                    VIEW
                                </button>
                                <button>
                                    EDIT
                                </button>
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>
            <footer>
                <p>Azure Iot project</p>

            </footer>
        </>
    )
}

export default Album
