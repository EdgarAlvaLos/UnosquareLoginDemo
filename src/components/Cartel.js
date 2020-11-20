import React from "react";

import img from "../Resources/ava.jpg"
function Cartel() {
    return (
        <>
               <div id="movie-contener">
                <div className="row">
                    <div className="col-2">
                        <img src={img} />
                        <div className="spanLink">Knives Out</div>
                        <div className="movie-desc">Knives</div>
                    </div>
                    <div className="col-2">
                        <img src="img/movies/movie2.png" />
                        <div className="spanLink">Knives</div>
                        <div className="movie-desc">Knives</div>
                    </div>
                    <div className="col-2">
                        <img src="img/movies/movie3.png" />
                        <div className="spanLink">Knives</div>
                        <div className="movie-desc">Knives</div>
                    </div>
                    <div className="col-2">
                        <img src="img/movies/movie4.png" />
                        <div className="spanLink">Knives</div>
                        <div className="movie-desc">Knives</div>
                    </div>
                    <div className="col-2">
                        <img src="img/movies/movie5.png" />
                        <div className="spanLink">Knives</div>
                        <div className="movie-desc">Knives</div>
                    </div>
                    <div className="col-2">
                        <img src="img/movies/movie6.png" />
                        <div className="spanLink">Knives</div>
                        <div className="movie-desc">Knives</div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Cartel