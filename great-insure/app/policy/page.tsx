"use client"

export default function PurchasePolicy() {
    return (
      <div className="container mx-auto py-10">
        <h1 className="text-gray-700 text-4xl font-bold mb-6">Purchase Policy</h1>
        
        <form className="bg-white p-6 shadow-sm rounded-lg">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="policyType">Policy Type</label>
            <select id="policyType" className="text-gray-700 w-full p-2 border rounded-md">
              <option value="rainfall">Rainfall Coverage</option>
              <option value="flooding">Flooding Coverage</option>
              <option value="power">Power Outage Coverage</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="coverageAmount">Coverage Amount</label>
            <input type="number" id="coverageAmount" className="text-gray-700 w-full p-2 border rounded-md" placeholder="Enter amount in USD" />
          </div>
          
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md">Purchase</button>
        </form>
      </div>
    );
  }