import React from 'react';
import Calc from './components/Calc';

function Home() {

  return (
    <main className="min-h-screen font-leagueSpartanBold">
      <div className="flex flex-col text-center items-center justify-center py-32">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-theme1TextWhite">calc</h1>

          <div class="switch-toggle switch-3 switch-candy">
            <input id="on" name="state-d" type="radio" checked="" />
            <label for="on" onclick="">ON</label>

            <input id="na" name="state-d" type="radio" disabled checked="checked" />
            <label for="na" class="disabled" onclick="">&nbsp;</label>

            <input id="off" name="state-d" type="radio" />
            <label for="off" onclick="">OFF</label>

            <a></a>
          </div>

        </div>

        <Calc />
      </div>
    </main>
  )
}

export default Home;