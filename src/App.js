import React, { useState, useEffect } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('hub');

  return (
    <div className="min-h-screen font-tech flex flex-col md:flex-row bg-[#050b14] text-slate-200">
      
      {/* SIDEBAR NAVIGATION */}
      <nav className="w-full md:w-64 border-b md:border-b-0 md:border-r border-neon-cyan/30 bg-[#0a1120] p-6 flex flex-col shadow-[4px_0_20px_rgba(0,243,255,0.1)]">
        <div>
          <div className="mb-10 text-center md:text-left">
            <h1 className="font-game text-neon-cyan text-sm tracking-widest leading-loose">PARIVAHAN<br/>NEXUS</h1>
            <p className="text-[10px] text-slate-500 mt-2 font-tech uppercase tracking-widest">Independent Hackathon Prototype</p>
          </div>
          <div className="space-y-4">
            <NavBtn active={activeTab === 'hub'} onClick={() => setActiveTab('hub')} icon="📊">My Profile</NavBtn>
            <NavBtn active={activeTab === 'challans'} onClick={() => setActiveTab('challans')} icon="⚠️">E-Challans</NavBtn>
            <NavBtn active={activeTab === 'quests'} onClick={() => setActiveTab('quests')} icon="📜">Service Quests</NavBtn>
            <NavBtn active={activeTab === 'online_services'} onClick={() => setActiveTab('online_services')} icon="🌐">Online Services</NavBtn>
            <NavBtn active={activeTab === 'help'} onClick={() => setActiveTab('help')} icon="❓">Help & FAQ</NavBtn>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-6 md:p-10 max-h-screen overflow-y-auto pb-20">
        
        {/* TOP STATUS BAR: AADHAAR INFO */}
        <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-8 bg-[#0a1120] p-4 border border-slate-800 rounded gap-4">
          <div className="font-hud text-lg uppercase flex flex-col md:flex-row gap-4 md:gap-8 w-full">
            <div className="flex flex-col">
              <span className="text-slate-500 text-xs font-tech">AADHAAR ID</span>
              <span className="text-neon-cyan tracking-widest font-bold">[Aadhaar Redacted]</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-500 text-xs font-tech">CITIZEN NAME</span>
              <span className="text-neon-purple tracking-widest font-bold">ADI CH</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-500 text-xs font-tech">REGISTERED PHONE</span>
              <span className="text-neon-green tracking-widest font-bold">891*******</span>
            </div>
          </div>
          <div className="text-neon-green text-sm border border-neon-green/50 bg-green-900/20 px-4 py-2 rounded whitespace-nowrap">
            KYC VERIFIED
          </div>
        </header>

        {/* PAGE ROUTER */}
        {activeTab === 'hub' && <HubView />}
        {activeTab === 'challans' && <ChallansView />}
        {activeTab === 'quests' && <QuestBoardView />}
        {activeTab === 'online_services' && <OnlineServicesView />}
        {activeTab === 'help' && <HelpView />}
        
      </main>
    </div>
  );
}

/* =========================================
   PAGE 1: MY PROFILE (Vehicles, RC, License)
   ========================================= */
