
//Retrieves Cookie and parses the string to assign value to form ----------------------------------------------------------
jQuery(document).ready(function(){

    function getCookieValue(a) {
        var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
        return b ? b.pop() : '';
    }
    
    var cookieStr = getCookieValue("utm_params");
    var cookieVal = JSON.parse(cookieStr);
    
    document.getElementById("input_1_14").value = cookieVal.campaign;
    document.getElementById("input_1_13").value = cookieVal.ssource; //double letter is used because of native JS methods
    document.getElementById("input_1_12").value = cookieVal.medium;
    document.getElementById("input_1_15").value = cookieVal.ccontent;
    document.getElementById("input_1_11").value = cookieVal.device;
    document.getElementById("input_1_17").value = cookieVal.phone;
    document.getElementById("input_1_19").value = cookieVal.term;
    document.getElementById("input_1_16").value = cookieVal.adposition;
    document.getElementById("input_1_18").value = cookieVal.keymatch;
    document.getElementById("input_1_20").value = cookieVal.queryStr;

    


});



