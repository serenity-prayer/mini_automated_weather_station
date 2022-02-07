import React from 'react'

function Rawdata() {
    return (
        <div className="card-group shadow-sm p-3 mb-2 bg-white rounded">
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title btn btn-primary  d-flex justify-content-center">24</h1>
                    <p className="card-text text-center justify-content-center">Normal Temperature.</p>
                       
                </div>
            </div>
            <div className="card m-1">
                <div className="card-body">
                    <h1 className="card-title card-title btn btn-primary  d-flex justify-content-center">345</h1>
                    <p className="card-text text-center justify-content-center">High Humidity</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body ">
                    <h1 className="card-title card-title btn btn-primary  d-flex justify-content-center">45%</h1>
                    <p className="card-text text-center justify-content-center">It is rain</p>
                </div>
            </div>
        </div>
    )
}
export default Rawdata;