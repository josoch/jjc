import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <div className="bg-purple-700 text-white p-4 rounded-xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="rounded-full"
            />
            <div>
              <h2 className="text-lg font-bold">Themesflat</h2>
              <p className="text-sm">Let's save your money!</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <span className="absolute top-0 right-0 bg-red-500 rounded-full text-xs text-white w-5 h-5 flex items-center justify-center">2</span>
              <i className="fas fa-bell"></i>
            </div>
            <i className="fas fa-user-circle text-2xl"></i>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div>
            <p>Your Balance:</p>
            <h3 className="text-2xl font-bold">$3,466.9</h3>
          </div>
          <div className="text-center">
            <p>Reward</p>
            <h3 className="text-2xl font-bold">307 Points</h3>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-around mt-6">
        <ActionButton icon="fas fa-exchange-alt" text="Transfer" />
        <ActionButton icon="fas fa-mobile-alt" text="Top up" />
        <ActionButton icon="fas fa-credit-card" text="Card" />
        <ActionButton icon="fas fa-qrcode" text="My QR" />
      </div>

      {/* Services */}
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">Your service</h3>
          <a href="#" className="text-purple-700">View All</a>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <ServiceButton icon="fas fa-mobile-alt" text="Mobile" />
          <ServiceButton icon="fas fa-wifi" text="Internet" />
          <ServiceButton icon="fas fa-file-invoice-dollar" text="Bill" />
          <ServiceButton icon="fas fa-bolt" text="Electricity" />
          <ServiceButton icon="fas fa-film" text="Film" />
          <ServiceButton icon="fas fa-tint" text="Water bill" />
          <ServiceButton icon="fas fa-ticket-alt" text="Voucher" />
          <ServiceButton icon="fas fa-store" text="Market" />
        </div>
      </div>

      {/* Latest Recipient */}
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">Latest Recipient</h3>
          <a href="#" className="text-purple-700">View All</a>
        </div>
        <div className="flex mt-4 space-x-4">
          <Recipient imgSrc="https://via.placeholder.com/40" name="Esther" />
          <Recipient imgSrc="https://via.placeholder.com/40" name="Hawkins" />
          <Recipient imgSrc="https://via.placeholder.com/40" name="Jenny" />
          <Recipient imgSrc="https://via.placeholder.com/40" name="Leslie" />
          <Recipient imgSrc="https://via.placeholder.com/40" name="Jerome" />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow p-4 flex justify-around">
        <NavButton icon="fas fa-home" text="Home" />
        <NavButton icon="fas fa-history" text="History" />
        <NavButton icon="fas fa-gift" text="Rewards" />
        <NavButton icon="fas fa-user" text="Profile" />
      </div>
    </div>
  );
};

const ActionButton = ({ icon, text }) => (
  <div className="flex flex-col items-center">
    <div className="bg-white p-4 rounded-full shadow">
      <i className={`${icon} text-purple-700 text-xl`}></i>
    </div>
    <p className="mt-2 text-sm">{text}</p>
  </div>
);

const ServiceButton = ({ icon, text }) => (
  <div className="flex flex-col items-center">
    <div className="bg-white p-4 rounded-full shadow">
      <i className={`${icon} text-purple-700 text-xl`}></i>
    </div>
    <p className="mt-2 text-sm">{text}</p>
  </div>
);

const Recipient = ({ imgSrc, name }) => (
  <div className="flex flex-col items-center">
    <img src={imgSrc} alt={name} className="rounded-full w-10 h-10" />
    <p className="mt-2 text-sm">{name}</p>
  </div>
);

const NavButton = ({ icon, text }) => (
  <div className="flex flex-col items-center">
    <i className={`${icon} text-xl`}></i>
    <p className="text-xs mt-1">{text}</p>
  </div>
);

export default App;
