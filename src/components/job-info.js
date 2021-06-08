import React, { Component } from 'react';

class JobInfo extends Component {
  render() {
    return (
      <div class="single-job-items mb-30">
        <div class="job-items">
          <div class="company-img">
            <a href="job_details.html"><img src={window.location.origin + this.props.company_logo} alt="" /></a>
          </div>
          <div class="job-tittle">
            <a href="job_details.html"><h4>{this.props.job_title}</h4></a>
            <ul>
              <li>{this.props.company_name}</li>
              <li><i class="fas fa-map-marker-alt"></i>{this.props.Location}</li>
              <li>{this.props.min_salary} - {this.props.max_salary}</li>
            </ul>
          </div>
        </div>
        <div class="items-link f-right">
          <a href="job_details.html">Full Time</a>
          <span>7 hours ago</span>
        </div>
      </div>
    );
  }
}

export default JobInfo;