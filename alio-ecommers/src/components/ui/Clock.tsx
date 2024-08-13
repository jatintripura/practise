import { useEffect, useState } from "react";

function Clock() {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  let interval;
  const counDown = () => {
    const destination = new Date("Aug 01, 2024").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = now - destination;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((different % (1000 * 60)) / 1000);

      if (destination < 0) clearInterval(interval.current);
      else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    counDown();
  });
  return (
    <>
      <div className="flex items-center gap-x-6 py-4 mb-2">
        <div className="flex items-center justify-start text-white gap-x-6 ">
          <div>
            <h3 className="text-2xl font-bold text-center">{days}</h3>
            <h3 className="text-lg font-medium">Days</h3>
          </div>
          <div>
            <span className="text-xl font-medium">: </span>
          </div>
        </div>
        <div className="flex items-center justify-start text-white gap-x-6 ">
          <div>
            <h3 className="text-2xl font-bold text-center">{hours}</h3>
            <h3 className="text-lg font-medium">Hours</h3>
          </div>
          <div>
            <span className="text-xl font-medium">: </span>
          </div>
        </div>
        <div className="flex items-center justify-start text-white gap-x-6 ">
          <div>
            <h3 className="text-2xl font-bold text-center">{minutes}</h3>
            <h3 className="text-lg font-medium">Minutes</h3>
          </div>
          <div>
            <span className="text-xl font-medium">: </span>
          </div>
        </div>
        <div className="flex items-center justify-start text-white gap-x-6">
          <div>
            <h3 className="text-2xl font-bold text-center">{seconds}</h3>
            <h3 className="text-lg font-medium">Seconds</h3>
          </div>
          <div>
            <span className="text-xl font-medium">: </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clock;
