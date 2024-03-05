
import React, { useState } from 'react'
import imgOne from '../../imgss/poert1.png'
import imgTwo from '../../imgss/port2.png'
import imgThree from '../../imgss/port3.png'

export default function Protfolio() {

    const [data, setData] = useState([
        { imgss: imgOne, id: 'img1' },
        { imgss: imgTwo, id: 'img2' },
        { imgss: imgThree, id: 'img3' },
        { imgss: imgOne, id: 'img4' },
        { imgss: imgTwo, id: 'img5' },
        { imgss: imgThree, id: 'img6' },
    ])

    return (
        <>
            <h2 className='text-center h-prot pt-5 mb-3'>PORTFOLIO COMPONENT</h2>
            <div className="star d-flex justify-content-center align-items-center mb-3">
                <div className='style-prot2 me-3'></div>
                <i className='fa-solid fa-star style-prot'></i>
                <div className='style-prot2 text-info ms-3'></div>
            </div>
            <div className="container my-5">
                <div className="row g-5">
                    {data.map((item) =>
                        <>

                            <div className="col-md-4 ">
                                <div data-bs-toggle="modal" data-bs-target={'#' + item.id} className="rounded-3 overflow-hidden position-relative">
                                    <img className='w-100 rounded-3' src={item.imgss} alt="imgs" />
                                    <div className="hover position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                                        <i _ngcontent-uyx-c19="" className="text-white fa-solid fa-plus fa-6x"></i>
                                    </div>
                                </div>
                            </div>


                        </>
                    )}

                </div>
            </div>








            <div className="print   text-center">
                <div className=" contaner  ">
                    <div className="row">
                        <div className="col-md-4">
                            <div className=' text-white m-4'>
                                <h3>LOCATION</h3>
                                <p>2215 John Daniel Drive</p>
                                <p>Clark, MO 65243</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className='text-white m-4'>
                                <h3>AROUND THE WEB</h3>
                                <div>
                                    <i className='font fa-brands fa-facebook mx-1 icon'></i>
                                    <i className=" font fa-brands fa-twitter mx-1 icon"></i>

                                    <i className='font fa-brands fa-linkedin-in mx-1 icon'></i>
                                    <i className=' font fa-solid fa-globe mx-1 icon'></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className='text-white m-4'>
                                <h3>ABOUT FREELANCER</h3>
                                <p >Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div >

            {data.map((item) => <>

                <div>

                    <div className="modal fade" id={item.id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="modal-body p-0">
                                    <img src={item.imgss} className='w-100' alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>)}
        </>
    )
}
