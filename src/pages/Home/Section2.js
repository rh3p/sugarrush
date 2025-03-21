import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Fresh from "../../assets/fresh.png"
import Natural from "../../assets/natural.png"
import Delivery from "../../assets/delivery.png"

// Mock Data Cards
const mockData = [
    {
      image: Fresh,
      title: "100% Fresh!",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    {
      image: Natural,
      title: "No Artificial Flavour",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    {
      image: Delivery,
      title: "Fastest Delivery",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    
  ];
  

function Section2() {
  return (
    <>
    <section className='about_section'>
        <Container>
            <Row>
                <Col lg={{span:8, offset:2}} className='text-center'>
                <h2>Tastes better when shared with family </h2>
                <p>Porta semper lacus cursus, feugiat primis ultrice a ligula risus
                auctor an tempus feugiat dolor lacinia cubilia curae integer
                orci congue and metus integer primis in integer metus</p>
                <Link to="/" className='btn order_now btn_yellow'>
                Explore Full Menu
                </Link>
                </Col>
            </Row>
        </Container>
    </section>
    <section className="about_wrapper">
        <Container>
            <Row className='justify-content-md-center'>
              {mockData.map((cardData, index)=>(
                <Col md={6} lg={4}  className='mb-4 mb-md-0' key={index}>
                  <div className="about_box text-center">
                    <div className="about_icon">
                      <img src={cardData.image} alt="icon" className="image-fluid" />
                    </div>
                    <h4>{cardData.title}</h4>
                    <p>{cardData.paragraph}</p>
                  </div>
                </Col>
              ))}

            </Row>
        </Container>
    </section>
</>
  )
}

export default Section2