'use client';

import { useEffect } from 'react';
import Clarity from '@microsoft/clarity';

const ClarityInit = () => {
  useEffect(() => {
    Clarity.init('vmz2jn0zxz');
  }, []);

  return null;
};

export default ClarityInit;