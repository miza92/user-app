import React from "react";
import { Grid } from "semantic-ui-react";
import MyCarousel from "./Carousel";

const Head = () => {
  return (
    <div className={"Header"}>
      <Grid divided={'vertically'} stackable>
        <Grid.Row columns={2}>
          <Grid.Column>
            <MyCarousel />
          </Grid.Column>
          <Grid.Column style={{ padding: "20em 0em" }}>
            <h3 className={"Titre"}> RANDOM USER GENERATOR</h3>
            <h4 className={"Titre"}>Get Started</h4>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Head;
