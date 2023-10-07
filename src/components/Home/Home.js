import React from "react";
import { Container, Row } from "react-bootstrap";
import home2 from "../../Assets/Resources/home2.jpg";
import sgu_logo from "../../Assets/Resources/sgu_logo.jpg";

function Home() {
  return (
    <section className="razvojna-page">
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
          <h1 className="heading-name">
          <img
                src={sgu_logo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
          </h1>
          </Row>
          <Row>
          <h1 className="heading-name">
          <img
                src={home2}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
          </h1>
          </Row>
        </Container>
      </Container>
      <Container>
      <h1 style={{ paddingBottom: 15 }} className="heading">
              Sportsko rekreativno gimnastičko udruženje 11 je prvi ženski gimnastički studio kod nas. Osnovano je sa ciljem podizanja svesti o značaju bavljenja gimnastikom, kao i sa željom da treniranje ovog sporta omogući svim uzrastima. Sa nama ćete se upoznati sa razvojnom, terapeutskom, estetskom i funkcionalnom gimnastikom, kojom se možete baviti bez obzira na godine i trenutnu fizičku pripremljenost.
      </h1>    
      </Container>
      <Container>
        <div style={{ padding: 50, textAlign: "left" }}>
      
        </div>
      </Container>
    </section>
  );
}
// novu stranicu dodas samo kao <Imestranice />, tipa <Home2 />

export default Home;
