import React from 'react'

const App = () => {
    
function getMobileOperatingSystem(){
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}

function DetectAndServe(){
    let os = getMobileOperatingSystem();
    if (os === "Android") {
        window.location.href = "https://play.google.com/store/apps/details?id=com.cameroncronheimer.susadventure"; 
    } else if (os === "iOS") {
        window.location.href = "https://apps.apple.com/us/app/sus-adventure-2/id1564807026";
    } else if (os === "Windows Phone") {
        window.location.href = "http://www.WindowsPhoneexample.com";
    } else {
        window.location.href = "http://www.NowherLandexample.com";
    }
}
    
    return (
        <>
            {DetectAndServe()}
        </>
    )
}

export default App
