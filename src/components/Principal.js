import React from "react";
import { Component } from "react";
import "./Principal.css";
import Tweets from "./Test";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: [],
      texto: ''
    };
    this.filterTweets = this.filterTweets.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  async componentDidMount() {
    const response = await fetch(
      "https://saldatweets.herokuapp.com/publications"
    );
    const data = await response.json();
    console.log(data);
    this.setState({ tweet: data });
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({texto: e.target.value})
    this.filterTweets()
    console.log(this.state.tweet)
  }

  filterTweets = () => {
    if(this.state.texto === '') {
      return ''
    }
    let hola = this.state.tweet.filter(tweet => {
      console.log (tweet.author)
      return tweet.author.includes(this.state.texto)
    })

    this.setState({tweet: hola})
  }

  //Bucar como pasar la info de este componete,resultado del filter al componente Test
  render() {
    return (
      <div className="principal">
        <div className="barra">
          <input type="text" className="buscar" placeholder="Search" onChange={this.handleChange}/>
        </div>
        <div className="noticias_post"></div>
      </div>
    );
  }

}

export default Filter;
