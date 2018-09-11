//Get Cookie Value
function getCookieValue(a) {
    var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}

// var now = new Date().getTime();
var cookieExists = getCookieValue("utm_params");

//Checks for the existance of the cookie, and if it is more than 1 day old
// if ((cookieExists) && (cookieExists.createdAt <= now - 86400000)){
    if (!cookieExists){
    
    //Creates a cookie and stores UTM Values as a string 
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    var queryStr = window.location.search;

    var utms = {
        campaign: getParameterByName('utm_campaign'),
        ssource: getParameterByName('utm_source'),
        medium: getParameterByName('utm_medium'),
        ccontent: getParameterByName('utm_content'),
        device: getParameterByName('utm_device'),
        phone: getParameterByName('utm_phone'),
        term: getParameterByName('utm_term'),
        adposition: getParameterByName('utm_adposition'),
        keymatch: getParameterByName('utm_keymatch'),
        queryStr: queryStr,
        createdAt: new Date().getTime()
    }

    var utmStr = JSON.stringify(utms);

    //set cookie with utm params stored. 
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    setCookie("utm_params", utmStr, 2);

}//else do nothing 