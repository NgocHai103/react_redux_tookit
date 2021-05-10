import React,{useEffect} from 'react'
const Pager1 = (props) =>{
    const pager = { pageIndex : 1, pageTotals : 20, pageSize : 5 };
useEffect(()=>{
   
})
 return(
        
            <div class="pagination">
                <ul>
                    <li class="disabled"><a href="#">&laquo;</a></li>

                    <li class="active"><a href="#">1</a></li>

                    <li><a href="#">&raquo;</a></li>
                </ul>
            </div>
    
 );
} 
export default Pager1;