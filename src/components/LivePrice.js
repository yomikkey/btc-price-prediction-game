import React from 'react'
import { useCryptoPrices } from "react-realtime-crypto-prices";
import { useState, useEffect } from 'react';
import { Box, Button, Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import useWindowSize from './useWindowSize';
import Confetti from 'react-confetti'

export default function LivePrice() {
  const price = useCryptoPrices(["btc"]);
  const [score, setScore] = useState(parseInt(localStorage.getItem('Score')));
  const [priceAtClick, setPriceAtClick] = useState();
  const [buttonDisabling, setButtonDisabling] = useState(true);
  const [upClicked, setUpClicked] = useState(false);
  const [win, setWin] = useState(false);
  // const { width, height } = useWindowSize();


  useEffect(() => {
    localStorage.setItem('Score', score);
  }, [score])


  useEffect(() => {
    if (price.btc > priceAtClick && upClicked) {
      showConfettiHandler();
      setScore(oldScore => oldScore + 1);
      setUpClicked(false);
    }
    else if (price.btc < priceAtClick && upClicked && score > 0) {
      setScore(oldScore => oldScore - 1);
      setUpClicked(false);
    }
    else if (price.btc < priceAtClick) {
      showConfettiHandler();
      setScore(oldScore => oldScore + 1);
    }
    else if (price.btc > priceAtClick && score > 0) {
      setScore(oldScore => oldScore - 1);
    }
  }, [buttonDisabling])

  const onResetHandler = () => {
    setScore(0);
  }

  const onUpHandler = () => {
    setUpClicked(true);
    setPriceAtClick(price.btc);
    setButtonDisabling(true);
  }

  const onDownHandler = () => {
    setPriceAtClick(price.btc);
    setButtonDisabling(true);
  }

  const showConfettiHandler = () => {
    setWin(true);
    setTimeout(() => {
      setWin(false);
    }, 3000);
  }

  useEffect(() => {
    setScore(parseInt(localStorage.getItem('Score')))
  }, [])

  useEffect(() => {
    price.btc && setButtonDisabling(false);
  }, [price.btc])

  return (
    <>
      {win && <Confetti tweenDuration={1000} />}
      <div className='mainSection'>
        <Card
          variant="outlined"
          className='live-counter-section card'
          draggable
        >
          <CardContent>
            <Typography
              variant="h5"
              color="text.secondary"
              component="div"
              gutterbottom
            >
              LIVE BITCOIN PRICE
            </Typography>
            <Typography
              variant="h4"
              color="text.secondary"
              component="div"
              sx={{ border: '1px solid #e0e0e0', marginTop: '5px', borderRadius: '5px', padding: '10px' }}
              gutterbottom
            >
              {price.btc} USD
            </Typography>
          </CardContent>
        </Card>

        <Card
          variant="outlined"
          className='up-down-section card'
        >
          <CardContent>
            <Typography
              variant="h6"
              color="text.secondary"
              gutterbottom
            >
              let's predict where the price will go!
            </Typography>
            <Box
              variant="h5"
              color="text.secondary"
              gutterbottom
              className='game-buttons'
            >
              <Button
                variant="contained"
                className='up-button'
                onClick={onUpHandler}
                disabled={buttonDisabling}
              >
                Up
              </Button>
              <Button
                variant="contained"
                className='down-button'
                onClick={onDownHandler}
                disabled={buttonDisabling}
              >
                Down
              </Button>
            </Box>
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          className='score-card-section card'
        >
          <CardContent>
            <Typography
              variant="h5"
              color="text.secondary"
              gutterbottom
            >
              Your Score
            </Typography>
            <Typography
              variant="h4"
              color="text.secondary"
              gutterbottom>
              {score}
            </Typography>
            <Box
              variant="h5"
              color="text.secondary"
              gutterbottom
            >
              <Button
                className=''
                variant="contained"
                onClick={onResetHandler}
              >
                RESET SCORE
              </Button>
            </Box>
          </CardContent>
        </Card>
      </div >
    </>
  );
}
