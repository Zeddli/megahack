import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header className="bg-blue-600 text-white py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ahotor Protocol</h1>
          <ul className="flex space-x-4">
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/policy">Purchase Policy</Link></li>
            <li><Link href="/transactions">Transactions</Link></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto py-10">
        <section className="text-center py-10">
          <h2 className="text-gray-700 text-4xl font-bold mb-4">Welcome to Ahotor Protocol</h2>
          <p className="text-gray-700">Relief at your fingertips. Easy, affordable, and instant parametric insurance for communities.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
          <div className="p-6 shadow-lg rounded-lg bg-white">
            <h3 className="text-gray-700 text-2xl font-bold mb-4">Affordable Micro-Insurance</h3>
            <p className="text-gray-700">1) Low Premiums, Targeted Coverage: Micro-insurance offers coverage with very low premiums, making it accessible to people in informal sectors or rural communities who live on tight budgets.<br></br>

2) Simplified Processes: It minimizes paperwork, uses simple language, and often allows digital enrollment and claims, increasing usability for those with limited education or financial literacy.<br></br>

3) Tailored to Local Risks: Policies are often customized to cover risks specific to the target population—like crop failure, livestock loss, or basic health emergencies—which are often ignored by conventional insurers.<br></br>

4) Tech-Driven Distribution: It leverages mobile technology and community-based networks (like NGOs or cooperatives) to reach underserved areas, reducing administrative costs and increasing trust.<br></br>

5) Financial Inclusion Tool: Beyond protection, it helps build financial resilience and can serve as a stepping stone to broader financial inclusion (e.g., access to loans, savings, etc.).</p>
            <Image src="/insurance.png" alt="Insurance Image" width={500} height={300} />
          </div>
          <div className="p-6 shadow-lg rounded-lg bg-white">
            <h3 className="text-gray-700 text-2xl font-bold mb-4">Instant Payouts</h3>
            <p className="text-gray-700">1) Speed & Convenience: Traditional payouts can take days due to manual checks and processing. Instant payouts use automation, digital verification, and fast payment systems to remove delays.<br></br>

2) Financial Relief in Real-Time: For users facing emergencies—like medical expenses, accidents, or natural disasters—getting funds immediately can make a huge difference in coping with the situation.<br></br>

3) Enabled by Technology: Leveraging APIs, mobile wallets, and real-time banking infrastructure (like RTP in the US or DuitNow in Malaysia) allows businesses to deliver funds directly and instantly.<br></br>

4) Trust & Satisfaction: Customers are more likely to trust a provider who can settle claims or send earnings immediately, which can lead to higher satisfaction and loyalty.</p>
            <Image src="/pay.jpg" alt="Payout Image" width={500} height={300} />
          </div>
        </section>
      </main>
    </div>
  );
}