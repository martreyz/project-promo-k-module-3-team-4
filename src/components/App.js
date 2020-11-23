import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { sendRequest } from '../services/api';
import Header from './Header';
import Landing from './Homepage';
import Card from './Card';
import Footer from './Footer';
import photo from '../images/totoro.jpg';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRadioClick = this.handleRadioClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
    this.getLocalStorage = this.getLocalStorage.bind(this);
    this.handleShareClick = this.handleShareClick.bind(this);
    this.state = {
      name: '',
      job: '',
      photo: photo,
      phone: '',
      mail: '',
      linkedin: '',
      github: '',
      palette: 1,
      photoMin: '',
      data: {},
    };
  }

  handleInputChange(name, value) {
    this.setState({
      [name]: value,
    });
    if (name === 'photo') {
      this.setState({
        photoMin: value,
      });
    }
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

  handleShareClick() {
    const data = {
      name: this.state.name,
      job: this.state.job,
      photo: this.state.photo,
      phone: this.state.phone,
      mail: this.state.mail,
      linkedin: this.state.linkedin,
      github: this.state.github,
      palette: this.state.palette,
    };
    this.setState({
      data: data,
    });
  }

  handleReset() {
    this.setState({
      name: '',
      job: '',
      photo: photo,
      phone: '',
      mail: '',
      linkedin: '',
      github: '',
      palette: 1,
      photoMin: '',
    });
  }

  componentDidMount() {
    if (localStorage.getItem('data')) {
      this.getLocalStorage('data');
    }
  }

  componentDidUpdate() {
    this.setLocalStorage();
    if (JSON.stringify(this.state.data) !== '{}') {
      console.log('me paso el if por donde os parezca');
      sendRequest(this.state.data !== {}).then((result) => {
        console.log(result);
      });
    }
  }

  setLocalStorage() {
    localStorage.setItem('data', JSON.stringify(this.state));
  }

  getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('data'));
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
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/card">
            <Card
              handleReset={this.handleReset}
              name={this.state.name}
              job={this.state.job}
              photo={this.state.photo}
              phone={this.state.phone}
              linkedin={this.state.linkedin}
              github={this.state.github}
              mail={this.state.mail}
              palette={this.state.palette}
              handleInputChange={this.handleInputChange}
              handleRadioClick={this.handleRadioClick}
              handleShareClick={this.handleShareClick}
              photoMin={this.state.photoMin}
            />
          </Route>
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
