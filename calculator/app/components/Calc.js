'use client';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'

function Calc() {

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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
                  <input id="on" name="state-d" type="radio" checked={theme === 'one'} />
                  <label for="on" className="text-sm opacity-0" onClick={()=> setTheme('one')}>1</label>

                  <input id="na" name="state-d" type="radio" checked={theme === 'two'} />
                  <label for="na" className="text-sm opacity-0" onClick={()=> setTheme('two')}>2</label>

                  <input id="off" name="state-d" type="radio" checked={theme === 'three'} />
                  <label for="off" className="text-sm opacity-0" onClick={()=> setTheme('three')}>3</label>

                  <a className="toggle-circle !text-th-KeyEqualsBg hover:!text-th-KeyEqualsBgHover"></a>
                </div>
              </div>
              
            </div>
          </div>

        </div>

        <div className="flex flex-row justify-end bg-th-ScreenBg mt-6 p-8 rounded-lg">
          <h1 className="flex text-th-TextHeader text-4xl md:text-5xl">399,981</h1>
        </div>

        <div className="flex flex-row bg-th-KeypadBg mt-5 p-6 rounded-lg md:p-8">
          <div className="grid grid-cols-4 gap-3 w-full md:gap-6">
            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button">
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">7</div>
            </button>

            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button">
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">8</div>
            </button>

            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button">
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">9</div>
            </button>

            <button className="pb-1 bg-th-KeyEditShadow rounded-lg" type="button">
              <div className="h-full py-5 pb-3 bg-th-KeyEditBg rounded-lg text-th-TextEditBtn text-2xl md:py-4 md:pb-2 hover:bg-th-KeyEditBgHover">DEL</div>
            </button>

            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button">
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">4</div>
            </button>

            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button">
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">5</div>
            </button>

            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button">
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">6</div>
            </button>

            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button">
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">+</div>
            </button>

            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button">
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">1</div>
            </button>

            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button">
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">2</div>
            </button>

            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button">
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">3</div>
            </button>

            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button">
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">-</div>
            </button>

            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button">
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">.</div>
            </button>

            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button">
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">0</div>
            </button>

            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button">
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">/</div>
            </button>

            <button className="pb-1 bg-th-KeyMainShadow rounded-lg" type="button">
              <div className="h-full p-4 pb-3 bg-th-KeyMainBg rounded-lg text-th-TextMainBtn text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-th-KeyMainBgHover">x</div>
            </button>

            <button className="pb-1 bg-th-KeyEditShadow rounded-lg col-span-2" type="button">
              <div className="h-full py-5 pb-3 bg-th-KeyEditBg rounded-lg text-th-TextEditBtn text-2xl md:py-4 md:pb-2 hover:bg-th-KeyEditBgHover">RESET</div>
            </button>
            
            <button className="pb-1 bg-th-KeyEqualsShadow rounded-lg col-span-2" type="button">
              <div className="h-full py-5 pb-3 bg-th-KeyEqualsBg rounded-lg text-th-TextEqualsBtn text-2xl md:py-4 md:pb-2 hover:bg-th-KeyEqualsBgHover">=</div>
            </button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Calc;