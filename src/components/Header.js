import React from 'react';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';

const Header = ({ flags }) => {

    let header;

    console.log(flags.newHeader);

    if(flags.newHeader){
      header =
      <header className="header">
        <h1 className="header__h1">
          <span className="header__text">An Inspiration Board for Bradlie</span>
        </h1>
      </header>
    }
    else {
      header =
      <header className="header">
        <h1 className="header__h1">
          <span className="header__text">An Inspiration Board for An Amazing Person</span>
        </h1>
      </header>

    return (
      <div className="header">
        {header}
      </div>
    )
  }
}


export default withLDConsumer()(Header);
