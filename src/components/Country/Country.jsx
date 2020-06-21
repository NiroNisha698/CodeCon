import React,{useEffect,useState} from 'react';
import {NativeSelect,FormControl} from "@material-ui/core";

import styles from './Country.module.css';
import {fetchCountries} from "../../api";
//FUNCTIONAL COMPONENT
const Country=({handleCountryChange})=>{

    const[fetchedCountries,setFetchCountries]=useState([])


    useEffect(()=>{
        const fetchAPI=async ()=>{

            setFetchCountries(await fetchCountries())
        }

        fetchAPI();
    },[setFetchCountries])
    return(
        <FormControl className={styles.formcontrol}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value='globe'>Global</option>

                {fetchedCountries.map((country,i)=>
                    <option key={i} value={country}>{country}</option>)}
            </NativeSelect>


        </FormControl>
    )
}

export default Country;
