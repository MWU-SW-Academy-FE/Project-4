import * as React from 'react';


function Header() {
    return ( 
      <div className="p-10 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div className="shrink-0">
    <img className="h-19 w-24" src="src\img\gymicon.png" alt="ChitChat Logo" />
  </div>
  <div>
    <div className="text-xl font-medium text-black">운동 기록 사이트</div>
    <p className="text-slate-500">당신의 운동을 기록하세요!</p>
  </div>
</div>
     );
}

export default Header;