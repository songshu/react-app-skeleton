import React from 'react';

export default class ImgBox extends React.Component {
  render() {
    var options = this.props.options;
    var optionsList = [];

    for (var imgTitle in options) {
        optionsList.push(
          <img alt={imgTitle} className="imgbox" src={ "resources/images/" + options[imgTitle]['src']} key={imgTitle} />
        );
    };

    return (
      <div className="imgbox">
        {optionsList}
      </div>
    );
  }
}
