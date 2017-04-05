import React from 'react';

export default class TitleBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="titlebar">
        <h1><span className="uk-icon-star-half-full" />Demo<span>Site</span></h1>
      </div>
    );
  }
}
