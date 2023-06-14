import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../../../Assets/Resources/akrobatska1.jpg";
import image2 from "../../../Assets/Resources/akrobatska2.png";

import '../Pages.css';
import PictureRightWithTextLeft from "../../PageElements/PictureRightWithTextLeft";
import PictureLefttWithTextRight from "../../PageElements/PictureLefttWithTextRight";


function AkrobatskaGimnastika(){

    return(
        <div className="razvojna-page">
        <Container>
        <Row>
        <div>
            <h1>Akrobatska gimnastika</h1>
            <p>Akrobatiku možemo definisatu kao spoj gimnastičkih vežbi kojima je cilj razvijanje snage, gipkosti, okretnosti i brzine. Sa njom se najčešće susrećemo pri govoru o sportskoj gimnastici zbog brojnosti akrobatskih elemenata kojim ova sportska disciplina sadrži. Međutim, akrobatika je sastavni deo i drugih sportova, poput ritmičke gimnastike, plesa, skokova u vodu, umetničkog klizanja, borilačih sportova, sinhronog plivanja i dr. Ovladavanje arobatskim elemenatima, u pomenutim sportovima, rezultira razvojem spretnosti, okretnosti, kao i motoričke koordinacije. Upravo se u tome ogleda najveći značaj akrobatike jer, kao takva organizuje kretanje pravilno, brzo i racionalno, što osobu čini snalažljivijom u različitim uslovima.</p>
            <p>Akrobatika predstavlja skup gimnastičkih vežbi koje se izvode u parteru. Jedna od glavnih karakteristika vežbi akrobatike je mogućnost vladanja sopstvenim telom u bestežinskom stanju (kao što je slučaj kod vežbe salta), kao i velika kontrola u brzim promenama položaja tela. Najpoznatije akrobatske vežbe su: stav o šakama, zvezde, mostovi, premeti, salta i dr.</p>
            <p>Najveći značaj u savlađivanju ovih vežbi je upravo jačanje i razvijanje celokupne muskulature tela, razvoj koordinacije, snage, balansa i gipkosti. Pored fizioloških efekata ovih vežbi, njihova uloga je velika u savlađivanju straha i podizanju samoopouzdanja.</p>
        </div>
       </Row>

       <Row>
        <PictureRightWithTextLeft
            imageSrc= {image1}
            header="Kome je namenjen ovaj program?"
            text="I ako najdelotvornija u dečijem uzrastu, akrobatika nije rezervisana samo za školarce. Akrobatske vežbe u odraslom dobu imaju višestruki značaj (jačanje celokupnog mišičnog sistema, povećavanje pokrtljivosti zglobova, eleminisanje strahova i sumnji u sebe i dr.). Pored odraslih rekreativaca, program je namenjen sportistima u kojima akrobatske vžbe imaju veliki uticaj: ples, umetničko klizanje, skokovi u vodu, sinhrono plivanje, borilački sortovi, ritmička gimnastika, miss fitness."
        />
       </Row>
       <Row>
       <PictureLefttWithTextRight
            imageSrc= {image2}
            header="Koncept rada akrobatike u SGU11:"
            text="Akrobatska gimnastika se može sprovoditi individualno, poluindiviualno (dvoje u istom terminu) ili u maloj grupni (najviše do 3 osobe). Učenje elemenata se prilagođava svakom pojedincu u odnosu na njegove trenutne sposobnosti. Pored rekerativaca koji se nisu bavili gimnastikom ranije, program je namenjen i za plesačice, skakačice u vodu, sinhrone plivačice, devojčice i devojke iz umetničkog klizanja i dr.srodih spotova u kojima je velika uloga akrobatskih vežbi.
            Termini idividualnog programa se dogovaraju u skladu sa mogućnostima klijenta i trenutno raspoloživim terminima trenera."        
            />
       </Row>

    </Container>
    </div>
    );


}

export default AkrobatskaGimnastika