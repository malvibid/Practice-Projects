function checkCashRegister(price, cash, cid) {
  let totalChange = cash - price;

  let cidTotal = 0;

  cid.forEach((element) => {
    cidTotal += element[1];
  });
  // console.log(totalCID.toFixed(2))

  let changeDue = [];
  let tempChange = totalChange;
  let change = totalChange;

  orderedCID = cid.reverse();
  //console.log(orderedCID)

  for (let i = 0; i < orderedCID.length; i++) {
    //console.log(orderedCID[i]);
    unitTotal = orderedCID[i][1];
    if (orderedCID[i][1] > 0) {
      tempChange = change - orderedCID[i][1];
      console.log(`temp Change: ${tempChange}`);
      orderedCID[i][1] = change - tempChange;
      orderedCID[i][1] = orderedCID[i][1].toFixed(2);
      console.log(`new unit value: ${orderedCID[i][1]}`);
      change = tempChange;
      console.log(`remaining change: ${change}`);

      //if (unitTotal != orderedCID[i][1]) {
      changeDue.push(orderedCID[i]);
      //}
    } else {
      continue;
    }
  }

  if (cidTotal < totalChange || change > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (cidTotal == change) {
    return { status: "CLOSED", change: cid };
  } else {
    return { status: "OPENED", change: changeDue };
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
