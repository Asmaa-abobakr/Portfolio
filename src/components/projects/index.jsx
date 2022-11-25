import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import counterImg from "./../../assets/images/counter.svg";
import ecommerceImg from "./../../assets/images/ecommerce.svg";
import './projects.css'
const Projects = ()=>{
    return (
        <>
            <div className='projects-container p-3 row'>
                <div className='col-lg-4 col-md-6 col-sm-12 mb-5'>
                  <Card className='project-card-container mx-auto'>
                    <Card.Img variant="top" src={counterImg} className="project-card-img pt-2 px-2" />
                    <Card.Body>
                      <Card.Title className='project-card-title'>Counter</Card.Title>
                      <Card.Text className='project-card-text'>
                        The counter starts from zero, you can increment, decrement and reset the value.
                      </Card.Text>
                      <Button className='project-card-btn'><Link to={'/counter'}>Counter</Link></Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 mb-5'>
                  <Card className='project-card-container mx-auto'>
                    <Card.Img variant="top" src={ecommerceImg} className="project-card-img pt-3 px-2" />
                    <Card.Body>
                      <Card.Title className='project-card-title'>E-Commerce</Card.Title>
                      <Card.Text className='project-card-text'>
                      The user can see the details of any product, and add the product to the cart or remove it.
                      </Card.Text>
                      <Button className='project-card-btn'><Link to={'/shop'}>E-Commerce</Link></Button>
                    </Card.Body>
                  </Card>
                </div>
            </div>
           
        </>
    )
}

export default Projects;


