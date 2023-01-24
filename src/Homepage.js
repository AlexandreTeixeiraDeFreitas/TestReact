import React, { Component } from "react";
import Axios from "axios";

export class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    try {
      await Axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          this.setState({ data: res.data });
        })
        .catch((error) => {
          alert(error);
        });
    } catch (error) {
      alert(error);
    }
  }

  render() {
    const data = this.state;
    console.log(data, "hi");
    return (
      <>
        {/* <Hero jsondata={data} />
        <ImageGallery jsondata={data} /> */}
      </>
    );
  }
}

export default Homepage;
