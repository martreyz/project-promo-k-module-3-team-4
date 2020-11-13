import React from 'react';
import '../stylesheets/App.scss';
import Header from './Header';
import Preview from './Preview';
import Forms from './Forms/Forms';
import Footer from './Footer';
import Photo from '../images/totoro.jpg';

class App extends React.Component {
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRadioClick = this.handleRadioClick.bind(this);
    this.state = {
      name: '',
      job: '',
      photo: Photo,
      phone: '',
      mail: '',
      linkedin: '',
      github: '',
      palette: 1,
    };
  }

  handleInputChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  handleRadioClick(value) {
    if (value === 'cold') {
      this.setState({
        palette: 1,
      });
    } else if (value === 'warm') {
      this.setState({
        palette: 2,
      });
    } else if (value === 'medium') {
      this.setState({
        palette: 3,
      });
    }
  }

  render() {
    return (
      <>
        <Header />
        <main className="main-aplication">
          <Preview
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
          />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
