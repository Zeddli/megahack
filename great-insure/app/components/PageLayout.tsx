import Navigation from './Navigation';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  showHeaderAndFooter?: boolean;
}

export default function PageLayout({ 
  children, 
  showHeaderAndFooter = true 
}: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {showHeaderAndFooter && <Navigation />}
      
      <main className="flex-grow container mx-auto py-8 px-4">
        {children}
      </main>
      
      {showHeaderAndFooter && <Footer />}
    </div>
  );
} 