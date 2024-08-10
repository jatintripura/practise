import { useEffect, useState } from "react";

function Clock() {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  let interval;
  const counDown = () => {
    const destination = new Date("Oct 10, 2001").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor((different / 1000) * 60 * 60 * 24);
    });
  };
  useEffect(() => {}, []);
  return (
    <>
      <div className="flex items-center gap-x-6 py-4 mb-2">
        <div className="flex items-center justify-start text-white gap-x-6 ">
          <div>
            <h3 className="text-2xl font-bold text-center">10</h3>
            <h3 className="text-lg font-medium">Days</h3>
          </div>
          <div>
            <span className="text-xl font-medium">: </span>
          </div>
        </div>
        <div className="flex items-center justify-start text-white gap-x-6 ">
          <div>
            <h3 className="text-2xl font-bold text-center">10</h3>
            <h3 className="text-lg font-medium">Hours</h3>
          </div>
          <div>
            <span className="text-xl font-medium">: </span>
          </div>
        </div>
        <div className="flex items-center justify-start text-white gap-x-6 ">
          <div>
            <h3 className="text-2xl font-bold text-center">10</h3>
            <h3 className="text-lg font-medium">Minutes</h3>
          </div>
          <div>
            <span className="text-xl font-medium">: </span>
          </div>
        </div>
        <div className="flex items-center justify-start text-white gap-x-6">
          <div>
            <h3 className="text-2xl font-bold text-center">10</h3>
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
