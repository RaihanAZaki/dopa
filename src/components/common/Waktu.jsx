import React, { useState, useEffect } from "react";

const TimeElapsed = () => {
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    // Periksa apakah waktu mulai sudah ada di localStorage
    let startTime = localStorage.getItem("startTime");

    if (!startTime) {
      // Jika tidak ada, simpan waktu mulai baru
      startTime = Date.now();
      localStorage.setItem("startTime", startTime);
    }

    const interval = setInterval(() => {
      const now = Date.now();
      const elapsed = Math.floor((now - startTime) / 1000); // Selisih dalam detik
      setTimeElapsed(elapsed); // Perbarui waktu
    }, 1000);

    // Membersihkan interval ketika komponen di-unmount
    return () => clearInterval(interval);
  }, []);

  // Konversi detik menjadi jam, menit, dan detik
  const hours = Math.floor(timeElapsed / 3600);
  const minutes = Math.floor((timeElapsed % 3600) / 60);
  const seconds = timeElapsed % 60;

  return (
    <div>
        {hours} Hours {minutes} Minutes {seconds} Seconds
    </div>
  );
};

export default TimeElapsed;
