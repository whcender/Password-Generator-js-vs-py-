import string
import secrets
strings = string.ascii_letters + string.digits
symbols = "!@#$%^&*()_+"
total = strings + symbols
password_lenght = 16 

password = ''.join(secrets.choice(total) for i in range(password_lenght))

print(f"Your password is: {password}")
