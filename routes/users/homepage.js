'use strict';
/** =================================
                Packages
**==================================*/

const express = require('express');
const router  = express.Router();

/** =================================
                Body
**==================================*/

/** homepage **/
router.get('/',(req,res) => {
  res.render('homepage');
})


module.exports = router;    