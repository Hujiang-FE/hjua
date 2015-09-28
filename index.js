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
