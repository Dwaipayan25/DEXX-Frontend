import React from 'react';
import './Hero2.css';

const HeroSection2 = () => {
  const tradingData = [
    { from: "0x1...bcd", to: "0x5...fgh", date: "April 25, 2023", rets: 100 },
    { from: "0x2...678", to: "0xe...234", date: "April 26, 2023", rets: 50 },
    { from: "0x2...jkl", to: "0mn...st", date: "April 27, 2023", rets: 75 },
    { from: "0x2...890", to: "0qr...op", date: "April 28, 2023", rets: 200 },
    { from: "0x2...cde", to: "0x6...ghi", date: "April 29, 2023", rets: 150 },
    { from: "0x2...012", to: "0x3...nop", date: "April 30, 2023", rets: 300 }
  ];

  return (
    <section className="hero-section2">
      <div className="hero-section2-content">
        <h2>Current Tradings</h2>
        <table>
          <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Date</th>
              <th>Number of RET's</th>
            </tr>
          </thead>
          <tbody>
            {tradingData.map((data, index) => (
              <tr key={index}>
                <td>{data.from}</td>
                <td>{data.to}</td>
                <td>{data.date}</td>
                <td>{data.rets}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default HeroSection2;
