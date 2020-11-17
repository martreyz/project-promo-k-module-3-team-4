import React from "react";
import "../stylesheets/App.scss";
import Header from "./Header";
import Preview from "./Preview";
import Forms from "./Forms/Forms";
import Footer from "./Footer";
import Photo from "../images/totoro.jpg";

class App extends React.Component {
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRadioClick = this.handleRadioClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
    this.getLocalStorage = this.getLocalStorage.bind(this);
    this.state = {
      name: "",
      job: "",
      photo: Photo,
      phone: "",
      mail: "",
      linkedin: "",
      github: "",
      palette: 1,
      photoMin: "",
    };
  }

  handleInputChange(name, value) {
    this.setState({
      [name]: value,
    });
    if (name === "photo") {
      this.setState({
        photoMin: value,
      });
    }
    this.setLocalStorage();
  }

  handleRadioClick(value) {
    if (value === "cold") {
      this.setState({
        palette: 1,
      });
    } else if (value === "warm") {
      this.setState({
        palette: 2,
      });
    } else if (value === "medium") {
      this.setState({
        palette: 3,
      });
    }
    this.setLocalStorage();
  }

  handleReset() {
    this.setState({
      name: "",
      job: "",
      photo: Photo,
      phone: "",
      mail: "",
      linkedin: "",
      github: "",
      palette: 1,
      photoMin: "",
    });
    this.setLocalStorage();
  }
  setLocalStorage() {
    localStorage.setItem("data", JSON.stringify(this.state));
  }

  getLocalStorage() {
    const data = JSON.parse(localStorage.getItem("data"));
    this.setState({
      name: data.name,
      job: data.job,
      photo: data.photo,
      phone: data.phone,
      mail: data.mail,
      linkedin: data.linkedin,
      github: data.github,
      palette: data.palette,
    });
  }
  render() {
    return (
      <>
        <Header />
        <main className="main-aplication">
          <Preview
            handleReset={this.handleReset}
            name={this.state.name}
            job={this.state.job}
            photo={this.state.photo}
            phone={this.state.phone}
            linkedin={this.state.linkedin}
            github={this.state.github}
            mail={this.state.mail}
            palette={this.state.palette}
          />
          <Forms
            handleInputChange={this.handleInputChange}
            handleRadioClick={this.handleRadioClick}
            name={this.state.name}
            job={this.state.job}
            photo={this.state.photo}
            phone={this.state.phone}
            linkedin={this.state.linkedin}
            github={this.state.github}
            mail={this.state.mail}
            palette={this.state.palette}
            photoMin={this.state.photoMin}
          />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
