import React, { Component } from 'react';
import CartoonCard from "./components/CartoonCard";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import cartoons from "./cartoons.json";
import Column from "./Column";
import Row from "./Row";
import Container from "./container";




class App extends Component {
  // Set this.state
  state = {
    cartoons, 
    currentScore: 0,
    topScore: 0,

  }

  render() {
    return (
      <Wrapper>
        <Navbar 
          title= "Cartoons Cliky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
        />

      <Title>
        Clicky Game
      </Title>

      <Container>

        <Row>
          
          {this.state.cartoons.map(cartoon => (
            <Column size="md-3 sm-6">
              <CartoonCard
              key={cartoon.id}
              id={cartoon.id}
              image={cartoon.image}
              />
            </Column>
          ))}

        </Row>
      </Container>
      </Wrapper>
    );
  }
}

export default App;