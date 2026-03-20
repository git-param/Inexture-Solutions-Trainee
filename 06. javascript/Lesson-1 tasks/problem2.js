// Create a function that:

// Accepts a username and password
// If username is "admin" and password is "1234", print Login Successful
// Otherwise, print Invalid Credentials


let avg;
const prompt=require('prompt-sync')();
const username=prompt('Enter Username: ');
const password=prompt('Enter your password: ');

access=function(u,p)
        {
            if(u=="admin")
            {
                if(p==1234)
                    return true;
                else
                    return false;
            }
            return false;
        }

let value=access(username,password);
if(value)
    console.log("Login Successful");
else
    console.log("Invalid Credentials");