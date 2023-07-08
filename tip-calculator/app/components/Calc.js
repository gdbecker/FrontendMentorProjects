'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import IconDollar from '../../public/icon-dollar.svg';
import IconPerson from '../../public/icon-person.svg';

function Calc() {

  const [selectedTip, setSelectedTip] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [tipPerPerson, setTipPerPerson] = useState('');
  const [totalPerPerson, setTotalPerPerson] = useState('');

  const tipButtonClick = (e) => {
    setSelectedTip(e.currentTarget.value);
  }

  const onChangeNumPeople = (e) => {
    setNumPeople(e.target.value);
  }

  return (
    <div className="flex flex-col w-screen p-8 bg-white rounded-tl-xl rounded-tr-xl md:flex-row md:w-[75%] md:rounded-xl xl:w-[60%]">
      <div className="flex flex-col bg-white w-full md:pr-8">
        <div className="mb-10">
          <label className="block text-grayishCyan-300 text-left text-sm mb-2" htmlFor="bill">
            Bill
          </label>
          <div className="absolute h-3 pointer-events-none transform translate-y-4 left-12 md:left-[21.4%] lg:left-[20%] xl:left-[25%]">
            <Image src={IconDollar} alt="Icon" width={12} height={12} className=""/>
          </div>
          <input 
            className="w-full border-white border-t-2 border-b-2 bg-grayishCyan-100 text-veryDarkCyan text-xl text-right py-2 px-3 rounded-md focus:outline-none focus:border-2 focus:border-strongCyan focus:ring-0" 
            id="bill" 
            type="text" 
            placeholder="0" 
            required
          />
        </div>

        <div className="mb-10">
          <label className="block pb-1 text-grayishCyan-300 text-left text-sm mb-2" htmlFor="tip">
            Select Tip %
          </label>
          <div className="grid grid-cols-2 gap-3 w-full md:grid-cols-3">
            <button 
              className={"h-full py-2 text-xl rounded-md border-white border-t-2 border-b-2 hover:bg-grayishCyan-200 hover:text-veryDarkCyan " + (selectedTip == "5" ? "bg-strongCyan text-veryDarkCyan" : "bg-veryDarkCyan text-white") }
              type="button" 
              value="5" 
              onClick={e => tipButtonClick(e)}>
              5%
            </button>

            <button 
              className={"h-full py-2 text-xl rounded-md border-white border-t-2 border-b-2 hover:bg-grayishCyan-200 hover:text-veryDarkCyan " + (selectedTip == "10" ? "bg-strongCyan text-veryDarkCyan" : "bg-veryDarkCyan text-white") }
              type="button" 
              value="10" 
              onClick={e => tipButtonClick(e)}>
              10%
            </button>

            <button 
              className={"h-full py-2 text-xl rounded-md border-white border-t-2 border-b-2 hover:bg-grayishCyan-200 hover:text-veryDarkCyan " + (selectedTip == "15" ? "bg-strongCyan text-veryDarkCyan" : "bg-veryDarkCyan text-white") }
              type="button" 
              value="15" 
              onClick={e => tipButtonClick(e)}>
              15%
            </button>

            <button 
              className={"h-full py-2 text-xl rounded-md border-white border-t-2 border-b-2 hover:bg-grayishCyan-200 hover:text-veryDarkCyan " + (selectedTip == "25" ? "bg-strongCyan text-veryDarkCyan" : "bg-veryDarkCyan text-white") }
              type="button" 
              value="25" 
              onClick={e => tipButtonClick(e)}>
              25%
            </button>

            <button 
              className={"h-full py-2 text-xl rounded-md border-white border-t-2 border-b-2 hover:bg-grayishCyan-200 hover:text-veryDarkCyan " + (selectedTip == "50" ? "bg-strongCyan text-veryDarkCyan" : "bg-veryDarkCyan text-white") }
              type="button" 
              value="50" 
              onClick={e => tipButtonClick(e)}>
              50%
            </button>

            <input 
              className="w-full border-white border-t-2 border-b-2 bg-grayishCyan-100 text-veryDarkCyan text-xl text-right py-2 px-3 rounded-md focus:outline-none focus:border-2 focus:border-strongCyan focus:ring-0" 
              id="custom" 
              type="text" 
              placeholder="Custom" 
            />
          </div>
        </div>

        <div className="mb-8 md:mb-0">
          <div className="flex flex-row justify-between">
            <label className="block text-grayishCyan-300 text-left text-sm mb-2" htmlFor="people">
              Number of People
            </label>
            <label className={"block text-sm mb-2 " + (numPeople == "0" ? "text-error" : "text-white")}>
              Can't be zero
            </label>
          </div>
          
          <div className="absolute h-3 w-3 pointer-events-none transform translate-y-4 left-12 md:left-[21.4%] lg:left-[20%] xl:left-[25%]">
            <Image src={IconPerson} alt="Icon" width={12} height={12} className=""/>
          </div>
          <input 
            className={"w-full border-white border-t-2 border-b-2 bg-grayishCyan-100 text-veryDarkCyan text-xl text-right py-2 px-3 rounded-md focus:outline-none focus:border-2 focus:border-strongCyan focus:ring-0 " + (numPeople == "0" ? "border-error border-2 focus:border-error" : "")} 
            id="people" 
            type="text" 
            placeholder="0"
            value={numPeople}
            onChange={e => onChangeNumPeople(e)}
            required
          />
        </div>
      </div>

      <div className="flex flex-col w-full min-h-max p-8 bg-veryDarkCyan rounded-xl justify-between">
        <div className="flex flex-col md:pt-6">
          <div className="flex flex-row justify-between pb-10">
            <div className="flex flex-col items-start justify-center text-left">
              <h1 className="text-white text-sm">Tip Amount</h1>
              <h2 className="text-grayishCyan-300 text-xs">/ person</h2>
            </div>
            <h1 className="flex items-center text-strongCyan text-3xl md:text-4xl">$0.00</h1>
          </div>

          <div className="flex flex-row justify-between pb-10 md:pb-0">
            <div className="flex flex-col items-start justify-center text-left">
              <h1 className="text-white text-sm">Total</h1>
              <h2 className="text-grayishCyan-300 text-xs">/ person</h2>
            </div>
            <h1 className="flex items-center text-strongCyan text-3xl md:text-4xl">$0.00</h1>
          </div>
        </div>

        <div className="flex flex-row md:align-bottom">
          <button className="w-full h-full py-2 text-center text-xl text-veryDarkCyan bg-strongCyan rounded-md hover:bg-grayishCyan-200">
            RESET
          </button>
        </div>
      </div>

      
    </div>
  )
}

export default Calc;