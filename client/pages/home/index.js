import React from 'react';
import TitleBar from '../../partials/titlebar.js';
import NavBar from '../../partials/navbar.js';
import ImgBox from '../../components/imgbox.js';

//Home screen options.
var options = {
  'Home': {
    'link': '/',
    'icon': 'home'
  },
  'Settings': {
    'link': '/settings',
    'icon': 'gear'
  },
  'Featured': {
    'link': '/featured',
    'icon': 'star'
  },
  'Logout': {
    'link': '/logout',
    'icon': 'times-circle-o'
  }
};


//Hobby images.
var featuredImages = {
  'Coding': {
    'src': 'code-sm.jpg'
  },
  'Photography': {
    'src': 'photographer-sm.jpg'
  },
  'Music': {
    'src': 'dj-sm.jpg'
  },
  'Travel': {
    'src': 'adventure-sm.jpg'
  }
}

export default class Home extends React.Component {
  render() {
    return (
     <div>
       <TitleBar />
       <NavBar options={options}/>
       <div className="page-content">
         <h1 className="featured">Featured Hobbies</h1>
         <ImgBox options={featuredImages}/>
         <h2>Lorem ipsum dolor sit amet, consectetur
         adipiscing elit. Fusce vel facilisis orci,
         vel egestas lectus. Donec nec sem cursus velit
         lectus. Donec nec sem cursus velit lectus.
         lectus. Donec nec sem cursus velit Donec
         nec sem cursus velit sem cursus velit
         velit sem cursus velit velit velit velit more velit :)
         adipiscing elit. Fusce vel facilisis orci,
         vel egestas lectus. Donec nec sem cursus velit
         </h2>
         <h2>
         lectus. Donec nec sem cursus velit lectus.
         lectus. Donec nec sem cursus velit Donec
         nec sem cursus velit sem cursus velit
         velit sem cursus velit velit velit velit more velit :)
         adipiscing elit. Fusce vel facilisis orci,
         vel egestas lectus. Donec nec sem cursus velit
         lectus. Donec nec sem cursus velit lectus.
         lectus. Donec nec sem cursus velit Donec
         nec sem cursus velit sem cursus velit
         velit sem cursus velit velit velit velit more velit :)
         </h2>
       </div>
      </div>);
  }
}
