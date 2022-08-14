import { useWallet } from '@solana/wallet-adapter-react';
import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  useEffect,
} from 'react';
import { createStorage } from '../utils/local-storage-helpers';

type InvetmentContextType = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  investments: any[];
  addInvestment: (values: any) => void;
};

export const InvestmentContext = createContext({} as InvetmentContextType);

const InvestmentContextProvider = (props) => {
  const { connected, publicKey } = useWallet();
  const publicKeyBase58 = publicKey ? publicKey.toBase58() : '';

  const store = useMemo(
    () => createStorage(publicKey?.toBase58() || 'MERADO'),
    [publicKeyBase58],
  );

  const [investments, setInvestments] = useState<any[]>([]);
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(false);

  const addInvestment = (investment) =>
    setInvestments((prev) => {
      const updatedInvestments = [...prev, investment];
      // setting data in local storage
      store.set(updatedInvestments);
      return updatedInvestments;
    });

  useEffect(() => {
    if (connected && publicKeyBase58) {
      // reading initial data from local storage
      const storedData = store.get();

      if (storedData) {
        setInvestments(storedData);
      }
    } else {
      setInvestments([]);
    }
  }, [connected, publicKeyBase58]);

  return (
    <InvestmentContext.Provider
      value={{
        open,
        onOpen,
        onClose,
        addInvestment,
        investments,
      }}
      {...props}
    />
  );
};

export const useInvestment = () => useContext(InvestmentContext);

export default InvestmentContextProvider;
