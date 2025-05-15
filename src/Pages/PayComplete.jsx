import { useState } from "react";
import LoaderComp from "./Loader";

const PayComplete=()=>{
    const [isLoading, setIsLoading] = useState(true);
    
    setTimeout(() => {
        setIsLoading(false);
    }, 3000);
    return(
        <>

        <div style={{margin:"100px"}}>
            {isLoading? (
                <div style={{width:"100px", margin:"auto"}}>
                <LoaderComp/>
            </div>
            ) : (
                <h3 align="center"> Your Payment Succesfully Completed!!!</h3>

            )}
        </div>
       
         
        
          
        </>
    )
}
export default PayComplete;