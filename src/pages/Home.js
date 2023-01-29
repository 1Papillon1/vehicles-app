import React from "react";
import {
    Link
  } from "react-router-dom";

function Home() {
    
    return (
        <div className="layout--secondary">
            <div className="flex">
                <div className="flex__box flex__box--secondary">
                    
                        <Link className="link" to="/makes">
                            <button className="button">See the makes</button>

                        </Link>
                    
                </div>
                <div className="flex__box flex__box--secondary">
                    
                        <Link className="link" to="/models">
                            <button className="button">See the models</button>

                        </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;