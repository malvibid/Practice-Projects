function checkCashRegister(price, cash, cid) {
  let change = cash * 100 - price * 100;

  const currencyUnitMap = {
    PENNY: 0.01 * 100,
    NICKEL: 0.05 * 100,
    DIME: 0.1 * 100,
    QUARTER: 0.25 * 100,
    ONE: 1 * 100,
    FIVE: 5 * 100,
    TEN: 10 * 100,
    TWENTY: 20 * 100,
    HUNDRED: 100 * 100,
  };

  let cidTotal = 0;
  cid.forEach((element) => {
    cidTotal += element[1] * 100;
  });
  //console.log(cidTotal);

  if (change > cidTotal) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (change === cidTotal) {
    return { status: "CLOSED", change: cid };
  } else {
    let changeGiven = [];

    cid.reverse().forEach((unit) => {
      unit[1] *= 100;

      let changeHolder = [unit[0], 0];

      while (change >= currencyUnitMap[unit[0]] && unit[1] > 0) {
        change -= currencyUnitMap[unit[0]];
        unit[1] -= currencyUnitMap[unit[0]];
        changeHolder[1] += currencyUnitMap[unit[0]] / 100;
      }

      if (changeHolder[1] > 0) {
        changeGiven.push(changeHolder);
      }
    });

    if (change > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: changeGiven };
  }
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
