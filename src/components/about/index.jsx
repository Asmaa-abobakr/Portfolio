import Card from 'react-bootstrap/Card';
import './about.css';

const About = ()=>{
    return (
        <>
            <div className="about-container w-75 mx-auto my-5">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 mb-4">
                        {/* SUMMARY */}
                        <Card className='card-container w-75'>
                            <Card.Header>About</Card.Header>
                            <Card.Body>
                                <Card.Title className='card-title'>Summary</Card.Title>
                                <Card.Text className='card-text'>
                                Front-End developer with a good experience in software development. 
                                Developed many projects using different technologies.Worked as a web developer for one year and robotics software engineer for three years.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Title className='card-title'>Education</Card.Title>  
                                <ul className='ps-3'>
                                    <li className='card-text'>Bachelor of Electrical Engineering </li>
                                    <li className='card-text'>Front-End Web Development - Intensive Training Program at ITI</li>
                                </ul>                                                         
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        {/* SKILLS */}
                        <Card className='card-container w-75'>
                            <Card.Header>Skills</Card.Header>
                            <Card.Body className='pb-2'>
                                <Card.Title className='card-title'>Front-End Skills</Card.Title>
                                    <ul className='row mb-0 py-2'>
                                        <li className='col-6 card-text'>HTML</li>
                                        <li className='col-6 card-text'>CSS</li>
                                        <li className='col-6 card-text'>JavaScript</li>
                                        <li className='col-6 card-text'>TypeScript</li>
                                        <li className='col-6 card-text'>Bootstrap</li>
                                        <li className='col-6 card-text'>Sass</li>
                                        <li className='col-6 card-text'>React</li>
                                        <li className='col-6 card-text'>Angular</li>
                                    </ul>   
                            </Card.Body>
                            <Card.Body className='pt-2'>
                                <Card.Title className='card-title'>General Skills</Card.Title>
                                    <ul className='row py-2 mb-0'>
                                        <li className='col-6 card-text'>C/C++</li>
                                        <li className='col-6 card-text'>Python</li>
                                        <li className='col-6 card-text'>MySQL</li>
                                        <li className='col-6 card-text'>Arduino</li>
                                    </ul>                 
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;