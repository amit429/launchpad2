import React from "react";
import {useEffect, useState} from "react";
import { Text } from "@chakra-ui/react";
import Loader from "../Components/Loading Screen/Loader";
import Quote from "../Components/Home/Quote component/Quote";
import Aboutwpu from "../Components/Home/Aboutwpu/Aboutwpu";
  
const Home = () => {
  
    const [loading, setLoading] = useState(false);

    const loadData = async () => {

        setTimeout(() => {
            setLoading(false);
        }, 8000);

    }
      
    useEffect(() => {    
      //loadData();
    }, [])
      
    if (loading) {
        return (
            <></>
        )
    }
      
    else {
        return (
            <>
                <Quote />
                <Aboutwpu/>
                
            </>
        )
    }
}
  
export default Home;