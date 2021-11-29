const middle = (arr) => {
  if (!arr.length) {
    return;
  } else if (arr.length < 3) {
    return [];
  }
    
  const mid = arr.length / 2;
  if (arr.length % 2 === 1) {
    return [arr[Math.floor(mid)]];
  } else {
    return [
      arr[mid - 1],
      arr[mid],
    ];
  }
};

module.exports = middle;