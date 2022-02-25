import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';

import { useState } from 'react';
import nft1 from 'assets/nft1.png';
import nft2 from 'assets/nft2.png';
import nft3 from 'assets/nft3.png';
import nft4 from 'assets/nft4.png';
import nft5 from 'assets/nft5.png';
import { v4 } from 'uuid';

import { ApeNFT, KumoLogo, StyledButtonWithTheme } from './Home.style';
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

const Home = (): JSX.Element => {
  const [apeNFTs, setApeNFTs] = useState<ApeNFTProps[]>([
    getRandomApeNFT(),
    getRandomApeNFT(),
    getRandomApeNFT(),
  ]);

  const addApeNFT = () =>
    setApeNFTs(prevApeNFTs => prevApeNFTs.concat(getRandomApeNFT()));

  const killApeNFT = (apeNFTId: string) =>
    setApeNFTs(prevApeNFTs => prevApeNFTs.filter(({ id }) => id !== apeNFTId));

  return (
    <Box display="flex" flexDirection="column" height="100vh" maxWidth="100%">
      <AppBar position="sticky">
        <Toolbar>
          <KumoLogo />
          <Typography variant="h1">
            {'Serverless Dojo: Learn serverless with Bored Apes'}
          </Typography>
        </Toolbar>
      </AppBar>
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
                killApeNFT(apeNFT.id);
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
        >
          <StyledButtonWithTheme onClick={addApeNFT}>
            Add ApeNFT
          </StyledButtonWithTheme>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
