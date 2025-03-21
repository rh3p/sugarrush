import React from 'react'
import Swal from 'sweetalert2'
import { Container, Row, Col } from 'react-bootstrap'

function ContactForm() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "b0b33bed-727d-464b-be6f-ed9cfb2d06b7");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent Successfully!",
                icon: "success"
              });
        }
      };



  return (
    <section className='contact'>
        <Container className='section1'>
        
            <Row>
                            <Col lg={{span: 8, offset: 2}} className='text-center mb-5'>
                            <h2>Get In Touch</h2>
                            {/*<p className='para'>Feugiat primis ligula risus auctor laoreet augue egestas mauris</p>*/}
                            </Col>
                        </Row>
            <Row className='content'>
                <Col className='left' sm={6} lg={5}>
                <div className="details">
                <i class="bi bi-geo-alt-fill"></i>
                <h5>Address</h5>
                <p>Surkhet, NP12 Opp Mahanagar Gas Station, Pez </p>
                
                
                <i class="bi bi-telephone-fill"></i>
                <h5>Phone</h5>
                <p>9876543087  </p>
                
                
               
                <i class="bi bi-envelope-fill"></i>
                <h5>E-mail</h5>
                <p>sugarrush@gmail.com info.sugarrush@gmail.com</p>
                
                </div>
                </Col>
            <Col className='right' sm={6} lg={7}>
        <form onSubmit={onSubmit}>
            <h4>Send us your message</h4>
            <div className="input-box">
                <label>Full Name</label>
                <input type='text' className='field' placeholder='Enter your Name ' name='name' required />
            </div>
            <div className="input-box">
                <label>Email Address</label>
                <input type='email' className='field' placeholder='Enter your Email ' name= 'email' required />
            </div>
            <div className="input-box">
                <label>Your Message</label>
                <textarea className='field mess' placeholder='Enter your message' name='message'></textarea>
            </div>
            <button type='submit'>Send Message</button>
        </form>
        </Col>
        </Row>
        </Container>
    </section>
  )
}

export default ContactForm