function HubView() {
  const vehicles = [
    { id: 1, make: 'Royal Enfield', model: 'Interceptor 650', reg: 'TS-09-EX-1042', class: 'MCWG', icon: '🏍️' },
    { id: 2, make: 'TVS', model: 'iQube', reg: 'TS-07-EA-4521', class: 'MCWOG', icon: '🛵' },
    { id: 3, make: 'Mahindra', model: 'Thar', reg: 'TS-08-TR-9988', class: 'LMV-NT', icon: '🚙' }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="font-game text-lg text-slate-300 mb-6">MY PROFILE</h2>
      
      {/* VAHAN & SARATHI CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Driving License */}
        <div className="bg-[#0a1120] border border-slate-700 p-6 rounded relative hover:border-neon-purple/50 transition-colors">
           <div className="absolute top-0 right-0 bg-neon-purple text-black font-bold px-2 py-1 text-xs">SARATHI DB</div>
           <h3 className="font-hud text-xl mb-4 text-white uppercase tracking-wider">DRIVER LICENSE</h3>
           <div className="flex items-center gap-4">
            <div className="text-5xl">🪪</div>
            <div>
              <div className="text-neon-purple text-xl tracking-wider font-bold">TS00920150004X</div>
              <div className="text-slate-400 text-sm mt-1">Validity: 2042 / Class: MCWG, LMV</div>
            </div>
          </div>
        </div>

        {/* Digital RC (Primary Vehicle) */}
        <div className="bg-[#0a1120] border border-slate-700 p-6 rounded relative hover:border-neon-cyan/50 transition-colors">
           <div className="absolute top-0 right-0 bg-neon-cyan text-black font-bold px-2 py-1 text-xs">VAHAN DB</div>
           <h3 className="font-hud text-xl mb-4 text-white uppercase tracking-wider">DIGITAL RC (PRIMARY)</h3>
           <div className="flex items-center gap-4">
            <div className="text-5xl">📄</div>
            <div>
              <div className="text-neon-cyan text-xl tracking-wider font-bold">TS-09-EX-1042</div>
              <div className="text-slate-400 text-sm mt-1">Owner: ADI CH / Hypothecation: NONE</div>
            </div>
          </div>
        </div>

        {/* Compliance / Insurance / PUCC */}
        <div className="lg:col-span-2 bg-[#0a1120] border border-slate-700 p-6 rounded relative hover:border-yellow-400/50 transition-colors">
           <div className="absolute top-0 right-0 bg-yellow-400 text-black font-bold px-2 py-1 text-xs">COMPLIANCE</div>
           <h3 className="font-hud text-xl mb-4 text-white uppercase tracking-wider">VEHICLE HEALTH & COMPLIANCE</h3>
           <div className="flex items-center gap-4">
            <div className="text-5xl">🛡️</div>
            <div>
              <div className="text-yellow-400 text-xl tracking-wider font-bold">ALL CLEAR</div>
              <div className="text-slate-400 text-sm mt-1">Insurance: Valid till 2027 | PUCC: Valid (42 Days remaining) | Tax: Lifetime Paid</div>
            </div>
          </div>
        </div>

      </div>

      <h3 className="font-hud text-xl text-slate-300 mt-8 mb-4 border-b border-slate-800 pb-2">REGISTERED MOUNTS</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {vehicles.map(v => (
          <div key={v.id} className="bg-slate-900 border border-slate-700 p-5 rounded relative overflow-hidden group hover:border-neon-cyan/30 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <div className="text-3xl">{v.icon}</div>
              <div className="text-[10px] text-neon-cyan border border-neon-cyan/30 px-2 py-1 rounded bg-cyan-900/10">{v.class}</div>
            </div>
            <h4 className="font-bold text-white text-sm uppercase">
              {v.make} <span className="text-slate-400">{v.model}</span>
            </h4>
            <div className="text-neon-cyan tracking-wider font-tech text-sm mt-1">{v.reg}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================
   PAGE 2: E-CHALLANS (With Tracker)
   ========================================= */
function ChallansView() {
  const [challans, setChallans] = useState([
    { id: 'CHL-2026-10001', vehicleName: 'Royal Enfield Interceptor', regNumber: 'TS-09-EX-1042', date: '28-Aug-2026', violation: 'Stop Line Crossing', location: 'Silk Board Junction, BLR', amount: '₹500', status: 'PENDING', paymentMethod: null },
    { id: 'CHL-2026-10002', vehicleName: 'Mahindra Thar', regNumber: 'TS-08-TR-9988', date: '25-Aug-2026', violation: 'Improper Parking', location: 'MG Road, BLR', amount: '₹1000', status: 'PENDING', paymentMethod: null },
    { id: 'CHL-2026-10003', vehicleName: 'TVS iQube', regNumber: 'TS-07-EA-4521', date: '21-Aug-2026', violation: 'Riding without Helmet', location: 'Indiranagar 100ft Road, BLR', amount: '₹500', status: 'PENDING', paymentMethod: null },
    { id: 'CHL-2026-10004', vehicleName: 'Royal Enfield Interceptor', regNumber: 'TS-09-EX-1042', date: '18-Aug-2026', violation: 'Over Speeding (85 kmph)', location: 'Airport Road Flyover, BLR', amount: '₹2000', status: 'PAID', paymentMethod: 'UPI QR' },
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
    { id: 'CHL-2026-10019', vehicleName: 'Royal Enfield Interceptor', regNumber: 'TS-09-EX-1042', date: '05-Jun-2026', violation: 'Over Speeding', location: 'BTM Layout Lake Road, BLR', amount: '₹1000', status: 'PAID', paymentMethod: 'UPI QR' },
    { id: 'CHL-2026-10020', vehicleName: 'Mahindra Thar', regNumber: 'TS-08-TR-9988', date: '01-Jun-2026', violation: 'Stop Line Crossing', location: 'Domlur Flyover, BLR', amount: '₹500', status: 'PENDING', paymentMethod: null },
    { id: 'CHL-2026-10021', vehicleName: 'TVS iQube', regNumber: 'TS-07-EA-4521', date: '25-May-2026', violation: 'Pillion without Helmet', location: 'Trinity Circle, BLR', amount: '₹500', status: 'PAID', paymentMethod: 'Debit Card' }
  ]);

  const handlePayment = (challanId, method) => {
    setChallans(challans.map(c => 
      c.id === challanId ? { ...c, status: 'PAID', paymentMethod: method } : c
    ));
  };

  const totalPaid = challans.filter(c => c.status === 'PAID').length;
  const totalPending = challans.filter(c => c.status === 'PENDING').length;

  return (
    <div className="animate-fade-in max-w-4xl">
      <h2 className="font-game text-lg text-slate-300 mb-6">TRAFFIC INFRACTIONS (E-CHALLAN)</h2>
      
      {/* STATS TRACKER */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="bg-slate-900 border border-green-900/50 p-5 rounded w-full shadow-[0_0_15px_rgba(0,255,102,0.05)]">
          <div className="text-slate-400 text-xs font-bold font-tech mb-1 uppercase">Challans Cleared</div>
          <div className="text-neon-green text-4xl font-hud">{totalPaid}</div>
        </div>
        <div className="bg-[#1a0505] border border-red-900/50 p-5 rounded w-full shadow-[0_0_15px_rgba(255,0,60,0.05)]">
          <div className="text-slate-400 text-xs font-bold font-tech mb-1 uppercase">Pending Infractions</div>
          <div className="text-neon-red text-4xl font-hud">{totalPending}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {challans.map((c) => (
          <div key={c.id} className={`p-5 rounded border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${
            c.status === 'PENDING' 
              ? 'bg-[#1a0505] border-neon-red/50 hover:border-neon-red transition-colors' 
              : 'bg-slate-900 border-slate-700 opacity-75'
          }`}>
            <div className="w-full">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-1">
                <h3 className={`font-bold font-tech text-lg ${c.status === 'PENDING' ? 'text-neon-red' : 'text-white'}`}>
                  {c.vehicleName} <span className="text-slate-400 font-normal">|</span> <span className="text-neon-cyan">{c.regNumber}</span>
                </h3>
                <span className={`self-start sm:self-auto text-[10px] px-2 py-1 rounded ${c.status === 'PENDING' ? 'bg-red-900/50 text-neon-red font-bold' : 'bg-green-900/50 text-neon-green'}`}>
                  {c.status}
                </span>
              </div>
              
              <p className="text-slate-500 font-tech text-xs mb-3">
                CHALLAN ID: <span className="text-slate-300">{c.id}</span>
              </p>
              
              <p className="text-slate-200 text-sm">{c.violation}</p>
              <p className="text-slate-500 text-xs mt-1">Location: {c.location} | Date: {c.date}</p>
            </div>
            
            <div className="w-full md:w-auto flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-3 border-t md:border-t-0 border-slate-800 pt-4 md:pt-0">
              <span className={`font-hud text-2xl ${c.status === 'PENDING' ? 'text-white' : 'text-slate-500'}`}>{c.amount}</span>
              
              {c.status === 'PENDING' ? (
                <PaymentDropdown onPay={(method) => handlePayment(c.id, method)} />
              ) : (
                <div className="text-neon-green text-sm font-bold font-tech text-right bg-green-900/20 px-3 py-1 rounded border border-green-900/50 whitespace-nowrap">
                  PAID VIA {c.paymentMethod?.toUpperCase()}
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
   PAGE 3: SERVICE QUESTS
   ========================================= */
function QuestBoardView() {
  const quests = [
    {
      id: 'll', title: "Apply for Learner's License", category: 'SARATHI',
      reqs: [ 
        { id: 'l1', text: 'Fill Form-2 Online', states: ['START DRAFT', 'INPUT DETAILS', 'FORM SUBMITTED'] }, 
        { id: 'l2', text: 'Upload Age Proof', states: ['SELECT FILE', 'UPLOADING...', 'VERIFIED'] }, 
        { id: 'l3', text: 'Upload Address Proof', states: ['SELECT FILE', 'UPLOADING...', 'VERIFIED'] }, 
        { id: 'l4', text: 'Upload Medical Form-1A (if age > 40)', states: ['SELECT FILE', 'UPLOADING...', 'VERIFIED'] }, 
        { id: 'l5', text: 'Pay LL Fee (₹200)', states: ['INITIATE PAY', 'PROCESSING...', 'PAYMENT SUCCESS'] }, 
        { id: 'l6', text: 'Pass Online LL Test', states: ['START MODULE', 'TAKING TEST', 'PASSED'] } 
      ]
    },
    {
      id: 'dl', title: "Apply for Permanent Driving License", category: 'SARATHI',
      reqs: [ 
        { id: 'd1', text: 'Hold valid LL for 30+ days', states: ['CHECK STATUS', 'VERIFYING...', 'ELIGIBLE'] }, 
        { id: 'd2', text: 'Fill Form-4 Online', states: ['START DRAFT', 'INPUT DETAILS', 'FORM SUBMITTED'] }, 
        { id: 'd3', text: 'Book Driving Test Slot', states: ['CHECK SLOTS', 'SEARCHING...', 'SLOT BOOKED'] }, 
        { id: 'd4', text: 'Pay DL & Test Fee (₹1000)', states: ['INITIATE PAY', 'PROCESSING...', 'PAYMENT SUCCESS'] }, 
        { id: 'd5', text: 'Pass Physical Driving Test at RTO', states: ['AWAITING TEST', 'IN PROGRESS', 'PASSED'] } 
      ]
    },
    {
      id: 'rc', title: "New Vehicle Registration", category: 'VAHAN',
      reqs: [ 
        { id: 'v1', text: 'Form-20 (Application)', states: ['START DRAFT', 'INPUT DETAILS', 'FORM SUBMITTED'] }, 
        { id: 'v2', text: 'Form-21 (Sale Certificate)', states: ['SELECT FILE', 'UPLOADING...', 'VERIFIED'] }, 
        { id: 'v3', text: 'Form-22 (Roadworthiness)', states: ['SELECT FILE', 'UPLOADING...', 'VERIFIED'] }, 
        { id: 'v4', text: 'Valid Insurance Cover Note', states: ['FETCH DB', 'VERIFYING POLICY...', 'VERIFIED'] }, 
        { id: 'v5', text: 'Pay Road Tax & Reg Fee', states: ['INITIATE PAY', 'PROCESSING...', 'PAYMENT SUCCESS'] } 
      ]
    }
  ];

  return (
    <div className="animate-fade-in max-w-4xl">
      <h2 className="font-game text-lg text-slate-300 mb-6 flex justify-between items-center">
        <span>CORE SERVICE QUESTS</span>
        <span className="text-xs font-tech text-slate-500">Master your civic duties</span>
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {quests.map((quest) => (
          <ServiceQuestItem key={quest.id} service={quest} />
        ))}
      </div>
    </div>
  );
}

/* =========================================
   PAGE 4: ONLINE SERVICES
   ========================================= */
function OnlineServicesView() {
  const services = [
    { 
      id: 'aitp', title: 'All India Tourist Permit', category: 'PERMIT', 
      reqs: [
        {id: 'a1', text: 'Submit Form 46', states: ['START DRAFT', 'UPLOADING...', 'SUBMITTED']}, 
        {id: 'a2', text: 'Upload Valid Insurance', states: ['SELECT FILE', 'VERIFYING...', 'APPROVED']},
        {id: 'a3', text: 'Pay Consolidated Fee', states: ['INITIATE PAY', 'PROCESSING PAY...', 'PAYMENT SUCCESS']}
      ] 
    },
    { 
      id: 'dlrs', title: 'Driving License Related Services', category: 'SARATHI', 
      reqs: [
        {id: 'd1', text: 'Select RTO State', states: ['CHOOSE STATE', 'FETCHING RTO...', 'SELECTED']}, 
        {id: 'd2', text: 'Enter DL/LL Number', states: ['INPUT DATA', 'SEARCHING DB...', 'RECORD FOUND']}, 
        {id: 'd3', text: 'Upload Digital Signature', states: ['SELECT IMAGE', 'UPLOADING...', 'VERIFIED']}
      ] 
    },
    { 
      id: 'npa', title: 'National Permit Authorization', category: 'PERMIT', 
      reqs: [
        {id: 'n1', text: 'Enter RC Number', states: ['INPUT REG', 'SEARCHING DB...', 'FOUND']}, 
        {id: 'n2', text: 'Clear Pending E-Challans', states: ['CHECK STATUS', 'VERIFYING...', 'CLEARED']}, 
        {id: 'n3', text: 'Download Permit', states: ['GENERATE PDF', 'DOWNLOADING...', 'SAVED']}
      ] 
    },
    { 
      id: 'prs', title: 'Permit Related Services', category: 'PERMIT', 
      reqs: [
        {id: 'pr1', text: 'Select Permit Type', states: ['CHOOSE TYPE', 'FETCHING...', 'SELECTED']}, 
        {id: 'pr2', text: 'Upload Route Details', states: ['SELECT FILE', 'UPLOADING...', 'SAVED']}, 
        {id: 'pr3', text: 'Submit State Fee', states: ['INITIATE PAY', 'PROCESSING...', 'PAID']}
      ] 
    },
    { 
      id: 'vgs', title: 'Vahan Green Sewa', category: 'VAHAN', 
      reqs: [
        {id: 'vg1', text: 'Enter EV Registration', states: ['INPUT DATA', 'SEARCHING DB...', 'FOUND']}, 
        {id: 'vg2', text: 'Apply for Exemption', states: ['START DRAFT', 'PROCESSING...', 'APPROVED']}
      ] 
    },
    { 
      id: 'vs', title: 'Vehicle Scrapping', category: 'VAHAN', 
      reqs: [
        {id: 'vs1', text: 'Locate Nearest RVSF', states: ['ENTER PIN', 'SEARCHING...', 'FOUND']}, 
        {id: 'vs2', text: 'Surrender Original RC', states: ['CONFIRM', 'PROCESSING...', 'ACCEPTED']},
        {id: 'vs3', text: 'Download Certificate', states: ['GENERATE', 'DOWNLOADING...', 'SAVED']}
      ] 
    },
    { 
      id: 'cng', title: 'CNG Maker', category: 'OEM', 
      reqs: [
        {id: 'cng1', text: 'Login as Manufacturer', states: ['ENTER CREDS', 'VERIFYING...', 'LOGGED IN']}, 
        {id: 'cng2', text: 'Register Approved Kit', states: ['SUBMIT DOCS', 'UPLOADING...', 'REGISTERED']}
      ] 
    },
    { 
      id: 'fnb', title: 'Fancy Number Booking', category: 'VAHAN', 
      reqs: [
        {id: 'f1', text: 'Register as Public User', states: ['START DRAFT', 'PROCESSING...', 'REGISTERED']}, 
        {id: 'f2', text: 'Select Available Number', states: ['BROWSE', 'FETCHING...', 'RESERVED']}, 
        {id: 'f3', text: 'Participate in E-Auction', states: ['PLACE BID', 'PROCESSING PAY...', 'BID PLACED']}
      ] 
    },
    { 
      id: 'ntr', title: 'National Transport Repository', category: 'PORTAL', 
      reqs: [
        {id: 'ntr1', text: 'Request Data Access', states: ['SUBMIT FORM', 'PROCESSING...', 'GRANTED']}, 
        {id: 'ntr2', text: 'Download Report', states: ['GENERATE', 'DOWNLOADING...', 'SAVED']}
      ] 
    },
    { 
      id: 'sld', title: 'SLD Maker', category: 'OEM', 
      reqs: [
        {id: 'sld1', text: 'Upload Speed Limiter Details', states: ['SELECT FILE', 'UPLOADING...', 'SAVED']}, 
        {id: 'sld2', text: 'Link to Registration', states: ['INPUT REG', 'PROCESSING...', 'LINKED']}
      ] 
    },
    { 
      id: 'vft', title: 'Vehicle Fitness Testing', category: 'VAHAN', 
      reqs: [
        {id: 'vft1', text: 'Apply for Fitness Renewal', states: ['START DRAFT', 'PROCESSING...', 'SUBMITTED']}, 
        {id: 'vft2', text: 'Book Automated Slot', states: ['CHOOSE DATE', 'FETCHING...', 'BOOKED']},
        {id: 'vft3', text: 'Upload Pass Report', states: ['SELECT FILE', 'UPLOADING...', 'VERIFIED']}
      ] 
    },
    { 
      id: 'echal', title: 'eChallan', category: 'ENFORCEMENT', 
      reqs: [
        {id: 'e1', text: 'Enter Vehicle Number', states: ['INPUT REG', 'SEARCHING DB...', 'FOUND']}, 
        {id: 'e2', text: 'Verify Captcha', states: ['SOLVE', 'VALIDATING...', 'VERIFIED']}, 
        {id: 'e3', text: 'Process Online Payment', states: ['INITIATE', 'PROCESSING PAY...', 'SUCCESS']}
      ] 
    },
    { 
      id: 'cp', title: 'Checkpost Tax', category: 'TAX', 
      reqs: [
        {id: 'c1', text: 'Select Visiting State', states: ['CHOOSE', 'FETCHING...', 'SELECTED']}, 
        {id: 'c2', text: 'Enter Trip Details', states: ['INPUT DATA', 'VALIDATING...', 'APPROVED']}, 
        {id: 'c3', text: 'Pay Border Tax Online', states: ['INITIATE', 'PROCESSING PAY...', 'PAID']}
      ] 
    },
    { 
      id: 'homo', title: 'Homologation', category: 'OEM', 
      reqs: [
        {id: 'h1', text: 'Upload ARAI/ICAT Certificate', states: ['SELECT FILE', 'UPLOADING...', 'VERIFIED']}, 
        {id: 'h2', text: 'Map Vehicle Specifications', states: ['INPUT DATA', 'PROCESSING...', 'MAPPED']}
      ] 
    },
    { 
      id: 'pucc', title: 'PUCC', category: 'VAHAN', 
      reqs: [
        {id: 'p1', text: 'Enter Registration Number', states: ['INPUT REG', 'SEARCHING...', 'FOUND']}, 
        {id: 'p2', text: 'Enter Chassis Number', states: ['INPUT CHASSIS', 'VALIDATING...', 'MATCHED']}, 
        {id: 'p3', text: 'Download Active Certificate', states: ['GENERATE PDF', 'DOWNLOADING...', 'SAVED']}
      ] 
    },
    { 
      id: 'tc', title: 'Trade Certificate', category: 'DEALER', 
      reqs: [
        {id: 'tc1', text: 'Submit Dealer Premises Proof', states: ['SELECT FILE', 'UPLOADING...', 'VERIFIED']}, 
        {id: 'tc2', text: 'Pay Trade Certificate Fee', states: ['INITIATE', 'PROCESSING PAY...', 'PAID']}
      ] 
    },
    { 
      id: 'vr', title: 'Vehicle Recall', category: 'VAHAN', 
      reqs: [
        {id: 'vr1', text: 'Enter VIN/Chassis Number', states: ['INPUT DATA', 'SEARCHING DB...', 'FOUND']}, 
        {id: 'vr2', text: 'Check OEM Status', states: ['CHECK SYSTEM', 'FETCHING...', 'CLEARED']}
      ] 
    },
    { 
      id: 'dac', title: 'Dealer Authorization Certificate', category: 'DEALER', 
      reqs: [
        {id: 'dac1', text: 'Upload OEM Authorization', states: ['SELECT FILE', 'UPLOADING...', 'VERIFIED']}, 
        {id: 'dac2', text: 'Submit Trade License', states: ['INPUT DATA', 'VALIDATING...', 'APPROVED']}
      ] 
    },
    { 
      id: 'nr', title: 'NR Services', category: 'PORTAL', 
      reqs: [
        {id: 'nr1', text: 'Enter Query Parameters', states: ['INPUT DATA', 'VALIDATING...', 'ACCEPTED']}, 
        {id: 'nr2', text: 'View Register Status', states: ['EXECUTE QUERY', 'FETCHING DB...', 'DISPLAYED']}
      ] 
    },
    { 
      id: 'pnr', title: 'Paid NR Services', category: 'PORTAL', 
      reqs: [
        {id: 'pnr1', text: 'Recharge Wallet Balance', states: ['INITIATE', 'PROCESSING PAY...', 'SUCCESS']}, 
        {id: 'pnr2', text: 'Access Bulk Search API', states: ['GENERATE KEY', 'VALIDATING...', 'GRANTED']}
      ] 
    },
    { 
      id: 'vldt', title: 'VLDT Maker', category: 'OEM', 
      reqs: [
        {id: 'vldt1', text: 'Register GPS Device', states: ['INPUT DATA', 'PROCESSING...', 'REGISTERED']}, 
        {id: 'vldt2', text: 'Issue Certificate', states: ['GENERATE', 'DOWNLOADING...', 'ISSUED']}
      ] 
    },
    { 
      id: 'vrs', title: 'Vehicle Related Services', category: 'VAHAN', 
      reqs: [
        {id: 'v1', text: 'Select State & RTO', states: ['CHOOSE REGION', 'FETCHING RTO...', 'SELECTED']}, 
        {id: 'v2', text: 'Enter Vehicle Number', states: ['INPUT DATA', 'SEARCHING DB...', 'FOUND']}, 
        {id: 'v3', text: 'Verify OTP', states: ['SEND OTP', 'AWAITING OTP...', 'VERIFIED']}
      ] 
    },
  ];

  return (
    <div className="animate-fade-in max-w-4xl">
      <h2 className="font-game text-lg text-slate-300 mb-6 flex justify-between items-center">
        <span>ONLINE SERVICES DIRECTORY</span>
        <span className="text-xs font-tech text-slate-500">Select an infrastructure protocol</span>
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {services.map((service) => (
          <ServiceQuestItem key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

/* =========================================
   PAGE 5: HELP & FAQ (New Section)
   ========================================= */
function HelpView() {
  const faqs = [
    {
      q: "What exactly is Parivahan Nexus?",
      a: "Think of it as a modernized, citizen-first overlay for your standard Parivahan portal. We turned those endless dropdown menus and bureaucratic forms into a streamlined, interactive dashboard. Your civic duties shouldn't feel like a chore."
    },
    {
      q: "Why do the buttons say 'PROCESSING...' or 'FETCHING DB...' and then auto-complete?",
      a: "That's our 3-second simulation timer at work. In the real world, this is where the system would be pinging the central VAHAN/SARATHI database. Once you click a task (like 'START DRAFT' or 'FETCH DB'), just sit back for 3 seconds while we handle the digital paperwork."
    },
    {
      q: "How does the E-Challan tracker work?",
      a: "We automatically log all infractions tied to your registered vehicles (like your Interceptor or Thar). Just head over to the E-Challans tab. When you hit 'PAY NOW' on a red pending ticket and select your payment method, it instantly clears, updating your total cleared stats at the top of the page."
    },
    {
      q: "Where can I find my Digital RC and Insurance status?",
      a: "Right on the 'My Profile' page! We consolidated your Driver License (DL), Digital RC, and Vehicle Health Compliance (like PUCC and Insurance) into quick-glance smart cards so you don't have to hunt for them."
    },
    {
      q: "What do I do if a Service Quest gets stuck?",
      a: "Make sure you are completing the sub-tasks in order. You can't upload your medical form before you start the draft! Just click the actionable button on the right side of each protocol step."
    }
  ];

  return (
    <div className="animate-fade-in max-w-3xl">
      <h2 className="font-game text-lg text-slate-300 mb-6 flex items-center gap-3">
        <span className="text-2xl">❓</span> CITIZEN SUPPORT DATABANK
      </h2>
      
      <p className="text-slate-400 text-sm mb-8 leading-relaxed">
        Welcome to the Nexus Help Center, ADI CH. Below are the most frequently accessed queries regarding terminal operation, protocol execution, and clearing your infractions.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-700 p-6 rounded hover:border-neon-cyan/30 transition-colors">
            <h3 className="font-bold text-neon-cyan mb-3 flex gap-2">
              <span className="text-slate-500 font-tech">Q.</span> {faq.q}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed pl-6 border-l-2 border-slate-700">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================
   REUSABLE PAYMENT DROPDOWN COMPONENT
   ========================================= */
function PaymentDropdown({ onPay }) {
  const [isOpen, setIsOpen] = useState(false);
  const options = ['UPI', 'UPI QR', 'Net Banking', 'Debit Card', 'Credit Card'];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-neon-red hover:bg-red-600 text-black font-bold py-2 px-6 rounded font-hud tracking-wider transition-colors flex items-center gap-2"
      >
        PAY NOW <span className="text-[10px]">▼</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-500 rounded shadow-[0_10px_30px_rgba(0,0,0,0.8)] z-50 overflow-hidden">
          <div className="bg-slate-900 text-slate-400 text-[10px] uppercase font-bold p-2 border-b border-slate-700 font-tech">
            Select Payment Method
          </div>
          {options.map(opt => (
            <button 
              key={opt}
              onClick={() => {
                setIsOpen(false);
                onPay(opt);
              }}
              className="w-full text-left px-4 py-3 hover:bg-slate-700 hover:text-white text-sm text-slate-300 transition-colors border-b border-slate-700 last:border-0"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* =========================================
   SHARED COMPONENT: Service Checklist (3-Sec Auto Timer)
   ========================================= */
function ServiceQuestItem({ service }) {
  const [expanded, setExpanded] = useState(false);
  const [stepIndices, setStepIndices] = useState({});

  const isAutoState = (str) => {
    const s = str.toLowerCase();
    return s.includes('processing') || 
           s.includes('in progress') || 
           s.includes('uploading') || 
           s.includes('taking test') || 
           s.includes('downloading') || 
           s.includes('validating') || 
           s.includes('searching') || 
           s.includes('awaiting otp') || 
           s.includes('fetching') || 
           s.includes('verifying');
  };

  useEffect(() => {
    const timers = [];
    service.reqs.forEach((req) => {
      const current = stepIndices[req.id] || 0;
      const stateStr = req.states[current];
      
      if (isAutoState(stateStr) && current < req.states.length - 1) {
        const timer = setTimeout(() => {
          setStepIndices(prev => ({
            ...prev,
            [req.id]: current + 1
          }));
        }, 3000); 
        timers.push(timer);
      }
    });

    return () => timers.forEach(t => clearTimeout(t));
  }, [stepIndices, service.reqs]);

  const advanceStep = (reqId, maxSteps, e, isAuto) => {
    e.stopPropagation();
    if (isAuto) return; 
    setStepIndices(prev => {
      const current = prev[reqId] || 0;
      return { ...prev, [reqId]: Math.min(current + 1, maxSteps - 1) };
    });
  };

  const total = service.reqs.length;
  const completed = service.reqs.filter(r => (stepIndices[r.id] || 0) === r.states.length - 1).length;
  const progressPercent = total === 0 ? 0 : Math.round((completed / total) * 100);
  const isComplete = progressPercent === 100;

  const getAccentColor = (cat) => cat === 'SARATHI' ? 'bg-neon-purple' : 'bg-neon-cyan';
  const getTextColor = (cat) => cat === 'SARATHI' ? 'text-neon-purple' : 'text-neon-cyan';
  const getButtonBorderColor = (cat) => cat === 'SARATHI' ? 'border-neon-purple text-neon-purple' : 'border-neon-cyan text-neon-cyan';

  return (
    <div className={`bg-slate-900 border transition-colors relative overflow-hidden rounded ${expanded ? 'border-slate-500' : 'border-slate-700 hover:border-slate-600'}`}>
      <div className={`absolute left-0 top-0 w-1 h-full ${getAccentColor(service.category)}`}></div>
      
      <div className="p-5 pl-6 cursor-pointer flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4" onClick={() => setExpanded(!expanded)}>
        <div className="flex-1">
          <h3 className="text-white font-bold text-sm sm:text-base flex flex-wrap items-center gap-2">
            {service.title}
            {isComplete && <span className="text-neon-green text-xs bg-green-900/30 px-2 py-0.5 rounded border border-neon-green">✔ READY</span>}
          </h3>
          <span className={`text-[10px] font-bold uppercase px-2 py-0.5 mt-2 inline-block bg-slate-800 ${getTextColor(service.category)}`}>
            {service.category}
          </span>
        </div>
        
        <div className="w-full sm:w-32 flex-shrink-0">
          <div className="flex justify-between text-xs mb-1 font-tech">
            <span className="text-slate-400">Prog.</span>
            <span className={isComplete ? 'text-neon-green' : 'text-slate-300'}>{progressPercent}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded overflow-hidden">
            <div className={`h-full transition-all duration-500 ${isComplete ? 'bg-neon-green shadow-[0_0_10px_#00ff66]' : 'bg-slate-400'}`} style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>
      </div>

      {expanded && (
        <div className="px-6 pb-6 pt-4 border-t border-slate-800 bg-[#0a1120]">
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-4 font-bold">Protocol Execution Steps:</p>
          <div className="space-y-3">
            {service.reqs.map((req) => {
              const currentStepIndex = stepIndices[req.id] || 0;
              const isReqComplete = currentStepIndex === req.states.length - 1;
              const isAuto = isAutoState(req.states[currentStepIndex]);
              
              return (
                <div key={req.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-slate-800/50 rounded border border-slate-700/50">
                  <span className={`text-sm transition-colors ${isReqComplete ? 'text-slate-500 line-through' : 'text-slate-200'}`}>
                    {req.text}
                  </span>
                  <button 
                    onClick={(e) => advanceStep(req.id, req.states.length, e, isAuto)}
                    disabled={isReqComplete || isAuto}
                    className={`px-4 py-2 text-[10px] sm:text-xs font-bold font-tech rounded border transition-all whitespace-nowrap min-w-[120px] text-center
                      ${isReqComplete 
                        ? 'bg-green-900/20 text-neon-green border-neon-green/50 cursor-default shadow-[0_0_10px_rgba(0,255,102,0.1)]' 
                        : isAuto
                        ? 'bg-yellow-900/20 text-yellow-400 border-yellow-500 animate-pulse cursor-wait'
                        : currentStepIndex > 0
                        ? 'bg-yellow-900/20 text-yellow-400 border-yellow-500 hover:bg-yellow-900/40' 
                        : `bg-transparent ${getButtonBorderColor(service.category)} hover:bg-slate-800`
                      }
                    `}
                  >
                    {req.states[currentStepIndex]}
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

/* UI Helper Component */
function NavBtn({ active, icon, children, onClick }) {
  return (
    <button onClick={onClick} className={`w-full text-left px-4 py-3 font-hud text-lg tracking-wider border-l-2 transition-all glitch-hover ${active ? 'border-neon-cyan bg-neon-cyan/10 text-white' : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'}`}>
      <span className="mr-3">{icon}</span>{children}
    </button>
  );
}