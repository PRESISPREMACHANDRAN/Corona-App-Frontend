import React, { useState } from 'react'
import Header from './Header'

const SearchData = () => {

  const [input, changeInput] = useState({
    date: ""
  });

  const readValue=(e)=>{
    changeInput({...input,[e.target.name]:e.target.value})
  }

  const submitValue=()=>{
    console.log(input)
  }
  return (
    <div>
      <Header />
      <div className="container">
        <row>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Date
                </label>
                <input type="date" name="" id="" className="form-control" name='date' value={input.date} onChange={readValue}/>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <button className="btn btn-success" onClick={submitValue}>Search</button>
              </div>
            </div>
          </div>
        </row>
      </div>
    </div>
  );
}

export default SearchData