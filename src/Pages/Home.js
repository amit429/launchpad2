import React from "react";
import {useEffect, useState} from "react";
import { Text } from "@chakra-ui/react";
import Loader from "../Components/Loading Screen/Loader";
  
const Home = () => {
  
    const [loading, setLoading] = useState(true);

    const loadData = async () => {

        setTimeout(() => {
            setLoading(false);
        }, 8000);

    }
      
    useEffect(() => {    
      loadData();
    }, [])
      
    if (loading) {
        return (
            <Loader/>
        )
    }
      
    else {
        return (
            <>
                <Text fontSize="40px">Home</Text>
            </>
        )
    }
}
  
export default Home;