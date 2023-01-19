import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'

// variables //
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notANumber(weight) || notANumber(height)

    if (showAlertError) {
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = BMI(weight, height)
    const message = `Your BMI is ${result}`

    Modal.message.innerText = message
    Modal.open()
}

function notANumber(value) {
    return isNaN(value) || value == ""
}

function BMI(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}