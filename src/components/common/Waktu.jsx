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

    const calculateElapsedTime = () => {
      const now = Date.now(); // Waktu saat ini
      const elapsed = Math.floor((now - startTime) / 1000); // Selisih dalam detik
      setTimeElapsed(elapsed); // Perbarui state
    };

    // Hitung waktu setiap detik
    const interval = setInterval(calculateElapsedTime, 1000);

    // Hitung waktu segera saat komponen dimuat (agar tidak menunggu 1 detik pertama)
    calculateElapsedTime();

    // Bersihkan interval saat komponen di-unmount
    return () => clearInterval(interval);
  }, []);

  // Konversi detik menjadi hari, jam, menit, dan detik
  const days = Math.floor(timeElapsed / 86400); // 1 hari = 86400 detik
  const hours = Math.floor((timeElapsed % 86400) / 3600); // Sisa detik setelah hari
  const minutes = Math.floor((timeElapsed % 3600) / 60); // Sisa detik setelah jam
  const seconds = timeElapsed % 60; // Sisa detik setelah menit

  return (
    <div>
        {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds
    </div>
  );
};

export default TimeElapsed;
