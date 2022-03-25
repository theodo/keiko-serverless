import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';

import { useState } from 'react';
import nft1 from 'assets/nft1.png';
import nft2 from 'assets/nft2.png';
import nft3 from 'assets/nft3.png';
import nft4 from 'assets/nft4.png';
import nft5 from 'assets/nft5.png';
import { v4 } from 'uuid';
import axios from 'axios';
import { useAsync } from 'react-use';

import { ApeNFT, BackgroundPaper } from './Home.style';
import { useAudio } from 'hooks';

import coin from '../../assets/coin.mp3';
import kumo from 'assets/kumo.svg';

const client = axios.create({
  baseURL: process.env.VITE_API_URL,
});

interface ApeNFTProps {
  id: string;
  positionX: number;
  positionY: number;
  src: string;
}

const ApeNFTImgs = [nft1, nft2, nft3, nft4, nft5];

const randomIntFromInterval = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const getRandomApeNFT = () => ({
  id: v4(),
  positionX: randomIntFromInterval(5, 90),
  positionY: randomIntFromInterval(10, 90),
  src: ApeNFTImgs[randomIntFromInterval(0, 4)],
});

const getNFTPrice = () => randomIntFromInterval(0, 100000);

const Home = (): JSX.Element => {
  const [score, setScore] = useState(0);

  useAsync(async () => {
    const toto = await client.get<ApeNFTProps[]>('/nfts');

    console.log(toto.data);
  });

  const [apeNFTs, setApeNFTs] = useState<ApeNFTProps[]>([
    getRandomApeNFT(),
    getRandomApeNFT(),
    getRandomApeNFT(),
  ]);

  const buyApeNFT = () => {
    setApeNFTs(prevApeNFTs => prevApeNFTs.concat(getRandomApeNFT()));
    setScore(prevScore => prevScore - getNFTPrice());
  };
  const sellApeNFT = (apeNFTId: string) => {
    setApeNFTs(prevApeNFTs => prevApeNFTs.filter(({ id }) => id !== apeNFTId));
    setScore(prevScore => prevScore + getNFTPrice());
  };
  const audio = useAudio(coin, { volume: 0.8, playbackRate: 1 });

  return (
    <Box display="flex" flexDirection="column" height="100vh" maxWidth="100%">
      <AppBar position="sticky">
        <Toolbar style={{ backgroundColor: '#181173' }}>
          <Button>
            <a href="https://dev.to/kumo">
              <img src={kumo} width="auto" height="50px" style={{ marginTop: '15px' }} />
            </a>
          </Button>
          <Typography
            variant="h1"
            sx={{ flexGrow: 1 }}
          >
            {'Learn Serverless with Bored Apes'}
          </Typography>
          <Typography
            variant="h1"
            color={score > 0 ? 'green' : 'red'}
            style={{
              padding: '10px',
              backgroundColor: '#f2b056',
              marginTop: '5px',
              marginBottom: '5px',
            }}
            border={score > 0 ? '4mm solid green' : '4mm solid red'}
          >
            {`Score : ${score} $`}
          </Typography>
        </Toolbar>
      </AppBar>
      <BackgroundPaper>
        <Box
          display="flex"
          flexDirection="row"
          height="100vh"
          paddingLeft="10%"
          paddingRight="10%"
          justifyContent="space-between"
          maxWidth="100%"
        >
          <Box>
            {apeNFTs.map(apeNFT => (
              <ApeNFT
                height="100px"
                key={apeNFT.id}
                {...apeNFT}
                onClick={() => {
                  sellApeNFT(apeNFT.id);
                  audio.play();
                }}
              ></ApeNFT>
            ))}
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignContent="center"
            textAlign="center"
            style={{
              position: 'absolute',
              top: '35%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Button onClick={buyApeNFT}>
              <Typography color="lightblue" fontSize={50}>
                {'Buy ApeNFT'}
              </Typography>
            </Button>
          </Box>
        </Box>
      </BackgroundPaper>
    </Box>
  );
};

export default Home;
