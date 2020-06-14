import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Country from './country'
import Wrapper from '../wrapper'


import { useSelector, useDispatch } from 'react-redux'


const CountryListStyled = styled.div`
    display:grid;
    background: var(--gris);
    padding: 4em 2em;
    grid-row-gap:2.3em;
    justify-content: center;
`

function CountryList () {
    
    const dispatch = useDispatch()
    const countryListByName = useSelector( (state ) => state.countryListByName)
    /*const [countryList, setCountryList] = useState([])*/

    const countryList = useSelector( (state) => {
        if ( state.filterByRegion !== '' && countryListByName.length === 0 ) {
            return state.coutryFilteredByRegion
        }
        if ( countryListByName.length > 0 ) {
            return countryListByName
        }

        return state.countryList
    })

    console.log('el estado total de mi app es', countryList)
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

    }, [dispatch])
    return (
        <Wrapper>
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
        </Wrapper>
    )
}

export default CountryList;