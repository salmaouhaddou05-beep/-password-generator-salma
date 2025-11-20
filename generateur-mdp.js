document.addEventListener('DOMContentLoaded', () => {
    // 1. Get the necessary HTML elements from the page.
    const passwordDisplay = document.getElementById('password-display');
    const generateBtn = document.getElementById('generate-btn');

    /**
     * Generates a random password of a given length from a set of characters.
     * @returns {string} The randomly generated password.
     */
    function GeneratePassword() {
        const length = 16; // You can change the password length here
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
        
        let password = "";
        // La boucle 'for' répète le code qui est à l'intérieur.
        // Elle s'exécutera 'length' fois (ici, 16 fois).
        // En général, on nomme la variable de la boucle "i" (pour "index").
        for (let i = 0; i < length; i++) {
            // Code de la boucle : on choisit un caractère au hasard et on l'ajoute au mot de passe.
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }

    // 2. Add an event listener to the button.
    // When the button is clicked, generate a new password and display it.
    generateBtn.addEventListener('click', () => {
        passwordDisplay.textContent = GeneratePassword();
    });
});
