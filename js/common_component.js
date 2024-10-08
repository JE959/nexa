"use strict";
var Isprice = [];
//form validate code
const navbarWrapper = document.getElementById("menu-screen"),
  menuIcon = document.getElementById("menu-button");
function getCity() {
  $("#modal").toggleClass("openCity");
}
function selectCity(e) {
  $("#selected-city").empty().append(e), $("#modal").removeClass("openCity");
}
function getCityMobile() {
  $("#modal-mobile").toggleClass("openCity");
}
function selectCityMobile(e) {
  $("#selected-city-mobile").empty().append(e), $("#modal-mobile").removeClass("openCity");
}
function openCall() {
  $("#call-modal").toggleClass("openCity"), $("body").addClass("modal-open");
}
function closeCallModal() {
  $("#call-modal").removeClass("openCity"), $("body").removeClass("modal-open");
}

function OnMobileQuickLinks(){
  $('#MobileQuickLinks').removeClass('hidden');
  $('#otherTabsMobile').addClass('hidden');
}
function CloseMobilequickLinks(){
  $('#MobileQuickLinks').addClass('hidden');
  $('#otherTabsMobile').removeClass('hidden');
}
function closeCaptcha() {
  resultElement.textContent = '';
  resultElement.style.color = '';
  var type =  sessionStorage.getItem('type');
  switch(type) {
    case 'RYIPOPUP':
      $("body").addClass("modal-open");
      $("#rfiModal").removeClass("hidden");
      $('#RecaptchaPopUp').addClass('hidden');
      $('#rfiModal').addClass("bg-[rgba(0,0,0,0.7)]").addClass("backdrop-blur-[1px]").addClass("absolute");
      $("#submit_rfipopup").removeClass("disableCls");
    break;
    case 'RYIPOPUPRESEND':
      $("body").addClass("modal-open");
      $('#RecaptchaPopUp').addClass('hidden');
      $("#rfiotpboxpopup").removeClass("hidden");
      $('#rfiModal').addClass("bg-[rgba(0,0,0,0.7)]").addClass("backdrop-blur-[1px]").addClass("absolute");
      $("#submit_rfipopup").removeClass("disableCls");
        $(".resend0rfi").css("pointer-events",'inherit');
        $(".resend0rfi").css("opacity",'1');
        $(".resend0rfi").css("color",'red');
        $(".resend0rfi").removeClass("disableCls");
    break;
    case 'RYICOMPONENT':
      $('.rfi_brand').removeClass('disableCls');
      $('.rfi_brand').css('pointer-events','inherit');
      $('.rfi_brand').css('opacity','1');
      $('body').removeClass("modal-open");
      $('#RecaptchaPopUp').addClass('hidden');
    break;
    case 'RYINBSVCOMPONENTRESEND':
      $('.rfi_brand').removeClass('disableCls');
      $('.rfi_brand').css('pointer-events','inherit');
      $('.rfi_brand').css('opacity','1');

      $('#RecaptchaPopUp').addClass('hidden');
      $("#submit_rfipopup").removeClass("disableCls");
      $('#otpboxpopup').removeClass('hidden');
      $('body').addClass("modal-open");
      $('.resend0rfiCom').css('pointer-events', 'inherit');
      $('.resend0rfiCom').css('color', 'red');

      if($('.bshowroom_brand').length>0){
        $('.bshowroom_brand').removeClass('disableCls');
        $('.bshowroom_brand').css('pointer-events','inherit');
        $('.bshowroom_brand').css('opacity','1');
      }
    break;
    default:
      $('#RecaptchaPopUp').addClass('hidden')
      $('body').removeClass("modal-open");
      break;
  }
}


if (menuIcon) {
  menuIcon.addEventListener("click", () => {
    navbarWrapper.classList.toggle("active"), document.getElementById("menu-butt").classList.toggle("active");
  });
}

if ($("#hdn_web_server").val() === "server") {
  var Allapis = {
    getallcities: "/api/sitecore/API/GetAllCities",
    GetCarOnwardsPrice: "/api/sitecore/API/GetCarOnwardsPrice",
    GetCityState: "/api/sitecore/API/GetCityState",
    subscribe: "/api/sitecore/API/Subscribe",
    loadcities: "/api/sitecore/Forms/LoadCities",
    LoadDealers: "/api/sitecore/Forms/LoadDealers",
    sendotp: "/api/sitecore/Forms/SendOtp",
    registeryourinterest: "/api/sitecore/Forms/RegisterForInterest",
    getcarprice: "/api/sitecore/API/GetCarPrice",
    getallstates: "/api/sitecore/API/GetAllStates",
    UserLogout: "/api/sitecore/NexaUserLogin/UserLogout",
    isMsds: "/api/sitecore/Forms/MSDSQuestionSurveyEnq",
    bookshowroomvisit: "/api/sitecore/Forms/BookShowRoomVisit",
    // getcarprice: "/api/sitecore/API/GetCarPrice",
    eminimum: "/api/sitecore/fmpapi/emiminimum",
    carvariantbycarmodel: "/api/sitecore/MasterData/CarVarientByCarModel",
  };
} else {
  var Allapis = {
    getallcities: "https://run.mocky.io/v3/dab67364-3135-4ff4-87ab-91de37e82169",
    //  GetCarOnwardsPrice: "https://run.mocky.io/v3/11fc0eb3-f7a0-4ef9-b053-e7897cfe836e",
    GetCarOnwardsPrice: "https://run.mocky.io/v3/379e62c0-55f1-473b-87c2-df15fb7b0d44",
    GetCityState: "https://run.mocky.io/v3/11dc9155-3217-45e5-8ca0-809b3ed3ba29",
    subscribe: "https://run.mocky.io/v3/57bd384c-19b7-4c9b-a2c3-ed5787013b7b",
    loadcities: "https://run.mocky.io/v3/6d1be820-ea98-4e2e-bd9a-1d2453026c7b",
    LoadDealers: "https://run.mocky.io/v3/49164678-0155-4a39-9fc2-b374b6601158",
    sendotp: "https://run.mocky.io/v3/243d277e-22f1-4d01-bdbd-1440b46e4439",
    // 'registeryourinterest' : 'https://run.mocky.io/v3/e12372ec-940b-4ffe-ac1f-ba9d1516b9ff', non msds
    // registeryourinterest: "https://run.mocky.io/v3/aeaf451b-cdce-446b-b9f6-afc91b1d59f7",
    registeryourinterest: 'https://run.mocky.io/v3/d187ce20-048a-4a47-b15d-e130773cb56e',
    // 'registeryourinterest' : 'https://run.mocky.io/v3/0ac71001-168a-436b-8343-ecf09efb7157',//FALSE response
    getcarprice: "https://run.mocky.io/v3/414e8c52-870e-417b-a727-04405cfe2be0",
    getallstates: "https://run.mocky.io/v3/08238d0e-41a0-44b9-a7d4-277395939a33",
    UserLogout: "/api/sitecore/NexaUserLogin/UserLogout",
    isMsds: "https://run.mocky.io/v3/250a6df8-d985-433f-935b-615bbef2f9a5",
    bookshowroomvisit: "https://run.mocky.io/v3/95f7d365-7490-442a-b085-cb08b781bf43",
    // 'getcarprice':'https://run.mocky.io/v3/d611fe2e-af1f-463d-8fa3-740b2ac9cc79',
    // getcarprice: "https://run.mocky.io/v3/3df4961a-958f-4d70-a8cd-83d8a3954ef6",
    getcarprice:'https://run.mocky.io/v3/4b17b8d4-723e-484b-8f27-9a3de0683161',
    eminimum: "https://run.mocky.io/v3/8486aa87-ca12-4867-a99c-6f5c93fd3345",
    carvariantbycarmodel: "https://run.mocky.io/v3/619b08c6-5011-4d85-a49c-37cbdd6b1071",
  };
}

var DataLayerMSILDL_FormSubmission_Type = (function () {
  var Push = function (eventCategory, eventAction, eventLabel, carmodel, userid, formtype) {
    var isMobile = /iPhone|Android|iPad|iPod|webOS|BlackBerry/i.test(navigator.userAgent);
    msildl.push({
      event: isMobile ? "form_fill_action_mobile" : "form_fill_action",
      eventCategory: eventCategory,
      eventAction: eventAction,
      eventLabel: eventLabel,
      cd_car_model: carmodel,
      userID: calcMD5(userid),
      Formtype: formtype,
      cd_timestamp: Math.round(new Date().getTime() / 1000.0),
    });
  };
  return {
    Push: Push,
  };
})();

function postDetails(url, data) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      type: "POST",
      url: url,
      data: data,
      contentType: "application/json; charset=utf-8",
      datatype: "json",
      async: "true",
      success: function (response) {
        if (response) {
          response = JSON.parse(response);
          resolve(response);
        }
      },
      error: function (response) {
        reject(response);
      },
    });
  });
}

function toCommaSepratedPrice(price) {
  price = Math.round(price);
  var str = price.toString();
  var afterPoint = "";
  if (str.indexOf(".") > 0) afterPoint = price.substring(str.indexOf("."), str.length);
  str = Math.floor(str);
  str = str.toString();
  var lastThree = str.substring(str.length - 3);
  var otherNumbers = str.substring(0, str.length - 3);
  if (otherNumbers != "") lastThree = " " + lastThree;
  str = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, " ") + lastThree;
  if (str == 0) {
    var CarModelType = $("#HdnCarModelId").val();
    if (CarModelType == 2) {
      str = "STAY TUNED FOR THE PRICE";
    } else {
      str = "N/A";
    }
  }
  return str;
}

