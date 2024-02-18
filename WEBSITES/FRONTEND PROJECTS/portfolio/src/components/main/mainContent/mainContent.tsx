import React from "react";
import main from "./main.jpg";
import "./mainContent.css"

const MainContent:React.FC = () => {
  return (
    <>
      <section className="main container py-5 " style={{ height: "610px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 py-5">
              <div className="info  py-5">
                <h3>
                  <small>Hello, I'm</small>
                  <br />
                  Pranjal
                </h3>
                <h6>Frontend Dev</h6>
                <input
                  type="button"
                  defaultValue="My work"
                  className="bt1 mt-5 m-2"
                />
                <input
                  type="button"
                  defaultValue="Hire ME"
                  className="bt2 mt-5"
                />
              </div>
            </div>
            <div className="col-lg-7 pt-3">
              <div className="imgdiv">
                <img
                  src={main}
                  alt=""
                  className=" main-img"
                  style={{ height: "auto", width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContent;
