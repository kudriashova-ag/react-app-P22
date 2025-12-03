import axios from 'axios';
import React from 'react';

const Users = () => {

    /*
    fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then((response) => response.json())
      .then((data) => console.log(data));
    */
    
    /* const getData = async () => {
        const response = await fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
        const data = await response.json();
        console.log(data);
    }
    getData(); */

    
    const getData = async () => { 
        const response = await axios.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
        console.log(response.data);
    }
    getData();

    return (
        <div>
            <h1>Users</h1>
        </div>
    );
}

export default Users;
