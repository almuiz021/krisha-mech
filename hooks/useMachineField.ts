'use client';

import { useEffect, useMemo, useState } from 'react';
import { ourProducts } from '@/data/productsContent';

interface UseMachineFieldParams {
  machineName?: string;
}

export function useMachineField({ machineName }: UseMachineFieldParams) {
  // Build machine options once
  const productOptions = useMemo(() => {
    const names = new Set<string>();
    ourProducts.forEach(cat => cat.products.forEach(p => names.add(p.name)));

    return Array.from(names).map(name => ({
      value: name,
      label: name,
    }));
  }, []);

  const [machineSelect, setMachineSelect] = useState('');
  const [customMachine, setCustomMachine] = useState('');

  // Sync prop → internal state (ONLY when prop changes)
  useEffect(() => {
    if (!machineName) {
      setMachineSelect('');
      setCustomMachine('');
      return;
    }

    const found = productOptions.find(opt => opt.value === machineName);

    if (found) {
      setMachineSelect(found.value);
      setCustomMachine('');
    } else {
      setMachineSelect('other');
      setCustomMachine(machineName);
    }
  }, [machineName, productOptions]);

  return {
    productOptions,
    machineSelect,
    customMachine,
    setMachineSelect,
    setCustomMachine,
  };
}
