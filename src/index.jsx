import React from 'react';
import ReactDom from 'react-dom';
import MainView from './components/main-view/main-view';
import Container from 'react-bootstrap/Container';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import moviesApp from './reducers/reducers';
// import statement to indicate that you need to bundle '/.index.scss'
import './index.scss';

const store = createStore(moviesApp);
// main compoment
class MyFlixApplication extends React.Component {
    render() {
      return (
      <Provider store={store}>
        <Container>
          <MainView />
        </Container>
      </Provider>
      );
    }
  }

// finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

// tells react to render your app in the root DOM element
ReactDom.render(React.createElement(MyFlixApplication), container);
