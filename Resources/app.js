/*if(!Titanium.App.Properties.getString('EnrollmentType',null)){
	Titanium.App.Properties.setString('EnrollmentType','prospective');
}*/

var isIOS = ((Ti.Platform.osname != 'android') && (Ti.Platform.osname != 'blackberry')) ? true:false;
var isAndroid = (Ti.Platform.osname == 'android') ? true:false;
var isBB = (Ti.Platform.osname == 'blackberry') ? true:false;
var path = (!isBB) ? Titanium.Filesystem.resourcesDirectory:'';
var unit = (isIOS) ? 'dp':'px';
var platformHeight = Ti.Platform.displayCaps.platformHeight;
var platformWidth = Ti.Platform.displayCaps.platformWidth;
var currentWindow;
var menuToggle = true;
var defaultBlueColor = '#0046ac';
var helveticafont = 'Helvetica Neue';

var mainWindow = Ti.UI.createWindow();
if(isIOS){
	mainWindow.setBackgroundColor('#000');
}else if(isAndroid || isBB){
	mainWindow.setBackgroundImage(path+'images/welcomeScreen/page-bg.jpg');
}

var prospectMenuList = require('lib/prospectiveparentsmenulist');
var currentMenuList = require('lib/currentparentsmenulist');
var drawer = require('lib/drawer');
var bialik_app = require('lib/bialik_app');

bialik_app.init();