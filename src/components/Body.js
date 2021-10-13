import React, { useState, useEffect } from 'react';
import { Container, Image, Card, Icon, Loader, Grid } from 'semantic-ui-react'


const Body = () =>{ 
  const [result, setResult] = useState([]);

    useEffect(() => {
      const url = "https://randomuser.me/api/?results=25";
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const data = await response.json();

              if (typeof data === 'object' && data !== null){
                var res = Object.values(data);
                var tab = res[0];
                setResult(tab);
              }
          } catch (error) {
              console.log("error", error);
          }
        };
        fetchData();
    }, []);

    const calculateAge = (dob, dt) => {
      dt = dt || new Date();
      var diff = dt.getTime() - new Date(dob).getTime();
      return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    }


    return (
    <div>
      { result === null ? 
        ( <Loader active inline='centered' />) : 
        ( <Container style={{ padding: '6em 0em' }}>
          {result.map(item => (
            <Grid centered style={{ padding: '0.4em 0em' }} >
          <Card>
            <Image src={item.picture.large} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Hi, I'm : {item.name.first+' '+item.name.last}</Card.Header>
                <Card.Meta>
                  <span>{item.gender}</span>
                </Card.Meta>
              <Card.Description>
                {calculateAge(item.dob.date)} ans 
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
            <Icon name={'mail'} />
              {item.email}
            </a>
            </Card.Content>
          </Card>
          </Grid>
         )).sort((a, b) => a - b)}
        </Container>)
      }
    </div>
  );    
};

export default Body;