'use strict'
const Member = require('../models/members');

const getMembers = async function (req, res, next) {
        Member.find()
        .then((result) => {
            console.log(result);
            // res.end(JSON.stringify(result));
            // res.status('List of members', result);
            // Uncomment the line above if you want yo use views
            // res.render('listMembers', { title: 'List of Members', members: result });
            return res.status(200).json(result)
        })
        .catch(error => {
            console.log(error);
            res.end('Error: ', JSON.stringify(error));
            
        }) 
};

const getMemberByMemberId = async function (req, res, next) {
    const member_id = req.params.id;

        Member.findOne({membershipId: member_id})
        .then((result) => {
            if (!result){
                res.status(404);
                return res.status(404).json({
                    error: 'Member not found'  
                  })
            }
            return res.status(200).json(result)
        })
        .catch(error => {
            return res.status(404).json({
                error: error,
                })
        }) 
};

const createMember =  function (req,res,next){
    const newMember = req.body;
    const member_id = req.body.membershipId;

    Member.findOne({membershipId: member_id})
    .then((result) => {
        if (result)
            res.status(422).json({error: 'Member already exist'});
        else {
            Member.create(newMember)
              .then(() => {
                 res.status(200).json({ newMember });   
              })
              .catch((error) => {
              next(error);
              });
        }
    })
    .catch(next)
};

const getCreateMember = (req,res,next) => {
    res.render('newMember', { title: 'Add New Member' });
};

const getUpdateMember = (req,res,next) => {
    const memberId = req.params.id;
    Member.findOne({membershipId: memberId})
    .then (member => {
        res.render('editMember', { title: 'Edit Member', member: member });
    })
    .catch(next);
};

const updateMember = (req, res, next) => {
    const memberId = req.params.id;
    const memberUpdated = req.body;

    Member.findOneAndUpdate({membershipId: memberId }, memberUpdated)
    .then((result) => {
        if (!result){
            res.status(404).json({error: 'Member not found'});    
        }else{
            res.status(200).json(memberUpdated);
        }
    })
    .catch(next);
};

const deleteMemberById = (req, res, next) => {
    const memberId = req.params.id;

    Member.findOneAndDelete({membershipId: memberId})
    .then(result => {
        res.status(200).json(result);
    })
    .catch(next);
}

module.exports = {
    getMembers,
    getMemberByMemberId,
    createMember,
    getCreateMember,
    updateMember,
    deleteMemberById,
    getUpdateMember
} 
