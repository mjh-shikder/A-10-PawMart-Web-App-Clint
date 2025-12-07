import React from 'react';
import errImg from '../assets/error.jpg'
import MyContainer from '../components/MyContainer';

const ErrorPage = () => {
    return (
      <MyContainer>
        <title>404 Error</title>
      <div className="w-full px-64 ">
        <img src={errImg} alt="" />
      </div>
    </MyContainer>
    );
};

export default ErrorPage;