import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HomePage from './pages/home-page';
import AboutPage from './pages/about-page';
import BlogPage from './pages/blog-page';
import ContactPage from './pages/contact-page';
import FindJobPage from './pages/find-job-page';
import JobDetail from './pages/job-detail';
import SingleBlogPage from './pages/single-blog-page';

import './css/bootstrap.min.css';
// import './css/owl.carousel.min.css';
import './css/flaticon.css';
import './css/price_rangs.css';
import './css/slicknav.css';
import './css/animate.min.css';
import './css/magnific-popup.css';
import './css/fontawesome-all.min.css';
import './css/themify-icons.css';
import './css/slick.css';
import './css/nice-select.css';
import './css/style.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/blog" component={BlogPage}></Route>
          <Route path="/contact" component={ContactPage}></Route>
          <Route path="/find-job" component={FindJobPage}></Route>
          <Route path="/job-detail" component={JobDetail}></Route>
          <Route path="/single-blog" component={SingleBlogPage}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;