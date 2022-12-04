import {useState,useEffect } from "react";
import axios from "axios";


function  useSaveMovieInWatchLaterDB (soon,title,images,quantity,info){
      const addMovieToWatchLaterList =  {soon:soon,title:title,image:images,quantity:quantity,info:info}
      
      axios
      .post(
          process.env.REACT_APP_BACKEND_URL +"/cart",addMovieToWatchLaterList)
      .then(res => {           
              console.log(res,'savedinDB');  
              window.location.reload()
      })
      .catch((err) => {
          console.log(err)
          console.log('error here')                  
      });
      
  
  };

export default useSaveMovieInWatchLaterDB;