import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <div class="comment-list">
        <div class="single-comment justify-content-between d-flex">
          <div class="user justify-content-between d-flex">
              <div class="thumb">
                <img src="img/comment/comment_2.png" alt="" />
              </div>
              <div class="desc">
                <p class="comment">
                    {this.props.message}
                </p>
                <div class="d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                      <h5>
                          <a>{this.props.name}</a>
                      </h5>
                      <p class="date">{this.props.date_time}</p>
                    </div>
                    <div class="reply-btn">
                      <a class="btn-reply text-uppercase">reply</a>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </div>
    );
  }
}

export default Comment;