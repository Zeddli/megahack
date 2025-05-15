

interface PageLayoutProps {
  children: React.ReactNode;
  showHeaderAndFooter?: boolean;
}

export default function PageLayout({ 
  children
}: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      
      
      <main className="flex-grow container mx-auto py-8 px-4">
        {children}
      </main>
      
      
    </div>
  );
} 