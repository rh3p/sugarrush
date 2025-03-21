import React from 'react'
import {Container, Row, Col, Carousel} from "react-bootstrap"
import { Link } from 'react-router-dom'
import Appstore from '../../assets/appstore.png'
import Playstore from '../../assets/googleplay.png'
import shop from '../../assets/app1.png'
import Brand1 from '../../assets/A1.png'
import Brand2 from '../../assets/A2.png'
import Brand3 from '../../assets/A3.png'
import Brand4 from '../../assets/A4.png'
import Brand5 from '../../assets/A5.png'
import Brand6 from '../../assets/A6.png'
import Brand7 from '../../assets/A7.png'
import Brand8 from '../../assets/A8.png'

function Section5() {
  return (
    <>
    <section className='shop_section'>
      <Container>
        <Row className='align-items-center'>
          <Col lg={6} className='text-center text-lg-start mb-5 mb-lg-0'>
          <h4>Download mobile App and</h4>
          <h2>save up to 20%</h2>
          <p> Aliquam a augue suscipit, luctus neque purus ipsum and neque
                dolor primis libero tempus, blandit varius
          </p>
          <Link to="/">
          <img src={Appstore} className='img-fluid store me-3' alt='IOS'></img>
          </Link>
          <Link to="/">
          <img src={Playstore} className='img-fluid store me-3' alt='Android'></img>
          </Link>
          </Col>
          <Col lg={6}>
          <img src={shop} alt='e-shop' className='img-fluid app1'/>
           </Col>
        </Row>
      </Container>
    </section>

    <section className='brand_section'>
      <Container>
        <Row>
        <Carousel>
      <Carousel.Item>
        <Carousel.Caption>
          <div className='d-flex align-items-center justify-content-between'>
            <div className='brand_img'>
              <img src={Brand1} className='img-fluid' alt='brand-1'/>
            </div>
            <div className='brand_img'>
              <img src={Brand2} className='img-fluid' alt='brand-2'/>
            </div>
            <div className='brand_img'>
              <img src={Brand3} className='img-fluid' alt='brand-3'/>
            </div>
            <div className='brand_img'>
              <img src={Brand4} className='img-fluid' alt='brand-4'/>
            </div>
            <div className='brand_img'>
              <img src={Brand5} className='img-fluid' alt='brand-5'/>
            </div>
            <div className='brand_img'>
              <img src={Brand6} className='img-fluid' alt='brand-6'/>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <div className='d-flex align-items-center justify-content-between'>
            <div className='brand_img'>
              <img src={Brand3} className='img-fluid' alt='brand-3'/>
            </div>
            <div className='brand_img'>
              <img src={Brand4} className='img-fluid' alt='brand-4'/>
            </div>
            <div className='brand_img'>
              <img src={Brand5} className='img-fluid' alt='brand-5'/>
            </div>
            <div className='brand_img'>
              <img src={Brand6} className='img-fluid' alt='brand-6'/>
            </div>
            <div className='brand_img'>
              <img src={Brand7} className='img-fluid' alt='brand-7'/>
            </div>
            <div className='brand_img'>
              <img src={Brand8} className='img-fluid' alt='brand-8'/>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Section5