// HJApp 1.0/平台/设备名/DeviceID/系统版本/应用包名/AppVersion.buildVersion/渠道名/浏览器默认UA

//  v1.0.0/android/XT1085/3D5D4266C605E4497B6888C/5.0.2/com.hujiang.demo.ocsplayerdownloaddemo/1.0.1/from360/Mozilla/5.0 (Linux; Android 5.0.2; XT1085 Build/LXE22.92-30) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile Safari/537.36

// var encodeUAStr = 'HJApp%20v1.0.0/android/XT1085/3D5D4266C605E4497B6888C/5.0.2/com.hujiang.demo.ocsplayerdownloaddemo/1.0.1/from360/Mozilla%2F5.0%20(Linux%3B%20Android%205.0.2%3B%20XT1085%20Build%2FLXE22.92-30)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Version%2F4.0%20Chrome%2F37.0.0.0%20Mobile%20Safari%2F537.36';

// HJUA.init(encodeUAStr);

// console.info(HJUA.getAppVer());
// console.info(HJUA.getPlatform());
// console.info(HJUA.getDeviceID());
// console.info(HJUA.getSystemVer());
// console.info(HJUA.getAppPackage());
// console.info(HJUA.getBuildVer());
// console.info(HJUA.getChannel());
// console.info(HJUA.getOriginalUA());

var HJUA = (function(){
    'use strict';
    
    var _paramArr = [];
    var init = function(encodeUAStr) {
      var decodeUAStr = decodeURIComponent(encodeUAStr);
      _paramArr = decodeUAStr.split("/");

    };

    var getAppVer = function () {
      return _paramArr[0];
    };

    var getPlatform = function () {
      return _paramArr[1];
    };

    var getDeviceID = function () {
      return _paramArr[2];
    };

    var getSystemVer = function () {
      return _paramArr[3];
    };

    var getAppPackage = function () {
      return _paramArr[4];
    };

    var getBuildVer = function () {
      return _paramArr[5];
    };

    var getChannel = function () {
      return _paramArr[6];
    };

    var getOriginalUA = function () {
      var result = '';
      var i = 7;
      var arrlen = _paramArr.length; 
      for ( ; i < arrlen; i++ ) {
        var subfix = (i === arrlen - 1) ? '' : '/';
        result += _paramArr[i] + subfix;

      }
      return result;
    };
    return {
      init : init,
      getAppVer: getAppVer,
      getPlatform: getPlatform,
      getDeviceID: getDeviceID,
      getSystemVer: getSystemVer,
      getAppPackage: getAppPackage,
      getBuildVer: getBuildVer,
      getChannel: getChannel,
      getOriginalUA: getOriginalUA
    };

  
})();

exports.HJUA = HJUA;
