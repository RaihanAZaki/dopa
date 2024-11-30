import React, { useState, useEffect } from "react";

const Waktu = () => {
  const [timeElapsed, setTimeElapsed] = useState(0);

  const SERVER_START_TIME = 1698787200000;

  useEffect(() => {
    let startTime = localStorage.getItem("startTime");

    if (!startTime) {
      startTime = SERVER_START_TIME;
      localStorage.setItem("startTime", startTime);
    }

    const interval = setInterval(() => {
      const now = Date.now(); 
      const elapsed = Math.floor((now - startTime) / 1000); 
      setTimeElapsed(elapsed); 
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeElapsed / 86400);
  const hours = Math.floor((timeElapsed % 86400) / 3600); 
  const minutes = Math.floor((timeElapsed % 3600) / 60); 
  const seconds = timeElapsed % 60; 

  return (
    <div>
        {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds
    </div>
  );
};

export default Waktu;
