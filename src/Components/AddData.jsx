import React, { useState } from "react";
import Header from "./Header";

const AddData = () => {
  const [input, changeInput ]= useState({
    date: "",
    states:"" ,
    positive: "",
    negative:"",
    hospitalizedCurrently:"",
    inIcuCurrently:"",
    onVentilatorCurrently: "",
    death: "",
    recovered:""
  });

  const readValue=(e)=>{
    changeInput({...input,[e.target.name]:e.target.value})
  }



  const submitValue=()=>{
console.log(input)
  }
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Date
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  className="form-control"
                  name="date"
                  value={input.date}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  states
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="states"
                  value={input.states}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Positive
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="positive"
                  value={input.positive}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Negative
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="negative"
                  value={input.negative}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Hospitalized
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="hospitalizedCurrently"
                  value={input.hospitalizedCurrently}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  IN ICU
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="inIcuCurrently"
                  value={input.inIcuCurrently}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  On Ventilator
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="onVentilatorCurrently"
                  value={input.onVentilatorCurrently}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  death
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="death"
                  value={input.death}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  recovered
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="recovered"
                  value={input.recovered}
                  onChange={readValue}
                />
              </div>

              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <button className="btn btn-success" onClick={submitValue}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddData;
