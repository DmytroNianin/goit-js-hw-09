var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire7bc7;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire7bc7=o);var i=o("iQIUW");const r={form:document.querySelector(".form"),delay:document.getElementsByName("delay"),step:document.getElementsByName("step"),amount:document.getElementsByName("amount")};function l(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3&&n({position:e,delay:t}),o({position:e,delay:t})}),t)}))}function u({position:e,delay:t}){i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)}function a({position:e,delay:t}){i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}r.form.addEventListener("submit",(function(e){e.preventDefault(),function(e,t){for(let n=1;n<=Number(r.amount.value);n+=1)l(n,e+=1===n?0:t).then(u).catch(a)}(Number(r.delay.value),Number(r.step.value))}));
//# sourceMappingURL=03-promises.8e6f01e7.js.map
