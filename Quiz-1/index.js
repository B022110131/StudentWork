let data1 = 1
let data2 = "2"
console.log(data1, typeof data1)
console.log(data2, typeof data2)

let data3 = data1 + data2
console.log(data3, typeof data3)

let data4 = data1 + parseInt(data2)
console.log(data4, typeof data4)

let data5 = true
let data6 = data5 + data2
console.log(data6, typeof data6)

let data7 = (data5.toString() + data2)
console.log(data7, typeof data7)

let data8 = (data1.toString() + data2)
console.log(data8, typeof data8)

//Array
let data = ["one", 2, false]
console.log(data)
console.log(data[2], typeof data[2])

//Object
let user = 
    {
    name: "ADHA RIZWAN",
    faculty: "FKEKK",
    phone: "+6012 831-0651",
    email: "B022110131@STUDENT.UTEM.EDU.MY"
    }

console.log(user.name, user.faculty, user.phone, user.email)

user = 
    {
    name: "ADHA RIZWAN",
    faculty: "FKEKK",
    phone: [
            "+6012 831-0651",
            "+6012 964-0381"
            ],
    email: "B022110131@STUDENT.UTEM.EDU.MY"
    }
console.log(user.phone)
console.log(user.phone[0])

user = 
    {
    name: "ADHA RIZWAN",
    faculty: "FKEKK",
    phone: {
            personal: "+6012 831-0651",
            mother: "+6012 964-0381"
            },
    email: "B022110131@STUDENT.UTEM.EDU.MY"
    }
console.log(user.phone.personal)
console.log(user.phone.mother)
