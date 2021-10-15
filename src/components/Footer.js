import React from "react";
import { Segment, Container, Grid, List, Header } from "semantic-ui-react";

const Footer = () => {
  return (
    <div className={"Footer"}>
       <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as={"h4"} content={"About"} />
                <List link inverted>
                  <List.Item as={"a"}>Sitemap</List.Item>
                  <List.Item as={"a"}>Contact Us</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as={"h4"} content={"Services"} />
                <List link inverted>
                  <List.Item as={"a"}>RANDOM USER GENERATOR</List.Item>
                  <List.Item as={"a"}>DNA FAQ</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as={"h4"} inverted>
                  Footer 
                </Header>
                <p>
                  Extra space for a call to action inside the footer that could
                  help re-engage users.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        </Segment>
    </div>
  );
};

export default Footer;
