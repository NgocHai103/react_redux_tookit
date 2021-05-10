import { unwrapResult } from '@reduxjs/toolkit';
import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../redux_slice/Home/productSlice';
import Pager from 'react-pager';
import Pager1 from './common/pager';

export function Home() {
  const [pager,setPager] = useState({ pageIndex : 1, pageTotals : 20, pageSize : 5 });
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
  const handlePageChanged = (e)=>{
    alert(e);
    setPager({ pageIndex : e, pageTotals : 20, pageSize : 5 });
  }
  return (
    <>
        <link id="callCss" rel="stylesheet" href="themes/bootshop/bootstrap.min.css" media="screen" />
        <link href="themes/css/base.css" rel="stylesheet" media="screen" />
        <link href="themes/css/bootstrap-responsive.min.css" rel="stylesheet" />
        <link href="themes/css/font-awesome.css" rel="stylesheet" type="text/css" />
        <link href="themes/js/google-code-prettify/prettify.css" rel="stylesheet" />
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
            <div class="pagination">
            <Pager
                total={pager.pageTotals}
                current={pager.pageIndex}
                visiblePages={pager.pageSize}
                titles={{ first: '<', last: '>' }}
                className="pagination-sm pull-right"
                onPageChanged={handlePageChanged}
            />
            </div>
        </div>
     
       

          <script src="themes/js/jquery.js" type="text/javascript"></script>
          <script src="themes/js/bootstrap.min.js" type="text/javascript"></script>
          <script src="themes/js/google-code-prettify/prettify.js"></script>
          
          <script src="themes/js/bootshop.js"></script>
            <script src="themes/js/jquery.lightbox-0.5.js"></script>
   </>
  );
}
