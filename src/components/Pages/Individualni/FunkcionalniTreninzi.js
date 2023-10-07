import React from "react";
import { Container, Row } from "react-bootstrap";
import image1 from "../../../Assets/Resources/personalni1.jpg";
import image2 from "../../../Assets/Resources/personalni2.jpg";

import PictureLefttWithTextRight from "../../PageElements/PictureLefttWithTextRight";
import PictureRightWithTextLeftWithList from "../../PageElements/PictureRightWithTextLeftWithList";
import '../Pages.css';


function FunkcionalniTreninzi(){

    return(
        <div className="razvojna-page">
        <Container>
        <Row>
        <div>
            <h1>Personalni treninzi za devojke i žene</h1>
            <p>Personalni treninzi predstavljaju sistematični vid vežbanja gde se program osmišljava prema ciljevima i trenutnim sposobnostima vežbača. Individualno programirani treninzi se smatraju najbezbednijim i najefikasnijim tipom fizičke aktivnosti, jer su usmereni prvenstveno na cilj koji klijent ima, a istovremeno usklađen prema individualnim sposobnostima i karakteristikama osobe.</p>
        </div>
       </Row>
       <Row>
        <PictureRightWithTextLeftWithList
            imageSrc= {image1}
            header="Kome je namenjen ovaj program?"
            text="Program individualnih personalnih treninga je namenjen svim devojkama i ženama koje žele da poboljšaju ili održe svoje zdravstveno stanje, fizički izgled, psihičku stabilnost i poboljšaju svoj kvalitet života. Namenjen je: " 
            />
        
       </Row>
       <Row>
       <PictureLefttWithTextRight
            imageSrc= {image2}
            header="Koncept rada personalnih treninga u SGU11:"
            text="Personalni treninzi se mogu sprovoditi individualno, poluindiviualno (dvoje u istom terminu) ili u maloj grupni (najviše do 3 osobe). Svakoj vežbačici se program osmišljava u odnosu na njeno zdravstveno stanje i trenutne fizičke sposobnosti, sa usmerenjem na njen cilj. Tako da u maloj grupi (3 osobe) svaka vežbačica ima svoj program koji sprovod pod kontrolom trenera.
            Termini personalnog programa se dogovaraju u skladu sa mogućnostima klijenta i trenutno raspoloživim terminima trenera."
        />
       </Row>

    </Container>
    </div>
    );


}

export default FunkcionalniTreninzi