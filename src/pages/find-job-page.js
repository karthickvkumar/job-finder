import React, { Component } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import JobInfo from '../components/job-info';

import jobList from '../json/home-job-info';


class FindJobPage extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      jobCategory : '',
      jobList : jobList,
      allCategory : jobList,
      jobType : []
    }
  }

  onChangeJobCategory = (event) => {
    console.log(event.target.value)
    var filteredCategory = this.state.allCategory.filter((value, index) => {
      return value.category == event.target.value;
    });
    
    this.setState({
      jobList : filteredCategory.length == 0 ? this.state.allCategory : filteredCategory
    });
  }

  onChangeJobType = (event) => {
    let filterdJobType = [];

    if(event.target.checked){
      this.state.jobType.push(event.target.value)
    }
    else{

      let index = this.state.jobType.findIndex((value, index) => {
        return value === event.target.value
      });
      this.state.jobType.splice(index, 1);
    }

    this.state.jobType.forEach((jobType, index) => {
      var filteredCategory = this.state.allCategory.filter((value, index) => {
        return value.type == jobType;
      });
      filterdJobType.push(...filteredCategory)
    }) 

    this.setState({
      jobList : filterdJobType.length == 0 ? this.state.allCategory : filterdJobType
    });
  };

  render() {
    let jobProfiles = this.state.jobList.map((value, index) => {
      return(
        <JobInfo {...value}></JobInfo>
      )
    })

    return (
      <div>
        <Header></Header>
        <main>

          <div className="slider-area ">
            <div className="single-slider section-overly slider-height2 d-flex align-items-center" 
            style={{"background-image" : "url(img/hero/about.jpg)"}}>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="hero-cap text-center">
                      <h2>Get your job</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="job-listing-area pt-120 pb-120">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-4">
                  <div className="row">
                    <div className="col-12">
                      <div className="small-section-tittle2 mb-45">
                        <div className="ion"> <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px" height="12px">
                          <path fill-rule="evenodd" fill="rgb(27, 207, 107)"
                            d="M7.778,12.000 L12.222,12.000 L12.222,10.000 L7.778,10.000 L7.778,12.000 ZM-0.000,-0.000 L-0.000,2.000 L20.000,2.000 L20.000,-0.000 L-0.000,-0.000 ZM3.333,7.000 L16.667,7.000 L16.667,5.000 L3.333,5.000 L3.333,7.000 Z" />
                        </svg>
                        </div>
                        <h4>Filter Jobs</h4>
                      </div>
                    </div>
                  </div>
                  <div className="job-category-listing mb-50">
                    <div className="single-listing">
                      <div className="small-section-tittle2">
                        <h4>Job Category</h4>
                      </div>
                      <div className="select-job-items2">
                        <select name="select" onChange={this.onChangeJobCategory}>
                          <option value="all">All Category</option>
                          <option value="reactjs">React JS</option>
                          <option value="angular">Angular</option>
                          <option value=".net">.NET</option>
                          <option value="python">Python</option>
                        </select>
                      </div>
                      <div className="select-Categories pt-80 pb-50">
                        <div className="small-section-tittle2">
                          <h4>Job Type</h4>
                        </div>
                        <label className="container">Full Time
                                        <input type="checkbox" onChange={this.onChangeJobType} value="Full Time"/>
                          <span className="checkmark"></span>
                        </label>
                        <label className="container">Part Time
                                        <input type="checkbox" onChange={this.onChangeJobType} value="Part Time"/>
                          <span className="checkmark"></span>
                        </label>
                        <label className="container">Remote
                                        <input type="checkbox" onChange={this.onChangeJobType} value="Remote"/>
                          <span className="checkmark"></span>
                        </label>
                        <label className="container">Freelance
                                        <input type="checkbox" onChange={this.onChangeJobType} value="Freelance"/>
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>
                    <div className="single-listing">
                      <div className="small-section-tittle2">
                        <h4>Job Location</h4>
                      </div>
                      <div className="select-job-items2">
                        <select name="select">
                          <option value="">Anywhere</option>
                          <option value="">Category 1</option>
                          <option value="">Category 2</option>
                          <option value="">Category 3</option>
                          <option value="">Category 4</option>
                        </select>
                      </div>
                      <div className="select-Categories pt-80 pb-50">
                        <div className="small-section-tittle2">
                          <h4>Experience</h4>
                        </div>
                        <label className="container">1-2 Years
                                        <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="container">2-3 Years
                                        <input type="checkbox" checked="checked active" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="container">3-6 Years
                                        <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="container">6-more..
                                        <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>
                    <div className="single-listing">
                      <div className="select-Categories pb-50">
                        <div className="small-section-tittle2">
                          <h4>Posted Within</h4>
                        </div>
                        <label className="container">Any
                                        <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="container">Today
                                        <input type="checkbox" checked="checked active" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="container">Last 2 days
                                        <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="container">Last 3 days
                                        <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="container">Last 5 days
                                        <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="container">Last 10 days
                                        <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>
                    <div className="single-listing">
                      <aside className="left_widgets p_filter_widgets price_rangs_aside sidebar_box_shadow">
                        <div className="small-section-tittle2">
                          <h4>Filter Jobs</h4>
                        </div>
                        <div className="widgets_inner">
                          <div className="range_item">
                            <input type="text" className="js-range-slider" value="" />
                            <div className="d-flex align-items-center">
                              <div className="price_text">
                                <p>Price :</p>
                              </div>
                              <div className="price_value d-flex justify-content-center">
                                <input type="text" className="js-input-from" id="amount" readonly />
                                <span>to</span>
                                <input type="text" className="js-input-to" id="amount" readonly />
                              </div>
                            </div>
                          </div>
                        </div>
                      </aside>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-8">
                  {/* Job Information  */}
                  {jobProfiles}
                </div>
              </div>
            </div>
          </div>
          <div className="pagination-area pb-115 text-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="single-wrap d-flex justify-content-center">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-start">
                        <li className="page-item active"><a className="page-link" href="#">01</a></li>
                        <li className="page-item"><a className="page-link" href="#">02</a></li>
                        <li className="page-item"><a className="page-link" href="#">03</a></li>
                        <li className="page-item"><a className="page-link" href="#"><span class="ti-angle-right"></span></a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default FindJobPage;