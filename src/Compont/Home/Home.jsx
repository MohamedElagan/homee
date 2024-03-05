import React from 'react'
import homeimg from '../../imgss/avataaars.svg'
export default function Home() {
    return (
        <>

            <div className="home_pg d-flex align-items-center justify-content-center flex-column ">
                <img className='mb-4' src={homeimg} alt="" />
                <div className="title_img">
                    <h2 className='text-white mb-3'>START FRAMEWORK</h2>
                    <div className="star d-flex justify-content-center align-items-center mb-3">
                        <div className='style_star me-3'></div>
                        <i className='fa-solid fa-star text-white'></i>
                        <div className='style_star ms-3'></div>
                    </div>
                    <div className='text-white text-center'>Graphic Artist - Web Designer - Illustrator</div>
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


        </>
    )
}
