import React from 'react';

export default class NavBar extends React.Component {
  render() {
    var options = this.props.options;
    var optionsList = [];

    for (var locName in options) {
        optionsList.push(
          <a href={options[locName]['link']} key={locName}>
            <li className={'uk-icon-' + options[locName]['icon']}>
              {locName}</li>
          </a>
        );
    };

    return (
      <div className="navbar">
        <ul>
          {optionsList}
        </ul>
      </div>
    );
  }
}
