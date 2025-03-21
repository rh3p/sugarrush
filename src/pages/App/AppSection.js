import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import { Link } from 'react-router-dom'
import Appstore from '../../assets/appstore.png'
import Playstore from '../../assets/googleplay.png'
import shop from '../../assets/app1.png'

function AppSection () {
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
    </>
  )
}

export default AppSection