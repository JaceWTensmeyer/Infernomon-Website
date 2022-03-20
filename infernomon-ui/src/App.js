import React, { useState } from 'react'

import { About } from '../src/Components/About'
import { Infernomon } from '../src/Components/Infernomon'
import { Dungeons } from '../src/Components/Dungeons'
import { Battling } from '../src/Components/Battling'
import { Majors } from '../src/Components/Majors'
import { AuctionHouse } from '../src/Components/AuctionHouse'
import { Attacks } from '../src/Components/Attacks'
import { Items } from '../src/Components/Items'

import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState("About")
  return (
    <div className="App">
      <div className="title">Infernomon</div>
      <div className='tabContainer'>
        <div className={activeTab === "About" ? "tabSelected" : "tab"} onClick={() => setActiveTab("About")}>About</div>
        <div className={activeTab === "Infernomon" ? "tabSelected" : "tab"} onClick={() => setActiveTab("Infernomon")}>Infernomon</div>
        <div className={activeTab === "Dungeons" ? "tabSelected" : "tab"} onClick={() => setActiveTab("Dungeons")}>Dungeons</div>
        <div className={activeTab === "Battling" ? "tabSelected" : "tab"} onClick={() => setActiveTab("Battling")}>Battling</div>
        <div className={activeTab === "Majors" ? "tabSelected" : "tab"} onClick={() => setActiveTab("Majors")}>Majors</div>
        <div className={activeTab === "AuctionHouse" ? "tabSelected" : "tab"} onClick={() => setActiveTab("AuctionHouse")}>Auction House</div>
        <div className={activeTab === "Attacks" ? "tabSelected" : "tab"} onClick={() => setActiveTab("Attacks")}>Attacks</div>
        <div className={activeTab === "Items" ? "tabSelected" : "tab"} onClick={() => setActiveTab("Items")}>Items</div>
      </div>
      {activeTab === "About" ? <About /> : <div></div>}
      {activeTab === "Infernomon" ? <Infernomon /> : <div></div>}
      {activeTab === "Dungeons" ? <Dungeons /> : <div></div>}
      {activeTab === "Battling" ? <Battling /> : <div></div>}
      {activeTab === "Majors" ? <Majors /> : <div></div>}
      {activeTab === "AuctionHouse" ? <AuctionHouse /> : <div></div>}
      {activeTab === "Attacks" ? <Attacks /> : <div></div>}
      {activeTab === "Items" ? <Items /> : <div></div>}
    </div>
  );
}

export default App;
