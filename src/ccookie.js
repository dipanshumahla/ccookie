/* Default values are initialized here */

var DF_TEXT =
    "This site uses cookies to provide you with a great user experiance. By using this site, you accept our use of cookies.";
var DF_HTML = `<style>#ccookie {position: fixed;bottom: 40px;left: 10%;right: 10%;width: 80%;padding: 5px 14px;display: flex;align-items: center;background-color: #eee;border-radius: 5px;box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);}    .cc-btn {        padding: 5px;        margin: 10px;    }        .cc-btn:hover {        cursor: pointer;    }</style><div id='ccookie'><label id="cc-text"> </label ><input type='button' id='cc-ok' class='cc-btn' value='OK' />    <!--<input type='button' id='cc-cancel' class='cc-btn' value='Cancel' />-->    </div >`;
var DF_TIME = 15;
var DF_TIMEOUT;

var DF_FN = () => {};

/*
CCookie Main Class

*/
function ccookie({
    text = DF_TEXT,
    html = DF_HTML,
    time = DF_TIME,
    OK_FN = DF_FN,
    CANCEL_FN = DF_FN,
    DEFAULT_FN = DF_FN,
} = {}) {
    function element(name) {
        return document.getElementById(name);
    }

    /* setCookie function sets all cookies*/
    function setCookie(cname = "ccookie", cvalue = "ok", cexpiry = 7) {
        var ed = new Date().setTime(
            new Date().getTime() + cexpiry * 24 * 60 * 60 * 1000
        );
        document.cookie = `${cname}=${cvalue}; expires=${ed.toUTCString}; path=/`;
    }

    /* getCookie function get the cookies*/
    function getCookie(cname = "ccookie") {
        return new Promise((resolve, reject) => {
            document.cookie.split(";").forEach((cookie) => {
                if (cookie.startsWith(cname + "=")) resolve(cookie.split("=")[1]);
            });
            reject(false);
        });
    }

    getCookie()
        .then((cookie) => {
            if (cookie != "ok") write();
        })
        .catch((e) => {
            write();
        });

    /* called when ok button is pressed */
    var ok_function = () => {
        setCookie();
        element("ccookie").style.display = "none";
        if (DF_TIMEOUT) clearTimeout(DF_TIMEOUT);
        OK_FN();
    };

    /* called when cancel button is pressed */
    var cancel_function = () => {
        console.log("canceled");
        CANCEL_FN();
    };

    /* called after 15 seconds */
    var default_function = async() => {
        DF_TIMEOUT = setTimeout(() => {
            ok_function();
            DEFAULT_FN();
        }, time * 1000);
    };

    /* writes and produce cookie consent popup html */
    function write() {
        document.getElementsByTagName("body")[0].innerHTML += html;
        if (element("cc-text") != undefined) element("cc-text").innerHTML = text;
        if (element("cc-ok") != undefined)
            element("cc-ok").addEventListener("click", ok_function);
        if (element("cc-cancel") != undefined)
            element("cc-cancel").addEventListener("click", cancel_function);
        //default_function();
    }
}