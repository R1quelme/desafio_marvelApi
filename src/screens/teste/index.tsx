import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { api } from '../../services/api';

import {
    Container,
    Header,
    HeaderContent,
    TotalCars,
} from './styles';

export function Home(){
    const [cars, setCars] = useState([])

    const timeStamp = '1638465338'
    const apiKey = 'fa229d2a8535d6eaee62c1e0953348b7'
    const md5 = 'd02b012b087324bb3e6a1e10aa8a5b5a'

    // useEffect(() => {
    //     async function fetchMarvel(){
    //         try {
    //             const response = await api.get(`nameStartsWith=a&ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`)
    //             console.log(response)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     } 

    //     fetchMarvel()
    // }, [])

    fetch(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=a&ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`
    ).then((response) => {
        // setCars(response.json)
      return response.json();
    }).then((jsonParsed) => {
      console.log(jsonParsed)

      const divHero = document.querySelector('#herois')

      jsonParsed.data.results.forEach(element => {
          const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension
          const nameHero = element.name

          createDivHero(srcImage, nameHero, divHero);
      });
      console.log(jsonParsed)
    })

    return (
        <Container>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <HeaderContent>
                    <TotalCars>
                        Total de 12 carros
                    </TotalCars>
                </HeaderContent>
            </Header>

            
        </Container>
    )
}