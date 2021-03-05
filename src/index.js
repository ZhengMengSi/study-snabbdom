import { init } from 'snabbdom/init';
import { classModule } from 'snabbdom/modules/class';
import { propsModule } from 'snabbdom/modules/props';
import { styleModule } from 'snabbdom/modules/style';
import { eventListenersModule } from 'snabbdom/modules/eventlisteners';
import { h } from 'snabbdom/h'; // helper function for creating vnodes

// 创建出patch函数
const patch = init([classModule, propsModule, styleModule, eventListenersModule]);

const vnode1 = h('div', {}, [
    h('div', { key: 'A' }, 'A'),
    h('div', { key: 'B' }, 'B'),
    h('div', { key: 'C' }, 'C'),
    h('div', { key: 'D' }, 'D')
]);

var container = document.getElementById('container');
patch(container, vnode1);

const vnode2 = h('div', {}, [
    h('div', { key: 'A' }, 'A'),
    h('div', { key: 'B' }, 'B'),
    h('div', { key: 'C' }, 'C'),
    h('div', { key: 'D' }, 'D'),
]);

btn.onclick = function () {
    patch(vnode1, vnode2);
}



