import React from "react";
import "./service.css"

const Service: React.FC = () => {
  return (
    <>
      <section className="services py-5 bg-light">
        <div className="container py-5">
          <h1 className="text-center pb-5">Services</h1>
          <div className="row pb-3">
            <div className="col-lg-4 mb-3">
              <div className="card text-center py-3">
                <div className="card-body">
                  <div className="circle">
                    <span>
                      <i className="fas fa-desktop" />
                    </span>
                  </div>
                  <h4 className="font-weight-bold pb-2">UI/UX</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisic corporis
                    est, d
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="card text-center py-3">
                <div className="card-body">
                  <div className="circle">
                    <span>
                      <i className="fas fa-desktop" />
                    </span>
                  </div>
                  <h4 className="font-weight-bold pb-2">
                    Frontend developement
                  </h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisic corporis
                    est, d
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="card text-center py-3">
                <div className="card-body">
                  <div className="circle">
                    <span>
                      <i className="fas fa-desktop" />
                    </span>
                  </div>
                  <h4 className="font-weight-bold pb-2">Free Consultancy</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisic corporis
                    est, d
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
