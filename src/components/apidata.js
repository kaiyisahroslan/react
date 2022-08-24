import React, { useEffect, useState } from 'react';
import axios from 'axios';

function APIData() {

    const [offersList, updateOffersList] = useState([])

    // useEffect is called once before the return is called
    useEffect(() => {
        axios.get("http://localhost:4111/get/offers")
            .then((response) => {
                //console.log(response)
                console.log(response.data)
                // update offersList state with response.data
                updateOffersList(response.data)
            })
    }, [])

    const [catalogList, updateCatalogList] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4113/get/catalog")
            .then((response) => {
                //console.log(response)
                console.log(response.data)
                // update offersList state with response.data
                updateCatalogList(response.data)
            })
    }, [])

    const displayOffersList = () => {
        return offersList.map((offer) => {
            console.log(offer);
            return (
                <li key = {offer._id}>
                    <b>{offer.discountcode}</b> 
                    <span style={{color: 'red', fontSize: '22px'}}>
                        @ {offer.discountpercent}%
                    </span>
                </li>
            )
        })
    }

    const displayCatalogList = () => {
        return catalogList.map((catalog) => {
            console.log(catalog);
            return (
                <li key = {catalog._id}>
                    <b>{catalog.discountcode}</b> 
                    <span style={{color: 'red', fontSize: '22px'}}>
                        @ {catalog.discountpercent}%
                    </span>
                </li>
            )
        })
    }

    // render jsx
    return ( 
        <div style = {{border: '2px solid red', borderRadius: '5px', margin: '4px', padding: '4px'}}>
            <h1>Get data from remote API!</h1>
            <div>
                <ol>
                    {displayOffersList()}
                    {displayCatalogList()}
                </ol>
            </div>
        </div>
     );
}

export default APIData;