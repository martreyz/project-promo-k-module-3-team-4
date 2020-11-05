import React from "react";
import "../stylesheets/App.scss";
import Header from "./Header";
import Preview from "./Preview";
import Forms from "./Forms/Forms";
import Footer from "./Footer";
import Photo from "../images/totoro.jpg";

const data = {
  name: "Ada Lovelace",
  job: "Programadora",
  photo: Photo,
  phone: "666 66 66 66",
  mail: "ada.lovelace@ada.com",
  linkedin: "adita.lovelace",
  github: "adita.lovelace",
};

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
        <Header />
        <main className="main-aplication">
          <Preview
            name={data.name}
            job={data.job}
            photo={data.photo}
            phone={data.phone}
            linkedin={data.linkedin}
            github={data.github}
            mail={data.mail}
          />
          <Forms />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
