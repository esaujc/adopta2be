'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.Types.ObjectId;

const memberSchema = new Schema({
  // owner: { type: ObjectId, ref: 'User' },
  
  isActive: {type: Boolean, default:true},
  membershipId: {type: Number, unique: true, required: true},
  hasMembershipId: Boolean,
  vinculaliaDateUse: Date,
  lopd:  Boolean,
  paymentMethod: String,
  lastPaymentDate: Date,
  lastPayment: String,

  monoparental:  Boolean,
  nif1: String,
  name1: String,
  lastName1:  String,
  knowsWUpGroup1: Boolean,
  isInWUoGroup1: Boolean,
  userArea1: String,
  telephone1: Number,
  managementPosition1: {
    type: String,
    enum: ['Sin Cargo', 'Vocal', 'Tesorero', 'Secretario', 'Presidente'],
  },
  email1: String,

  nif2: String,
  name2: String,
  lastName2: String,
  knowsWUpGroup2: Boolean,
  isInWUoGroup2: Boolean,
  userArea2: String,
  telephone2: Number,
  managementPosition2: {
    type: String,
    enum: ['Sin Cargo', 'Vocal', 'Tesorero', 'Secretario', 'Presidente'],
  },
  email2: String,


  iban: {
    type: String,  // (4+20)
    max: 24,
  },
  address: String,
  city: String,
  county: String,
  zip: String,
  origin: String,
  sepaSignDate: Date,
  others: String,

  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;