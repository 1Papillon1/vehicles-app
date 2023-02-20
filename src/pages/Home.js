import React, { useEffect } from "react";
import {
    Link
  } from "react-router-dom";

function Home({ store }) {
    useEffect(() => {
        document.title="HOME | VEHICLES"
    }, [])
    return (
        <div className="layout--secondary">
            <div className="flex">
                <div className="flex__box flex__box--secondary">
                    
                        <Link className="link" to="/vehicles/makes">
                            <button className="button">See the makes</button>
                        </Link>
                        <p className="flex__box__text">Open one of the makes to see the models of that make</p>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Home;