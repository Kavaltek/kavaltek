import React from 'react';
import { Container,
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap';  
import img from './../assets/img.png'
import img2 from './../assets/img2.jpg'
import logo1 from './../assets/logo1.png'
import logo2 from './../assets/logo2.png'
import logo3 from './../assets/logo3.png'
import { HiOutlineChevronRight } from "react-icons/hi";
function Home() {
  return <main>
    <section className='jumbotron d-flex align-items-center'>
      <Container>
        <Row>
          <Col 
          md={6} 
          className="mb-3 mt-3 d-flex align-items-center">
            <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            </p>
            <h1 className="display-4">
            technology haver  <br /> never been easier easier
            </h1>
            <p className='mb-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Veritatis consequatur, laborum explicabo officiis.
            </p>
            <button 
            type="button" 
            className="btn btn-primary">
              join now <HiOutlineChevronRight className='ms-4'/>
            </button>
            <button 
            type="button" 
            className="btn btn-dark ms-3">
              join now <HiOutlineChevronRight className='ms-4'/>
            </button>
            </div>
          </Col>
          <Col 
          md={6}
          className="mb-3 mt-3 d-flex align-items-center"
          >
            <img src={img} className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
    <section className='logos'>
      <Container>
        <img src={logo1} width={110} className="me-5"/>
        <img src={logo2} width={110} className="me-5"/>
        <img src={logo3} width={110} className="me-5"/>
      </Container>
    </section>
    <section className='jumbotron-cards  d-flex align-items-center'>
      <Container>
        <h2><b>
        Save Time Managing your business <br/> with our best services
          </b></h2>
        <Row className='mt-5 '>
          <Col md={3} className="mb-4">
            <Card>
              <Card.Body>
                <h5><b>Lorem ipsum</b></h5>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card>
              <Card.Body>
                <h5><b>Lorem ipsum</b></h5>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card>
              <Card.Body>
                <h5><b>Lorem ipsum</b></h5>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card>
              <Card.Body>
                <h5><b>Lorem ipsum</b></h5>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    <section className='jumbotron-sobre d-flex align-items-center'>
      <Container>
        <Row>
          <Col md={5}>
            <h4><b>Lorem, ipsum dolor sit amet consecteturipsum dolor sit amet consecteturipsum dolor sit amet consectetur adipisicing elit.</b></h4> 
            <img src={img2}  className="img-fluid mt-4"/>
            <div className='mt-4'>
            <button 
            type="button" 
            className="btn btn-dark">
              join now <HiOutlineChevronRight className='ms-4'/>
            </button>
            </div>
          </Col>
          <Col md={5} className="d-flex align-items-center">
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam sed iste perferendis facere eveniet modi non asperiores assumenda voluptatibus harum odio, amet commodi quaerat. Eaque deserunt accusamus velit voluptates quod!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam sed iste perferendis facere eveniet modi non asperiores assumenda voluptatibus harum odio, amet commodi quaerat. Eaque deserunt accusamus velit voluptates quod!
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </main>
}

export default Home;