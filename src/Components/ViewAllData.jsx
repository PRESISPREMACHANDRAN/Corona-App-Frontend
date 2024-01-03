import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

const ViewAllData = () => {
  const [coronaData, changeCoronaData] = useState([]);

  const fetchData=()=>{
    axios
      .get("https://api.covidtracking.com/v1/us/daily.json")
      .then((response) => {
        changeCoronaData(response.data);
      });
  }

  useEffect(()=>{fetchData()},[])

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Sl No</th>
                      <th scope="col">Date</th>
                      <th scope="col">States</th>
                      <th scope="col">Positive</th>
                      <th scope="col">Negative</th>
                      <th scope="col">Hospitalized</th>
                      <th scope="col">In ICU</th>
                      <th scope="col">on Ventilator</th>
                      <th scope="col">Death</th>
                      <th scope="col">Recovered</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coronaData.map((value, index) => {
                      return (
                        <tr>
                          <th scope="row">1</th>
                          <td>{value.date}</td>
                          <td>{value.states}</td>
                          <td>{value.positive}</td>
                          <td>{value.negative}</td>
                          <td>{value.hospitalizedCurrently}</td>
                          <td>{value.inIcuCurrently}</td>
                          <td>{value.onVentilatorCurrently}</td>
                          <td>{value.death}</td>
                          <td>{value.recovered}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllData;
