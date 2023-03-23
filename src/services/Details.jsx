import Axios from 'axios';
import { useEffect, useState } from 'react';
import Flights from '../components/Flights';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Details(){
    useEffect(() => {
        Axios.get('').then(x => {
            console.log(x.data);
        })
    })
}