import render from '../extensions/render';

const _ = require('koa-route');

export default function(app, config) {
  return _.get('/', (app) => {
    render(app, {
      page: 'index'
    });
  });
}
