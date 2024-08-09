const express = require('express');
const {registerUserctrlr,loginUserCtrlr, sendNewsData} = require('./controller');
const authMiddleware = require('./authMiddleware');

const router = express.Router();

router.post('/registerUser',registerUserctrlr);
router.post('/login-user',loginUserCtrlr);
router.get('/news',authMiddleware,sendNewsData);

module.exports = router;