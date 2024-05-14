import React, { useState } from 'react';
import './Over.css';

const Over = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && <div className="over-overlay"></div>}

      <div className={`over-ctn ${showPopup ? 'visible' : 'hidden'}`}>
        <div className="popup-content">
          <h2 className='over-title'>Chers visiteurs</h2>
          <p className="over-txt">Ce projet n'a finalement pas pu voir le jour.</p>
          <p className="over-txt">Lucie laisse cependant l'accès au site pour avoir accès aux informations.</p>
          <button onClick={handleClosePopup}>Fermer</button>
        </div>
      </div>
    </div>
  );
}

export default Over;
