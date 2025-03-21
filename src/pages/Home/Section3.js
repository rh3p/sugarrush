import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import cupcake1 from "../../assets/cupcake1.png"
import cupcake4 from "../../assets/cupcake4.png"
import cupcake2 from "../../assets/cupcake2.png"
import cupcake5 from "../../assets/cupcake5.png"
import slicecake2 from "../../assets/slicecake2.png"
import slicecake4 from "../../assets/slicecake4.png"
import cake3 from "../../assets/cake3.png"
import cake5 from "../../assets/cake5.png"
import Cards from '../../components/Cards'
import { Link } from 'react-router-dom'


// Mock Data Cards
const mockData = [
    {
      id: "0001",
      image: cupcake1,
      title: "Mint Choco",
      rating: 5,
      price: 95,
    },
    {
      id: "0002",
      image: cupcake4,
      title: "Oreo",
      rating: 4.5,
      price: 95,
    },
    {
      id: "0003",
      image: cupcake2,
      title: "Vanilla",
      rating: 4,
      price: 80,
    },
    {
      id: "0004",
      image: cupcake5,
      title: "Red Velvet",
      rating: 3.5,
      price: 89,
    },
    {
      id: "0005",
      image: slicecake2,
      title: "Strawberry Cheesecake",
      rating: 3.0,
      price: 110,
    },
    {
      id: "0006",
      image: slicecake4,
      title: "Chocolate Pastry",
      rating: 3,
      price: 105,
    },
    {
      id: "0007",
      image: cake3,
      title: "Orange Cake",
      rating: 2.5,
      price: 550,
    },
    {
      id: "0008",
      image: cake5,
      title: "Black Forest",
      rating: 2.0,
      price: 300,
    },
  ];

//Rating Logical Data
const renderRatingIcons = (rating) =>{
  const stars =[];

  for(let i =0; i<5; i++){
    if (rating > 0.5){
      stars.push(<i key={i} className='bi bi-star-fill'></i>);
      rating--;
    }else if(rating > 0 && rating < 1){
      stars.push(<i key={"half"} className='bi bi-star-half'></i>);
      rating--;
    }else{
      stars.push(<i key={`empty${i}`} className='bi bi-star'></i>);
    }
  }
  return stars;
};

function Section3() {
  return (
    <section className="menu_section">
        <Container>
            <Row>
                <Col lg={{span: 8, offset: 2}} className='text-center mb-5'>
                <h2>OUR SPECIALITIES</h2>
                <p className='para'>Feugiat primis ligula risus auctor laoreet augue egestas mauris</p>
                </Col>
            </Row>
            <Row>
                {mockData.map((cardData,index) =>(
                    <Cards 
                    key={index}
                    image={cardData.image}
                    rating={cardData.rating}
                    title={cardData.title}
                    price={cardData.price}
                    renderRatingIcons={renderRatingIcons}
                    />
                ))}
            </Row>
            <Row className='pt-5'>
              <Col sm={6} lg={5}>
              <div className='ads_box ads_img1 mb-5 mb-md-0'>
                <h4 className='mb-0'>COMING SOON</h4>
                <h5>CAKE POPS</h5>
                <Link to="/" className='btn btn_yellow px-4 rounded-0'>
                Learn More
                </Link>
              </div>
              </Col>
              <Col sm={6} lg={7}>
              <div className='ads_box ads_img2'>
                <h4 className='mb-0'>COMING SOON</h4>
                <h5>DONUTS</h5>
                <Link to="/" className='btn btn_yellow px-4 rounded-0'>
                Learn More
                </Link>
              </div>
              </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Section3