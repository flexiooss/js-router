import {assert} from 'flexio-jshelpers'
import {Route} from './Route'

const __routes = Symbol('__routes')

/**
 *
 * @class RoutesHandler
 */
export class RoutesHandler {
  constructor() {
    /**
     *
     * @type {Map<string, Route>}
     * @private
     */
    this[__routes] = new Map()
  }

  /**
   *
   * @param {Route} route
   * @return {RoutesHandler}
   */
  addRoute(route) {
    assert(route instanceof Route,
      'flexio-jsrouter:RoutesHandler:addRoute : `route` argument should be an instance of Route')

    assert(
      !this[__routes].has(route.name),
      'flexio-jsrouter:RoutesHandler:addRoute: route name `%s`  already exists',
      route.name
    )
    this[__routes].set(route.name, route)
    return this
  }

  /**
   *
   * @param {string} name
   * @return {RoutesHandler}
   */
  removeRoute(name) {
    this[__routes].delete(name)
    return this
  }

  /**
   *
   * @param {string} name
   * @return {boolean}
   */
  hasRoute(name) {
    return this[__routes].has(name)
  }

  /**
   *
   * @param {string} name
   * @return {Route}
   */
  route(name) {
    return this[__routes].get(name)
  }

  /**
   *
   * @param {RoutesHandler~MapCallback} callback
   */
  forEachRoutes(callback) {
    this[__routes].forEach(callback)
  }

  /**
   * @callback RoutesHandler~MapCallback
   * @param {Route} route
   * @param {string} nameL
   * @param {Map<string, Route>} routes
   */
}
