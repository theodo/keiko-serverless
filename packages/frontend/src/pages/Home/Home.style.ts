import { Button, Paper, Typography } from '@mui/material';
import Image from '../../assets/background.png';

import { styled } from 'theme';

const BackgroundPaper = styled(Paper)`
  background-image: url(${Image});
  background-size: 100% 100%;
`;

interface ApeNFTProps {
  id: string;
  positionX: number;
  positionY: number;
  src: string;
}

const ApeNFT = styled('img')<ApeNFTProps>`
  position: absolute;
  top: ${props => props.positionY}%;
  left: ${props => props.positionX}%;
  border-radius: 50%;
  cursor: not-allowed;
`;

export { ApeNFT, BackgroundPaper };
