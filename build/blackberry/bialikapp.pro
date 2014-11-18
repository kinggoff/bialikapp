APP_NAME = bialikapp

CONFIG += qt warn_off cascades10
BASEDIR =  $$quote($$_PRO_FILE_PWD_)

INCLUDEPATH += "/Users/isaacmanubag/Library/Application Support/Titanium/mobilesdk/osx/3.4.1.GA/blackberry/libs/tibb/include"
INCLUDEPATH += "/Users/isaacmanubag/Library/Application Support/Titanium/mobilesdk/osx/3.4.1.GA/blackberry/libs/ticore/include"
INCLUDEPATH += "/Users/isaacmanubag/Library/Application Support/Titanium/mobilesdk/osx/3.4.1.GA/blackberry/libs/libv8/include"
INCLUDEPATH += "libs/headers"

device {
    CONFIG(release, debug|release) {
        LIBS += "/Users/isaacmanubag/Library/Application Support/Titanium/mobilesdk/osx/3.4.1.GA/blackberry/libs/tibb/arm/libtibb.a"
        LIBS += "/Users/isaacmanubag/Library/Application Support/Titanium/mobilesdk/osx/3.4.1.GA/blackberry/libs/ticore/arm/libticore.a"
        LIBS += "/Users/isaacmanubag/Library/Application Support/Titanium/mobilesdk/osx/3.4.1.GA/blackberry/libs/libv8/arm/libv8.a"
        
    }
    CONFIG(debug, debug|release) {
        LIBS += "/Users/isaacmanubag/Library/Application Support/Titanium/mobilesdk/osx/3.4.1.GA/blackberry/libs/tibb/arm/libtibb.a"
        LIBS += "/Users/isaacmanubag/Library/Application Support/Titanium/mobilesdk/osx/3.4.1.GA/blackberry/libs/ticore/arm/libticore.a"
        LIBS += "/Users/isaacmanubag/Library/Application Support/Titanium/mobilesdk/osx/3.4.1.GA/blackberry/libs/libv8/arm/libv8.a"
        
    }
}

simulator {
    CONFIG(release, debug|release) {
        LIBS += "/Users/isaacmanubag/Library/Application Support/Titanium/mobilesdk/osx/3.4.1.GA/blackberry/libs/tibb/x86/libtibb.a"
        LIBS += "/Users/isaacmanubag/Library/Application Support/Titanium/mobilesdk/osx/3.4.1.GA/blackberry/libs/ticore/x86/libticore.a"
        LIBS += "/Users/isaacmanubag/Library/Application Support/Titanium/mobilesdk/osx/3.4.1.GA/blackberry/libs/libv8/x86/libv8.a"
        
    }
    CONFIG(debug, debug|release) {
        LIBS += "/Users/isaacmanubag/Library/Application Support/Titanium/mobilesdk/osx/3.4.1.GA/blackberry/libs/tibb/x86/libtibb.a"
        LIBS += "/Users/isaacmanubag/Library/Application Support/Titanium/mobilesdk/osx/3.4.1.GA/blackberry/libs/ticore/x86/libticore.a"
        LIBS += "/Users/isaacmanubag/Library/Application Support/Titanium/mobilesdk/osx/3.4.1.GA/blackberry/libs/libv8/x86/libv8.a"
        
    }
}




LIBS+=-lbbcascades -lbbdevice -lbbsystem -lQtCore -lQtDeclarative -lQtGui -lQtMultimedia -lQtNetwork -lm -lbb -lbbdata
LIBS+=-lQtSensors -lQtSql -lQtSvg -lQtTest -lQtXml -lsqlite3 -lQtLocationSubset -lbbcascadesmaps -lGLESv1_CM -lOpenAL -lalut -lasound -lbbmultimedia -lbbpim
LIBS+=-lbbutility -lbbcascadespickers -lbbnetwork -lbbplatform


include(config.pri)