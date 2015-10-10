var HJUA = {
    _paramArr : '',
    appVer : '',
    platform : '',
    deviceID : '',
    systemVer : '',
    appPackage : '',
    buildVer : '',
    channel : '',
    originalUA : '',

    init : function(encodeUAStr) {
      this._paramArr = decodeURIComponent(encodeUAStr).split("/");
      this.appVer = _paramArr[0];
      this.platform = _paramArr[1];
      this.deviceID = _paramArr[2];
      this.systemVer = _paramArr[3];
      this.appPackage = _paramArr[4];
      this.buildVer = _paramArr[5];
      this.channel = _paramArr[6];
      this.originalUA = this.getOriginalUA();

    },

    getOriginalUA : function () {
      var result = '';
      var i = 7;
      var arrlen = this._paramArr.length;
      for ( ; i < arrlen; i++ ) {
        var subfix = (i === arrlen - 1) ? '' : '/';
        result += this._paramArr[i] + subfix;
      }
      return result;
    }
};

exports.HJUA = HJUA;
