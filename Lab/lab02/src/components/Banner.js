import React, { useState, useEffect } from 'react'
import banner0 from './../assets/img/banner0.jpg'
import banner1 from './../assets/img/banner1.jpg'
import banner2 from './../assets/img/banner2.jpg'
import banner3 from './../assets/img/banner3.jpg'
import banner4 from './../assets/img/banner4.jpg'

const DATABANNER = [
    {
        id: 0,
        image: banner0,
        title: 'Vesuvius Pizza ',
        details: 'Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil'
    },
    {
        id: 1,
        image: banner1,
        title: 'Hawaii Pizza',
        details: 'Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil'
    },
    {
        id: 2,
        image: banner2,
        title: 'Parma Pizza',
        details: 'Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil'
    }, {
        id: 3,
        image: banner3,
        title: 'Dryck Pizza',
        details: 'Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil'
    }, {
        id: 4,
        image: banner4,
        title: 'Pizzasallad Pizza',
        details: 'Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil'
    }
]
function Banner() {
    const [bannerIndex, setBannerIndex] = useState(1)
    const handleNextBanner = () => {

        setBannerIndex(prev => {
            if (prev > 3) {
                return 0;
            }
            return prev + 1
        })
    }
    const handleBackBanner = () => {
        setBannerIndex(prev => {
            if (prev < 1) {
                return 4;
            }
            return prev - 1
        })
    }

    // useEffect(() => {

    //     const handleScroll = () => {
    //         const scrollY = window.scrollY;
    //         const detailImg = document.querySelector('.detail-img');
    //         if (scrollY > 0) {
    //             detailImg.classList.add('position-fixed');
    //         } else {
    //             detailImg.classList.remove('position-fixed');
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    return (
        <div className="col-12 ">
            <div >
                <img src={DATABANNER[bannerIndex].image} className="card-img position-relative" alt="..." style={{ filter: "brightness(80%)" }} />
                <div className="card-body">
                    <button onClick={handleBackBanner} className="btn arrowIconLeft color-arrow-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="70" fill="currentColor" className=" color-arrow-icon bi bi-arrow-left-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                        </svg>
                    </button>
                    <button onClick={handleNextBanner} className="btn arrowIconRight "><svg xmlns="http://www.w3.org/2000/svg" width="42" height="70" fill="currentColor" className="bi bi-arrow-right-short color-arrow-icon" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                    </svg></button>
                    <div className='detail-img text-center'>
                        <h5 className="card-title text-white fs-1">{DATABANNER[bannerIndex].title}</h5>
                        <p className="card-text text-white fs-3">{DATABANNER[bannerIndex].details}</p>
                        <ul className="list-unstyled" style={{ margin: 0 }}>
                            {DATABANNER.map(item => (
                                <li key={item.id} className={`d-inline ${item.id === bannerIndex ? 'text-white' : ''}`} style={{ color: 'gray' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="70" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8" />
                                    </svg>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Banner