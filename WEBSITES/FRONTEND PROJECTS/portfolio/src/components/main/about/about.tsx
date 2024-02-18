import React from "react";
import aboutimg from "./aboutimg.jpg"
import "./about.css"

const About:React.FC = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <img
                src={aboutimg}
                alt=""
                className="img-fluid about-img"
                style={{ height: "auto", width: "100%" }}
              />
            </div>
            <div className="col-lg-7 pt-3">
              <h1>About Me</h1>
              <p>WEB DESIGNER &amp; GRAPHIC DESIGNER</p>
              <p className="py-3">
                {" "}
                I am <span className="font-weight-bold">Pranjal Pratik</span>
                Lorem ipsum dolnatus ea earum minima cumque rem, vel
                asperionatur? Tempora praesentium ullam necessitatibus nobis,
                dicta aspernatur quo itaque repudiandae officiis omnis maiores,
                voluptatum sapiente modi, sequi explicabo iste reprehenderit.
                Facilis consectetur, quod doloremque culpa fugiat deleniti
                suscipit eum architecto esse ipsa labore repellendus nulla eos,
                id molestias repudiandae nemo amet iusto assumenda iste at ipsam
                odit ea. Reiciendis error facilis officiis laborum totam
                voluptatem obcaecati sequi expedita exercitationem sapiente
                voluptatibus saepe tempore ullam, est deleniti ducimus im
                similique excepturi, unde pariatur consequatur quia iusto
                exercitationem aspernatur deserunt fuga quis! Dolor nobis
                corrupti quidem possimus blanditiis odio nulla repellat earum?
                Dolore, cum architecto. Repellendus, natus consequuntur possimus
                eos deleniti a nostrum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
