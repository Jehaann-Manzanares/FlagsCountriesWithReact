import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Country from './country'


import { useSelector, useDispatch } from 'react-redux'


const CountryListStyled = styled.div`
    display:grid;
    background: var(--gris);
    padding: 4em 2em;
    grid-row-gap:2.3em;
    justify-content: center
`

function CountryList () {
    
    const dispatch = useDispatch()
    const countryList = useSelector( (state ) => { return state.countryList})
    /*const [countryList, setCountryList] = useState([])*/

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(( response ) =>{
            return response.json()
        })
        .then(( list ) => {

            dispatch({
                type: 'SET_COUNTRY_LIST',
                payload: list
            })
            /*setCountryList(data)*/
            console.log(list)
        })
        .catch( ()=> {
            console.log('Hubo un error')
        })

    }, [])
    return (
        <CountryListStyled>
            {
                countryList.map( ( {alpha2Code, flag, name, population, region, capital} )=> {
                    return (
                        <Country
                            key={alpha2Code}
                            flag = {flag}
                            name = {name}
                            population = {population}
                            region = {region}
                            capital= {capital}
                        ></Country>
                    )
                })
            }
        </CountryListStyled>
    )
}

export default CountryList;