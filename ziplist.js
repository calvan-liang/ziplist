
const testData1 = ['a', 'b', 'c'];
const testData2 = [1, 2, 3];

function zipList(data1, data2) {
  const result = [];
  for (let i = 0; i < data1.length; i++) {
    result.push(data1[i], data2[i]);
  }
  return result;
}

console.log(zipList(testData1, testData2));

function zipListTheSimpleWay(data1, data2) {
  return _.flatten(_.zip(data1, data2));
}

console.log(zipListTheSimpleWay(testData1, testData2));
