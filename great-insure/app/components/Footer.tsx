import Link from 'next/link';

const footerLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
  { href: '/terms', label: 'Terms' },
  { href: '/privacy', label: 'Privacy' }
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Ahotor Protocol</h2>
            <p className="text-black-400">Parametric insurance for the people</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {footerLinks.map(link => (
              <Link 
                key={link.href}
                href={link.href} 
                className="hover:text-blue-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-black-400">
          <p>© {new Date().getFullYear()} Ahotor Protocol. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 