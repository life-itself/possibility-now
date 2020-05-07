export function setDefault() {
  document.getElementById('toBeCopied').innerHTML = "Copy to Clipboard";
}

export function SibForm() {
  window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
  window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "There was an issue with the information. Could you please review the field format and try again 🙏";
  window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";
  window.GENERIC_INVALID_MESSAGE = "There was an issue with the information. Could you please review the field format and try again 🙏";
  window.translation = {
      common: {
          selectedList: '{quantity} list selected',
          selectedLists: '{quantity} lists selected'
      }
  };

var AUTOHIDE = Boolean(0);
}

export function submitData(e) {
  e.preventDefault();
  var t = !0;
  if ([].concat(r(Array.from(D.getElementsByClassName("sib-optin"))), r(Array.from(D.getElementsByClassName("sib-multiselect"))), r(Array.from(D.getElementsByClassName("sib-checkbox-group"))), r(Array.from(D.getElementsByClassName("sib-radiobutton-group")))).forEach(function(e) {
    var n = e.querySelector(".form__entry"),
      r = d(e, n, e.errorMessage);
    t = t && r
  }), t = Array.from(D.getElementsByClassName("sib-select")).reduce(f, t), t = Array.from(D.getElementsByClassName("sib-input")).reduce(m, t), t = Array.from(D.getElementsByClassName("sib-captcha")).reduce(_, t), t = Array.from(D.getElementsByClassName("sib-sms-select")).reduce(c, t)) {
    var n = D.querySelector(".sib-loader") || D.querySelector(".loader"),
      a = D.querySelector('button[type="submit"]');
    n ? (n.style.display = "inline-block", a.style.display = "none") : (a.querySelector("svg").removeClass("sib-hide-loader-icon"), a.setAttribute("disabled", !0), a.classList.add("sib-form-block__button-disabled"));
    var i = D.querySelector(".g-recaptcha"),
      s = !!i && "invisible" === i.dataset.size;
    window.grecaptcha && s ? (window.grecaptcha.reset(), window.grecaptcha.execute()) : M(D)
  }
}
