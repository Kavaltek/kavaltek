import React from 'react';
import { Container,
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap';  
import img from './../assets/img.png'
import img2 from './../assets/img2.png'
import img1 from './../assets/img1.png'
import logo1 from './../assets/logo1.png'
import logo2 from './../assets/logo2.png'
import logo3 from './../assets/logo3.png'
import { HiOutlineChevronRight } from "react-icons/hi";
function Home() {
  return <main>
    <nav className="navbar navbar-expand-lg navbar-light border-bottom fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#"><b>Kavaltk</b></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Pricing</a>
            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </div>
        </div>
      </div>
    </nav>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis consequatur, laborum explicabo officiis Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Veritatis consequatur, laborum explicabo officiis.
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
    <section className='jumbotron-sobre  d-flex align-items-center'>
      <Container>
        <h2><b>
        Save Time Managing your business <br/> with our best services
          </b></h2>
        <Row className='mt-5 pt-5'>
          <Col md={3} className="mb-4">
            <h5><b>Lorem ipsum</b></h5>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          </Col>
          <Col md={3} className="mb-4">
            <h5><b>Lorem ipsum</b></h5>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          </Col>
          <Col md={3} className="mb-4">
            <h5><b>Lorem ipsum</b></h5>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          </Col>
        </Row>
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
    <section className='jumbotron-produts border-top d-flex align-items-center'>
     <Container>
     <h2><b>
        Save Time Managing your business <br/> with our best services
      </b></h2>
      <Row className='mt-5'>
        <Col md={6} className="mb-4">
          <Card>
            <img src={img1} alt="" />
            <Card.Body className='p-5'>
              <h4><b>Save Time Managing your</b></h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Assumenda facere beatae tempora nisi omnis minima laborum suscipit 
                aspernatur veritatis dolorum quos maiores soluta, explicabo ullam dignissimos ratione reprehenderit cupiditate quidem!
              </p>
              <button 
            type="button" 
            className="btn btn-primary">
              join now <HiOutlineChevronRight className='ms-4'/>
            </button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card>
            <img src={img2} alt="" />
            <Card.Body className='p-5'>
              <h4><b>Save Time Managing your</b></h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Assumenda facere beatae tempora nisi omnis minima laborum suscipit 
                aspernatur veritatis dolorum quos maiores soluta, explicabo ullam dignissimos ratione reprehenderit cupiditate quidem!
              </p>
              <button 
            type="button" 
            className="btn btn-primary">
              join now <HiOutlineChevronRight className='ms-4'/>
            </button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
     </Container>
    </section>
    <div className='jumbotron-dicas'>
      <Container>
        <Row>
          <Col md={6}>
          <h1 className="display-4">
            technology haver  <br /> never been easier easier
            </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ad laboriosam eius et possimus reiciendis eveniet porro delectus, architecto corrupti, repellat dolorem nam necessitatibus quasi blanditiis! Nemo voluptatibus veniam nihil.</p>
            <button 
            type="button" 
            className="btn btn-primary">
              join now <HiOutlineChevronRight className='ms-4'/>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
    {/*
    <div className='jumbotron-dicas2'>
      <Container>
        <Row>
          <Col md={6} className="mb-4">
          <h1 className="display-4">
            technology haver  <br /> never been easier easier
            </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ad laboriosam eius et possimus reiciendis eveniet porro delectus, architecto corrupti, repellat dolorem nam necessitatibus quasi blanditiis! Nemo voluptatibus veniam nihil.</p>
            <button 
            type="button" 
            className="btn btn-primary">
              join now <HiOutlineChevronRight className='ms-4'/>
            </button>
          </Col>
          <Col md={6} className="mb-4">
          <h1 className="display-4">
            technology haver  <br /> never been easier easier
            </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ad laboriosam eius et possimus reiciendis eveniet porro delectus, architecto corrupti, repellat dolorem nam necessitatibus quasi blanditiis! Nemo voluptatibus veniam nihil.</p>
            <button 
            type="button" 
            className="btn btn-dark">
              join now <HiOutlineChevronRight className='ms-4'/>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
    
    <div className='jumbotron-contact border-top'>
      <Container>
        <Row>
          <Col md={6} className="mb-4">
          <h1 className="display-4">
            technology haver  
            </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <form action="" className='pe-5'>
              <input type="text"  className='form-control border mb-3' placeholder='Nome'/>
              <input type="text"  className='form-control border mb-3' placeholder='Email'/>
              <textarea className="form-control mb-3 border" placeholder='Mensagem' rows={5}></textarea>
            </form>
            <button 
            type="button" 
            className="btn btn-primary">
              Enviar <HiOutlineChevronRight className='ms-4'/>
            </button>
          </Col>
          <Col md={6} className="mb-4">
          <h1 className="display-4">
            technology haver  <br /> never been easier easier
            </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ad laboriosam eius et possimus reiciendis eveniet porro delectus, architecto corrupti, repellat dolorem nam necessitatibus quasi blanditiis! Nemo voluptatibus veniam nihil.</p>
          </Col>
        </Row>
      </Container>
    </div>*/}
    <div className="fooder">
      <Container>
        <Row>
          <Col md={3} className="mb-3">
          <h5><b>Localizacao</b></h5>
          <p>221B Baker Street, P.O Box 353 Park <br />
          Road, USA - 215431</p>
          </Col>
          <Col md={3} className="mb-3">
          <h5><b>Contacto</b></h5>
          <p>Tel. 999 999 999 <br /> info@yourdomain.com</p>
          <div className="links">

          </div>
          </Col>
        </Row>
      </Container>
    </div>
  </main>
}

export default Home;