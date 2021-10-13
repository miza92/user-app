import React, { useState, useEffect } from 'react';
// import './App.css';
import { Image, Card, Icon } from 'semantic-ui-react'


const Body = () =>{ 
  const [result, setResult] = useState([]);
    useEffect(() => {
      const url = "https://randomuser.me/api/?results=25";
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const data = await response.json();
              // console.log(data.results);
              // var tab = data.results;
              // console.log(typeof data);

              if (typeof data === 'object' && data !== null){
                console.log('mimi');
                var res = Object.values(data);
                console.log('la 1 er resultat :', res);
                var tab = res[0];
                console.log(tab);
                setResult(tab);
                }else{console.log('foufou');
              }
          } catch (error) {
              console.log("error", error);
          }
        };
        fetchData();
    }, []);
    return (
    <div className={'flex_display'}>
      {result.map(item => (
        <Card.Group >
        <Card>
          <Card.Content>
            <Image floated='right'src={item.picture.large} circular/>
            <Card.Header>{item.name.title +' '+item.name.first+' '+item.name.last}</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name={'mail'} />
              {item.email}
            </a>
          </Card.Content>
        </Card>
      </Card.Group>
    ))}
    </div>
    );
  }


export default Body;