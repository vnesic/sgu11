import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../../../Assets/Resources/razvojna1.jpg";
import image2 from "../../../Assets/Resources/razvojna2.jpg";

import '../Pages.css';
import TextImageElem from "../../PageElements/TextImageElem";
import PictureRightWithTextLeft from "../../PageElements/PictureRightWithTextLeft";
import PictureLeftWithTextRight from "../../PageElements/PictureLefttWithTextRight";


function Razvojna() {
  return (
    <div className="razvojna-page">
      <Container>
        <Row>
          <Col>
            <h1>Razvojna gimnastika za devojčice od 4. do 18. godine</h1>
            <p>
              U želji da se posebna pažnja usmeri na pravilan rast i razvoj
              svih funkcija deteta, oformljena je grana sportske gimnastike –
              razvojna gimnastika. Kako ovaj program obuhvata veliki broj
              najrazličitijih kretnji, deca ga doživljavaju kao vrlo zabavnu
              aktivnost, koja u isto vreme ima i preventivno delovanje na
              telesni status. Pred njima su brojni motorički zadaci za koje je
              potrebna koordinacija, spretnost, izdržljivost, snaga, ravnoteža,
              a njihovim rešavanjem deca pozitivno utiču na svoje kognitivne
              sposobnosti (inteligencija) i crte ličnosti (hrabrost,
              samopouzdanje i dr.). Drugim rečima, deca se igraju i istovremeno
              pozitivno utiču na svoje zdravlje i razvoj, uz to stičući radne
              navike i kolektivni duh. Glavni cilj ovog programa je da kroz igru
              deca nauče nove veštine, razviju pravilno držanje i spreči pojavu
              mogućih telesnih deformiteta kojima su deca u toku razvoja veoma
              podložna.
            </p>
            <blockquote className="quotation">
              <p>
                J.Ažman, ispitivajući uticaj sporta na ličnost čoveka, došao je
                do zaključka da se na prvom mestu nalaze gimnastičari kada je
                ocenjivana disciplinovanost i smisao za drugarstvo.
              </p>
            </blockquote>
          </Col>
        </Row>

        <Row>
          <Col>
            <PictureRightWithTextLeft
              imageSrc={image1}
              header="Koncept rada programa razvojne gimnastike u SGU11:"
              text="Program razvojne gimnastike u našem klubu je organizovan u malim grupama (od 6 do 8 devojčica), jer to omogućava brže i lakše savlađivanje novih veština i veliku posvećenost trenera svakom detetu. Treninzi se održavaju tri ili dva puta nedeljno i plan je programiran tako da se svake nedelje obrađuju elementi akrobatike, ritmike, skokova, okreta i snage. Obuhvatajući svake nedelje rad u svakoj podoblasti razvojne gimnastike, dete brže napreduje, a samo učenje biva zabavnije."
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <PictureLeftWithTextRight
              imageSrc={image2}
              header="Kome je namenjen ovaj program:"
              text="Vodeći se činjenicom da je svako dete individua za sebe i da se stoga razvija različitom brzinom, program razvojne gimnastike je adaptirana da bude inkluzivan za sve, bez obzira na trenutne mogućnosti deteta. Namenjen je kako takmičarima, tako i deci koja nisu opredeljena za takmičarsko bavljenje sportom, jer pomaže aktivnom rastu i pravilnom razvoju deteta. Njeni osnovni zadaci, pored omogućavanja pravilnog rasta i razvoja, jesu prevencija nastanka deformiteta kičmenog i koštano-zglobnog sistema, korekcija nepravilnosti koje su već nastale, kao i sprečavanje daljeg razvoja deformiteta. Uz to, dete će dobiti i odličnu motoričku osnovu za bavljenje bilo kojim drugim sportom, osvestiti značaj i steći naviku vežbanja, i naučiti osnove za bezbednu i zdravu rekreaciju."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Razvojna;
