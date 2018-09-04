import React from 'react';
import NavBarTop from '../components/NavBarTop';

// Styles import
import index from '../assets/styles/css/index.css';


class BookIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: null,
    };
  }

  render() {
    return (
      <div className={index.wrapper}>
        <NavBarTop />
        <div className={index.container} />
      </div>
    );
  }
}

export default BookIndex;
