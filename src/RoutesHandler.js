import {
  assert,
  isObject,
  MapExtended
} from 'flexio-jshelpers'

/**
 *
 * @class RoutesHandler
 * @description RouteHandler can work with routes Object scheme :
 *
 * {
 *    myRoute: {
 *      path: '^/page/([\\-_\\w]*)/?([\\d]*)?/?$',
 *      customProp1: 'customProp1Value',
 *      customProp2: 'customProp2Value',
 *      ...
 *      },
 *    ...
 * }
 *
 *
 *
 */

class RoutesHandler {
  constructor() {
    this._routes = new MapExtended()
    this._prevRoute = null
    this._currentRoute = null
  }

  setRoutes(routes) {
    assert(
      isObject(routes),
      'flexio-jsrouter:RoutesHandler:setRoutes: `routes` argument assert be an instance of Object, %s given',
      typeof routes
    )
    for (let name in routes) {
      this.addRoute(name, routes[name])
    }
  }

  addRoute(name, route) {
    assert(
      'path' in route,
      'flexio-jsrouter:RoutesHandler:setRoutes: `route item` assert be have a `path` entry with a String Regexp'
    )
    this._routes.set(name, route)
  }

  route(key) {
    return this._routes.get(key)
  }

  forEachRoutes(callback) {
    return this._routes.forEach(callback)
  }
}
export {
  RoutesHandler
}
