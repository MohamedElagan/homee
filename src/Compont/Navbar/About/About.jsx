import React from 'react'

export default function About() {
    return (
        <>

            <div className="about_pg">
                <h2 className='text-white mb-3 text-center'>ABOUT COMPONENT</h2>
                <div className="star d-flex justify-content-center align-items-center mb-3">
                    <div className='style_star me-3'></div>
                    <i className='fa-solid fa-star text-white'></i>
                    <div className='style_star ms-3'></div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-white ps-5">
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                        <div className="pp col-md-6 text-white ps-sm-5  pe-5">
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                    </div>
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
