# Hujiang User Agent

---

### Hujiang User Agent字段说明：

	 HJApp 1.0/平台/设备名/DeviceID/系统版本/应用包名/AppVersion.buildVersion/渠道名/浏览器默认UA

### Hujiang User Agent实例：
	 v1.0.0/android/XT1085/3D5D4266C605E4497B6888C/5.0.2/com.hujiang.demo.ocsplayerdownloaddemo/1.0.1/from360/Mozilla/5.0 (Linux; Android 5.0.2; XT1085 Build/LXE22.92-30) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile Safari/537.36

### hjua 例子：

	 var encodeUAStr = 'HJApp%20v1.0.0/android/XT1085/3D5D4266C605E4497B6888C/5.0.2/com.hujiang.demo.ocsplayerdownloaddemo/1.0.1/from360/Mozilla%2F5.0%20(Linux%3B%20Android%205.0.2%3B%20XT1085%20Build%2FLXE22.92-30)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Version%2F4.0%20Chrome%2F37.0.0.0%20Mobile%20Safari%2F537.36';

	 HJUA.init(encodeUAStr);

	 console.info(HJUA.appVer);
	 console.info(HJUA.platform);
	 console.info(HJUA.deviceID);
	 console.info(HJUA.systemVer);
	 console.info(HJUA.appPackage);
	 console.info(HJUA.buildVer);
	 console.info(HJUA.channel);
	 console.info(HJUA.originalUA);
