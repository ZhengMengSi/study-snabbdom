import h from './mysnabbdom/h';

var myVnode1 = h('div', {}, [
    h('p', {}, '1'),
    h('p', {}, h('p', {}, '2'))
]);
console.log(myVnode1)
