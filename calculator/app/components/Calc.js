'use client';
import React, { useState } from 'react';

function Calc() {

  

  return (
    <div className="relative min-h-full w-full rounded-lg md:w-[38vw] xl:w-[28vw]">
      <div className="flex flex-col">

        <div className="flex flex-row items-end justify-between">
          <div className="basis-1/2 flex-1 grid grid-cols-2">
            <div className="flex h-10 items-start justify-left">
              <h1 className="text-theme1TextWhite text-3xl">calc</h1>
            </div>
            <div className="flex h-10 items-end justify-end">
              <h1 className="text-theme1TextWhite text-xs pr-4 tracking-widest">THEME</h1>
              <div className="flex flex-col">
                <div className="flex flex-row items-center justify-between pb-1 px-2">
                  <h1 className="text-theme1TextWhite text-xs">1</h1>
                  <h1 className="text-theme1TextWhite text-xs">2</h1>
                  <h1 className="text-theme1TextWhite text-xs">3</h1>
                </div>

                <div className="switch-toggle switch-3 switch-candy h-5">
                  <input id="on" className="bg-theme1KeyEqualsBg" name="state-d" type="radio" checked="checked" />
                  <label for="on" className="text-sm opacity-0" onclick="">1</label>

                  <input id="na" name="state-d" type="radio" checked="checked" />
                  <label for="na" className="text-sm opacity-0" onclick="">2</label>

                  <input id="off" name="state-d" type="radio" />
                  <label for="off" className="text-sm opacity-0" onclick="">3</label>

                  <a></a>
                </div>
              </div>
              
            </div>
          </div>

        </div>

        <div className="flex flex-row justify-end bg-theme1ScreenBg mt-5 p-8 rounded-lg">
          <h1 className="flex text-theme1TextWhite text-4xl md:text-5xl">399,981</h1>
        </div>

        <div className="flex flex-row bg-theme1KeypadBg mt-5 p-6 rounded-lg md:p-8">
          <div className="grid grid-cols-4 gap-3 w-full md:gap-6">
            <div className="pb-1 bg-theme1KeyMainShadow rounded-lg">
              <div className="h-full p-4 pb-3 bg-theme1KeyMainBg rounded-lg text-theme1TextDark text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-theme1KeyMainBgHover">7</div>
            </div>

            <div className="pb-1 bg-theme1KeyMainShadow rounded-lg">
              <div className="h-full p-4 pb-3 bg-theme1KeyMainBg rounded-lg text-theme1TextDark text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-theme1KeyMainBgHover">8</div>
            </div>

            <div className="pb-1 bg-theme1KeyMainShadow rounded-lg">
              <div className="h-full p-4 pb-3 bg-theme1KeyMainBg rounded-lg text-theme1TextDark text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-theme1KeyMainBgHover">9</div>
            </div>

            <div className="pb-1 bg-theme1KeyEditShadow rounded-lg">
              <div className="h-full py-5 pb-3 bg-theme1KeyEditBg rounded-lg text-theme1TextWhite text-2xl md:py-4 md:pb-2 hover:bg-theme1KeyEditBgHover">DEL</div>
            </div>

            <div className="pb-1 bg-theme1KeyMainShadow rounded-lg">
              <div className="h-full p-4 pb-3 bg-theme1KeyMainBg rounded-lg text-theme1TextDark text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-theme1KeyMainBgHover">4</div>
            </div>

            <div className="pb-1 bg-theme1KeyMainShadow rounded-lg">
              <div className="h-full p-4 pb-3 bg-theme1KeyMainBg rounded-lg text-theme1TextDark text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-theme1KeyMainBgHover">5</div>
            </div>

            <div className="pb-1 bg-theme1KeyMainShadow rounded-lg">
              <div className="h-full p-4 pb-3 bg-theme1KeyMainBg rounded-lg text-theme1TextDark text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-theme1KeyMainBgHover">6</div>
            </div>

            <div className="pb-1 bg-theme1KeyMainShadow rounded-lg">
              <div className="h-full p-4 pb-3 bg-theme1KeyMainBg rounded-lg text-theme1TextDark text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-theme1KeyMainBgHover">+</div>
            </div>

            <div className="pb-1 bg-theme1KeyMainShadow rounded-lg">
              <div className="h-full p-4 pb-3 bg-theme1KeyMainBg rounded-lg text-theme1TextDark text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-theme1KeyMainBgHover">1</div>
            </div>

            <div className="pb-1 bg-theme1KeyMainShadow rounded-lg">
              <div className="h-full p-4 pb-3 bg-theme1KeyMainBg rounded-lg text-theme1TextDark text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-theme1KeyMainBgHover">2</div>
            </div>

            <div className="pb-1 bg-theme1KeyMainShadow rounded-lg">
              <div className="h-full p-4 pb-3 bg-theme1KeyMainBg rounded-lg text-theme1TextDark text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-theme1KeyMainBgHover">3</div>
            </div>

            <div className="pb-1 bg-theme1KeyMainShadow rounded-lg">
              <div className="h-full p-4 pb-3 bg-theme1KeyMainBg rounded-lg text-theme1TextDark text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-theme1KeyMainBgHover">-</div>
            </div>

            <div className="pb-1 bg-theme1KeyMainShadow rounded-lg">
              <div className="h-full p-4 pb-3 bg-theme1KeyMainBg rounded-lg text-theme1TextDark text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-theme1KeyMainBgHover">.</div>
            </div>

            <div className="pb-1 bg-theme1KeyMainShadow rounded-lg">
              <div className="h-full p-4 pb-3 bg-theme1KeyMainBg rounded-lg text-theme1TextDark text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-theme1KeyMainBgHover">0</div>
            </div>

            <div className="pb-1 bg-theme1KeyMainShadow rounded-lg">
              <div className="h-full p-4 pb-3 bg-theme1KeyMainBg rounded-lg text-theme1TextDark text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-theme1KeyMainBgHover">/</div>
            </div>

            <div className="pb-1 bg-theme1KeyMainShadow rounded-lg">
              <div className="h-full p-4 pb-3 bg-theme1KeyMainBg rounded-lg text-theme1TextDark text-4xl md:text-4xl md:p-3 md:pb-1 hover:bg-theme1KeyMainBgHover">x</div>
            </div>

            <div className="pb-1 bg-theme1KeyEditShadow rounded-lg col-span-2">
              <div className="h-full py-5 pb-3 bg-theme1KeyEditBg rounded-lg text-theme1TextWhite text-2xl md:py-4 md:pb-2 hover:bg-theme1KeyEditBgHover">RESET</div>
            </div>
            
            <div className="pb-1 bg-theme1KeyEqualsShadow rounded-lg col-span-2">
              <div className="h-full py-5 pb-3 bg-theme1KeyEqualsBg rounded-lg text-theme1TextWhite text-2xl md:py-4 md:pb-2 hover:bg-theme1KeyEqualsBgHover">=</div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Calc;