import React from 'react'
import Navigation from './Navigation'

const Search = () => {
  return (
    <div>
        <Navigation />
        <div classNameName="container" style={{padding:10,margin:50}}>
        <h1 style={{ color: "blue",marginBottom:50}}>Search a Book</h1>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <label htmlFor="" className="form-label">Code</label>
                       <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-dark">search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


    </div>
    </div>
  )
}

export default Search