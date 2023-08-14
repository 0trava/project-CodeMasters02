import React from 'react';
import { Comment } from 'react-loader-spinner';
import './Loader.css';

export const Loader = () => {
  return (
    <div class="loader-all">
      <Comment
        visible={true}
        height="80"
        width="80"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#4f86eb"
      />
    </div>
  );
};