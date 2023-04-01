let dbUsers =
[
    {
        username:   "AdhaRizwan",
        password:   "Adha2002",
        name:       "Adha Rizwan Bin Mohd Khaja",
        email:      "B022110131@student.utem.edu.my",
    } ,
    {
        username:   "AzarilLoner",
        password:   "password",
        name:       "Muhammad Azaril Afiq Bin Azmi",
        email:      "B022110098@student.utem.edu.my",
    } ,
    {
        username:   "Zodiac",
        password:   "password",
        name:       "Zaid Zaihan Bin Mohamad Zainuddin",
        email:      "B022110151@student.utem.edu.my",
    }
]

function login(username, password)
{
console.log("Login Attempted With The Following Credentials:", "Username:", username, "Password:", password)
let matched = dbUsers.find
(   element => 
    element.username == username
)
//console.log(matched)
if (matched)
{
    if(matched.password == password)
    {
    console.log("------Login Successful!------")
    return matched
    }
    else
    {
        return "------Incorrect Password!------"
    }
}
else
{
    return "------Username invalid!------"
}
}

function register(newUsername, newPassword, newName, newEmail)
{
    console.log("Registration Attempted For New User:", newUsername)
    //checks if username exists
    let exist = dbUsers.find
    (   element => 
        element.username == newUsername
    )
    if(exist)
    {
        console.log("Username Already in Use! Try Another Username!")
    }
    else
    {
        dbUsers.push
        ({
            username:   newUsername,
            password:   newPassword,
            name:       newName,
            email:      newEmail
        })
        console.log("Registration Succesful For New User:", newUsername)
    }
}

//login and registration done through the console
console.log(login("AdhaRizwan", "Adha2002"))
console.log(login("Imm", "Valo01"))
register("Zodiac", "Valo01", "Immran Azry Bin Mohamad Azhari", "B022110107@student.utem.edu.my")
register("Imm", "Valo01", "Immran Azry Bin Mohamad Azhari", "B022110107@student.utem.edu.my")
console.log(login("Imm", "Balo01"))
console.log(login("Imm", "Valo01"))