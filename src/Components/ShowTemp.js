import React from 'react'

function ShowTemp({text}) {
    return (
        <div className="container my-5">
            <div className="row mb-2">
                <div className="col-md-4">
                    <div className="card text-bg-info mb-3 ">

                        <div className="card-body">
                            <h5 className="card-title">Description</h5>
                            <p className="card-text">{text.description}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-bg-dark mb-3 ">
                        <div className="card-body">
                            <h5 className="card-title">Temp</h5>
                            <p className="card-text">{text.temp}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-bg-secondary mb-3 ">
                        <div className="card-body">
                            <h5 className="card-title">Temp Min</h5>
                            <p className="card-text">{text.temp_min}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-md-4">
                    <div className="card text-bg-danger mb-3 ">

                        <div className="card-body">
                            <h5 className="card-title">Temp Max</h5>
                            <p className="card-text">{text.temp_max}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-bg-success mb-3 ">
                        <div className="card-body">
                            <h5 className="card-title">Humidity</h5>
                            <p className="card-text">{text.humidity}</p>
                        </div>
                    </div>
                </div>
              
                <div className="col-md-4">
                    <div className="card text-bg-primary mb-3 ">
                        <div className="card-body">
                            <h5 className="card-title">Country</h5>
                            <p className="card-text">{text.country}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ShowTemp;