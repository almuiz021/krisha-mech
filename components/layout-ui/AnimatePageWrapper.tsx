'use client';

import { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';
import PageTransition from '@/components/layout-ui/PageTransition';
import { usePathname } from 'next/navigation';

interface AnimatePageWrapperProps {
  children: ReactNode;
}

function AnimatePageWrapper({ children }: AnimatePageWrapperProps) {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <PageTransition key={pathName}>{children}</PageTransition>
    </AnimatePresence>
  );
}

export default AnimatePageWrapper;
