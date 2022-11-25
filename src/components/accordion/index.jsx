import './accordion.css';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      className="bg-secondary py-2 px-4 text-white border-0 rounded"
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const DetailsAccordion = (props) => {
  return (
    <Accordion defaultActiveKey="0" className='accor-container'>
      <Card className='border-0 w-100 mb-3 mt-2 accor-card-container'>
        <Card.Header className = 'border-0 ps-1 accor-card-container'>
          <CustomToggle eventKey="0" className="accor-card-name">{props.name}</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className='accor-card-text'>{props.content}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default DetailsAccordion;
