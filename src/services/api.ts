const api = {

  /**
   * use: 获取当前用户信息
   * doc: http://doc.dev.ananlab.com/project/118/interface/api/4553
   */
  getStatiscsData: 'GET /ci/admin/chem/get/count',


  /**
   * use: 获取当前用户信息
   * doc: http://doc.dev.ananlab.com/project/118/interface/api/4553
   */
  queryCountClass: 'GET /ci/admin/chem/countClass',

  /**
  * use: 获取当前用户信息
  * doc: http://doc.dev.ananlab.com/project/118/interface/api/4553
  */
  queryCheckRecord: 'GET /ci/admin/chem/get/invLog',

  /**
  * use: 获取当前用户信息
  * doc: http://doc.dev.ananlab.com/project/118/interface/api/4553
  */
  getCheckUnits: 'GET /ci/admin/chem/get/unit',

  /**
* use: 获取当前用户信息
* doc: http://doc.dev.ananlab.com/project/118/interface/api/4553
*/
  getCheckConfig: 'GET /ci/config/get',

  /**
* use: 获取当前用户信息
* doc: http://doc.dev.ananlab.com/project/118/interface/api/4553
*/
  updateCheckConfig: 'POST /ci/config/add',




};

export default api;
