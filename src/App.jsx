import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeFirstName, changeSecondName } from './components/Store/actions';

const putStateToProps = state => ({
  firstName: state.firstName,
  secondName: state.secondName,
});

const putActionsToProps = dispatch => ({
  changeFirstName: bindActionCreators(changeFirstName, dispatch),
  changeSecondName: bindActionCreators(changeSecondName, dispatch),
});

export class App extends React.PureComponent {
  render() {
    const {
      firstName,
      secondName,
      changeFirstName,
      changeSecondName,
    } = this.props;

    return (
      <div>
        <div>
          <input
            type="text"
            value={firstName}
            placeholder="First Name"
            onChange={(event) => {
              changeFirstName(event.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            value={secondName}
            placeholder="Second Name"
            onChange={(event) => {
              changeSecondName(event.target.value);
            }}
          />
        </div>
        <button type="button">Log In</button>
      </div>
    );
  }
}

export const WrappedMainComponent = connect(
  putStateToProps,
  putActionsToProps,
)(App);
