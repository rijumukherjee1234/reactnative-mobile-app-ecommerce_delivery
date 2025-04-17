import Authnavigation from "../src/navigation/authnavigate";
import Appnavigate from "../src/navigation/appnavigate";
import { useSelector } from 'react-redux';
// 
const main = () => {
    const loginStatus = useSelector((state) => state.login);
   
    return (
        loginStatus == 0 ? <Authnavigation /> : <Appnavigate />
    );
  };
  
  export default main;