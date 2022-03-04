//BUG: Decimals causing issues

function checkCashRegister(price, cash, cid) {
  let totalChangeDue = cash * 100 - price * 100;
  let changeDueBalance = totalChangeDue;
  let changeDueCheck;

  let changeGiven = [];

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

  let optimisedCID = cid;
  optimisedCID
    .reverse()
    //.filter((units) => units[1] != 0)
    .forEach((unit) => {
      unit[1] *= 100;
      let unitGiven = unit[1];

      console.log(
        `before while loop -> Due-Balance: ${changeDueBalance} Unit: ${unit}`
      );
      while (
        changeDueBalance <= unit[1] &&
        changeDueBalance >= currencyUnitMap[unit[0]] &&
        unit[1] >= 0
      ) {
        console.log(
          `in while loop -> Due-Balance: [${changeDueBalance}]  Unit: [${unit}]`
        );
        changeDueCheck = changeDueBalance - currencyUnitMap[unit[0]];
        unit[1] -= currencyUnitMap[unit[0]];
        changeDueBalance = changeDueCheck;
      }
      console.log(
        `after  while loop -> Due-Balance: ${changeDueBalance} Unit: ${unit}`
      );
      unitGiven = unitGiven - unit[1];
      if (unitGiven > 0) {
        changeGiven.push([unit[0], unitGiven / 100]);
      }
    });

  if (changeDueBalance > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (cid.filter((units) => units[1] > 0) == changeGiven) {
    return { status: "CLOSED", change: cid };
  } else {
    return { status: "OPEN", change: changeGiven };
  }
}

// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100],
//   ])
// );

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);

//-------------------------------------------------------------------------------------------------------------------------------------------------

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// return {status: "OPEN", change: [["QUARTER", 0.5]]}

// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// return {status: "INSUFFICIENT_FUNDS", change: []}

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// return {status: "INSUFFICIENT_FUNDS", change: []}

// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should
// {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
