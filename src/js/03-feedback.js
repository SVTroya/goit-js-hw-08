import storage from "./storage.js"
import throttle from "lodash/throttle"

const refs = {
  form: document.querySelector('form.feedback-form'),
  emailInput: document.querySelector('form input'),
  messageInput: document.querySelector('form textarea')
}
const storageKey = "feedback-form-state"
let formInputObj

window.addEventListener('load', () => {
  formInputObj = storage.load(storageKey) || {email: "", message: ""}
  refs.emailInput.value = formInputObj.email
  refs.messageInput.value = formInputObj.message
})


refs.emailInput.addEventListener('input', throttle(() => {
  formInputObj.email = refs.emailInput.value
  storage.save(storageKey, formInputObj)
}, 500))

refs.messageInput.addEventListener('input', throttle(() => {
  formInputObj.message = refs.messageInput.value
  storage.save(storageKey, formInputObj)
}, 500))

refs.form.addEventListener('submit', (ev) => {
  ev.preventDefault()
  storage.remove(storageKey)
  refs.form.reset()
  console.log(formInputObj)
  formInputObj.email = ""
  formInputObj.message = ""
})