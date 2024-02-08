import { Col, Container, Row } from "react-bootstrap";
import productBg from "../../Images/BannerP.png";
import "./banner.css";
const Banner = () => {
    return ( 
        <div className="image-container">
            <div className="overlay">
                <Container>
                    <Row>
                        <Col>
                            <h2>FRAGRANCES</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Banner;