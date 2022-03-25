import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { KumoLogo } from 'components/KumoLogo';

import { useState } from 'react';
import nft1 from 'assets/nft1.png';
import nft2 from 'assets/nft2.png';
import nft3 from 'assets/nft3.png';
import nft4 from 'assets/nft4.png';
import nft5 from 'assets/nft5.png';
import { v4 } from 'uuid';

import { ApeNFT, BackgroundPaper, StyledButtonWithTheme } from './Home.style';
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
        <Toolbar>
          <Box display="flex" justifyContent="space-between" width="100%">
            <KumoLogo />
            <Typography variant="h1" style={{ padding: '10px' }}>
              {'Serverless Dojo: Learn serverless with Bored Apes'}
            </Typography>
            <Typography
              variant="h1"
              color="lightyellow"
              border={score > 0 ? '4mm solid green' : '4mm solid red'}
              style={{ padding: '10px', backgroundColor: 'darkorange' }}
            >
              {`Score : ${score} $`}
            </Typography>
          </Box>
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
            style={{ position: 'absolute', marginTop: 200, marginLeft: 400 }}
          >
            <StyledButtonWithTheme onClick={buyApeNFT}>
              <Typography color="lightblue" fontSize={50}>
                {'Buy ApeNFT'}
              </Typography>
            </StyledButtonWithTheme>
          </Box>
        </Box>
      </BackgroundPaper>
    </Box>
  );
};

export default Home;
