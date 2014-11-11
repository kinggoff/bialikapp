var isIOS = (Ti.Platform.osname != 'android') ? true:false;
var isAndroid = (Ti.Platform.osname == 'android') ? true:false;
var path = Titanium.Filesystem.resourcesDirectory;
var unit = (isIOS) ? 'dp':'px';
var platformHeight = Ti.Platform.displayCaps.platformHeight;
var platformWidth = Ti.Platform.displayCaps.platformWidth;
var currentWindow;
var menuToggle = true;
var defaultBlueColor = '#0046ac';


var welcome = require('lib/welcome');
var drawer = require('lib/drawer');
var prospectMenuList = require('lib/prospectiveparentsmenulist');
var currentMenuList = require('lib/currentparentsmenulist');

prospectMenuList.setActive();
welcome.init();