!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=a);var u,r=a("jzQFI"),l=a("eaxEB"),i={form:document.querySelector("form.feedback-form"),emailInput:document.querySelector("form input"),messageInput:document.querySelector("form textarea"),submitBtn:document.querySelector("form button")},d="feedback-form-state";window.addEventListener("load",(function(){u=r.default.load(d)||{email:"",message:""},i.emailInput.value=u.email,i.messageInput.value=u.message})),i.emailInput.addEventListener("input",e(l)((function(){u.email=i.emailInput.value,r.default.save(d,u)}),500)),i.messageInput.addEventListener("input",e(l)((function(){u.message=i.messageInput.value,r.default.save(d,u)}),500)),i.form.addEventListener("submit",(function(e){e.preventDefault(),r.default.remove(d),i.form.reset(),console.log(u),u.email="",u.message=""}))}();
//# sourceMappingURL=03-feedback.753ccde3.js.map
