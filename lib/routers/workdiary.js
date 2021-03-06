/**
 * oDesk auth library for using with public API by OAuth
 *
 * @package     oDeskAPI
 * @since       09/23/2014
 * @copyright   Copyright 2014(c) oDesk.com
 * @author      Maksym Novozhylov <mnovozhilov@odesk.com>
 * @license     oDesk's API Terms of Use {@link https://developers.odesk.com/api-tos.html}
 */

/**
 * @module routes.workdiary
 */

/**
 * @property entryPoint
 * @type String
 * @default api
 * @static
 * @final
 */
var entryPoint = 'api';

/**
 * @class Workdiary
 * @constructor
 */
exports.Workdiary = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Get Workdiary
 *
 * @method get
 * @param company {String} Company
 * @param username {String} Username
 * @param date {String} Date
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Workdiary.prototype.get = function(company, username, date, params, callback) {
  debug('running request');
  this.api.client.get('team/v1/workdiaries/' + company + '/' + username + '/' + date, params, callback);
}
