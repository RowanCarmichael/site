import React from 'react';
import PropTypes from 'prop-types';
import Typer from './Typer';

class Typewriter extends React.Component {
  state = {
    text: '',
    index: 0,
  };

  componentWillMount() {
    this.timerHandle = setTimeout(this.type, this.props.delay);
  }

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  type = () => {
    if (this.state.index < this.props.text.length) {
      this.setState(({ text, index }) => ({ text: `${text}${this.props.text.charAt(index)}`, index: index + 1 }));
      this.timerHandle = setTimeout(this.type, this.props.speed);
    }
  }

  render() {
    return (
      <Typer {...this.props} text={this.state.text} />
    );
  }
}

Typewriter.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number,
  delay: PropTypes.number,
};

Typewriter.defaultProps = {
  speed: 50,
  delay: 0,
};

export default Typewriter;
