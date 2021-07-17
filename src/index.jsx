import React from 'react';
import ReactDom from 'react-dom';
import MainView from './components/main-view/main-view';
import Container from 'react-bootstrap/Container';
// import statement to indicate that you need to bundle '/.index.scss'
import './index.scss';

// main compoment

class MyFlixApplication extends React.Component {
    render() {
      return (
        <Container>
          <MainView />
        </Container>
      );
    }
  }

// finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

// tells react to render your app in the root DOM element
ReactDom.render(React.createElement(MyFlixApplication), container);
