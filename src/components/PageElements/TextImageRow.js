import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImageElem from "./TextImageElem";

import image1 from "../../Assets/Resources/gim1.jpg";
import image2 from "../../Assets/Resources/razvoj.jpg";
import image3 from "../../Assets/Resources/lepotapokreta.jpg";

function TextImageRow (){

    return(

        <Container>
            <Row>
                <Col>
                <ImageElem
                        logo = {image1}
                        text = "text"
                />
                </Col>
                <Col>
                    <ImageElem
                        logo = {image2}
                        text = "text"
                />
                </Col>
                <Col>
                    <ImageElem
                        logo = {image3}
                        text = "text"
                />
                </Col>
           </Row>
        </Container>
    );

}

export default TextImageRow