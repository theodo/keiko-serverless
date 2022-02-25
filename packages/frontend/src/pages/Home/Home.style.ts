import { Button } from '@mui/material';
import { css } from '@mui/system';
import { styled } from 'theme';
import kumo from 'assets/kumo.png';

const StyledButtonWithTheme = styled(Button)(
  ({ theme }) => css`
    height: 10vh;
    background: ${theme.palette.secondary.main};
  `,
);

const StyledButton = styled(Button)`
  background: red;
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

const KumoLogo = styled('img')`
  src: ${kumo};
`;

export { StyledButton, StyledButtonWithTheme, ApeNFT, KumoLogo };
