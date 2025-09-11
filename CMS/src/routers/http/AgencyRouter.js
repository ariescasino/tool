const { ERROR_PAGE } = require('@Helpers/contants');
const router = require('express').Router();
// const middware = require('@HttpControllers/AgentMaster/Middleware');
const AgencyController = require('@HttpControllers/AgencyController');

// router

router.get('/', (req, res) => {
    AgencyController.listAgency(req, res);
});

module.exports = router;