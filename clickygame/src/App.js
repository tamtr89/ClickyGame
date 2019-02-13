import React, { Component } from 'react';
import CartoonCard from "./components/CartoonCard";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import cartoons from "./cartoons.json";
import Column from "./Column";
import Row from "./Row";
import Container from "./container";

function shuffleCards(arr){
  for (let i = arr.length -1; i > 0; i--){
    let x = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[x]] = [arr[x], arr[i]];
  }
  return arr;
}

class App extends Component {
  // Set this.state
  state = {
    message: "Click an image to begin",
    cartoons,
    currentScore: 0,
    topScore: 0,
    clicked: [],
  }

  // Handle Click
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1){
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  }

  // Handle Score
  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
    });
    if(newScore >= this.state.topScore){
      this.setState({ topScore: newScore});
    }
    else if (newScore === 12){
      this.setState({ message: "You Win!!!"});
    }
    this.handleShuffle();
  }

  handleReset = () => {
    this.setState({
      message: "Click an image to begin",
      currentScore: 0,
      topScore: this.state.topScore,
      clicked: [],
    })
    this.handleShuffle();
  }

  // Handle Shuffle cards image
  handleShuffle = () => {
    let shuffled = shuffleCards(cartoons);
    this.setState({ cartoons: shuffled });
  };


  render() {
    return (

      <Wrapper>
        <Navbar 
          title= "Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
        />

      <Container>
      <Jumbotron
          mainText= "Sponge Memory Game"
          lead="Click on an image to earn points, but don't click on any more than once"
          />
        <Row>
          {this.state.cartoons.map(cartoon => (
            <Column size="md-3 sm-6">
              <CartoonCard
              key={cartoon.id}
              id={cartoon.id}
              image={cartoon.image}
              handleClick={this.handleClick}
              handleShuffle={this.handleShuffle}
              handleIncrement={this.handleIncrement}
              handleReset={this.handleReset}
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