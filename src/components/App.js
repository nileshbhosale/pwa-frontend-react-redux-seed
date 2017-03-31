import React from "react";
import { connect } from "react-redux";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import '../style/main.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


// App component
class App extends React.Component {
  // pre-render logic
  componentWillMount() {
    //Fetch the json data from data.js on component mount
    //this.props.dispatch({type: 'FETCH_DATA'});
  }
 
  // render
  render() {
    const {children} = this.props;
    return (
      <MuiThemeProvider>
        <div>

          <AppBar
            title="My Profile"
            iconClassNameRight="muidocs-icon-navigation-expand-more"/>
          
          <div>
            {children}
          </div>
          
        </div>
      </MuiThemeProvider>
    );
  }
}

// export the connected class
function mapStateToProps(state) {
  console.log("called");
  return {
    questions: state.data.questions || [],
  };
}
export default connect(mapStateToProps)(App);
