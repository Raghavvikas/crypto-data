import React, {useState} from 'react';
import Data from './CryptoDataApi';
import NavBar from './NavBar';
import './CryptoTabs.css';
import CryptoTabs from './CryptoTabs';

let total = [];

Data.forEach((elem)=>{
    total.push(...elem.tags);
});

const Home = () => {

    const [menuData, setMenuData] = useState(Data);
    const [menuList, ] = useState([...new Set(total)]);
    // console.log(menuList);
    


    const filteredMenu = (tags) => {

        // console.log(tags);
        // let newArr =[];
        if (tags === 'All') {
            setMenuData(menuData);
        }

        // const updatedMenu =  Data.filter((curCategory) => {
        //     return curCategory.tags.indexOf(tags) !== -1;
        // });

        // console.log(updatedMenu);


        setMenuData(Data.filter((curCategory) => {
            return curCategory.tags.indexOf(tags) !== -1;
        }));
    }
    // console.log(filteredMenu);


  return (
    <div>
        <h1>Crypto Coins</h1>
        <NavBar filteredMenu={filteredMenu} menuList={menuList}/>
        <CryptoTabs menu={menuData}/>
    </div>
  )
}

export default Home;
