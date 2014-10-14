var isIOS = (Ti.Platform.osname != 'android') ? true:false;
var isAndroid = (Ti.Platform.osname == 'android') ? true:false;
var path = Titanium.Filesystem.resourcesDirectory;
var unit = (isIOS) ? 'dp':'px';
var currentWindow;
var menuToggle = true;


var welcome = require('lib/welcome');
var drawer = require('lib/drawer');
var prospectMenuList = require('lib/prospectiveparentsmenulist');
var currentMenuList = require('lib/currentparentsmenulist');

prospectMenuList.setActive();
welcome.init();
