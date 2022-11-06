// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom/client'
import MainApp from '../components/user/MainApp'
import Menu from '../components/user/Menu'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <div>
      <Router>
        <Routes>
          <Route exact path ="/" element={<MainApp/>}/>
          <Route path ="/menu" element={<Menu/>}/>
        </Routes>
      </Router>
    </div>
  );
})
