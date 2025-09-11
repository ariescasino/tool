const { ERROR_PAGE } = require('@Helpers/contants');
const router = require('express').Router();
// const middware = require('@HttpControllers/AgentMaster/Middleware');
const AgentController = require('@HttpControllers/AgentMaster/AgentController');    

// router

router.get('/agent-list', (req, res) => {
    AgentController.list(req, res);
});

router.get('/info/:id', (req, res) => {
    //AgentController.getInfoAgent(req, res);
});

router.post('/change-password/:id', (req, res) => {
    //AgentController.changePasswordAgent(req, res);
});

router.get('/remove/:id', (req, res) => {
    //AgentController.removeAgent(req, res);
});

router.post('/update/:id', (req, res) => {
    //AgentController.updateAgent(req, res);
});

router.post('/add', (req, res) => {
    //AgentController.addAgent(req, res);
});

router.post('/transfer', (req, res) => {
    //AgentController.transferAgent(req, res);
});

router.get('/list-username-agent-master', (req, res) => {
    //AgentController.getListUsernameAgentMaster(req, res);
});

router.get('/list-users-username-by-agent/:id', (req, res) => {
    //AgentController.getListUsersUsernameByAgent(req, res);
});

router.get('/list-users-by-agent-master/:id', (req, res) => {
    //AgentController.getListUserByAgentMaster(req, res);
});

router.get('/list-users-by-agent-child/:id', (req, res) => {
    //AgentController.getListUserByAgentChild(req, res);
});

// Action
router.get('/get-profit-by-agent-child/:code', (req, res) => {
    AgentController.Actions.getProfitByAgentChild(req, res);
});


router.get('/view-agent-child-users/:id', (req, res) => {
    AgentController.Actions.agentChildViewUsers(req, res);
});

router.get('/get-profit-by-agent-master/:code', (req, res) => {
    AgentController.Actions.getProfitByAgentMaster(req, res);
});

router.get('/add-agent-master', (req, res) => {
    AgentController.Actions.addAgentMaster(req, res);
});

router.get('/agent-detail/:id', (req, res) => {
    AgentController.Actions.agentDetail(req, res);
});

router.get('/agent-view-users/:id', (req, res) => {
    AgentController.Actions.agentUsers(req, res);
});


module.exports = router;