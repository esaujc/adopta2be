'use strict'
const express = require('express');
const router = express.Router();
const membersController = require('../controllers/member-controller');


// GET Members listing

router.get('/', membersController.getMembers);


router.get('/new', membersController.getCreateMember)

// POST a new member
router.post('/', membersController.createMember);

// GET Member by MemberID  
router.get('/:id', membersController.getMemberByMemberId);

// DELETE a member by MemberID
// router.delete('/:id/delete', membersController.deleteMemberById);
router.post('/:id/delete', membersController.deleteMemberById);

// Update a member by MemberID
router.get('/:id/edit', membersController.getUpdateMember);
// router.put('/:id', membersController.updateMember);
router.post('/:id', membersController.updateMember);


module.exports = router;