let newArr = [];

const tail = data => {
  newArr = data.slice(1);
  return newArr;
};

module.exports = tail;