import { Button, Paper, Typography } from '@mui/material';
import Image from '../../assets/background.png'; // Import using relative path

import { styled } from 'theme';
const StyledButtonWithTheme = styled(Button)`
  height: 10vh;
  background: darkorange;
`;

const StyledButton = styled(Button)`
  background: red;
`;

const BackgroundPaper = styled(Paper)`
  background-image: url(${Image});
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

export { StyledButton, StyledButtonWithTheme, ApeNFT, BackgroundPaper };