function setCookie(cname, cvalue) {
  var d = new Date();
  d.setTime(d.getTime() + 0.5 * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();

  var path = location.pathname;
  var secure = "secure";
  document.cookie = cname + "=" + cvalue + (expires ? "; expires=" + expires : "") + ("; path=" + "/") +("; SameSite="+ 'Strict') + ("; secure=" + secure);
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function deleteCookie(cname) {
  var d = new Date("01 Jan 1970 00:00:00");
  d.setTime(d.getTime() + 0.5 * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=;" + expires + ";path=/;secure";
}

function CommonCDPtracking(e, t, n, i) {
  tdSubmit(
    {
      event: e,
      eventCategory: t,
      eventAction: n,
      eventLabel: i,
    },
    "event_nexa"
  );
}

function navigate(query) {
  if (query) {
window.location.href= window.location.origin+'/searchresult?query='+query;
  }
}

//brand page RFI Code
function registerin() {
  $('#rfiModal').addClass("hidden")
  $('body').removeClass("modal-open");
  $('#rfiModal').removeClass("bg-[rgba(0,0,0,0.7)]").removeClass("backdrop-blur-[1px]").removeClass("absolute");
  $('#header-fixed').addClass('z-[999]')
}


function showError(usernameEl, msg) {
  var id = usernameEl.attr("id") + "-id";
  usernameEl.after('<em id="' + id + '" class="errorcLs">' + msg + "</em>");
}

function isRequired(value) {
  var result = value === "" ? false : true;
  return result;
}

function isBetween(length, min, max) {
  return length < min || length > max ? false : true;
}
function isMax(length, max) {
  return length > max ? false : true;
}

function isValidName(name) {
  var re = /^[A-z]*((-|\s)*[A-z])*$/g;
  return re.test(name);
}

function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function isValidMobile(mobile) {
  var re = /^[789]\d{9}$/;
  return re.test(mobile);
}

function isValidotp(otpNum) {
  var re = /^[0-9]\d{3}$/;
  return re.test(otpNum);
}

function isChecker(checkboxEl, name) {
    
  if ($(checkboxEl[0]).is(":checked")) {
    return true;
  } else {
    return false;
  }
}

    function Ischeckbox(checkboxEl,formname){
            var valid = false;
        var ElemRemoveId = checkboxEl.attr('id')+"-id";
        $('#'+ElemRemoveId).remove();
        $(formname).find('input[type=checkbox]').siblings('label').css({"color": "black"});
     checkboxEl.siblings('label').css({"color": "none"});
        if (!isChecker(checkboxEl,checkboxEl.attr('name'))) {
     checkboxEl.siblings('label').css({"color": "red"});
        } else {
             checkboxEl.siblings('label').css({"color": "green"});
            valid = true;
        }
        return valid;
    }
function checkUsername(usernameEl) {
  var valid = false;
  var max = 30;
  var username = usernameEl.val().trim();
  var ElemRemoveId = usernameEl.attr("id") + "-id";
  $("#" + ElemRemoveId).remove();
  if (!isRequired(username)) {
    var msg = "Name is required field";
    showError(usernameEl, msg);
  } else if (!isValidName(username)) {
    var msg = "Name must Not Contains Special character";
    showError(usernameEl, msg);
  } else if (!isMax(username.length, max)) {
    var msg = "Name must Not Be more than 30 character";
    showError(usernameEl, msg);
  } else {
    valid = true;
  }
  return valid;
}

function checkEmail(emailEl) {
  var valid = false;
  var max = 100;
  var emailBack = emailEl.val().trim();
  var ElemRemoveId = emailEl.attr("id") + "-id";
  $("#" + ElemRemoveId).remove();
  if (!isRequired(emailBack)) {
    var msg = "Please enter a valid Email";
    showError(emailEl, msg);
  } else if (!isValidEmail(emailBack)) {
    var msg = "Please enter a valid Email";
    showError(emailEl, msg);
  } else if (!isMax(emailBack.length, max)) {
    var msg = "Email must Not Be more than 100 character";
    showError(emailEl, msg);
  } else {
    valid = true;
  }
  return valid;
}

function checkMobile(mobileEl) {
  var valid = false;
  var max = 10;
  var min = 10;
  var mobileBack = mobileEl.val().trim();
  var ElemRemoveId = mobileEl.attr("id") + "-id";
  $("#" + ElemRemoveId).remove();
  if (!isRequired(mobileBack)) {
    var msg = "Please enter valid Number";
    showError(mobileEl, msg);
  } else if (!isValidMobile(mobileBack)) {
    var msg = "Please enter valid Number";
    showError(mobileEl, msg);
  } else if (!isBetween(mobileBack.length, min, max)) {
    var msg = "Mobile must Not Be more than 10 character";
    showError(mobileEl, msg);
  } else {
    valid = true;
  }
  return valid;
}

function checkSelected(elemt, msgs) {
  var valid = false;
  var elementvalue = elemt.val().trim();
  var ElemRemoveId = elemt.attr("id") + "-id";
  $("#" + ElemRemoveId).remove();
  if (!isRequired(elementvalue)) {
    var msg = "Please Enter valid "+msgs;

    showError(elemt, msg);
  } else {
    valid = true;
  }
  return valid;
}

function checkOtp(otpEl) {
  var valid = false;
  var max = 4;
  var min = 4;
  var otpNum = otpEl.val().trim();
  var ElemRemoveId = otpEl.attr("id") + "-id";
  $("#" + ElemRemoveId).remove();
  if (!isRequired(otpNum)) {
    var msg = "OTP Field Required";
    showError(otpEl, msg);
  } else if (!isValidotp(otpNum)) {
    var msg = "Enter a valid OTP";
    showError(otpEl, msg);
  } else if (!isBetween(otpNum.length, min, max)) {
    var msg = "OTP must Not Be more than 4 character";
    showError(otpEl, msg);
  } else {
    valid = true;
  }
  return valid;
}

// function Ischeckbox(checkboxEl) {
//   var valid = false;
//   var ElemRemoveId = checkboxEl.attr("id") + "-id";
//   $("#" + ElemRemoveId).remove();
//   checkboxEl.siblings("label").css({ color: "none" });
//   if (!isChecker(checkboxEl, checkboxEl.attr("name"))) {
//     checkboxEl.siblings("label").css({ color: "red" });
//   } else {
//     checkboxEl.siblings("label").css({ color: "green" });
//     valid = true;
//   }
//   return valid;
// }

function toCommaSepratedPrice(price) {
  price = Math.round(price);
  //price = price.toString();
  var str = price.toString();
  var lastThree = str.substring(str.length - 3);
  var otherNumbers = str.substring(0, str.length - 3);
  if (otherNumbers != "") lastThree = " " + lastThree;
  str = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, " ") + lastThree;
  if (str == 0) {
    str = "N/A";
  }
  return str;
}

var hex_chr = "0123456789abcdef";

function rhex(num) {
  var str = "";
  for (var j = 0; j <= 3; j++) str += hex_chr.charAt((num >> (j * 8 + 4)) & 0x0f) + hex_chr.charAt((num >> (j * 8)) & 0x0f);
  return str;
}

function str2blks_MD5(str) {
  var nblk = ((str.length + 8) >> 6) + 1;
  var blks = new Array(nblk * 16);
  for (var i = 0; i < nblk * 16; i++) blks[i] = 0;
  for (var i = 0; i < str.length; i++) blks[i >> 2] |= str.charCodeAt(i) << ((i % 4) * 8);
  blks[i >> 2] |= 0x80 << ((i % 4) * 8);
  blks[nblk * 16 - 2] = str.length * 8;
  return blks;
}

function add(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xffff);
}

function rol(num, cnt) {
  return (num << cnt) | (num >>> (32 - cnt));
}

function cmn(q, a, b, x, s, t) {
  return add(rol(add(add(a, q), add(x, t)), s), b);
}

function ff(a, b, c, d, x, s, t) {
  return cmn((b & c) | (~b & d), a, b, x, s, t);
}

function gg(a, b, c, d, x, s, t) {
  return cmn((b & d) | (c & ~d), a, b, x, s, t);
}

function hh(a, b, c, d, x, s, t) {
  return cmn(b ^ c ^ d, a, b, x, s, t);
}

function ii(a, b, c, d, x, s, t) {
  return cmn(c ^ (b | ~d), a, b, x, s, t);
}

function calcMD5(str) {
  var x = str2blks_MD5(str);
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;
  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = ff(a, b, c, d, x[i + 0], 7, -680876936);
    d = ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = ff(c, d, a, b, x[i + 10], 17, -42063);
    b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = gg(b, c, d, a, x[i + 0], 20, -373897302);
    a = gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = hh(a, b, c, d, x[i + 5], 4, -378558);
    d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = hh(d, a, b, c, x[i + 0], 11, -358537222);
    c = hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = ii(a, b, c, d, x[i + 0], 6, -198630844);
    d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = add(a, olda);
    b = add(b, oldb);
    c = add(c, oldc);
    d = add(d, oldd);
  }
  return rhex(a) + rhex(b) + rhex(c) + rhex(d);
}

var ra = window.ra || {};
ra.cfg = ra.cfg || {};
ra.events = ra.events || {};

