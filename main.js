let strings = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+")
let passwordLength = 16
let password = ""

for(i=0; i<passwordLength; i++){
    password += strings[Math.floor(Math.random() * strings.length)]
}
console.log(`Your password is: ${password}`)
