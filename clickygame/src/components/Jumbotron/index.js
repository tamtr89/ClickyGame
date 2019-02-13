import React from 'react';
import { Container } from 'reactstrap';
import "./style.css"

const Title = (props) => {
  return (
    <div>
        <Container>
          <h1 className="display-3">{props.mainText}</h1>
          <p className="lead">{props.lead}</p>
        </Container>
    </div>
  );
};

export default Title;