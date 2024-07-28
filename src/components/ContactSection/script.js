import emailjs from '@emailjs/browser';
import { addAttribute } from 'astro/compiler-runtime';

const form = document.querySelector(".form-message");
const error = document.querySelector(".error-form");
const successful = document.querySelector(".successful-form")
const serviceID = "service_8crll4m";
const templateID = "template_8m5o2eg";
const formState = {
    name: '',
    email: '',
    subject: '',
    message: ''
}

emailjs.init({
    publicKey: 'Pc-etQwavprBFafvF'
})

const setErrorText = (errorMessage, errorField) => {
    errorField.innerText = errorMessage;
    errorField.classList.remove("hidden")
}

const regex = {
    nameRegex: /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/,
    subjectRegex: /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/,
    emailRegex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    messageRegex: /^[a-zA-Z0-9\s$.,áéíóúÁÉÍÓÚ¿?¡!()]+$/
}

const disabledButton = true;

const controlledForm = (field) => {
    document.getElementById("form-" + field).addEventListener('input', (e) => {
        const value = e.target.value
        formState[field] = value;
        const errorField = document.getElementById("error-" + field);
        switch (field) {
            case 'name':
                if (!value) setErrorText("¡No deje su nombre vacío! ¡No sea tímido!", errorField)
                else if (!regex.nameRegex.test(value)) setErrorText("¡Oops! Lo sentimos, pero por motivos de seguridad, solo admitimos letras normales en este campo. ¡Nada de números o códigos maliciosos! >:(", errorField)
                else if(value.length > 30) setErrorText("No juzgamos ningún nombre, creemos que todos son hermosos, ¡pero su nombre tan largo podría reventar nuestra casilla de mensajes! Por favor, abrevielo o ponga un nombre más corto.", errorField)
                else errorField.classList.add("hidden")
                break;
            case 'subject':
                if(!value) setErrorText("¡No se olvide de poner un asunto para su mensaje! Eso lo hará más llamativo.", errorField)
                else if(!regex.subjectRegex.test(value)) setErrorText("¡Woops! Sepa disculpar pero no admitimos carácteres especiales en estos campos, solo letras normales. Nos pondría muy triste que con un código binario nos roben todas nuestras moras. :(", errorField)
                else if(value.length > 50) setErrorText("¡Amamos su iniciativa de escribir un asunto tan detallado!, sin embargo, un asunto tan largo como este podría romper nuestra casilla de mensajes. Por favor, abrevie un poco más el asunto.", errorField)
                else errorField.classList.add("hidden")
                break;
            case 'email':
                if(!value) setErrorText("¡Oígame! Si deja su email vacío, ¡después no podremos contactarlo! D: (a menos que posea poderes telepáticos).", errorField)
                else if(!regex.emailRegex.test(value)) setErrorText("El email ingresado debe ser un... email, claro... ¡Debe tener formato de email! No sé como le dicen los señores formales a eso.", errorField)
                else errorField.classList.add("hidden")
                break;
            case 'message':
                if(!value) setErrorText("No se olvide de lo más importante, ¡el mensaje! Si no escribe un bonito mensaje, no sabremos si quiere trabajar con nosotros o si es una baya venenosa que nos viene a cobrar las deudas (de ser lo segundo, no tenemos dinero, aún)", errorField);
                else if(!regex.messageRegex.test(value)) setErrorText("¡Oh no! En este campo permitimos letras, números, comas, puntos, signos de pregunta, de exclamación, paréntesis y el signo '$' (por razones obvias). Ya sabe, razones de seguridad. Queremos evitar abrir el email y acabar con un lorito comiéndose los archivos de nuestra computadora.", errorField)
                else errorField.classList.add("hidden")
                break;
        }
    })
}

for (let key in formState) controlledForm(key)

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!error.classList.contains("hidden")) error.classList.add("hidden")
    if (!successful.classList.contains("hidden")) successful.classList.add("hidden")
    const values = {
        name: document.getElementById("form-name").value,
        subject: document.getElementById("form-subject").value,
        email: document.getElementById("form-email").value,
        message: document.getElementById("form-message").value,
    }
    for (let key in values) {
        const errorField = document.getElementById("error-" + key);
        if (!values[key] || !errorField.classList.contains("hidden")) {
            error.classList.remove("hidden")
            window.scrollBy({
                top: 1000,
                behavior: 'smooth'
            })
            error.animate([
                { transform: 'translateX(0)' },
                { transform: 'translateX(-10px)' },
                { transform: 'translateX(10px)' },
                { transform: 'translateX(-10px)' },
                { transform: 'translateX(10px)' },
                { transform: 'translateX(0)' }
              ], {
                duration: 500, // Duración de la animación en milisegundos
                iterations: 1, // Número de veces que se repite la animación
              });
            return
        }
    }
    successful.classList.remove("hidden")
    window.scrollBy({
        top: 1000,
        behavior: 'smooth'
    })
    emailjs.send(serviceID, templateID, values)
})