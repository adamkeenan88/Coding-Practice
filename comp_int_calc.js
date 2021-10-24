//will need a starting value, rate of return, and duration to see how much an investment will grow

function comp_int(val, invest, int, dur) {
  const rate = int;
  let total = 0;
  let x = val + invest;
  for (var index = 0; index < dur; index++) {
    total = x + x * rate;
    console.log(total);
    x = total + invest;
    // console.log(x);
  }
}

comp_int(10000, 1200, 0.07, 5);
