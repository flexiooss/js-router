import {PathName} from './PathName'
import {URLExtended} from '@flexio-oss/extended-flex-types'

export class URLHandler {
  /**
   *
   * @param {UrlConfiguration} urlConfiguration
   */
  constructor(urlConfiguration) {
    /**
     *
     * @type {UrlConfiguration}
     * @private
     */
    this.__urlConfiguration = urlConfiguration
  }

  /**
   *
   * @param {URLExtended} url
   * @return {PathName}
   * @constructor
   */
  urlToPathname(url) {
    return new PathName(url.pathname)
  }

  /**
   *
   * @param {Location} location
   * @return {PathName}
   * @constructor
   */
  locationToPathname(location) {
    return new PathName(location.pathname)
  }

  /**
   *
   * @param {PathName} pathname
   * @return {URLExtended}
   */
  pathnameToUrl(pathname) {
    return new URLExtended(pathname.value, this.__urlConfiguration.origin())
  }
}