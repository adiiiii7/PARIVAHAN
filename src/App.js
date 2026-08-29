import React, { useState, useEffect, useRef } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('hub');
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`${isDarkMode ? 'dark' : ''} transition-colors duration-300`}>
      <style>{`
        @keyframes buttonFill {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-button-fill {
          animation: buttonFill 3s linear forwards;
        }
      `}</style>

      <div className="min-h-screen font-sans flex flex-col md:flex-row bg-[#f5f5f7] dark:bg-[#000000] text-gray-900 dark:text-gray-100 selection:bg-blue-200 dark:selection:bg-blue-900/50 transition-colors duration-300">
        
        <nav className="w-full md:w-64 bg-white/80 dark:bg-[#1c1c1e]/80 backdrop-blur-xl border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 p-6 flex flex-col z-10 sticky top-0 md:h-screen transition-colors duration-300">
          <div className="flex-1 overflow-y-auto hide-scrollbar">
            <div className="mb-10 text-center md:text-left px-2">
              <h1 className="font-bold text-xl tracking-tight text-gray-900 dark:text-white transition-colors">
                Parivahan Nexus
              </h1>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 font-medium uppercase tracking-wider transition-colors">
                Hackathon Prototype
              </p>
            </div>

            <div className="space-y-1.5">
              <NavBtn active={activeTab === 'hub'} onClick={() => setActiveTab('hub')} icon="📊">
                My Profile
              </NavBtn>

              <NavBtn active={activeTab === 'documents'} onClick={() => setActiveTab('documents')} icon="📁">
                My Documents
              </NavBtn>

              <NavBtn active={activeTab === 'quests'} onClick={() => setActiveTab('quests')} icon="📜">
                Main Services
              </NavBtn>

              <NavBtn active={activeTab === 'online_services'} onClick={() => setActiveTab('online_services')} icon="🌐">
                Online Services
              </NavBtn>

              <NavBtn active={activeTab === 'challans'} onClick={() => setActiveTab('challans')} icon="⚠️">
                E-Challans
              </NavBtn>

              <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800 transition-colors">
                <NavBtn active={activeTab === 'nexus_ai'} onClick={() => setActiveTab('nexus_ai')} icon="✨">
                  Nexus AI
                </NavBtn>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 transition-colors">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2c2c2e] transition-all duration-200 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none active:scale-[0.97]"
            >
              <span>{isDarkMode ? 'Light Mode' : 'Night Mode'}</span>
              <span className="text-lg">{isDarkMode ? '☀️' : '🌙'}</span>
            </button>
          </div>
        </nav>

        <main className="flex-1 p-6 md:p-10 max-h-screen overflow-y-auto pb-20">
          
          <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-8 bg-white dark:bg-[#1c1c1e] p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 gap-4 transition-colors duration-300">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full">
              <div className="flex flex-col">
                <span className="text-gray-400 dark:text-gray-500 text-[11px] font-semibold uppercase tracking-wider mb-1">
                  Aadhaar ID
                </span>
                <span className="text-gray-900 dark:text-white font-semibold tracking-tight">
                  [Aadhaar Redacted]
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-gray-400 dark:text-gray-500 text-[11px] font-semibold uppercase tracking-wider mb-1">
                  Citizen Name
                </span>
                <span className="text-gray-900 dark:text-white font-semibold tracking-tight">
                  Adi CH
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-gray-400 dark:text-gray-500 text-[11px] font-semibold uppercase tracking-wider mb-1">
                  Registered Phone
                </span>
                <span className="text-gray-900 dark:text-white font-semibold tracking-tight">
                  891*******
                </span>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-colors">
              KYC Verified
            </div>
          </header>

          {activeTab === 'hub' && <HubView />}
          {activeTab === 'documents' && <DocumentsView />}
          {activeTab === 'quests' && <QuestBoardView />}
          {activeTab === 'online_services' && <OnlineServicesView />}
          {activeTab === 'challans' && <ChallansView />}
          {activeTab === 'nexus_ai' && <NexusAIView />}
          
        </main>
      </div>
    </div>
  );
}

/* =========================================
   PAGE 1: MY PROFILE
   ========================================= */
