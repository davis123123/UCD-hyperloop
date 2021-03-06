/**
 * This helper will determine if user is admin 
 * and display the page accordingly. All of these
 * params is true/false  
 * @param {*} isAdmin -> display different navbar
 * @param {*} isSubteam -> display different function (upload data)
 * @param {*} subteamFolder
 * @param {*} imageFolder 
 */

function AdminStatus(isAdmin = false, isSubteam = false, subteamFolder = false, imageFolder=false,memberFolder=false){
  return {
    isAdmin,
    isSubteam,
    subteamFolder,
    imageFolder,
    memberFolder,
  }
}

module.exports = AdminStatus;