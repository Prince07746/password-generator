function generatePassword() {
    const includeLettersL = document.getElementById('includeLettersL').checked;
    const includeLettersU = document.getElementById('includeLettersU').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSpecialChars = document.getElementById('includeSpecialChars').checked;
    const hint = document.getElementById('hint').value;
    const charLimit = parseInt(document.getElementById('number').value);
  
    const letterSetL = 'abcdefghijklmnopqrstuvwxyz';
    const letterSetU = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberSet = '0123456789';
    const specialCharSet = '!@#$%^&*()_+[]{}|;:,.<>?';
  
    let charset = '';
    if (includeLettersL) {
      charset += letterSetL;
    }
    if (includeLettersU) {
      charset += letterSetU;
    }
    if (includeNumbers) {
      charset += numberSet;
    }
    if (includeSpecialChars) {
      charset += specialCharSet;
    }
    if (!includeLettersL && !includeNumbers && !includeSpecialChars && !includeLettersU){
      charset += letterSetL+specialCharSet+includeLettersU;
    }
    let password = '';
    const passwordLength = charLimit || 16; // Use the specified limit or default to 12 characters
  
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
  
    if (hint.trim() !== '') {

      password = hint + password;

    //   to make sure that the password will not pass the length required after concatenating the hint and password
      if(password.length > passwordLength){
        let decreaserpassword = "";
        for(let x = 0; x < passwordLength; x++){
            decreaserpassword += password[x];
        }
        password = decreaserpassword;
      }

    }
  
    document.getElementById('password').value = password;

// Calculate and display password strength percentage
const passwordStrength = calculatePasswordStrength(password);
document.getElementById('progress-percentage').textContent = `Password Strength: ${passwordStrength}%`;

document.getElementById('password-strength-bar').style.width = `${passwordStrength}%`;




document.getElementById('password').value = password;
}


// Function to calculate password strength (example, you can use a more advanced algorithm)
function calculatePasswordStrength(password) {
// For simplicity, let's assume that longer passwords are stronger
return Math.min(Math.floor((password.length / 16) * 100), 100); // Maximum strength is 100%
}



  
  



  // function to copy the the password
  function copyToClipboard() {
    event.preventDefault();

    const textToCopy = document.getElementById('password');
    
    // Select the text inside the input element
    textToCopy.select();
    textToCopy.setSelectionRange(0, 99999); // For mobile devices
    
    // Copy the selected text to the clipboard
    document.execCommand('copy');
    
    // Deselect the text
    textToCopy.setSelectionRange(0, 0);
    
    // Notify the user that the text has been copied
    var placeOfcopy = document.getElementById("copied-password");
    placeOfcopy.style.display = "block";

    setTimeout(function(){
    placeOfcopy.style.display = "none";
    },2000);

    var textOfcopy = document.getElementById("text-pass");
    textOfcopy.textContent = "password copied";
     

  }