import React, { useEffect } from "react";

const Maintenance = () => {
  useEffect(() => {
    let dest = new Date("2024-03-31T23:59:59").getTime();
    const interval = setInterval(() => {
      let now = new Date().getTime();
      let diff = dest - now;

      // Reset timer if countdown reaches 0
      if (diff <= 0) {
        const nextMonthDate = new Date();
        nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
        dest = nextMonthDate.getTime();
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, "0");
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, "0");
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");
      const seconds = Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, "0");

      const countdownElements = document.getElementsByClassName("countdown-element");

      for (let i = 0; i < countdownElements.length; i++) {
        const className = countdownElements[i].classList[1];
        switch (className) {
          case "days":
            countdownElements[i].innerHTML = days;
            break;
          case "hours":
            countdownElements[i].innerHTML = hours;
            break;
          case "minutes":
            countdownElements[i].innerHTML = minutes;
            break;
          case "seconds":
            countdownElements[i].innerHTML = seconds;
            break;
          default:
            break;
        }
      }
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-center items-center lg:gap-14 gap-10 inline-flex">
          <h1 className="text-4xl font-bold text-button uppercase">M a i n t e n a n c e</h1>
          <div className="flex space-x-4 text-2xl font-bold">
            <div className="countdown-element days">00</div>:
            <div className="countdown-element hours">00</div>:
            <div className="countdown-element minutes">00</div>:
            <div className="countdown-element seconds">00</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maintenance;
