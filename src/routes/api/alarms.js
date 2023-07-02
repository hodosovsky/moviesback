const express = require("express");

const {getAlarmController
 
} = require("../../controllers/alarmController");

const { asyncWrapper } = require("../../helpers/apiHelpers");

const router = express.Router();
// router.use(authMiddleware);

router.get("/get", asyncWrapper(getAlarmController));


module.exports = router;