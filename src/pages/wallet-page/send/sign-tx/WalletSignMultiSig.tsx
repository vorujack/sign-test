import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import useReducedTx from '@/hooks/useReducedTx';

interface WalletSignMultiSigPropsType {
  networkType: string;
  setHasError: (hasError: boolean) => unknown;
}

const WalletSignMultiSig = (props: WalletSignMultiSigPropsType) => {
  const isValid = useReducedTx();
  useEffect(() => {
    props.setHasError(isValid);
  });
  return (
    <Box>
      <Typography>
        Click start sign to move multi-sig transaction in
        multi-sig-communication page
      </Typography>
    </Box>
  );
};

export default WalletSignMultiSig;
