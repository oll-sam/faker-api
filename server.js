const express = require('express')
const faker = require('faker')

class User {
    constructor(){
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor(){
        this.companyName = faker.company.companyName();
        this.address = {
            "street": faker.address.streetAddress(),
            "city": faker.address.city(),
            "state": faker.address.state(),
            "zipCode":faker.address.zipCode(),
            "country": faker.address.country()
        }
        
    }
}

const app = express()
const port = 8000;
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/', (req,res)=>{
    res.json({message : "Hello!"})
})

app.get('/api/users/new', (reg,res) =>{
    res.json(new User)
})

app.get('/api/companies/new', (reg,res) => {
    res.json(new Company)
})

app.get('/api/user/company', (reg,res) => {

    const user = new User
    const company = new Company
    const both = {user, company}
    res.json(both)
})

app.listen(port)