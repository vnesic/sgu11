import React from "react";
import { Container, Row } from "react-bootstrap";
import image1 from "../../../Assets/Resources/individualniprogramirastezanja1.jpg";
import image2 from "../../../Assets/Resources/individualniprogramirastezanja2.JPG";

import List from "../../PageElements/List";
import PictureLefttWithTextRight from "../../PageElements/PictureLefttWithTextRight";
import PictureRightWithTextLeft from "../../PageElements/PictureRightWithTextLeft";
import '../Pages.css';


function IndividualniProgRastezanja(){

    return(
        <div className="razvojna-page">
        <Container>
        <Row>
        <div>
            <h1>Individualni program rastezanja</h1>
            <p>Gipkost predstavlja jednu od najvažnijih fizičkih sposobnosti čije dejstvo na mišiće višestruko značajno. Razvijanje i održavanje ove motoričke sposobnosti ima veliki značaj u svim aktivnostima i svim životnim dobima, zbog toga je jedini neizostavni deo svake programirane fizičke aktivnosti. Benefite koje optimalan nivo gipkosti donosi su pre svega:</p>
        </div>
       </Row>
        <List></List>
       <Row>
        <PictureRightWithTextLeft
            imageSrc= {image1}
            header="Kome je namenjen ovaj program?"
            text="Program individualnog rastezanja je namenjen svim osobama koje žele da povećaju svoju pokretljivot, umanje grčeve u mišićima i smanje bolove u leđima.
            Profesionalnim i rekreativnim sportiskinjama kao dopunska aktivnost u cilju prevencije od povreda, opuštanja i oporavka mišića.
            Deci kod koje je usled razvoja primećena smanjena pokretljivost u cilju pravilnog razvoja.
            Osobama koje boluju od artritisa u cilju povećanja pokretljivost i ublažavanju bolova, kao dijbetičarima u cilju kontrole nivoa glukoze u krvi."
        />
       </Row>
       <Row>
       <PictureLefttWithTextRight
            imageSrc= {image2}
            header="Koncept rada individualnog gimnastičkog rastezanje u SGU11:"
            text="Zbog svih navedenih benefita koje donose vežbe rastezanja, naše udruženje u ponudi ima program individualnog rastezanja. Obiluje vežbama aktivnog i pasivnog (asistiranog) rastezanja. Pasivno rastezanje u kome trener ili druga spoljašnja sila vrši dozirani pritisak na određenu skeletno-mišićnu polugu omogućava veće rastezanje mišića za kraći vremenski period i smanjuje mogućnost nepravilnog položaja tela. Ovaj tip treninga je moguće izvoditi samo individualnim pristupom. Treninzi su koncipirani u trajanju od 30min, 45min ili 60min u zavisnosti od potreba vežbača. 
            Termini idividualnog programa se dogovaraju u skladu sa mogućnstima klijenta i trenutno raspoloživim terminima trenera."
        />
       </Row>

    </Container>
    </div>
    );


}

export default IndividualniProgRastezanja