import React from 'react';
import { Segment, Container, Header } from 'semantic-ui-react';

const Head = () =>{ 
  return (
    <div>
      <Segment inverted textAlign='center' style={{ minHeight: 700, padding: '1em 0em' }} vertical >
        <Container text>
          <Header as='h1'content='RANDOM USER GENERATOR' inverted 
            style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop:  '3em', }}
          />
          <Header as='h2' content='Get Started' inverted 
            style={{ fontSize: '1.7em', fontWeight: 'normal', marginTop: '1.5em', }}
          />
        </Container>
      </Segment>
    </div>
  );
};

export default Head;