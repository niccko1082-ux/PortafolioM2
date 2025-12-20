// Saludo dinámico según la hora del día
document.addEventListener('DOMContentLoaded', () => {
    // 1. Saludo Dinámico
    const greetingContainer = document.querySelector('#sobre-mi p');
    if (greetingContainer && greetingContainer.innerText.startsWith('Hola!')) {
        const hour = new Date().getHours();
        let greetingText = "Hola";
        
        if (hour >= 5 && hour < 12) {
            greetingText = "Buenos días";
        } else if (hour >= 12 && hour < 19) {
            greetingText = "Buenas tardes";
        } else {
            greetingText = "Buenas noches";
        }

        // Reemplazamos el "Hola" original con el saludo dinámico
        greetingContainer.innerHTML = greetingContainer.innerHTML.replace('Hola', greetingText);
    }

    // 2. Validación de Formulario Básica
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Evitamos que se recargue la página

            const inputs = form.querySelectorAll('input');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.border = "2px solid red";
                } else {
                    input.style.border = "none";
                }
            });

            if (isValid) {
                alert('¡Mensaje enviado con éxito!');
                form.reset(); // Limpiamos el formulario
                // Restaurar estilos
                inputs.forEach(input => input.style.border = "");
            } else {
                alert('Por favor llena todos los campos.');
            }
        });
    }
});
