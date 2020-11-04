import React from 'react';
import '../stylesheets/App.scss';
import Header from './Header';
import Preview from './Preview';
import Forms from './Forms/Forms';
import Footer from './Footer';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
        <Header />
        <main className="main-aplication">
          <Preview />
          <Forms />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
