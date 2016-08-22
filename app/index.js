var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes')
var Raven = require('raven-js')

var sentryKey = '79e9ed6283b44e39a9c5ed1b0a5d895a'
var sentryApp = '93500'
var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp

var _APP_INFO = {
  name: 'Learning React',
  branch: '1',
  version: '1.0'
}

Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch,
  }
}).install()
console.log(window.thing.doesNotExist)

ReactDOM.render(routes, document.getElementById('app'));