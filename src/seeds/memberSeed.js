'use strict'
const mongoose = require('mongoose');
const Member = require('../models/members')

const members = [ 
    {
        isActive: true,
        membershipId: 18,
        hasMembershipId: true,
        vinculaliaDateUse: '2019-01-05',
        lopd:  true,
        paymentMethod: 'Trasferencia',
        lastPaymentDate: '2019-02-15',
        lastPayment: '2018-2S',
      
        monoparental:  false,
        nif1: '123456789A',
        name1: 'Juan',
        lastName1:  'Perez',
        knowsWUpGroup1: true,
        isInWUoGroup1: false,
        userArea1: 'No info',
        telephone1: 666554433,
        managementPosition1: 'Sin Cargo',
        email1: 'Juan@juan.com',
      
        nif2: '',
        name2: '',
        lastName2: '',
        knowsWUpGroup2: false,
        isInWUoGroup2: false,
        userArea2: '',
        telephone2: 0,
        managementPosition2: 'Sin Cargo',
        email2: '',
      
      
        iban: 'ES2512345678901234567890',
        address: 'C/ Jur',
        city: 'San Juan',
        county: 'Alicante',
        zip: '03005',
        origin: 'Preguntar',
        sepaSignDate: '2018-05-18',
        others: 'Lalalalalalal',

},
{
    isActive: true,
    membershipId: 19,
    hasMembershipId: true,
    vinculaliaDateUse: '2019-01-05',
    lopd:  true,
    paymentMethod: 'Trasferencia',
    lastPaymentDate: '2019-02-15',
    lastPayment: '2018-2S',
  
    monoparental:  false,
    nif1: '123456789A',
    name1: 'Roberto',
    lastName1:  'Perez',
    knowsWUpGroup1: true,
    isInWUoGroup1: false,
    userArea1: 'No info',
    telephone1: 666554433,
    managementPosition1: 'Sin Cargo',
    email1: 'Juan@juan.com',
  
    nif2: '',
    name2: '',
    lastName2: '',
    knowsWUpGroup2: false,
    isInWUoGroup2: false,
    userArea2: '',
    telephone2: 0,
    managementPosition2: 'Sin Cargo',
    email2: '',
  
  
    iban: 'ES2512345678901234567890',
    address: 'C/ Jur',
    city: 'San Juan',
    county: 'Alicante',
    zip: '03005',
    origin: 'Preguntar',
    sepaSignDate: '2018-05-18',
    others: 'Lalalalalalal',

}

]

mongoose.connect('mongodb://localhost/adopta2',{ useNewUrlParser: true,useCreateIndex: true, })
.then(() => {
    console.log('Connected to mongo');
    Member.create(members)
    .then(()=> {
        console.log('Members created');
        mongoose.connection.close();
    })
    .catch((error) => {
        console.log('Error creating members', error);
        mongoose.connection.close();
    });
})
.catch(error => {
    console.log('Error connecting to mongo');
})