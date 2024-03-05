import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container p-3">
                    <Link className="navbar-brand text-white" to="/" >START FRAMEWORK</Link>
                    <button _ngcontent-jsg-c20 type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler collapsed"><span _ngcontent-jsg-c20 className="navbar-toggler-icon" /></button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="about">ABOUT</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="portfolio">PORTFOLIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="contact">CONTACT</Link>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}
