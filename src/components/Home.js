import { unwrapResult } from '@reduxjs/toolkit';
import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../redux_slice/Home/productSlice';

export function Home() {
  const dataUpdate = useSelector(state=>state.product);
  console.log(dataUpdate);
  const dispatch = useDispatch();
  useEffect(()=>{
    //dispatch(getProducts());
    const LoadData = async() =>{
      try{
        const actionResult = await dispatch(getProducts());
        const re = unwrapResult(actionResult);
        console.log(re);
      }
      catch(e)
      {
        console.log(e.message);
      }
      
    };
    LoadData();
  },[])
  return (
    <div>
      
        {
          dataUpdate.loading?
          <>loading...</>
          :
          dataUpdate.data.length>0?
          dataUpdate.data.map((key) => (
            <li className="travelcompany-input" key={key['id']}>
                <span className="input-label">key: {key['id']}</span>
            </li>
          ))
          :
          <>error...</>
        }
    </div>
  );
}
