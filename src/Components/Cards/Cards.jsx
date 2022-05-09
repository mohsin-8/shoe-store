import React from 'react';
import "./Cards.css";
import LatestItems from "../../latestItems.json";

const Cards = () => {
    return (
        <>
            <div className="container-fluid my-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {Object.keys(LatestItems).map(keyName => {
                        const item = LatestItems[keyName];
                        return (
                            <div className="col" key={item.id}>
                                <div className="card h-100">
                                    <div>
                                        <img src={item.image} className="card-img-top" alt={item.name} />
                                    </div>
                                    <div className="card-body">
                                        <div className="card-title">
                                            {item.name}
                                        </div>
                                        <div className="card-text">
                                            <sup>$</sup>{item.price}<sup><del>{item.delPrice}</del></sup>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default Cards;