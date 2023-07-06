'use client';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'

function Calc() {

  // Theme setup and loading
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Calculator functionality
  const [screenNum, setScreenNum] = useState(0);
  const [nextNum, setNextNum] = useState('');
  const [startedNextNum, setStartedNextNum] = useState(false);
  const [operand, setOperand] = useState('');
  
  const appendNum = (e) => {
    var num = 0

    // Check first if an operand was already picked
    if (operand != '') {
      if (startedNextNum == false) {
        num = "" + e.currentTarget.value;

        setScreenNum(num.toLocaleString('en-US'));

        setStartedNextNum(true);
      } else {
        num = screenNum + e.currentTarget.value;

        setScreenNum(num.toLocaleString('en-US'));
      }
    } else {
      if (screenNum === 0) {
        num = "" + e.currentTarget.value;
  
        setScreenNum(num.toLocaleString('en-US'));
      } else {
        num = screenNum + e.currentTarget.value;
  
        setScreenNum(num.toLocaleString('en-US'));
      }
    }
  }

  const removeNum = () => {
    if (screenNum != 0 && screenNum.slice !== "undefined") {
      var modifiedNum = screenNum.slice(0, -1)
      setScreenNum(modifiedNum);
    }
    
    if (modifiedNum != null && modifiedNum.length == 0) {
      setScreenNum(0);
    }
  }

  const pickOperand = (e) => {
    if (startedNextNum) {
      var result = doMath();
      setScreenNum(result);
      setNextNum(result);
      setStartedNextNum(false);
      setOperand(e.currentTarget.value);
    } else {
      setOperand(e.currentTarget.value);
      setNextNum(screenNum);
    }
  }

  const doMath = () => {
    var solution = 0;

    if (operand == "+") {
      solution = parseFloat(nextNum) + parseFloat(screenNum);
    } else if (operand == "-") {
      solution = parseFloat(nextNum) - parseFloat(screenNum);
    } else if (operand == "x") {
      solution = parseFloat(nextNum) * parseFloat(screenNum);
    } else if (operand == "/") {
      solution = parseFloat(nextNum) / parseFloat(screenNum);
    }

    return Math.round(solution * 100000) / 100000
  }

  const equals = () => {
    setScreenNum(doMath());
    setStartedNextNum(false);
    setOperand('');
  }

  const reset = () => {
    setScreenNum(0);
    setNextNum('');
    setStartedNextNum(false);
    setOperand('');
  }

  // Make sure calc component is ready to load
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <>
      </>
    )
  }

  return (
    <div className="relative min-h-full w-full rounded-lg md:w-[38vw] xl:w-[28vw]">
      <div className="flex flex-col">

        <div className="flex flex-row items-end justify-between">
          <div className="basis-1/2 flex-1 grid grid-cols-2">
            <div className="flex h-10 items-start justify-left">
              <h1 className="text-th-TextHeader text-3xl">calc</h1>
            </div>
            <div className="flex h-10 items-end justify-end">
              <h1 className="text-th-TextHeader text-xs pr-4 tracking-widest">THEME</h1>
              <div className="flex flex-col">
                <div className="flex flex-row items-center justify-between pb-1 px-2">
                  <h1 className="text-th-TextHeader text-xs">1</h1>
                  <h1 className="text-th-TextHeader text-xs">2</h1>
                  <h1 className="text-th-TextHeader text-xs">3</h1>
                </div>

                <div className="switch-toggle switch-3 switch-candy h-5 !bg-th-KeypadBg">
                  <input id="on" name="state-d" type="radio" checked={theme === "one"} />
                  <label for="on" className="text-sm opacity-0" onClick={()=> setTheme("one")}>1</label>

                  <input id="na" name="state-d" type="radio" checked={theme === "two"} />
                  <label for="na" className="text-sm opacity-0" onClick={()=> setTheme("two")}>2</label>

                  <input id="off" name="state-d" type="radio" checked={theme === "three"} />
                  <label for="off" className="text-sm opacity-0" onClick={()=> setTheme("three")}>3</label>

                  <a className="toggle-circle !text-th-KeyEqualsBg hover:!text-th-KeyEqualsBgHover"></a>
                </div>
              </div>
              
            </div>
          </div>

        </div>

        <div className="flex flex-row justify-end bg-th-ScreenBg mt-6 p-8 rounded-lg">
          <h1 className="flex text-th-TextHeader text-4xl md:text-5xl">{ screenNum }</h1>
        </div>

        <div className="flex flex-row bg-th-KeypadBg mt-5 p-6 rounded-lg md:p-8">
          <div className="grid grid-cols-4 gap-3 w-full md:gap-6">
            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button" value="7" onClick={e => appendNum(e)}>
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">7</div>
            </button>

            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button" value="8" onClick={e => appendNum(e)}>
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">8</div>
            </button>

            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button" value="9" onClick={e => appendNum(e)}>
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">9</div>
            </button>

            <button className="pb-1 bg-th-KeyEditShadow rounded-lg" type="button" onClick={() => removeNum()}>
              <div className="h-full py-5 pb-3 bg-th-KeyEditBg rounded-lg text-th-TextEditBtn text-2xl md:py-4 md:pb-2 hover:bg-th-KeyEditBgHover">DEL</div>
            </button>

            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button" value="4" onClick={e => appendNum(e)}>
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">4</div>
            </button>

            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button" value="5" onClick={e => appendNum(e)}>
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">5</div>
            </button>

            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button" value="6" onClick={e => appendNum(e)}>
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">6</div>
            </button>

            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button" value="+" onClick={e => pickOperand(e)}>
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">+</div>
            </button>

            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button" value="1" onClick={e => appendNum(e)}>
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">1</div>
            </button>

            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button" value="2" onClick={e => appendNum(e)}>
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">2</div>
            </button>

            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button" value="3" onClick={e => appendNum(e)}>
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">3</div>
            </button>

            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button" value="-" onClick={e => pickOperand(e)}>
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">-</div>
            </button>

            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button" value="." onClick={e => appendNum(e)}>
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">.</div>
            </button>

            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button" value="0" onClick={e => appendNum(e)}>
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">0</div>
            </button>

            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button" value="/" onClick={e => pickOperand(e)}>
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">/</div>
            </button>

            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button" value="x" onClick={e => pickOperand(e)}>
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">x</div>
            </button>

            <button className="pb-1 bg-th-KeyEditShadow rounded-lg col-span-2" type="button" onClick={() => reset()}>
              <div className="h-full py-5 pb-3 bg-th-KeyEditBg rounded-lg text-th-TextEditBtn text-2xl md:py-4 md:pb-2 hover:bg-th-KeyEditBgHover">RESET</div>
            </button>
            
            <button className="pb-1 bg-th-KeyEqualsShadow rounded-lg col-span-2" type="button" onClick={() => equals()}>
              <div className="h-full py-5 pb-3 bg-th-KeyEqualsBg rounded-lg text-th-TextEqualsBtn text-2xl md:py-4 md:pb-2 hover:bg-th-KeyEqualsBgHover">=</div>
            </button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Calc;