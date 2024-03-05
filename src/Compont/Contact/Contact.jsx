import React from 'react'

export default function Contact() {



    return (
        <>

            <h2 className='text-center h-prot pt-4 mb-3'>CONATCT SECTION</h2>
            <div className="star d-flex justify-content-center align-items-center mb-3">
                <div className='style-prot2 me-3'></div>
                <i className='fa-solid fa-star style-prot'></i>
                <div className='style-prot2 text-info ms-3'></div>
            </div>

            <form>
                <div className="w-50 m-auto position-relativ py-4">
                    <label className=' hide mb-3 position-relative' htmlFor="Name">userName:</label>
                    <input placeholder='UserName' className='w-100 my-2 rounded-3   broder-0 border-bottom px-2 py-3 position-relative ng-dirty ng-dirty ng-touched' type="text" id='Name' name='name' />

                    <label className=' hide1 mb-3 position-relative ' htmlFor="Age">userAge:</label>
                    <input placeholder='UserAge' className='w-100 my-2  rounded-3  broder-0 border-bottom px-2 py-3 position-relative ng-dirty ng-dirty ng-touched' type="text" id='Age' name='age' />

                    <label className=' hide2 mb-3 position-relative' htmlFor="Email">userEmail:</label>
                    <input placeholder='UserEmail' className='w-100 my-2  rounded-3  broder-0 border-bottom px-2 py-3 position-relative ng-dirty ng-dirty ng-touched' type="email" id='Email' name='email' />

                    <label className='hide3 mb-3 position-relative  ' htmlFor="Password">userPassword:</label>
                    <input placeholder='UserPassword' className='w-100 my-2 rounded-3  broder-0 border-bottom px-2 py-3 position-relative ng-dirty ng-dirty ng-touched' type="password" id='Password' name='password' />

                </div>
            </form>
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
