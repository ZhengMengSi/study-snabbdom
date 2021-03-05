import vnode from './vnode';

// 编写一个低配版本的h函数，这个函数必须接受3个参数，缺一不可
// 相当于它的重载功能较弱
export default function (sel, data, c) {
    // 检查参数的个数
    if (arguments.length != 3) {
        throw new Error('对不起，h函数必须传入3个参数');
    }
    // 检查参数c的类型
    if (typeof c == 'string' || typeof c == 'number') {
        return vnode(sel, data, undefined, c, undefined);
    } else if (Array.isArray(c)) {
        let children = [];
        for (let i = 0; i < c.length; i++) {
            if (!(typeof c[i] == 'object' && c[i].hasOwnProperty('sel')))
                throw new Error('传入的数组参数中有项不是h函数');
            children.push(c[i]);
        }
        return vnode(sel, data, children, undefined, undefined);
    } else if (typeof c === 'object' && c.hasOwnProperty('sel')) {
        let children = [c];
        return vnode(sel, data, children, undefined, undefined);
    } else {
        throw new Error('传入的第三个参数类型不对');
    }
}
