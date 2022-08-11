import React, { useEffect } from 'react'
import { CryptoPriceProvider } from 'react-realtime-crypto-prices'
import Header from '../components/Header'
import LivePrice from '../components/LivePrice'
import Spinner from "react-spinkit";

export const Home = () => {

    const [loader, setLoader] = React.useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 3000);
    }, [])

    return (
        <div className="App">
            <Header />
            {
                loader ?
                    <div className="spinner">
                        <Spinner name="pacman" color="gray" style={{ width: 100 , height: 100 }} />
                    </div>
                    :
                    <CryptoPriceProvider >
                        <LivePrice />
                    </CryptoPriceProvider>
            }
        </div >
    )
};

export default Home;
