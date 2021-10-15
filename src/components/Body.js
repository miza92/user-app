import React, { useState, useEffect } from "react";
import { Container, Image, Card, Icon, Loader } from "semantic-ui-react";

const Body = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);  

  useEffect(() => {
    const url = "https://randomuser.me/api/?results=25";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        if (typeof data === "object" && data !== null) {
          var res = Object.values(data);
          var tab = res[0];
          setResult(tab);
        }
        setLoading(true);
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
  };

  const isLoading = () => {
    return <Loader active inline="centered" />
  };

  const usersDisplay = () => {
    return (
      <Container style={{ padding: "6em 0em" }}>
        <div className={"Body"}>
          {result.map(item => (
          <Card key={item.id.value}>
            <Image src={item.picture.large} wrapped ui={false} />
            <Card.Content>
            <Card.Header>Hi, I'm : {item.name.first + " " + item.name.last}</Card.Header>
            <Card.Meta>
              <span className={"date"}>{calculateAge(item.dob.date)} ans</span>
            </Card.Meta>
            <Card.Description>
              {item.gender} 
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
              <Icon name={"mail"} />
                {item.email}
              </a>
            </Card.Content>
          </Card>
          ))}
        </div>
      </Container>      
    )
  };

  return !loading ? isLoading() : usersDisplay();
  
};

export default Body;
