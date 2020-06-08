import React from "react";
import { Segment, Container, Grid, List, Header } from "semantic-ui-react";

//custom styling
import "./Footer.css";

const textStyling = {
  color: "white",
};

export default function Footer() {
  return (
    <Segment
      vertical
      style={{
        padding: "5em 0em",
        backgroundColor: "#e1ad01",
      }}
    >
      <Container style={{ backgroundColor: "#e1ad01" }}>
        <Grid divided stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header as="h4" content="About" style={textStyling} />
              <List link>
                <List.Item as="a" style={textStyling}>
                  Our Story
                </List.Item>
                <List.Item as="a" style={textStyling}>
                  Contact Us
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as="h4" content="Services" style={textStyling} />
              <List link>
                <List.Item as="a" style={textStyling}>
                  Business Inquiries
                </List.Item>
                <List.Item as="a" style={textStyling}>
                  FAQ
                </List.Item>
                <List.Item as="a" style={textStyling}>
                  Daniel's Barber Shop
                </List.Item>
                <List.Item as="a" style={textStyling}>
                  Adnan's Good Eats
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" style={textStyling}>
                The Aruga App
              </Header>
              <p style={textStyling}>
                The Aruga App is under the Adnan and Daniel LLC Corporation
                umbrella. It was founded in 2020 amidst the COVID-19 Pandemic by
                two childhood friends. Visit our other website for other great
                products and services we provide. #staywinnin
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}