(function () {
  var ua = navigator.userAgent;
  ra.cfg.isIphone = /iPhone/i.test(ua);
  ra.cfg.isIpaid = /iPad/i.test(ua);
  ra.cfg.isAndriod = /Android/i.test(ua);
  ra.cfg.isBlackBerry = /BB10|BlackBerry/i.test(ua);
  ra.cfg.isNexusTab = /Nexus/i.test(ua);
  ra.cfg.isChrome43 = /Chrome[/]43/i.test(ua);
  ra.cfg.isIE = /MSIE (\d+\.\d+);/.test(ua);
  ra.cfg.isIE11 = ua.indexOf("Trident/");
  ra.cfg.isMobile = /iPhone|Android|iPad|iPod|webOS|BlackBerry/i.test(ua);
  ra.cfg.isTouchEnabled = (function is_touch_device() {
    return "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  })();

  ra.cfg.breakPoints = {
    XS: "screen and (min-width:0px) and (max-width:480px)",
    SMX: "screen and (min-width:481px) and (max-width:767px)",
    SM: "screen and (min-width:768px) and (max-width:1024px)",
    MD: "screen and (min-width:1025px) and (max-width:1280px)",
    LG: "screen and (min-width:1281px)",
    XS_SMX: "screen and (min-width:0px) and (max-width:767px)",
    XS_SM: "screen and (min-width:0px) and (max-width:1024px)",
    SM_MD: "screen and (min-width:768px)",
    MD_LG: "screen and (min-width:1025px)",
  };

  ra.events = {
    WINDOW_RESIZE: "ml/screen/resize/",
    WINDOW_LOAD: "ml/window/load/",
    SCROLL: "ml/mouse/scroll",
    VIEWPORT_CHANGE: "ml/viewport/change", //for responsive implementation
    INIT_MODULES: "ml/modules/init",
    VIEWPORT_XS: "viewport/extrasmall",
    VIEWPORT_SMX: "viewport/smallExtended",
    VIEWPORT_SM: "viewport/small",
    VIEWPORT_MD: "viewport/medium",
    VIEWPORT_LG: "viewport/large",
    VIEWPORT_XS_SMX: "viewport/mobile",
    VIEWPORT_XS_SM: "viewport/mobileAndTablet",
    VIEWPORT_SM_MD: "viewport/tabletAndAbove",
    VIEWPORT_MD_LG: "viewport/desktopAndAbove",
  };
  ra.cfg.viewport = ra.events.VIEWPORT_LG;
})();


//nexaworld datalayer
function tdSubmitGTM(values, table_name, database) {
  var td = new Treasure({
    host: "in.treasuredata.com",
    writeKey: "10453/be37ccabb6c444301256c07406c8586de8b0b415",
    database: database,
    startInSignedMode: true,
  });
  td.set("$global", "td_global_id", "td_global_id");
  td.set('$global', {ecid: ecidupdate});
  td.trackEvent(table_name, values);
}

var DataLayerMSILDL_NexaWorld = (function () {
  var Push = function (event, eventAction, eventCategory, eventLabel) {
    msildl.push({
      event: event,
      eventAction: eventAction,
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      cd_timestamp: Math.round(new Date().getTime() / 1000.0),
    });
  };
  return {
    Push: Push,
  };
})();

//Datalayer Banner
var DataLayerMSILDL_Banner = (function () {
  var Push = function (event, eventCategory, eventAction, eventLabel, carmodel) {
    msildl.push({
      event: event,
      eventCategory: eventCategory,
      eventAction: eventAction,
      eventLabel: eventLabel,
      userID: "",
      cd_car_model: carmodel,
      cd_timestamp: Math.round(new Date().getTime() / 1000.0),
    });

    tdSubmit(
      {
        eventCategory: eventCategory,
        eventAction: eventAction,
        eventLabel: eventLabel,
        user_id: "",
      },
      "event_nexa"
    );
  };
  return {
    Push: Push,
  };
})();

//MSR_Current_Traffic_And_Car    
var DataLayerMSILDL_MSR = (function() {
  var Push = function(event,eventCategory, eventAction, eventLevel) {
      msildl.push({
          'event': event,
          'eventCategory': eventCategory,
          'eventLabel': eventLevel,
          'eventAction': eventAction,
          //'database': 'msil_src_prd'
           database:  $('#CDP_Database').val()
      });
  }
  return {
      Push: Push
  }
})();

//datalayer form submission

var DataLayerMSILDL = (function () {
  var Push = function (event, eventCategory, eventAction, eventLevel) {
    var isMobile = /iPhone|Android|iPad|iPod|webOS|BlackBerry/i.test(navigator.userAgent);
    msildl.push({
      event: isMobile ? "user_action_mobile" : "user_action",
      eventCategory: eventCategory,
      eventAction: eventAction,
      eventLabel: eventLevel,
      cd_timestamp: Math.round(new Date().getTime() / 1000.0),
    });

    tdSubmit(
      {
        eventCategory: eventCategory,
        eventAction: eventAction,
        eventLabel: eventLevel,
      },
      "event_nexa"
    );

    if (eventLevel.toLowerCase() == "book a test drive") {
      tdSubmit(
        {
          eventCategory: "Book Test Drive",
          eventAction: "Click",
          eventLabel: "BTD",
        },
        "event_nexa"
      );
    }

    var str = eventLevel.toLowerCase();
    var containsFoo = str.indexOf("register for interest") >= 0; // true
    if (containsFoo) {
      tdSubmit(
        {
          eventCategory: eventLevel,
          eventAction: "Click",
          eventLabel: eventLevel,
        },
        "event_nexa"
      );
    }

    var str = eventLevel.toLowerCase();
    var containsFoo = str.indexOf("book a showroom visit") >= 0; // true
    if (containsFoo) {
      tdSubmit(
        {
          eventCategory: "e-Brochure",
          eventAction: "Click",
          eventLabel: "e-Brochure",
        },
        "event_nexa"
      );
    }
  };
  return {
    Push: Push,
  };
})();

//TD submit function
function tdSubmit(values, table_name) {
  var td = new Treasure({
    host: "in.treasuredata.com",
    writeKey: "10453/be37ccabb6c444301256c07406c8586de8b0b415",
    // database:  'msil_src_prd', //$('#CDP_Database').val(),
    database: $("#CDP_Database").val(),
    startInSignedMode: true,
  });
  td.set("$global", "td_global_id", "td_global_id");
  td.set('$global', {ecid: ecidupdate});
  if (table_name == "event_nexa") {
    td.trackEvent(table_name, values);
  } else {
    td.trackEvent(table_name, values);
  }
}

//For Mobile, Email  Sensitive data use this function
function convertSHA(values) {
  //return values;
  if (values) {
    values = values.trim().toLowerCase();
    var encrypted = CryptoJS.SHA256(values);
    return encrypted.toString();
  } else {
    return "";
  }
}

//For Name Sensitive data use this function
function convertAES(values) {
  //return values;
  if (values) {
    values = values.toLowerCase().trim();
    var key = CryptoJS.enc.Utf8.parse("40887952454045cb");
    var iv = CryptoJS.enc.Utf8.parse("@1B2c3D4e5F6g7H8");
    var encrypted = CryptoJS.AES.encrypt(values, key, {
      mode: CryptoJS.mode.CBC,
      iv: iv,
      padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.toString();
  } else {
    return "";
  }
}

//For Pan Number
function EncryptSalt(hash_string) {
  if (hash_string) {
    hash_string = hash_string.trim().toLowerCase();
    var salt = "BELPG#3288#QCSO#PK68#18A";
    var hash_str = hash_string + salt;
    var sha_signature = CryptoJS.SHA256(hash_str);
    return sha_signature.toString();
  } else {
    return "";
  }
}

function PrepareRequestMedia(url, data, token) {
  return {
    async: true,
    crossDomain: true,
    url: url,
    method: "POST",
    headers: {
      Authorization: token,
      "Http-X-Access": "NexaConfigurator",
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "cache-control": "no-cache",
    },
    processData: false,
    contentType: false,
    mimeType: "multipart/form-data",
    data: data,
  };
}

function PrepareRequest(url, data) {
  return {
    async: true,
    crossDomain: true,
    url: url,
    method: "POST",
    data: data,
  };
}




$(".widgetclose").on("click", function () {
  $(".topwidget").hide();
});
$("#btn1").on("click", function () {
  $(".detailformbox").hide();
  $(".otpdetailbox").show();
});
$("#btn2").on("click", function () {
  $(".addressformbox").show();
  $(".otpdetailbox").hide();
});

$("body").mouseover(function (e) {
  if (!($(e.target).hasClass("submenubox") || $(e.target).parents().hasClass("submenubox"))) {
    $(".submenubox").removeClass("active");
    $(".secondlevel").removeClass("active");
  } else {
  }
});

$(".firstlevel").mouseover(function (e) {
  $(".submenubox").addClass("active");
  var idValue = $(this).attr("id");
  $(".secondlevel").removeClass("active");
  $(".secondlevel").each(function (index, value) {
    if ($(this).data("id") === idValue) {
      $(this).addClass("active");
    }
  });
  e.preventDefault();
  e.stopPropagation();
});

// $('.searchbtn').click(function(e) {
//       $(".newSearchSection").slideDown();
//   });

//   $( ".mobile-search" ).focus(function() {
//       $(".newSearchSection").slideDown();
//     });

//   $('.newSearchbtn').click(function() {
//       $(".newSearchSection").slideUp();
//   });

$("#foot-menu").click(function () {
  $(this).parents("li").toggleClass("menuactive"), $(".footermenubox").toggleClass("active");
});

//show city dropdown based on device (mobile or desktop)
function OnCityChange() {
  var currentCity;
  // Get model message form server
  var toAppend;
  if (Isprice[0].iswhichbtnclick == "headercity") {
    toAppend = $(".city_search_list");
  } else if (Isprice[0].iswhichbtnclick == "fmpcity") {
    toAppend = $(".fmpcity");
  }
  //Get All Cities
  $.ajax({
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url: Allapis.getallcities,
    cache: false,
    type: "GET",
    success: function (res) {
      res = JSON.parse(res);
      if (res.items.length) {
        var data = res.items;
        for (var i = 0; i < data.length; i++) {
          if (data[i]["City Code"] && data[i]["City Name"]) {
            var option = $("<option></option>");
            option.attr("value", data[i]["City Code"]);
            option.text(data[i]["City Name"]);
            toAppend.append(option);
          } else {
            var option = $("<option></option>");
            option.attr("value", data[i].CityCode);
            option.text(data[i].CityName);
            toAppend.append(option);
          }
        }
        // $('.city_search_list').selectpicker();
        //initMap(data);

        if (Isprice[0].iswhichbtnclick == "headercity") {
          $(".cityselect").css("display", "none");
          $(".citydesktop").css("display", "block");
          $(".cityMobile").css("display", "block");
        }
        // withoutlocation();
      }
    },
    error: function (xhr, status, error) {
      var option = $("<option></option>");
      option.attr("value", "95");
      option.text("GURUGRAM");
      toAppend.append(option);

      var option = $("<option></option>");
      option.attr("value", "01");
      option.text("Ahmedabad");
      toAppend.append(option);

      var option = $("<option></option>");
      option.attr("value", "09");
      option.text("Delhi");
      toAppend.append(option);

      var option = $("<option></option>");
      option.attr("value", "19");
      option.text("Pune");
      toAppend.append(option);
      // $('.city_search_list').selectpicker();
      // withoutlocation();
    },
  });
}
$(document).on("click", ".cityselect", function () {
  Isprice = [];
  Isprice.push({
    iswhichbtnclick: "headercity",
  });
  OnCityChange();
});

$(document).on("change", "#mycity,#mycityMobile", function () {
  var cityname = $(this).find("option:selected").text();
  // DataLayerMSILDL.Push('', 'Location Change', 'Select', cityname);
  localStorage.setItem(
    "city",
    JSON.stringify({ city_code: $(this).closest(".city_search_list").find("option:selected").val(), city_name: $(this).closest(".city_search_list").find("option:selected").text() })
  );
  //update price on banner
  getPriceThroughAPI();
});

withoutlocation();

function withoutlocation() {
  localStorage.setItem(
    "latlong",
    JSON.stringify({
      lat: "28.5677061",
      long: "77.2409407",
    })
  );
  var currentcity = JSON.parse(localStorage.getItem("city"));
  if (currentcity) {
    $(".city_search_list").val(currentcity.city_code);
    localStorage.setItem(
      "city",
      JSON.stringify({
        city_code: currentcity.city_code,
        city_name: currentcity.city_name,
      })
    );
  } else {
    var psn_city_code, psn_city_name;

    if (!psn_city_code && !psn_city_name) {
      psn_city_code = "08";
      psn_city_name = "Delhi";
    }
    $(".city_search_list").val(psn_city_code);
    localStorage.setItem(
      "city",
      JSON.stringify({
        city_code: psn_city_code,
        city_name: psn_city_name,
      })
    );
  }
  getPriceThroughAPI();
}

function getPriceThroughAPI() {
  //Code for dynamic car Model Codes:
  var carModelList = $("#HdnCarModelCodeList").val();
  if (!carModelList) {
    return;
  }

  carModelList = carModelList.split(",");

  //Code for dynamic car id Codes:
  var caridList = $("#HdnCarIdList").val();
  if (!caridList) {
    return;
  }

  caridList = caridList.split(",");

  var CityCode;
  if (!$(".city_search_list").find("option:selected").val()) {
    var currentcity = JSON.parse(localStorage.getItem("city"));
    if (currentcity) {
      CityCode = currentcity.city_code;
      $(".city_search_list").val(currentcity.city_code);
    } else {
      CityCode = "08";
      $(".city_search_list").val("08");
    }
  } else {
    CityCode = $(".city_search_list").find("option:selected").val();
  }
  var url = Allapis.GetCarOnwardsPrice;
  var carCityModelDetailsList = [];
  for (var i = 0; i < carModelList.length; i++) {
    carCityModelDetailsList.push({
      CarModelCode: carModelList[i],
      CarId: caridList[i],
      CityCode: CityCode,
    });
  }

  carCityModelDetailsList = JSON.stringify({
    carCityModelDetailsList: carCityModelDetailsList,
  });

  $.ajax({
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url: url,
    data: carCityModelDetailsList,
    cache: false,
    type: "POST",
    success: function (data) {
      if (data.length) {
        //outputData = data;
        $(".header-shadow-card div p strong.font-bold").html('N/A');
        $(".cartiles .items-center .car-card .w-full h4 strong").html('N/A');
        for (var i = 0; i < data.length; i++) {
          $(".car-price-" + data[i].CarModelCode).html(toCommaSepratedPrice(data[i].Price));
          if ($(".car-tile-price-" + data[i].CarModelCode).length > 0) {
            $(".car-tile-price-" + data[i].CarModelCode).html(toCommaSepratedPrice(data[i].Price));
          }
        }
      } else {
        for (var i = 0; i < carModelList.length; i++) {
          $(".car-price-" + carModelList[i]).html("N/A");
          if ($(".car-tile-price-" + carModelList[i]).length > 0) {
            $(".car-tile-price-" + carModelList[i]).html("N/A");
          }
        }
      }
    },
    error: function (response) {},
  });
}

$(".logout").on("click", function (e) {
  e.stopPropagation(),
    $.ajax({
      type: "POST",
      url: Allapis.UserLogout,
      contentType: "application/json; charset=utf-8",
      datatype: "json",
      async: "true",
      success: function (e) {
        null != e && null != e.status && (window.location.href = "/login");
      },
      error: function (e) {},
    });
});

$(".newInrsearchbox")
  .find(".search")
  .keypress(function (e) {
    if (e.which == 13) {
      navigate($(".newInrsearchbox").find(".search").val());
    }
  });

$(".inrfooterbox")
  .find(".mobile-search")
  .keypress(function (e) {
    if (e.which == 13) {
      navigate($(".inrfooterbox").find(".mobile-search").val());
    }
  });

$(".mobile-searchbtn").click(function () {
  navigate($(".inrfooterbox").find(".mobile-search").val());
});

$(".searchpage")
  .find(".searchresult")
  .keypress(function (e) {
    if (e.which == 13) {
      navigate($(".searchpage").find(".searchresult").val());
    }
  });

//Inline Ebrochure & Car manual
$("#SubMenuId12 a").one("mouseenter", function () {
  var LiTagFirsturls = $("#Librochure").val();
  var LiTagSecondurls = $("#LiCarManual").val();
  var LiTagFirstName = $("#Librochure").attr("data-name");
  var LiTagSecondName = $("#LiCarManual").attr("data-name");
  var DataMsilEvenr = "return DataLayerMSILDL.Push('','Top menu Navigation', 'click', 'Buyer Guide - Services &amp; Parts - E-Brochure');";
  var CarManualDataMsilEvenr = "return DataLayerMSILDL.Push('','Top menu Navigation', 'click', 'Buyer Guide - Services &amp; Parts - Car Manual');";
  $("#InlineBuyerGuidLI").append(
    '<a href="' +
      LiTagFirsturls +
      '" onclick="' +
      DataMsilEvenr +
      '">' +
      LiTagFirstName +
      "</a>" +
      " | " +
      '<a href="' +
      LiTagSecondurls +
      '" onclick="' +
      CarManualDataMsilEvenr +
      '">' +
      LiTagSecondName +
      "</a>"
  );
});
//footer subscribe

//sidepopup dice cdp
$(document).on("click", "._dicepopup ul li ._dicebox", function () {
  var _text = $(this).text().trim();
  tdSubmit(
    {
      event: "Popup-menu",
      eventCategory: "Popup-menu",
      eventAction: "Click",
      eventLabel: _text,
    },
    "event_nexa"
  );
});

// $('.closethankyou_msg').on('click',function() {
//     $('.thankyouSubscribeform').fadeOut();
//     $('body').removeClass('bodylock');
// });

var subemailEl = $("#form-footerSubscribe #email");
$("#form-footerSubscribe").bind("input", function (e) {
  checkEmail(subemailEl);
});
$(".subscribebox")
  .find(".thankyou_popupBtn")
  .on("click", function (e) {
    e.preventDefault();
    if (checkEmail(subemailEl)) {
      var email = $("#form-footerSubscribe").find(".email").val();
      //prepare data for sending
      var rowdata = PrepareRequestMedia(Allapis.subscribe, JSON.stringify({ emailid: email, currentUrl: $(location).attr("href"), category: "All" }), "");
      // send data to server
      $.ajax(rowdata)
        .done(function (response) {
          var reso = JSON.parse(response);
          if (reso.status) {
            subscribeOpen();
            $("#email").val("");
          } else {
            alert("something went wrong");
          }
        })
        .fail(function (err) {});
    }
  });

function subscribeClose() {
  $("#subscribeWrapper").addClass("hidden");
  // $('body').removeClass('overflow-y-hidden')
  $("body").removeClass("modal-open");
}
function subscribeOpen() {
  $("#subscribeWrapper").removeClass("hidden");
  $("body").addClass("modal-open");
  // $('body').addClass('overflow-y-hidden')
  // $('#header-fixed').removeClass('z-[999]');
}

//sidebar dice
$(".dicebutton").on("click touch", function () {
  $(".fixedpopupbox").toggleClass("active"), $(this).parents(".fixedsidebar").toggleClass("active");
});

//header code
$(".side_menu_open").click(function (event) {
  event.stopPropagation();
  $(event.target).children("ul").removeClass("hidden");
  $(event.target).children("ul").addClass("active");
});
$(".side_menu_close").click(function (event) {
  event.stopPropagation();
  $(event.target).closest(".child-ul").addClass("hidden");
  $(event.target).closest(".child-ul").removeClass("active");
});

$(".dropdown5").click(function () {
  $(".dropdown-content5").slideDown();
});
$(".dropdown5-close").click(function () {
  $(".dropdown-content5").slideUp();
});

//onload window

$(document).ready(function () {
  var currentcity = JSON.parse(localStorage.getItem("city"));
  if (currentcity) {
    $(".cityselect").text(currentcity.city_name);
  } else {
    $(".cityselect").text("Delhi");
  }
  $(".cityselect").append(" <span></span>");

  //empty local storage
  // sessionStorage.setItem('type', '');
  // sessionStorage.setItem('rowdata', '');
});

$(".sidebar-open-icon").on("click", function (s) {
  $(this).hasClass("block") &&
    ($(".sidebar-open-icon").removeClass("block").addClass("hidden"), $(".sidebar-close-icon").removeClass("hidden").addClass("block"), $(".sidebar-close").removeClass("hidden").addClass("block"));
}),
  $(".sidebar-close-icon").on("click", function (s) {
    $(this).hasClass("block") &&
      ($(".sidebar-open-icon").removeClass("hidden").addClass("block"), $(".sidebar-close-icon").removeClass("block").addClass("hidden"), $(".sidebar-close").removeClass("block").addClass("hidden"));
  });
$(document).on("click", ".slide-popup-triger", function () {
  $(".fixedside-popup").toggleClass("active");
});





//rfi form popup
if ($("#rfiModal").length) {
  setTimeout(dealyBody, 10000);
}

function dealyBody() {
  $("body").addClass("modal-open");
  $("#rfiModal").removeClass("hidden");
  // $('#header-fixed').removeClass('z-[999]');
  PopulateState();
}

function PopulateState() {
  if ($(document).find("#form-rfipopup #rfipopstate").val() != "") {
    $(document).find("#form-rfipopup").css("pointer-events", "none");
    $(document).find("body").css("pointer-events", "none");
    // $('#RfiLoader').css('display','block');
  }
  var rfistate = $("#rfipopstate");
  rfistate.html("");
  rfistate.append($("<option></option>").val("").text("State"));
  var data = $(document).find("form#form-rfipopup").closest("form").serialize();
  var rowdata = PrepareRequest(Allapis.getallstates, data);
  $.ajax(rowdata)
    .done(function (response) {
      response = JSON.parse(response);
      if (response) {
        for (var i = 0; i < response.length; i++) {
          var option = $("<option></option>");
          option.attr("value", response[i].Value);
          option.text(response[i].Text);
          rfistate.append(option);
        }
        // $('#RfiLoader').css('display','none');
        $(document).find("#form-rfipopup").css("pointer-events", "inherit");
        $(document).find("body").css("pointer-events", "inherit");
      }
    })
    .fail(function (err) {});
}

//rfi form validate
var usernameElpop = $("#form-rfipopup #rfipopName");
var emailElpop = $("#form-rfipopup #rfipopEmail");
var MobileElpop = $("#form-rfipopup #rfipopMobile");
var rfistateElpop = $("#form-rfipopup #rfipopstate");

var rficityElpop = $("#form-rfipopup #rfipopcity");
var enrldealerElpop = $("#form-rfipopup #rfipopenrldealer");
var rfimodelElpop = $("#form-rfipopup #rfipopmodel");
var RFIBuyerTypeElpop = $("#form-rfipopup #rfipopBuyerType");
var checkboxElpop = $("#form-rfipopup input[type=checkbox][name=IsDisclaimerAccepted]");
var formIdpop = $("#form-rfipopup");
var otpElpop = $("#btdotrfi");

if ($("input").length > 0) {
  $("input#rfipopName").bind("input", function () {
    var c = this.selectionStart,
      r = /[^a-zA-Z ]/gi,
      v = $(this).val();
    if (r.test(v)) {
      $(this).val(v.replace(r, ""));
      c--;
    }
    this.setSelectionRange(c, c);
  });
  $("input#Name").bind("input", function () {
    var c = this.selectionStart,
      r = /[^a-zA-Z ]/gi,
      v = $(this).val();
    if (r.test(v)) {
      $(this).val(v.replace(r, ""));
      c--;
    }
    this.setSelectionRange(c, c);
  });
}

// if ($("input").length > 0) {
//   $("input#rfipopMobile,input#btdotrfi").bind("input", function () {
//     var c = this.selectionStart,
//       r = /[^0-9]/gi,
//       v = $(this).val();
//     if (r.test(v)) {
//       $(this).val(v.replace(r, ""));
//       c--;
//     }
//     this.setSelectionRange(c, c);
//   });
// }


//All Form sendOtp


function ValidateCaptchaNSendOtp(){
  resultElement.textContent = '';
  resultElement.style.color = '';
var type =  sessionStorage.getItem('type');
var data =  sessionStorage.getItem('rowdata');


    const userInput = XAEXIIInput.value;

    if(userInput){
     if(userInput.length===5){
                $.ajax({
                  type: "POST",
                  url: "/api/sitecore/formcaptcha/validate?captchaVal="+userInput,
                    dataType: "json",
                    success: function(response) {
                        if (response.success) {
                            resultElement.textContent = '';
                            resultElement.style.color = '';

                              resultXAEIII = true
                              $('#result').text('');
                              $('#XAEXIIInput').val('');
                              $("#RecaptchaPopUp").addClass("hidden");
                              $("body").removeClass("modal-open");
                              
                  
                  
                              switch(type) {
                                case 'RYIPOPUP':
                  
                                  var rowdata = PrepareRequest(Allapis.sendotp, data);
                                $.ajax(rowdata)
                                  .done(function (response) {
                                    if (response.IsSuccess) {
                                      registerin();
                                      otppopupboxrfi();
                  
                            
                  
                                      // $('#rfiotpboxpopup').modal('hide');
                                      // $('#myModal_testdrive_rfi').modal('show');
                                      $(".resend0rfi").css("pointer-events", "none");
                                      rfipopOtpTimer();
                                      $("#counterrfi").css("display", "block");
                                      $(".resend0rfi").css("color", "grey");
                                      $(".verifyotp").val("");
                                      tdSubmit(
                                        {
                                          name: convertAES($("#form-rfipopup").find("#rfipopName").val()),
                                          email: convertSHA($("#form-rfipopup").find("#rfipopEmail").val()),
                                          mobile: convertSHA($("#form-rfipopup").find("#rfipopMobile").val()),
                                          state: $("#form-rfipopup").find("#rfipopstate option:selected").text(),
                                          city: $("#form-rfipopup").find("#rfipopcity option:selected").text(),
                                          dealer: $("#form-rfipopup").find("#rfipopenrldealer option:selected").text(),
                                          model: $("#form-rfipopup").find("#rfipopmodel option:selected").text(),
                                          mobile_enc: convertAES($("#form-rfipopup").find("#rfipopMobile").val()),
                                          email_enc: convertAES($("#form-rfipopup").find("#rfipopEmail").val()),
                                          name_plain: $("#form-rfipopup").find("#rfipopName").val(),
                                          mobile_plain: $("#form-rfipopup").find("#rfipopMobile").val(),
                                          email_plain: $("#form-rfipopup").find("#rfipopEmail").val(),
                                          buyer_type:$('#form-rfipopup').find('#rfipopBuyerType option:selected').text()
                                        },
                                        "register_your_intrest_nexa"
                                      );
                                      tdSubmit(
                                        {
                                          eventCategory: "NEXa World RFI POPUP page Pre OTP " + $("#form-rfipopup").find("#rfipopmodel option:selected").text(),
                                          eventAction: "click",
                                          eventLabel: "NEXa World POPUP RFI-Pre OTP " + $("#form-rfipopup").find("#rfipopmodel option:selected").text(),
                                        },
                                        "event_nexa"
                                      );
                                      DataLayerMSILDL_FormSubmission_Type.Push(
                                        "Sticky-RFI_nexaworld",
                                        "Submit",
                                        $("#rfipopmodel option:selected").text() + " RFI Pre OTP",
                                        $("#rfipopmodel option:selected").text(),
                                        $("#form-rfipopup").find("#rfipopMobile").val(),
                                        "Popup Nexaworld"
                                      );
                                    } else {
                                      $("#rfiModal .ResponseBrootError").css("display", "block");
                                      $("#rfiModal  .ResponseBrootError").text(response.Message);
                                    }
                                  })
                                  .fail(function (err) {
                                    $("#submit_rfipopup").removeClass("disableCls");
                                  });
                            
                            
                                  break;
                            
                                case 'RYIPOPUPRESEND':
                  
                                  var rowdata = PrepareRequest(Allapis.sendotp, data);
                                  $.ajax(rowdata)
                                  .done(function (response) {
                                    if (response.IsSuccess) {
                                      otppopupboxrfi();
                                      // sessionStorage.setItem('type', '');
                                      // sessionStorage.setItem('rowdata', '');
                                      $(".resend0rfi").css("pointer-events", "none");
                                      $("#counterrfi").css("display", "block");
                                      rfipopOtpTimer();
                                      $(".resend0rfi").css("color", "grey");
                                      $("#rfiotpboxpopup .rfiotperror").hide();
                                    } else {
                                      $('.resend0rfi').addClass('disableCls');
                                      $("#rfiotpboxpopup .rfiotperror").show();
                                      $("#rfiotpboxpopup .rfiotperror").text(response2.Message);
                                    }
                                  })
                                  .fail(function (err) {
                                    $(".resend0rfi").css("pointer-events", "inherit");
                                    $(".resend0rfi").css("color", "red");
                                  });
                                break;
                            
                                case 'RYICOMPONENT':
                  
                  
                    var rowdata = PrepareRequest(Allapis.sendotp, data);
                      $.ajax(rowdata).done(function (response) {
                        if (response.IsSuccess) {
                          // sessionStorage.setItem('type', '');
                          // sessionStorage.setItem('rowdata', '');
                          $('.verifyotp').val('');
                          $('#whichForm').val('rfiform');
                          registerin();
                          otppopupbox();
                          rfipopOtpTimercom();
                          
                          setTimeout(function(){ $('.rfi_brand').removeClass('disableCls'); }, 2000);
                          DataLayerMSILDL_FormSubmission_Type.Push($('#f_eventcategory').val(),'Submit',$('#CarModel option:selected').text() + ' RFI Pre OTP', $('#CarModel option:selected').text(), $('#Mobile').val(), $('#f_type').val());
                           tdSubmit({
                            name: convertAES($('#form-rfi').find('#Name').val()),
                            email: convertSHA($('#form-rfi').find('#Email').val()),
                            mobile: convertSHA($('#form-rfi').find('#Mobile').val()),
                            state: $('#form-rfi').find('#State option:selected').text(),
                            city: $('#form-rfi').find('#City option:selected').text(),
                            dealer: $('#form-rfi').find('#Dealer option:selected').text(),
                            model: $('#form-rfi').find('#CarModel option:selected').text(),
                            mobile_enc:convertAES($('#form-rfi').find('#Mobile').val()),
                            email_enc:convertAES($('#form-rfi').find('#Email').val()),
                            name_plain: $('#form-rfi').find('#Name').val(),
                            mobile_plain: $('#form-rfi').find('#Mobile').val(),
                            email_plain: $('#form-rfi').find('#Email').val(),
                            buyer_type:$('#form-rfi').find('#RFIBuyerType option:selected').text()
                          }, 'register_your_interest_nexa');
                          tdSubmit({
                            'eventCategory': 'Brand Page RFI Pre OTP '+$('#form-rfi').find('#CarModel option:selected').text(),
                            'eventAction': 'click',
                            'eventLabel': 'Brand RFI - Pre OTP '+$('#form-rfi').find('#CarModel option:selected').text(),
                          }, 'event_nexa');
                          // GT code ends
                          $('#form-rfi #Names').val($('#form-rfi #Name').val());
                          $('#form-rfi #Emails').val($('#form-rfi #Email').val());
                          $('#form-rfi #Mobiles').val($('#form-rfi #Mobile').val());
                          $('#step1').hide();
                          $('#step2').show();
                          $('.resend0rfiCom').css('pointer-events', 'none');
                          $('#counterrfi').css('display', 'block');
                          $('.resend0rfiCom').css('color', 'grey');
                        } else { 
                          $('#whichForm').val('');
                          $('.rfi_brand').removeClass('disableCls');
                          $('.register-for-interest .ResponseBrootError').css('display','block');
                          $('.register-for-interest .ResponseBrootError').text(response.Message);
                  
                          $('.rfi_brand').css('pointer-events','inherit');
                          $('.rfi_brand').css('opacity','1');
                        }
                      }).fail(function (err) { 
                        $('.rfi_brand').removeClass('disableCls');
                        $('.rfi_brand').css('pointer-events','inherit');
                        $('.rfi_brand').css('opacity','1');
                      });
                  
                  
                  
                  
                  
                  
                  
                                  break;
                                case 'RYINBSVCOMPONENTRESEND':
                  
                  
                                var rowdata = PrepareRequest(Allapis.sendotp, data);
                                $.ajax(rowdata).done(function (response) {
                                    if (response.IsSuccess) {
                                      // sessionStorage.setItem('type', '');
                                      // sessionStorage.setItem('rowdata', '');
                                        $('.resend0rfiCom').css('pointer-events', 'none');
                                        $('#countrficomponent').css('display', 'block');
                                        otppopupbox();
                                        rfipopOtpTimercom();
                                        $('.resend0rfiCom').css('color', 'grey');
                                        $('#otpboxpopup .rfiotperror').hide();
                                    } else { 
                                      $('#otpboxpopup  .rfiotperror').show();
                                      $('#otpboxpopup .rfiotperror').text(response2.Message);	
                                      $('.resend0rfiCom').css('pointer-events', 'inherit');
                                      $('.resend0rfiCom').css('color', 'red');	
                                    }
                                }).fail(function (err) { 
                                  $('.resend0rfiCom').css('pointer-events', 'inherit');
                                  $('.resend0rfiCom').css('color', 'red');
                                });
                  
                  
                  
                                  break;
                                case 'BSVCOMPONENT':
                  
                  
                                var rowdata = PrepareRequest(Allapis.sendotp, Data);
                    $.ajax(rowdata).done(function (response) {
                      if (response.IsSuccess) {
                        $('.verifyotp').val('');
                        $('#whichForm').val('bsvform');
                        registerin();
                        otppopupbox();
                        rfipopOtpTimercom();
                        // sessionStorage.setItem('type', '');
                        // sessionStorage.setItem('rowdata', '');
                        
                        setTimeout(function(){ $('.bshowroom_brand').removeClass('disableCls'); 
                        $('.bshowroom_brand').css('pointer-events','inherit');
                        $('.bshowroom_brand').css('opacity','1');
                        }, 2000);
                        // GT code start
                        var carname = $('#form-bsv #CarModel option:selected').text();
                        var formtype = $('#ftype').val()
                        var eventcat = 'Sticky ShowRoom';
                        if (formtype.toLowerCase() != 'sticky form') {
                          eventcat = 'Show Room'
                        }
                        // $('#myModal_testdrive').modal('show');
                  
                        var gacarmodel = (($('#f_carmodel').val() == 'Home' || $('#f_carmodel').val() == 'Other') && $('#form-bsv #CarModel').val()) ? $('#form-bsv #CarModel option:selected').text() : $('#f_carmodel').val();
                        DataLayerMSILDL_FormSubmission_Type.Push($('#f_eventcategory').val(), 'Submit', gacarmodel + ' BS Pre OTP', gacarmodel, $('#form-bsv #Mobile').val(), $('#f_type').val());
                  
                        // GT code ends
                        tdSubmit({
                          'eventCategory': 'Brand Page Book Showroom Pre OTP '+carname,
                          'eventAction': 'click',
                          'eventLabel': 'Brand Book Showroom - Pre OTP '+carname,
                        }, 'event_nexa');
                        
                        $('#form-bsv #Names').val($('#form-bsv #Name').val());
                        $('#form-bsv #Emails').val($('#form-bsv #Email').val());
                        $('#form-bsv #Mobiles').val($('#form-bsv #Mobile').val());
                        // $(that).parents('.registerstepform').show();
                        // $('#step1').hide();
                  
                        // $('#step2').show();
                        // $('.resend0').css('pointer-events', 'none');
                        // OtpTimer();
                        // $('#counter').css('display', 'block');
                        // $('.resend0').css('color', 'grey');
                  
                        $('.resend0rfiCom').css('pointer-events', 'none');
                        $('#counterrfi').css('display', 'block');
                        $('.resend0rfiCom').css('color', 'grey');
                      } else { 
                        $('#whichForm').val('');
                        $('.bshowroom_brand').removeClass('disableCls');
                        $('.bshowroom_brand').css('pointer-events','inherit');
                        $('.bshowroom_brand').css('opacity','1');
                        $('.bookshowroom-visit .ResponseBrootError').css('display','block');
                        $('.bookshowroom-visit .ResponseBrootError').text(response.Message);
                      }
                    }).fail(function (err) { 
                      $('.bshowroom_brand').removeClass('disableCls');
                      $('.bshowroom_brand').css('pointer-events','inherit');
                      $('.bshowroom_brand').css('opacity','1');
                    });
                  
                  
                  
                  
                  
                  
                  
                  
                                  break;  
                  
                              }
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                              // generateXAEXII();            
                               

                        } else {
                          resultXAEIII = false;
                            displayBase64Image(response.captcha);
                                XAEXIIInput.value = ''
                            if (userInput.length < 1) {
                                resultElement.textContent = 'Please Enter Valid Captcha.';
                                resultElement.style.color = 'red';
                            } else {
                                resultElement.textContent = 'Captcha is incorrect. Please try again.';
                                resultElement.style.color = 'red';
                            }
                        }
                    },
                    error: function(err) {
                        console.log("ResponseError", err);
                    }
                });
        }else{
            resultElement.textContent = 'Fill 5 digit Captcha To Validate';
            resultElement.style.color = 'red';
            $('#XAEXIIInput').val('');
            resultXAEIII = false;  
        }
    }else{
    resultElement.textContent = 'Please Enter Captcha';
    resultElement.style.color = 'red';
    $('#XAEXIIInput').val('');
    resultXAEIII = false;
}
    



}













$("#form-rfipopup").bind("input", function (e) {
  checkUsername(usernameElpop);
  checkEmail(emailElpop);
  checkMobile(MobileElpop);
  checkSelected(rfistateElpop, "State");
  checkSelected(rficityElpop, "City");
  checkSelected(enrldealerElpop, "Dealer");
  checkSelected(rfimodelElpop, "Model");
  checkSelected(RFIBuyerTypeElpop, "Buyer Type");
  Ischeckbox(checkboxElpop,formIdpop);
  if ($("input[type=checkbox][name=IsDisclaimerAccepted]").is(":checked")) {
    $("input[type=checkbox][name=IsDisclaimerAccepted]").val("true");
  } else {
    $("input[type=checkbox][name=IsDisclaimerAccepted]").val("false");
  }
});

$("#form-rfipopup #rfipopstate").on("change", function () {
  if ($(this).val() != "") {
    $(document).find("#form-rfipopup").css("pointer-events", "none");
    $(document).find("body").css("pointer-events", "none");
    $("#RfiLoader").css("display", "block");
  }
  var cities = $("#rfipopcity");
  cities.html("");
  cities.append($("<option></option>").val("").text("City"));
  $("#form-rfipopup #rfipopenrldealer").html("");
  $("#form-rfipopup #rfipopenrldealer").append($("<option></option>").val("").text("Dealer"));
  var data = $(this).closest("form").serialize();
  var rowdata = PrepareRequest(Allapis.loadcities, data);
  $.ajax(rowdata)
    .done(function (response) {
      $.each(response, function (index, item) {
        cities.append($("<option></option>").val(item.Value).html(item.Text));
      });
      $("#RfiLoader").css("display", "none");
      $(document).find("#form-rfipopup").css("pointer-events", "inherit");
      $(document).find("body").css("pointer-events", "inherit");
    })
    .fail(function (err) {});
});

$("#form-rfipopup #rfipopcity").on("change", function () {
  if ($(this).val() != "") {
    $(document).find("#form-rfipopup").css("pointer-events", "none");
    $(document).find("body").css("pointer-events", "none");
    $("#RfiLoader").css("display", "block");
  }
  var dealer = $("#form-rfipopup #rfipopenrldealer");
  dealer.html("");
  dealer.append($("<option></option>").val("").text("Dealer"));
  var data = $(this).closest("form").serialize();
  var rowdata = PrepareRequest(Allapis.LoadDealers, data);
  $.ajax(rowdata)
    .done(function (response) {
      $.each(response, function (index, item) {
        dealer.append($("<option></option>").val(item.Value.split("|")[0]).html(item.Text));
      });
      $("#RfiLoader").css("display", "none");
      $(document).find("#form-rfipopup").css("pointer-events", "inherit");
      $(document).find("body").css("pointer-events", "inherit");
    })
    .fail(function (err) {});
});

var intervalrfipop;
var rfipopOtpTimer = function () {
  var count = 90;
  clearInterval(intervalrfipop);
  intervalrfipop = setInterval(function () {
    $("#countrfi").html(count);
    count--;
    if (count === 0) {
      clearInterval(intervalrfipop);
      $("#countrfi").html("");
      $("#counterrfi").css("display", "none");
      $(".resend0rfi").css("pointer-events", "inherit");
      $(".resend0rfi").css("color", "red");
    }
  }, 1000);
};

$("#submit_rfipopup").on("click", function (e) {
  e.preventDefault();
  $("#submit_rfipopup").addClass("disableCls");
  $("#rfiotpboxpopup .rfiotpsubmit").removeClass("disableCls");
  var isUsernameValid = checkUsername(usernameElpop),
    isEmailValid = checkEmail(emailElpop),
    isMobileValid = checkMobile(MobileElpop),
    isSelectStateValid = checkSelected(rfistateElpop, "State"),
    isSelectCityValid = checkSelected(rficityElpop, "City"),
    isSelectDealerValid = checkSelected(enrldealerElpop, "Dealer"),
    isSelectModelValid = checkSelected(rfimodelElpop, "Model"),
    isSelectBuyerValid = checkSelected(RFIBuyerTypeElpop, "Buyer Type"),
    ischeckboxValid = Ischeckbox(checkboxElpop,formIdpop);

  var isFormValid = isUsernameValid && isEmailValid && isMobileValid && isSelectStateValid && isSelectCityValid && isSelectDealerValid && isSelectModelValid && isSelectBuyerValid && ischeckboxValid;
  $("#submit_rfipopup").addClass("disableCls");
  if (isFormValid) {
    $("#submit_rfipopup").addClass("disableCls");
    $(".ResponseBrootError").css("display", "none");
    var data = $(this).closest("form").serialize();
    var data = data + "&CarModelName=" + $("#rfipopmodel option:selected").text();
    // var rowdata = PrepareRequest(Allapis.sendotp, data);
    var type = 'RYIPOPUP';
    sessionStorage.setItem('type', type);
    sessionStorage.setItem('rowdata', data);
    $('#XAEXIIInput').val('');
    registerin();
    generateXAEXII();
    // $("#RecaptchaPopUp").removeClass("hidden");
    // $("body").addClass("modal-open");
  } else {
    $("#submit_rfipopup").removeClass("disableCls");
  }
});

//Resend otp
$(".resend0rfi").on("click", function () {
  $(".resend0rfi").css("pointer-events", "none");
  $(".resend0rfi").css("color", "grey");
  var data = $("#form-rfipopup").serialize();
  $("#rfiotpboxpopup .rfiotperror").text("Enter a valid OTP");
  closeotppopuprfi();
  var type = 'RYIPOPUPRESEND';
  sessionStorage.setItem('type', type);
  sessionStorage.setItem('rowdata', data);
  $('#XAEXIIInput').val('');
  generateXAEXII();
  // $("#RecaptchaPopUp").removeClass("hidden");
  // $("body").addClass("modal-open");
});

// verify onkey
$(document).on("keyup", "#rfiotpboxpopup .verifyotp", function (e) {
  $("#rfiotpboxpopup .rfiotperror").hide();
});

$("#btdotrfi").on("keyup", function () {
  checkOtp(otpElpop);
});
//Verify otp
$("#rfiotpboxpopup .rfiotpsubmit").on("click", function (e) {
  e.preventDefault();
  $("#rfiotpboxpopup .rfiotpsubmit").addClass("disableCls");
  if (checkOtp(otpElpop)) {
    $("#rfiotpboxpopup  .rfiotperror").hide();
    $("#rfiotpboxpopup .rfiotperror").text("Enter a valid OTP");
    $("#rfiotpboxpopup .rfiotpsubmit").addClass("disableCls");
    var IsEnableSkipOTPchk = $("#f_isenableskipotp").val();
    if (typeof IsEnableSkipOTPchk == "undefined") {
      var IsEnableSkipOTP = "";
    } else {
      var IsEnableSkipOTP = $("#f_isenableskipotp").val();
    }
    var MobileNumberForSkipOTPChk = $("#f_mobilenumberforskipotp").val();
    if (typeof MobileNumberForSkipOTPChk == "undefined") {
      var MobileNumberForSkipOTP = "";
    } else {
      var MobileNumberForSkipOTP = $("#f_mobilenumberforskipotp").val();
    }
    var f_thankyouaccessories = $("#f_thankyouaccessories").val();
    if (typeof f_thankyouaccessories == "undefined") {
      var data =
        $("#form-rfipopup").serialize() +
        "&Otp=" +
        $("#btdotrfi").val() +
        "&CarModelName=" +
        $("#rfipopmodel option:selected").text() +
        "&IsEnableSkipOTP=" +
        IsEnableSkipOTP +
        "&MobileNumberForSkipOTP=" +
        MobileNumberForSkipOTP;
    } else {
      var data =
        $("#form-rfipopup").serialize() +
        "&Otp=" +
        $("#btdotrfi").val() +
        "&CarModelName=" +
        $("#rfipopmodel option:selected").text() +
        "&IsEnableSkipOTP=" +
        IsEnableSkipOTP +
        "&MobileNumberForSkipOTP=" +
        MobileNumberForSkipOTP +
        "&IsDisplayNewThankyouWithAccessories=" +
        f_thankyouaccessories;
    }
    data = data + '&CarModel=' + $('#form-rfipopup #rfipopmodel').val();
    var otp = $("#btdotrfi").val().trim();
    var rowdata2 = PrepareRequest(Allapis.registeryourinterest, data);
    $.ajax(rowdata2)
      .done(function (response2) {
        if(!response2.IsDuplicateEnq){
        if (response2.IsSuccess) {
          $("#rfiotpboxpopup .rfiotperror").hide();
          msildl.push({ event: "Sticky-RFI_POPUP_OTP", eventCategory: "Sticky-RFI_POPUP_OTP", eventAction: "Submit", eventLabel: "RFI_POPUP_SUBMIT_POST_OTP" });
          // $('.rfiotpsubmit').addClass('disableCls');
          $("#rfiotpboxpopup .rfiotpsubmit").removeClass("disableCls");
          //   $('#myModal_testdrive_rfi').modal('hide');
          closeotppopuprfi();
          openThankyou();
          //   $('#rfiotpboxpopup').find('.bookTestDriveSection').hide();
          // $('#rfiotpboxpopup').find('.testThankyouMsg').show();
          //   $('#rfiotpboxpopup').find('.testThankyouMsg').parent('.modal-content').find('.close').addClass('thankyou_close');
          //   $('#rfiotpboxpopup').modal('show');
          DataLayerMSILDL_FormSubmission_Type.Push(
            "Sticky-RFI_nexaworld",
            "Submit",
            $("#rfipopmodel option:selected").text() + " RFI Post OTP",
            $("#rfipopmodel option:selected").text(),
            $("#form-rfipopup").find("#rfipopMobile").val(),
            "Popup Nexaworld"
          );
          var CarModelType = $("#rfipopmodel option:selected").val();
          //Hide Ebook button
          $("#rfiotpboxpopup").find(".expAccessoriesBtn").hide();
          if (response2.IsDisplayMSDSQuestion) {
            $(".thanyou-boxPopup").css("display", "block");
          } else {
            $(".thanyou-boxPopup").css("display", "none");
          }
          if (response2.IsEnable !== "undefined") {
            $("#rfiotpboxpopup").find("#sf-thankyou").show();
            $("#rfiotpboxpopup").find(".testThankyouMsg").show();
            // $('.thankyoutitleres').html(response2.ThankyouTitle);
            $("#rfiotpboxpopup").find(".ThankyouSubTitleres").html(response2.ThankyouSubTitle);
            if (CarModelType == "16") {
              $("#rfiotpboxpopup").find(".thankyouMsgCarBoxSection").hide();
              $("#rfiotpboxpopup").find(".expAccessoriesBtn").css("display", "block");
            } else {
              $("#rfiotpboxpopup").find(".expAccessoriesBtn").css("display", "none");
              $("#rfiotpboxpopup").find(".thankyouMsgCarBoxSection").show();
              $("#rfiotpboxpopup").find(".BrandImageRes").attr("src", response2.BrandImage);
              $("#rfiotpboxpopup").find(".AccessoriesHeadingres").html(response2.AccessoriesHeading);
              $("#rfiotpboxpopup").find(".ExploreUrlres").attr("href", response2.ExploreAccessoriesURL);
              $("#rfiotpboxpopup").find(".BrandImageResBig").attr("src", response2.BrandImage);
              if (response2.AccessoryItems) {
                for (var i = 0; i < response2.AccessoryItems.length; i++) {
                  const element = response2.AccessoryItems[i];
                  if (response2.IsDisplayMSDSQuestion) {
                    $(".resulVal").append(
                      "<a href=" + element.AccessoryURL + '  target="_blank"><div class="item"><img src=' + element.AccessoryImage + "><p>" + element.AccessoryTitle + "</p></div></a>"
                    );
                  } else {
                    $(".resulVal").append("<a href=" + element.AccessoryURL + '  ><div class="item"><img src=' + element.AccessoryImage + "><p>" + element.AccessoryTitle + "</p></div></a>");
                  }
                }
              }
            }
          } else if (response2) {
            openThankyou();
            if (CarModelType == "16") {
              $("#rfiotpboxpopup").find(".expAccessoriesBtn").css("display", "block");
            } else {
              $("#rfiotpboxpopup").find(".expAccessoriesBtn").css("display", "none");
            }
          }
        } else {
          $("#rfiotpboxpopup .rfiotperror").show();
          $("#rfiotpboxpopup .rfiotperror").text(response2.Message);
          $("#rfiotpboxpopup .rfiotpsubmit").removeClass("disableCls");
        }
      }else{
        $('#rfiotpboxpopup .rfiotpsubmit').css('pointer-events','none');
        $('#rfiotpboxpopup .rfiotpsubmit').css('opacity','0.6');
        closeotppopuprfi();
      }
      })
      .fail(function (err) {
        $("#rfiotpboxpopup .rfiotpsubmit").removeClass("disableCls");
      });
  } else {
    $("#rfiotpboxpopup .rfiotpsubmit").removeClass("disableCls");
  }
});

function otppopupboxrfi() {
  $("#rfiotpboxpopup").removeClass("hidden");
  $("body").addClass("modal-open");
  // $('body').addClass('overflow-y-hidden')
  // $('#header-fixed').removeClass('z-[999]');
}
function closeotppopuprfi() {
  $("#rfiotpboxpopup").addClass("hidden");
  $("body").removeClass("modal-open");
  // $('body').removeClass('overflow-y-hidden')
}

function closethankyou() {
  $("#Thankyoupopup").addClass("hidden");
  $("body").removeClass("modal-open");
  // $('body').removeClass('overflow-y-hidden')
}
function openThankyou() {
  $("#Thankyoupopup").removeClass("hidden");
  $("body").addClass("modal-open");
  // $('body').addClass('overflow-y-hidden')
  // $('#header-fixed').removeClass('z-[999]');
}

//get data from local storage
function getDataFromLocal(key) {
  return JSON.parse(localStorage.getItem(key));
}

//set data in local storage
function setDataInLocal(key, value) {
  localStorage.setItem(key, value);
}

//remove data in local storage
function removeDataInLocal(key) {
  localStorage.removeItem(key);
}

var DataLayerMSILDL_FMP_Common = (function () {
  var Push = function (event, eventCategory, eventAction, eventLabel) {
    msildl.push({
      event: event,
      eventCategory: eventCategory,
      eventAction: eventAction,
      eventLabel: eventLabel,
      cd_timestamp: Math.round(new Date().getTime() / 1000.0),
    });
    var dealer_details = getDataFromLocal("dealer_details");
    var dealer_flag = 0;
    if (dealer_details && dealer_details.mspin) {
      dealer_flag = 1;
    }
    tdSubmit(
      {
        eventCategory: eventCategory,
        eventAction: eventAction,
        eventLabel: eventLabel,
        dealer_flag: dealer_flag,
      },
      "event_nexa"
    );
  };
  return {
    Push: Push,
  };
})();


$('.items-center .tilectas li a').on('click',function(){
  var modelid= $(this).attr('data-modelid');
  if(modelid){
      if(modelid !== ""){
  localStorage.setItem("CarModelsub", modelid);            
      }
  }
});
$('.banner-vid .banner-cta a.booknow').on('click',function(){
  var modelid= $(this).attr('data-modelid');
   if(modelid){
       if(modelid !== ""){
   localStorage.setItem("CarModelsub", modelid);            
       }
   }
})


$('#XAEXIIInput').on('focusout',function(){
  var event = 'Captcha Popup';
  var eventCategory = 'Captcha Popup';
  var eventLabel = 'Enter Captcha';
  var eventAction = 'Captcha';

  tdSubmit({
      'event': event,
      'eventCategory': eventCategory,
      'eventAction': eventAction,
      'eventLabel': eventLabel,
   }, 'event_nexa');
});
$('#RecaptchaPopUp .reload-image').on('click',function(){
  var event = 'Captcha Popup';
  var eventCategory = 'Captcha Popup';
  var eventLabel = 'Refresh';
  var eventAction = 'Captcha';
  tdSubmit({
      'event': event,
      'eventCategory': eventCategory,
      'eventAction': eventAction,
      'eventLabel': eventLabel,
   }, 'event_nexa');
});
$('#RecaptchaPopUp button').on('click',function(){
  var event = 'Captcha Popup';
  var eventCategory = 'Captcha Popup';
  var eventLabel = 'Submit';
  var eventAction = 'Captcha';
  tdSubmit({
      'event': event,
      'eventCategory': eventCategory,
      'eventAction': eventAction,
      'eventLabel': eventLabel,
   }, 'event_nexa');
});
$('#RecaptchaPopUp .subscribe-popup-close').on('click',function(){
  var event = 'Captcha Popup';
  var eventCategory = 'Captcha Popup';
  var eventLabel = 'Close';
  var eventAction = 'Captcha';
  tdSubmit({
      'event': event,
      'eventCategory': eventCategory,
      'eventAction': eventAction,
      'eventLabel': eventLabel,
   }, 'event_nexa');
});



//SUV Top navbar CDP tags
$('.dropdown1 .dropdown-content1 .bg-white.p-2').on('click', function() {
  var element = $(this).find('a:first');
  var hrefValue = element.attr('href');
  switch (hrefValue) {
      case '/grand-vitara':
          hrefValue = 'SUV - Grand Vitara';
          break;
      case '/jimny':
          hrefValue = 'SUV - Jimny';
          break;
      case '/fronx':
          hrefValue = 'SUV - Fronx'
          break;
      case '/invicto':
          hrefValue = 'MPV - Invicto'
          break;
      case '/xl6':
          hrefValue = 'MPV - XL6'
          break;
      case '/ciaz':
          hrefValue = 'HATCHBACK - Ciaz'
          break;
      case '/baleno':
          hrefValue = 'HATCHBACK - Baleno'
          break;
      case '/ignis':
          hrefValue = 'HATCHBACK - Ignis'
          break;
  }

  tdSubmit({
      event: '',
      eventCategory: "Top menu Navigation",
      eventAction: "Click",
      eventLabel: "Nexa Cars - " + hrefValue,
  }, 'event_nexa');
});



$(document).ready(function(){
  if($('#IsSuv').val()){
    var urls = window.location.pathname;
    var localHOST = $('#IsSuv').val();
    var splitUrl = localHOST.split('/');
    var nexSuv = splitUrl[3];
  
  if(urls.toString() == '/'+nexSuv.toString()){
    
    var H1 = $(".topheader").outerHeight();
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if(scroll > H1) {
        $(".topheader2").addClass("stick");
        $(".branch-banner-section").addClass("active");
      } else if (scroll < H1) {
        $(".topheader2").removeClass("stick");
        $(".branch-banner-section").removeClass("active");
      }
    });
  
    }
  }else{
    var H1 = $(".topheader").outerHeight();
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if(scroll > H1) {
        $(".topheader2").addClass("stick");
        $(".branch-banner-section").addClass("active");
      } else if (scroll < H1) {
        $(".topheader2").removeClass("stick");
        $(".branch-banner-section").removeClass("active");
      }
    });
  }
  
  if(!$('#IsSuv').val()){
    var H1 = $(".topheader").outerHeight();
    var HomeBanner = $(".homebanner").outerHeight();
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      // console.log('desktop')
      if (scroll < H1) {
        $(".topheader2").removeClass("stick");
        $(".mobileheader2").removeClass("stick");
      } else {
        if (scroll < HomeBanner) {
          $(".topheader2").addClass("stick");
          $(".mobileheader2").addClass("stick");
        } else if (scroll > HomeBanner) {
          // console.log('else')
          $(".topheader2").removeClass("stick");
          $(".mobileheader2").removeClass("stick");
        }
      }
    });
  }
});