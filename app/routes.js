const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

// Run this code when a form is submitted to 'dtr-nop-answer'
router.post('/dtr-nop-answer', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var dtrNopAnswer = req.session.data['dtr-nop-answer']
  
    // Check whether the variable matches a condition
    if (dtrNopAnswer == "yes"){
      // Send user to next page
      res.redirect('/question-follow-up-1-follow-up-1')
    } else {
      // Send user to ineligible page
      res.redirect('/question-follow-up-1-follow-up-2')
    }
  
  })