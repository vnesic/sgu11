import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../../../Assets/Resources/korektivna1.jpg";
import image2 from "../../../Assets/Resources/korektivna2.jpg";

import PictureLeftWithTextRight from "../../PageElements/PictureLefttWithTextRight";
import PictureRightWithTextLeft from "../../PageElements/PictureRightWithTextLeft";

function KorektivnaGimnastika() {
  return (
    <div className="razvojna-page">
      <Container>
        <Row>
          <Col>
            <h1>Korektivna gimnastika</h1>
            <h2>
              Korektivna gimnastika predstavlja korišćenje raznovrsnih
              gimnastičkih vežbi, vežbi snage i razgibavanja doziranim
              intezitetom i trajanjem, koje se primenjuju preventivno kod dece
              koja imaju predispozicije za nastanak nekog od posturalnih
              deformiteta ili terapijski kod dece koja već imaju razvijen
              određeni deformitet. Vežbe imaju za cilj sprečavanje nastanka
              kičmenih deformiteta (kifoze, lordoze, skolioze), nastanka ravnog
              tabana, X ili O nogu kao i da koriguju i spreče dalju progresiju
              postojećih deformiteta. Povećanje snage mišića, ispravljanje
              držanja, povećanje amplitude pokreta i poboljšanje koordinacije
              pokreta su samo neki od benefita korektivne gimnastike. Ciljanim
              jačanjem slabe i rastezanjem skraćene muskulature, korektivna
              gimnastika direktno utiče na mišićno-skeletni sistem u celini.
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>

          <PictureLeftWithTextRight
              imageSrc={image2}
              header="Koncept rada korektivne gimnastike u SGU11:"
              text="Korektivna gimnastika je usmerena na direktan rad između trenera i
              klijenta. Moguće je sprovoditi samo individualno, gde se program
              prilagođava potencijalnom ili već nastalom deformitetu, kao i
              trenutnim sposobnostima deteta. Uz neprestan nadzor trenera,
              sprečiće se dovođenje u nepravilne položaje i brže će samo dete
              napredovati. Termini individualnog programa se dogovaraju u skladu
              sa mogućnostima klijenta i trenutno raspoloživim terminima
              trenera."/>
          </Col>
        </Row>
        <Row>
          <Col>


            <PictureRightWithTextLeft
              imageSrc={image1}
              header="Kome je namenjen ovaj program:"
              text="Program je namenjen deci od 7 do 18 godina, koja imaju predispoziciju
              za nastanak telesnog deformiteta ili već imaju oformljen deformitet
              koštano-zglobnog sistema (skolioza, lordoza, kifoza, ravna stopala,
              X ili O noge)"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default KorektivnaGimnastika;
