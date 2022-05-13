// const lodash = require ('lodash');
// const items = [1, [2, [3, [4] ] ] ];
// const newItems = lodash.flattenDeep(items);
// console.log(newItems);



const _ = require ('lodash');
const items = [1, [2, [3, [4] ] ] ];
const newItems = _.flattenDeep(items);
console.log(newItems);