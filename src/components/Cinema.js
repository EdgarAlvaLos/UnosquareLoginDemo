import React, { } from 'react'
import "../CSS/Cinema.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Cartel from "../components/Cartel"
export default function Cinema() {
    return (
        <>
            <div className="divHeader">
                <Header />
            </div>

            <div className="divBody">
                <div>
                    <Cartel />
                </div>
                <div>
                    <Cartel />
                </div>
            </div>

            <div className="divFooter">
                <Footer />
            </div>
        </>
    );
}