const cashManager = (cash) => {
  const units = [
    { value: 1_000_000_000_000, suffix: "B" },
    { value: 1_000_000, suffix: "M" },
    { value: 1_000, suffix: "K" },
  ];

  for (const { value, suffix } of units) {
    if (cash >= value) {
      return (cash / value).toFixed(2).replace(/\.00$/, "") + suffix;
    }
  }
};

console.log(cashManager(-8050));
