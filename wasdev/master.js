var browsers = ["Opera", "Edg", "Chrome", "Safari", "Firefox", "MSIE", "Trident"];
var userbrowser, useragent = navigator.userAgent;
for (var i = 0; i < browsers.length; i++) {
    if( useragent.indexOf(browsers[i]) > -1 ) {
        userbrowser = browsers[i];
        break;
    }
};
 
switch(userbrowser) {
    case 'MSIE':
        userbrowser = 'Internet Explorer';

        break;
 
    case 'Trident':
        userbrowser = 'Trident';

        break;
 
    case 'Edg':
        userbrowser = 'Microsoft Edge';

        break;

case 'Firefox':
        userbrowser = 'FF';

        break;

case 'Chrome':
        userbrowser = 'CH';

        break;

case 'Safari':
        userbrowser = 'Safari';

        break;

default:
   userbrowser = 'Safari';   userbrowser = 'Safari';



}
alert('546544589472+685+93476');