import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Farm Protection Platform</h2>
            <p className="text-gray-400">Parametric insurance for farmers</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="hover:text-black transition-colors">About Us</Link>
            <Link href="/faq" className="hover:text-black transition-colors">FAQ</Link>
            <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
            <Link href="/terms" className="hover:text-black transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-black transition-colors">Privacy</Link>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Farm Protection Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 