import Salt from 'koa-salt';

export default Salt()
    .load('init')
    .load('static')
    .load('route')
    // .load('forward-backend')
    // .load('router')
    .load('logger');