function HubView() {
  const vehicles = [
    { id: 1, make: 'Royal Enfield', model: 'Interceptor 650', reg: 'TS-09-EX-1042', class: 'MCWG', icon: '🏍️' },
    { id: 2, make: 'TVS', model: 'iQube', reg: 'TS-07-EA-4521', class: 'MCWOG', icon: '🛵' },
    { id: 3, make: 'Mahindra', model: 'Thar', reg: 'TS-08-TR-9988', class: 'LMV-NT', icon: '🚙' }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
        My Profile
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div className="bg-white dark:bg-[#1c1c1e] p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md dark:hover:shadow-none dark:hover:border-gray-700 transition-all relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-semibold px-3 py-1 rounded-full text-[10px] uppercase tracking-wider">
            Sarathi
          </div>

          <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-sm">
            🪪
          </div>

          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
            Driver License
          </h3>

          <div className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
            TS00920150004X
          </div>

          <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">
            Validity: 2042 • Class: MCWG, LMV
          </div>
        </div>

        <div className="bg-white dark:bg-[#1c1c1e] p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md dark:hover:shadow-none dark:hover:border-gray-700 transition-all relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold px-3 py-1 rounded-full text-[10px] uppercase tracking-wider">
            Vahan
          </div>

          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-sm">
            📄
          </div>

          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
            Digital RC (Primary)
          </h3>

          <div className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
            TS-09-EX-1042
          </div>

          <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">
            Owner: Adi CH • Hypothecation: None
          </div>
        </div>

        <div className="lg:col-span-2 bg-white dark:bg-[#1c1c1e] p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md dark:hover:shadow-none dark:hover:border-gray-700 transition-all relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 font-semibold px-3 py-1 rounded-full text-[10px] uppercase tracking-wider">
            Active
          </div>

          <div className="flex items-start gap-5">
            <div className="w-14 h-14 bg-green-50 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-3xl shadow-sm flex-shrink-0">
              🛡️
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                Vehicle Compliance
              </h3>

              <div className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                All Clear
              </div>

              <div className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed">
                Insurance: Valid till 2027<br />
                PUCC: Valid (42 Days remaining)<br />
                Tax: Lifetime Paid
              </div>
            </div>
          </div>
        </div>

      </div>

      <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mt-10 mb-4">
        Registered Mounts
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {vehicles.map(v => (
          <div
            key={v.id}
            className="bg-white dark:bg-[#1c1c1e] p-5 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md dark:hover:shadow-none dark:hover:border-gray-700 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl bg-gray-50 dark:bg-gray-800/50 w-16 h-16 rounded-2xl flex items-center justify-center">
                {v.icon}
              </div>

              <div className="text-[10px] text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full font-semibold">
                {v.class}
              </div>
            </div>

            <h4 className="font-bold text-gray-900 dark:text-white text-lg tracking-tight leading-tight">
              {v.make} <span className="font-medium text-gray-500 dark:text-gray-400">{v.model}</span>
            </h4>

            <div className="text-gray-500 dark:text-gray-400 font-medium text-sm mt-1">
              {v.reg}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================
   PAGE 2: MY DOCUMENTS
   ========================================= */
function DocumentsView() {
  const [docs, setDocs] = useState([
    { id: 'doc1', name: 'Aadhaar / Age Proof', relatedTo: "Apply for Learner's License", uploaded: false },
    { id: 'doc2', name: 'Address Proof', relatedTo: "Apply for Learner's License", uploaded: false },
    { id: 'doc3', name: 'Medical Form-1A', relatedTo: "Learner's License (Age > 40)", uploaded: false },
    { id: 'doc4', name: 'Form-21 (Sale Certificate)', relatedTo: "New Vehicle Registration", uploaded: false },
    { id: 'doc5', name: 'Form-22 (Roadworthiness)', relatedTo: "New Vehicle Registration", uploaded: false },
    { id: 'doc6', name: 'Valid Insurance Document', relatedTo: "All India Tourist Permit", uploaded: false },
    { id: 'doc7', name: 'Digital Signature Image', relatedTo: "Driving License Services", uploaded: false },
    { id: 'doc8', name: 'Vehicle Pass Report', relatedTo: "Vehicle Fitness Testing", uploaded: false },
    { id: 'doc9', name: 'ARAI/ICAT Certificate', relatedTo: "Homologation (OEM)", uploaded: false },
    { id: 'doc10', name: 'Dealer Premises Proof', relatedTo: "Trade Certificate", uploaded: false }
  ]);

  const handleUpload = (id) => {
    setDocs(docs.map(doc =>
      doc.id === id ? { ...doc, uploaded: true } : doc
    ));
  };

  const uploadedCount = docs.filter(d => d.uploaded).length;
  const totalCount = docs.length;

  return (
    <div className="animate-fade-in max-w-5xl">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
        Document Vault
      </h2>

      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-8">
        Centralized storage for Service prerequisites. ({uploadedCount}/{totalCount} Uploaded)
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {docs.map((doc) => (
          <div
            key={doc.id}
            className={`p-6 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
              doc.uploaded
                ? 'bg-white dark:bg-[#1c1c1e] border-green-100 dark:border-green-900/50 shadow-sm'
                : 'bg-white dark:bg-[#1c1c1e] border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md dark:hover:shadow-none dark:hover:border-gray-700'
            }`}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-[17px] tracking-tight mb-1">
                  {doc.name}
                </h3>

                <p className="text-gray-400 dark:text-gray-500 text-[11px] font-semibold uppercase tracking-wider mt-2">
                  Required for:{' '}
                  <span className="text-blue-500 dark:text-blue-400 normal-case font-medium">
                    {doc.relatedTo}
                  </span>
                </p>
              </div>

              <div className="text-3xl bg-gray-50 dark:bg-gray-800/50 w-12 h-12 flex justify-center items-center rounded-2xl flex-shrink-0">
                {doc.uploaded ? '✅' : '📄'}
              </div>
            </div>

            <div className="pt-2">
              {doc.uploaded ? (
                <div className="text-green-700 dark:text-green-400 text-sm font-semibold bg-green-50 dark:bg-green-900/30 px-4 py-2.5 rounded-xl w-full text-center">
                  Uploaded Successfully
                </div>
              ) : (
                <button
                  onClick={() => handleUpload(doc.id)}
                  className="w-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors flex justify-center items-center gap-2 outline-none focus:outline-none focus:ring-0 active:scale-[0.98]"
                >
                  <span>⬆️</span> Upload Document
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================
   PAGE 3: E-CHALLANS
   ========================================= */
function ChallansView() {
  const [challans, setChallans] = useState([
    { id: 'CHL-2026-10001', vehicleName: 'Royal Enfield Interceptor', regNumber: 'TS-09-EX-1042', date: '28-Aug-2026', violation: 'Stop Line Crossing', location: 'Silk Board Junction, BLR', amount: '₹500', status: 'PENDING', paymentMethod: null },
    { id: 'CHL-2026-10002', vehicleName: 'Mahindra Thar', regNumber: 'TS-08-TR-9988', date: '25-Aug-2026', violation: 'Improper Parking', location: 'MG Road, BLR', amount: '₹1000', status: 'PENDING', paymentMethod: null },
    { id: 'CHL-2026-10003', vehicleName: 'TVS iQube', regNumber: 'TS-07-EA-4521', date: '21-Aug-2026', violation: 'Riding without Helmet', location: 'Indiranagar 100ft Road, BLR', amount: '₹500', status: 'PENDING', paymentMethod: null },
    { id: 'CHL-2026-10004', vehicleName: 'Royal Enfield Interceptor', regNumber: 'TS-09-EX-1042', date: '18-Aug-2026', violation: 'Over Speeding (85 kmph)', location: 'Airport Road Flyover, BLR', amount: '₹2000', status: 'PAID', paymentMethod: 'UPI' },
    { id: 'CHL-2026-10005', vehicleName: 'Mahindra Thar', regNumber: 'TS-08-TR-9988', date: '15-Aug-2026', violation: 'Driving without Seatbelt', location: 'Koramangala 80ft Road, BLR', amount: '₹1000', status: 'PAID', paymentMethod: 'Credit Card' },
    { id: 'CHL-2026-10006', vehicleName: 'TVS iQube', regNumber: 'TS-07-EA-4521', date: '10-Aug-2026', violation: 'Wrong Way Driving', location: 'Whitefield Main Road, BLR', amount: '₹500', status: 'PENDING', paymentMethod: null },
    { id: 'CHL-2026-10007', vehicleName: 'Royal Enfield Interceptor', regNumber: 'TS-09-EX-1042', date: '05-Aug-2026', violation: 'Defective Number Plate', location: 'Hebbal Flyover, BLR', amount: '₹500', status: 'PENDING', paymentMethod: null },
    { id: 'CHL-2026-10008', vehicleName: 'Mahindra Thar', regNumber: 'TS-08-TR-9988', date: '01-Aug-2026', violation: 'No Parking Zone', location: 'Electronic City Toll, BLR', amount: '₹1000', status: 'PAID', paymentMethod: 'Debit Card' },
    { id: 'CHL-2026-10009', vehicleName: 'TVS iQube', regNumber: 'TS-07-EA-4521', date: '28-Jul-2026', violation: 'Using Mobile Phone', location: 'Majestic Bus Stand, BLR', amount: '₹1000', status: 'PENDING', paymentMethod: null },
    { id: 'CHL-2026-10010', vehicleName: 'Royal Enfield Interceptor', regNumber: 'TS-09-EX-1042', date: '20-Jul-2026', violation: 'Red Light Jumping', location: 'Jayanagar 4th Block, BLR', amount: '₹500', status: 'PAID', paymentMethod: 'UPI' },
    { id: 'CHL-2026-10011', vehicleName: 'Mahindra Thar', regNumber: 'TS-08-TR-9988', date: '15-Jul-2026', violation: 'Tinted Glass Violation', location: 'Marathahalli Bridge, BLR', amount: '₹500', status: 'PENDING', paymentMethod: null },
    { id: 'CHL-2026-10012', vehicleName: 'TVS iQube', regNumber: 'TS-07-EA-4521', date: '10-Jul-2026', violation: 'Pillion without Helmet', location: 'Bellandur ORR, BLR', amount: '₹500', status: 'PENDING', paymentMethod: null },
    { id: 'CHL-2026-10013', vehicleName: 'Royal Enfield Interceptor', regNumber: 'TS-09-EX-1042', date: '05-Jul-2026', violation: 'Stop Line Crossing', location: 'HSR Layout Sector 2, BLR', amount: '₹500', status: 'PAID', paymentMethod: 'Net Banking' },
    { id: 'CHL-2026-10014', vehicleName: 'Mahindra Thar', regNumber: 'TS-08-TR-9988', date: '01-Jul-2026', violation: 'Dangerous Driving', location: 'Banashankari Temple Ward, BLR', amount: '₹2000', status: 'PENDING', paymentMethod: null },
    { id: 'CHL-2026-10015', vehicleName: 'TVS iQube', regNumber: 'TS-07-EA-4521', date: '25-Jun-2026', violation: 'Riding without Helmet', location: 'Malleshwaram 8th Cross, BLR', amount: '₹500', status: 'PAID', paymentMethod: 'UPI' },
    { id: 'CHL-2026-10016', vehicleName: 'Royal Enfield Interceptor', regNumber: 'TS-09-EX-1042', date: '20-Jun-2026', violation: 'Loud Silencer / Modification', location: 'Brigade Road, BLR', amount: '₹1000', status: 'PENDING', paymentMethod: null },
    { id: 'CHL-2026-10017', vehicleName: 'Mahindra Thar', regNumber: 'TS-08-TR-9988', date: '15-Jun-2026', violation: 'Improper Parking', location: 'Richmond Circle, BLR', amount: '₹1000', status: 'PAID', paymentMethod: 'Credit Card' },
    { id: 'CHL-2026-10018', vehicleName: 'TVS iQube', regNumber: 'TS-07-EA-4521', date: '10-Jun-2026', violation: 'Red Light Jumping', location: 'KR Puram Railway Station, BLR', amount: '₹500', status: 'PENDING', paymentMethod: null },
    { id: 'CHL-2026-10019', vehicleName: 'Royal Enfield Interceptor', regNumber: 'TS-09-EX-1042', date: '05-Jun-2026', violation: 'Over Speeding', location: 'BTM Layout Lake Road, BLR', amount: '₹1000', status: 'PAID', paymentMethod: 'Apple Pay' },
    { id: 'CHL-2026-10020', vehicleName: 'Mahindra Thar', regNumber: 'TS-08-TR-9988', date: '01-Jun-2026', violation: 'Stop Line Crossing', location: 'Domlur Flyover, BLR', amount: '₹500', status: 'PENDING', paymentMethod: null },
    { id: 'CHL-2026-10021', vehicleName: 'TVS iQube', regNumber: 'TS-07-EA-4521', date: '25-May-2026', violation: 'Pillion without Helmet', location: 'Trinity Circle, BLR', amount: '₹500', status: 'PAID', paymentMethod: 'Debit Card' }
  ]);

  const [openDropdownId, setOpenDropdownId] = useState(null);

  const handlePayment = (challanId, method) => {
    setChallans(challans.map(c =>
      c.id === challanId
        ? { ...c, status: 'PAID', paymentMethod: method }
        : c
    ));
    setOpenDropdownId(null);
  };

  const totalPaid = challans.filter(c => c.status === 'PAID').length;
  const totalPending = challans.filter(c => c.status === 'PENDING').length;

  return (
    <div className="animate-fade-in max-w-4xl">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
        Traffic Infractions
      </h2>

      <div className="flex flex-col sm:flex-row gap-5 mb-8">
        <div className="bg-white dark:bg-[#1c1c1e] border border-gray-100 dark:border-gray-800 p-6 rounded-3xl w-full shadow-sm flex flex-col items-center">
          <div className="text-gray-400 dark:text-gray-500 text-[11px] font-semibold uppercase tracking-wider mb-2">
            Challans Cleared
          </div>
          <div className="text-gray-900 dark:text-white text-5xl font-bold tracking-tight">
            {totalPaid}
          </div>
        </div>

        <div className="bg-white dark:bg-[#1c1c1e] border border-gray-100 dark:border-gray-800 p-6 rounded-3xl w-full shadow-sm flex flex-col items-center">
          <div className="text-gray-400 dark:text-gray-500 text-[11px] font-semibold uppercase tracking-wider mb-2">
            Pending Infractions
          </div>
          <div className="text-red-500 dark:text-red-400 text-5xl font-bold tracking-tight">
            {totalPending}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {challans.map((c) => (
          <div
            key={c.id}
            style={{
              zIndex: openDropdownId === c.id ? 50 : 1,
              position: 'relative'
            }}
            className={`p-6 rounded-3xl border transition-all duration-500 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 ${
              c.status === 'PENDING'
                ? 'bg-white dark:bg-[#1c1c1e] border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md'
                : 'bg-green-50/50 dark:bg-green-900/10 border-green-200 dark:border-green-900/50 shadow-[0_0_15px_rgba(34,197,94,0.1)] opacity-95'
            }`}
          >
            <div className="w-full">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                <h3 className="font-bold text-gray-900 dark:text-white text-[17px] tracking-tight">
                  {c.vehicleName}
                  <span className="text-gray-400 dark:text-gray-600 font-normal mx-1">|</span>
                  <span className="text-gray-500 dark:text-gray-400 font-medium">
                    {c.regNumber}
                  </span>
                </h3>

                <span
                  className={`self-start sm:self-auto text-[10px] px-3 py-1 rounded-full font-semibold uppercase tracking-wider ${
                    c.status === 'PENDING'
                      ? 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                      : 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400'
                  }`}
                >
                  {c.status}
                </span>
              </div>

              <p className="text-gray-900 dark:text-gray-200 font-medium mb-1">
                {c.violation}
              </p>

              <p className="text-gray-500 dark:text-gray-400 text-sm">
                ID: {c.id} • {c.date}
              </p>

              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                📍 {c.location}
              </p>
            </div>

            <div className="w-full md:w-auto flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-3 border-t md:border-t-0 border-gray-100 dark:border-gray-800 pt-4 md:pt-0">
              <span
                className={`text-2xl font-bold tracking-tight ${
                  c.status === 'PENDING'
                    ? 'text-gray-900 dark:text-white'
                    : 'text-green-600 dark:text-green-400'
                }`}
              >
                {c.amount}
              </span>

              {c.status === 'PENDING' ? (
                <div className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdownId(
                        openDropdownId === c.id ? null : c.id
                      )
                    }
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-6 rounded-xl transition-colors flex items-center gap-2 text-sm shadow-sm outline-none focus:outline-none focus:ring-0 active:scale-[0.97]"
                  >
                    Pay Now <span className="text-[10px]">▼</span>
                  </button>

                  {openDropdownId === c.id && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#2c2c2e] border border-gray-100 dark:border-gray-700 rounded-2xl shadow-xl z-50 overflow-hidden py-1">
                      {['UPI', 'Apple Pay', 'Credit Card'].map(opt => (
                        <button
                          key={opt}
                          onClick={() => handlePayment(c.id, opt)}
                          className="w-full text-left px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm transition-colors font-medium outline-none focus:outline-none"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-green-700 dark:text-green-400 text-xs font-semibold bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-xl whitespace-nowrap flex items-center gap-1.5">
                  <span className="text-sm">✅</span>
                  Paid via {c.paymentMethod}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================
   PAGE 4: MAIN SERVICES
   FIXED:
   Nothing starts automatically.
   User click starts the step.
   Intermediate step then auto-completes after 3 seconds.
   ========================================= */
function QuestBoardView() {
  const quests = [
    {
      id: 'll',
      title: "Apply for Learner's License",
      category: 'Sarathi',
      reqs: [
        {
          id: 'l1',
          text: 'Fill Form-2 Online',
          states: ['Start Application', 'Inputting Details', 'Form Submitted']
        },
        {
          id: 'l2',
          text: 'Upload Aadhaar/Age Proof',
          states: ['Select File', 'Uploading...', 'Verified']
        },
        {
          id: 'l3',
          text: 'Upload Address Proof',
          states: ['Select File', 'Uploading...', 'Verified']
        },
        {
          id: 'l4',
          text: 'Upload Medical Form-1A (if age > 40)',
          states: ['Select File', 'Uploading...', 'Verified']
        },
        {
          id: 'l5',
          text: 'Pay LL Fee (₹200)',
          states: ['Pay Now', 'Processing...', 'Payment Success']
        },
        {
          id: 'l6',
          text: 'Pass Online LL Test',
          states: ['Start Test', 'In Progress', 'Passed']
        }
      ]
    },
    {
      id: 'dl',
      title: "Apply for Permanent Driving License",
      category: 'Sarathi',
      reqs: [
        {
          id: 'd1',
          text: 'Hold valid LL for 30+ days',
          states: ['Check Status', 'Verifying...', 'Eligible']
        },
        {
          id: 'd2',
          text: 'Fill Form-4 Online',
          states: ['Start Application', 'Inputting Details', 'Form Submitted']
        },
        {
          id: 'd3',
          text: 'Book Driving Test Slot',
          states: ['Find Slots', 'Searching...', 'Slot Booked']
        },
        {
          id: 'd4',
          text: 'Pay DL & Test Fee (₹1000)',
          states: ['Pay Now', 'Processing...', 'Payment Success']
        },
        {
          id: 'd5',
          text: 'Pass Physical Driving Test at RTO',
          states: ['Awaiting Test', 'In Progress', 'Passed']
        }
      ]
    },
    {
      id: 'rc',
      title: "New Vehicle Registration",
      category: 'Vahan',
      reqs: [
        {
          id: 'v1',
          text: 'Form-20 (Application)',
          states: ['Start Application', 'Inputting Details', 'Form Submitted']
        },
        {
          id: 'v2',
          text: 'Form-21 (Sale Certificate)',
          states: ['Select File', 'Uploading...', 'Verified']
        },
        {
          id: 'v3',
          text: 'Form-22 (Roadworthiness)',
          states: ['Select File', 'Uploading...', 'Verified']
        },
        {
          id: 'v4',
          text: 'Valid Insurance Cover Note',
          states: ['Fetch DB', 'Verifying Policy...', 'Verified']
        },
        {
          id: 'v5',
          text: 'Pay Road Tax & Reg Fee',
          states: ['Pay Now', 'Processing...', 'Payment Success']
        }
      ]
    }
  ];

  return (
    <div className="animate-fade-in max-w-4xl">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
        Main Services
      </h2>

      <div className="space-y-4">
        {quests.map((quest) => (
          <ServiceQuestItem
            key={quest.id}
            service={quest}
            autoProgress={false}
          />
        ))}
      </div>
    </div>
  );
}

/* =========================================
   PAGE 5: ONLINE SERVICES
   ========================================= */
function OnlineServicesView() {
  const services = [
    {
      id: 'aitp',
      title: 'All India Tourist Permit',
      category: 'Permit',
      reqs: [
        { id: 'a1', text: 'Submit Form 46', states: ['Start Application', 'Inputting Details', 'Submitted'] },
        { id: 'a2', text: 'Upload Valid Insurance', states: ['Select File', 'Verifying...', 'Approved'] },
        { id: 'a3', text: 'Pay Consolidated Fee', states: ['Pay Now', 'Processing...', 'Payment Success'] }
      ]
    },
    {
      id: 'dlrs',
      title: 'Driving License Related Services',
      category: 'Sarathi',
      reqs: [
        { id: 'd1', text: 'Select RTO State', states: ['Choose State', 'Fetching...', 'Selected'] },
        { id: 'd2', text: 'Enter DL/LL Number', states: ['Input Data', 'Searching DB...', 'Record Found'] },
        { id: 'd3', text: 'Upload Digital Signature', states: ['Select Image', 'Uploading...', 'Verified'] }
      ]
    },
    {
      id: 'npa',
      title: 'National Permit Authorization',
      category: 'Permit',
      reqs: [
        { id: 'n1', text: 'Enter RC Number', states: ['Input Reg', 'Searching DB...', 'Found'] },
        { id: 'n2', text: 'Clear Pending E-Challans', states: ['Check Status', 'Verifying...', 'Cleared'] },
        { id: 'n3', text: 'Download Permit', states: ['Generate PDF', 'Downloading...', 'Saved'] }
      ]
    },
    {
      id: 'prs',
      title: 'Permit Related Services',
      category: 'Permit',
      reqs: [
        { id: 'pr1', text: 'Select Permit Type', states: ['Choose Type', 'Fetching...', 'Selected'] },
        { id: 'pr2', text: 'Upload Route Details', states: ['Select File', 'Uploading...', 'Saved'] },
        { id: 'pr3', text: 'Submit State Fee', states: ['Pay Now', 'Processing...', 'Paid'] }
      ]
    },
    {
      id: 'vgs',
      title: 'Vahan Green Sewa',
      category: 'Vahan',
      reqs: [
        { id: 'vg1', text: 'Enter EV Registration', states: ['Input Data', 'Searching DB...', 'Found'] },
        { id: 'vg2', text: 'Apply for Exemption', states: ['Start Application', 'Processing...', 'Approved'] }
      ]
    },
    {
      id: 'vs',
      title: 'Vehicle Scrapping',
      category: 'Vahan',
      reqs: [
        { id: 'vs1', text: 'Locate Nearest RVSF', states: ['Enter PIN', 'Searching...', 'Found'] },
        { id: 'vs2', text: 'Surrender Original RC', states: ['Confirm', 'Processing...', 'Accepted'] },
        { id: 'vs3', text: 'Download Certificate', states: ['Generate', 'Downloading...', 'Saved'] }
      ]
    },
    {
      id: 'cng',
      title: 'CNG Maker',
      category: 'OEM',
      reqs: [
        { id: 'cng1', text: 'Login as Manufacturer', states: ['Enter Creds', 'Verifying...', 'Logged In'] },
        { id: 'cng2', text: 'Register Approved Kit', states: ['Submit Docs', 'Uploading...', 'Registered'] }
      ]
    },
    {
      id: 'fnb',
      title: 'Fancy Number Booking',
      category: 'Vahan',
      reqs: [
        { id: 'f1', text: 'Register as Public User', states: ['Start Application', 'Inputting Details', 'Registered'] },
        { id: 'f2', text: 'Select Available Number', states: ['Browse', 'Fetching...', 'Reserved'] },
        { id: 'f3', text: 'Participate in E-Auction', states: ['Place Bid', 'Processing...', 'Bid Placed'] }
      ]
    },
    {
      id: 'ntr',
      title: 'National Transport Repository',
      category: 'Portal',
      reqs: [
        { id: 'ntr1', text: 'Request Data Access', states: ['Start Application', 'Inputting Details', 'Granted'] },
        { id: 'ntr2', text: 'Download Report', states: ['Generate', 'Downloading...', 'Saved'] }
      ]
    },
    {
      id: 'sld',
      title: 'SLD Maker',
      category: 'OEM',
      reqs: [
        { id: 'sld1', text: 'Upload Speed Limiter Details', states: ['Select File', 'Uploading...', 'Saved'] },
        { id: 'sld2', text: 'Link to Registration', states: ['Input Reg', 'Processing...', 'Linked'] }
      ]
    },
    {
      id: 'vft',
      title: 'Vehicle Fitness Testing',
      category: 'Vahan',
      reqs: [
        { id: 'vft1', text: 'Apply for Fitness Renewal', states: ['Start Application', 'Processing...', 'Submitted'] },
        { id: 'vft2', text: 'Book Automated Slot', states: ['Choose Date', 'Fetching...', 'Booked'] },
        { id: 'vft3', text: 'Upload Pass Report', states: ['Select File', 'Uploading...', 'Verified'] }
      ]
    },
    {
      id: 'echal',
      title: 'eChallan Tracking',
      category: 'Enforcement',
      reqs: [
        { id: 'e1', text: 'Enter Vehicle Number', states: ['Input Reg', 'Searching DB...', 'Found'] },
        { id: 'e2', text: 'Verify Captcha', states: ['Solve', 'Validating...', 'Verified'] },
        { id: 'e3', text: 'Process Online Payment', states: ['Initiate', 'Processing...', 'Success'] }
      ]
    },
    {
      id: 'cp',
      title: 'Checkpost Tax',
      category: 'Tax',
      reqs: [
        { id: 'c1', text: 'Select Visiting State', states: ['Choose', 'Fetching...', 'Selected'] },
        { id: 'c2', text: 'Enter Trip Details', states: ['Input Data', 'Validating...', 'Approved'] },
        { id: 'c3', text: 'Pay Border Tax Online', states: ['Pay Now', 'Processing...', 'Paid'] }
      ]
    },
    {
      id: 'homo',
      title: 'Homologation',
      category: 'OEM',
      reqs: [
        { id: 'h1', text: 'Upload ARAI/ICAT Certificate', states: ['Select File', 'Uploading...', 'Verified'] },
        { id: 'h2', text: 'Map Vehicle Specifications', states: ['Input Data', 'Processing...', 'Mapped'] }
      ]
    },
    {
      id: 'pucc',
      title: 'PUCC Download',
      category: 'Vahan',
      reqs: [
        { id: 'p1', text: 'Enter Registration Number', states: ['Input Reg', 'Searching...', 'Found'] },
        { id: 'p2', text: 'Enter Chassis Number', states: ['Input Chassis', 'Validating...', 'Matched'] },
        { id: 'p3', text: 'Download Active Certificate', states: ['Generate PDF', 'Downloading...', 'Saved'] }
      ]
    },
    {
      id: 'tc',
      title: 'Trade Certificate',
      category: 'Dealer',
      reqs: [
        { id: 'tc1', text: 'Submit Dealer Premises Proof', states: ['Select File', 'Uploading...', 'Verified'] },
        { id: 'tc2', text: 'Pay Trade Certificate Fee', states: ['Pay Now', 'Processing...', 'Paid'] }
      ]
    },
    {
      id: 'vr',
      title: 'Vehicle Recall',
      category: 'Vahan',
      reqs: [
        { id: 'vr1', text: 'Enter VIN/Chassis Number', states: ['Input Data', 'Searching DB...', 'Found'] },
        { id: 'vr2', text: 'Check OEM Status', states: ['Check System', 'Fetching...', 'Cleared'] }
      ]
    },
    {
      id: 'dac',
      title: 'Dealer Authorization Certificate',
      category: 'Dealer',
      reqs: [
        { id: 'dac1', text: 'Upload OEM Authorization', states: ['Select File', 'Uploading...', 'Verified'] },
        { id: 'dac2', text: 'Submit Trade License', states: ['Input Data', 'Validating...', 'Approved'] }
      ]
    },
    {
      id: 'nr',
      title: 'NR Services',
      category: 'Portal',
      reqs: [
        { id: 'nr1', text: 'Enter Query Parameters', states: ['Input Data', 'Validating...', 'Accepted'] },
        { id: 'nr2', text: 'View Register Status', states: ['Execute Query', 'Fetching DB...', 'Displayed'] }
      ]
    },
    {
      id: 'pnr',
      title: 'Paid NR Services',
      category: 'Portal',
      reqs: [
        { id: 'pnr1', text: 'Recharge Wallet Balance', states: ['Pay Now', 'Processing...', 'Success'] },
        { id: 'pnr2', text: 'Access Bulk Search API', states: ['Generate Key', 'Validating...', 'Granted'] }
      ]
    },
    {
      id: 'vldt',
      title: 'VLDT Maker',
      category: 'OEM',
      reqs: [
        { id: 'vldt1', text: 'Register GPS Device', states: ['Input Data', 'Processing...', 'Registered'] },
        { id: 'vldt2', text: 'Issue Certificate', states: ['Generate', 'Downloading...', 'Issued'] }
      ]
    },
    {
      id: 'vrs',
      title: 'Vehicle Related Services',
      category: 'Vahan',
      reqs: [
        { id: 'v1', text: 'Select State & RTO', states: ['Choose Region', 'Fetching RTO...', 'Selected'] },
        { id: 'v2', text: 'Enter Vehicle Number', states: ['Input Data', 'Searching DB...', 'Found'] },
        { id: 'v3', text: 'Verify OTP', states: ['Send OTP', 'Awaiting...', 'Verified'] }
      ]
    }
  ];

  return (
    <div className="animate-fade-in max-w-4xl">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
        Online Services
      </h2>

      <div className="space-y-4">
        {services.map((service) => (
          <ServiceQuestItem
            key={service.id}
            service={service}
            autoProgress={true}
          />
        ))}
      </div>
    </div>
  );
}

/* =========================================
   PAGE 6: NEXUS AI
   ========================================= */
function NexusAIView() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: 'Hello, Adi. I am Nexus AI. I can help you navigate services, check document requirements, or query your records. How can I help you today?'
    }
  ]);

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const endOfMessagesRef = useRef(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text = input) => {
    if (!text.trim()) return;

    const newMsgId = messages.length + 1;

    setMessages(prev => [
      ...prev,
      { id: newMsgId, sender: 'user', text }
    ]);

    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let aiResponse =
        "I can certainly help with that. Since I'm in prototype mode, I can't process that transaction directly, but you can find the relevant forms in the 'Main Services' tab.";

      const lowerText = text.toLowerCase();

      if (
        lowerText.includes('challan') ||
        lowerText.includes('fine') ||
        lowerText.includes('ticket')
      ) {
        aiResponse =
          "I see you have pending infractions. You can view the details and clear them securely in the 'E-Challans' section from the sidebar.";
      } else if (
        lowerText.includes('document') ||
        lowerText.includes('upload') ||
        lowerText.includes('vault')
      ) {
        aiResponse =
          "You can securely upload prerequisites like your Address Proof directly into 'My Documents'. They will be automatically applied to your future applications.";
      } else if (
        lowerText.includes('license') ||
        lowerText.includes('dl') ||
        lowerText.includes('ll')
      ) {
        aiResponse =
          "To apply for or renew a license, please visit 'Main Services' and select the Driving License application. Ensure your documents are uploaded first.";
      } else if (lowerText.includes('tax')) {
        aiResponse =
          "Road tax payments can be initiated during New Vehicle Registration in the Main Services tab, or via the Checkpost Tax protocol in Online Services.";
      } else if (lowerText.includes('fancy')) {
        aiResponse =
          "You can reserve and bid on premium registration numbers by accessing the 'Fancy Number Booking' module in the Online Services directory.";
      } else if (lowerText.includes('fitness')) {
        aiResponse =
          "Your primary vehicle's compliance is 'All Clear'. To book an automated fitness testing slot, use the 'Vehicle Fitness Testing' service in the Online Services tab.";
      }

      setMessages(prev => [
        ...prev,
        {
          id: newMsgId + 1,
          sender: 'ai',
          text: aiResponse
        }
      ]);

      setIsTyping(false);
    }, 1500);
  };

  const quickPrompts = [
    "Check my pending challans",
    "How do I upload documents?",
    "I need to renew my DL",
    "How to pay Road Tax?",
    "Book a Fancy Number",
    "Check Vehicle Fitness"
  ];

  return (
    <div className="animate-fade-in max-w-4xl h-[75vh] flex flex-col bg-white dark:bg-[#1c1c1e] border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-lg">
      
      <div className="bg-white/80 dark:bg-[#1c1c1e]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 p-5 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-xl shadow-sm">
            ✨
          </div>

          <div>
            <h2 className="font-semibold text-gray-900 dark:text-white tracking-tight text-[17px]">
              Nexus AI
            </h2>

            <p className="text-[12px] text-gray-500 dark:text-gray-400 font-medium">
              Virtual Assistant
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/50 dark:bg-[#000000]/50">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === 'user'
                ? 'justify-end'
                : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[75%] px-5 py-3.5 rounded-3xl text-[15px] leading-relaxed shadow-sm ${
                msg.sender === 'user'
                  ? 'bg-blue-500 text-white rounded-tr-sm'
                  : 'bg-white dark:bg-[#2c2c2e] border border-gray-100 dark:border-gray-700 text-gray-800 dark:text-gray-100 rounded-tl-sm'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="px-5 py-4 rounded-3xl bg-white dark:bg-[#2c2c2e] border border-gray-100 dark:border-gray-700 rounded-tl-sm shadow-sm flex items-center gap-1.5">
              <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" />
              <div
                className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"
                style={{ animationDelay: '0.15s' }}
              />
              <div
                className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"
                style={{ animationDelay: '0.3s' }}
              />
            </div>
          </div>
        )}

        <div ref={endOfMessagesRef} />
      </div>

      <div className="px-5 py-3 bg-white dark:bg-[#1c1c1e] border-t border-gray-100 dark:border-gray-800 flex gap-2 overflow-x-auto hide-scrollbar flex-nowrap">
        {quickPrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(prompt)}
            disabled={isTyping}
            className="whitespace-nowrap px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium transition-colors disabled:opacity-50 outline-none focus:outline-none focus:ring-0 active:scale-[0.97]"
          >
            {prompt}
          </button>
        ))}
      </div>

      <div className="p-4 bg-white dark:bg-[#1c1c1e] border-t border-gray-100 dark:border-gray-800">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) =>
              e.key === 'Enter' && handleSend()
            }
            disabled={isTyping}
            placeholder="Type a message..."
            className="flex-1 bg-gray-100 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-500/50 text-gray-900 dark:text-white px-5 py-3 rounded-full text-[15px] transition-all disabled:opacity-50 outline-none"
          />

          <button
            onClick={() => handleSend()}
            disabled={isTyping || !input.trim()}
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors disabled:opacity-50 shadow-sm flex items-center justify-center w-12 h-12 flex-shrink-0 outline-none focus:outline-none focus:ring-0 active:scale-[0.97]"
          >
            ↑
          </button>
        </div>
      </div>

    </div>
  );
}

/* =========================================
   SHARED SERVICE COMPONENT
   ========================================= */
function ServiceQuestItem({ service, autoProgress = true }) {
  const [expanded, setExpanded] = useState(false);
  const [stepIndices, setStepIndices] = useState({});

  const isAutoState = (str) => {
    const s = str.toLowerCase();

    return (
      s.includes('processing') ||
      s.includes('in progress') ||
      s.includes('uploading') ||
      s.includes('searching') ||
      s.includes('fetching') ||
      s.includes('verifying') ||
      s.includes('validating') ||
      s.includes('awaiting') ||
      s.includes('inputting')
    );
  };

  useEffect(() => {
    const timers = [];

    service.reqs.forEach((req) => {
      const uniqueId = `${service.id}-${req.id}`;
      const current = stepIndices[uniqueId] || 0;
      const stateStr = req.states[current];

      /*
       * ONLINE SERVICES:
       * Existing automatic 3-second rule stays active.
       *
       * MAIN SERVICES:
       * autoProgress=false
       *
       * The first click changes:
       * Start Application -> Inputting Details
       *
       * THEN the 3-second timer runs.
       *
       * So nothing progresses just by opening the page.
       */
      const shouldStartTimer =
        isAutoState(stateStr) &&
        current < req.states.length - 1 &&
        (autoProgress || current > 0);

      if (shouldStartTimer) {
        const timer = setTimeout(() => {
          setStepIndices(prev => ({
            ...prev,
            [uniqueId]: (prev[uniqueId] || 0) + 1
          }));
        }, 3000);

        timers.push(timer);
      }
    });

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [
    stepIndices,
    service.reqs,
    service.id,
    autoProgress
  ]);

  const advanceStep = (reqId, maxSteps, e) => {
    e.stopPropagation();

    const uniqueId = `${service.id}-${reqId}`;

    setStepIndices(prev => {
      const current = prev[uniqueId] || 0;

      return {
        ...prev,
        [uniqueId]: Math.min(current + 1, maxSteps - 1)
      };
    });
  };

  const total = service.reqs.length;

  const completed = service.reqs.filter(
    r =>
      (stepIndices[`${service.id}-${r.id}`] || 0) ===
      r.states.length - 1
  ).length;

  const progressPercent =
    total === 0
      ? 0
      : Math.round((completed / total) * 100);

  const isComplete = progressPercent === 100;

  return (
    <div className="bg-white dark:bg-[#1c1c1e] border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden transition-all hover:shadow-md dark:hover:shadow-none shadow-sm duration-300">

      <div
        className="p-5 sm:p-6 cursor-pointer flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 outline-none focus:outline-none"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-gray-900 dark:text-white font-bold text-[17px] tracking-tight">
              {service.title}
            </h3>

            {isComplete && (
              <span className="text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/30 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                Completed
              </span>
            )}
          </div>

          <span className="text-gray-500 dark:text-gray-400 text-[11px] font-semibold uppercase tracking-wider">
            {service.category} Category
          </span>
        </div>

        <div className="w-full sm:w-32 flex-shrink-0">
          <div className="flex justify-between text-xs mb-2 font-medium">
            <span className="text-gray-500 dark:text-gray-400">
              Progress
            </span>

            <span
              className={
                isComplete
                  ? 'text-green-600 dark:text-green-400 font-bold'
                  : 'text-gray-900 dark:text-white font-bold'
              }
            >
              {progressPercent}%
            </span>
          </div>

          <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${
                isComplete
                  ? 'bg-green-500'
                  : 'bg-blue-500'
              }`}
              style={{
                width: `${progressPercent}%`
              }}
            />
          </div>
        </div>
      </div>

      {expanded && (
        <div className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6">
          <div className="bg-gray-50 dark:bg-[#000000] p-5 rounded-2xl border border-gray-100 dark:border-gray-800 space-y-3 mt-2">

            {service.reqs.map((req) => {
              const uniqueId = `${service.id}-${req.id}`;

              const currentStepIndex =
                stepIndices[uniqueId] || 0;

              const isReqComplete =
                currentStepIndex ===
                req.states.length - 1;

              const isAuto =
                isAutoState(
                  req.states[currentStepIndex]
                );

              /*
               * This is important:
               *
               * Main Services:
               * initial state = clickable
               *
               * After click:
               * intermediate state = locked
               *
               * 3 seconds later:
               * completed
               *
               * Online Services:
               * same original behavior
               */
              const isWaitingForAuto =
                isAuto &&
                currentStepIndex > 0 &&
                currentStepIndex <
                  req.states.length - 1;

              return (
                <div
                  key={req.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-white dark:bg-[#1c1c1e] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
                >
                  <span
                    className={`text-[14px] font-medium ${
                      isReqComplete
                        ? 'text-gray-400 dark:text-gray-600 line-through'
                        : 'text-gray-700 dark:text-gray-200'
                    }`}
                  >
                    {req.text}
                  </span>

                  <button
                    onClick={(e) =>
                      advanceStep(
                        req.id,
                        req.states.length,
                        e
                      )
                    }
                    disabled={
                      isReqComplete ||
                      isWaitingForAuto
                    }
                    className={`relative overflow-hidden px-4 py-2 text-xs font-semibold rounded-full transition-all whitespace-nowrap min-w-[120px] text-center outline-none focus:outline-none focus:ring-0 active:scale-[0.97]
                    ${
                      isReqComplete
                        ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 cursor-default'
                        : isWaitingForAuto
                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 cursor-wait'
                        : currentStepIndex > 0
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50'
                        : 'bg-blue-500 text-white hover:bg-blue-600 shadow-sm'
                    }`}
                  >
                    {isWaitingForAuto && (
                      <div className="absolute top-0 left-0 h-full bg-blue-200 dark:bg-blue-700/50 animate-button-fill" />
                    )}

                    <span className="relative z-10">
                      {req.states[currentStepIndex]}
                    </span>
                  </button>
                </div>
              );
            })}

          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================
   NAV BUTTON
   ========================================= */
function NavBtn({ active, icon, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`group w-full text-left px-4 py-2.5 rounded-xl font-medium text-[15px] transition-all duration-200 flex items-center outline-none focus:outline-none focus:ring-0 focus-visible:outline-none active:scale-[0.97] ${
        active
          ? 'bg-blue-500 text-white shadow-sm'
          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#2c2c2e] hover:text-gray-900 dark:hover:text-white'
      }`}
    >
      <span
        className={`mr-3 text-lg ${
          active ? 'opacity-100' : 'opacity-80'
        }`}
      >
        {icon}
      </span>

      <span>{children}</span>
    </button>
  );
}
