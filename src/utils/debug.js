import * as d from 'debug';

if (process.env.NODE_ENV === 'development') {
    localStorage.setItem('debug', 'debug:*');
}
const debug = process.env.NODE_ENV === 'development' ?
    ((debug) => debug.extend.bind(debug))(d('debug')) : (() => null);
export {debug};