import React from 'react';
import Cards from '../Cards/Cards';
import "./Home.css";
// import LatestItems from "../../latestItems.json";

const Home = () => {
    return (
        <>
            <div className="container my-5">
                <div className="banner"></div>
            </div>
            {/* {Object.keys(LatestItems).map((keyName) => {
                const shoe = LatestItems[keyName];
                return (
                    <div className='container'>
                        <h3>{shoe.name}</h3>
                        <img src={shoe.image} alt="" />
                    </div>
                )
            })} */}
            <div className="para text-center">
                <h1>What's Your Air Style?</h1>
                <h3>New Items</h3>
                <Cards />
            </div>
        </>
    )
}

export default Home;