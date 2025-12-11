import AnimatePageWrapper from '@/components/layout-ui/AnimatePageWrapper';export const metadata = {
  title: 'Krisha',
  description: 'Krisha Products',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePageWrapper>
      <div className="w-full">{children}</div>
    </AnimatePageWrapper>
  );
}
