import React, { Component } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

class Tweets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: [],
    };
    this.renderTweets = this.renderTweets.bind(this);
  }

  async componentDidMount() {
    const response = await fetch(
      "https://saldatweets.herokuapp.com/publications"
    );
    const data = await response.json();
    console.log(data);
    this.setState({ tweet: data });
  }
  renderTweets = () => {
    return (
      <Row>
        {
          (this.state.data.map = (x) => {
            return (
              <Col xs={6} md={4}>
                <Card style={{ width: "18rem", margin: "1rem" }}>
                  <Card.Body>
                    <Card.Title>{x.tweet.author}</Card.Title>
                    <Card.Text>{x.tweet.content}</Card.Text>
                    <Button variant="primary">Retweet</Button>
                    <Card.Text
                      style={{
                        width: "18rem",
                        marginTop: "1rem",
                        color: "#9e9e9e",
                      }}
                    >
                      Twitter for iPhone
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        }
      </Row>
    );
  };

  render() {
    return (
      <Container>
        <div>{this.renderTweets()}</div>
      </Container>
    );
  }
}

export default Tweets;
