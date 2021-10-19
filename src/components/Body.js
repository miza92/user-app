import React, { useState, useEffect } from "react";
import { Container, Image, Card, Icon, Loader, Dropdown } from "semantic-ui-react";

const Body = () => {
  const [loading, setLoading] = useState(false); 
  const [result, setResult] = useState([]);
  const [savedAge, setSavedAge] = useState([])
 

  const url = "https://randomuser.me/api/?results=10";
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (typeof data === "object" && data !== null) {
        var res = Object.values(data);
        var tab = res[0];
        setResult(tab);
        setSavedAge(tab);
      }
      setLoading(true);
    } catch (error) {
      console.log("error", error);
    }
  };

  const calculateAge = (dob, dt) => {
    dt = dt || new Date();
    var diff = dt.getTime() - new Date(dob).getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  };

  useEffect(()=>{
    const sortByAge =  [...savedAge].sort((a,b) => (      
      calculateAge(a.dob.date)  - calculateAge(b.dob.date)
    ));
    setResult(sortByAge)
  },[savedAge]);


  useEffect(() => {   
    fetchData();
  }, []);

  const isLoading = () => {
    return <Loader active inline="centered" />
  };

  const usersDisplay = () => {
    return (
      <Container style={{ padding: "6em 0em" }}>
         <Dropdown item text={"Filter par genre"} position={"right"}>
            <Dropdown.Menu>
              <Dropdown.Item>Male</Dropdown.Item>
              <Dropdown.Item>Female</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        <div className={"Body"}>
          {result.map((item) => (
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
