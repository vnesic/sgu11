import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import image1 from "../../Assets/Resources/akrobatska1.jpg";


function TextImageElem(prop){

    return(

        <Container>
            <Col>
                <Row>
                    <h1>
                        Veliki tekst

                    </h1>
                </Row>

                <Row>
                    <Col>

                    <img
                        src={image1}
                        className="img-fluid"
                        style={{ maxHeight: "450px" }}
                    />
                    </Col>
                </Row>
            </Col>
        </Container>
    );

}

export default TextImageElem