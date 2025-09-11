const sequelize = require("../../databases/mysql");
const { Model, DataTypes } = require("sequelize");
const { UserModel } = require("@Models/User/User");
const { AgencyModel } = require("@Models/Agency/Agency");
const { AgencyRefModel } = require("@Models/Agency/AgencyRef");

// This function will retrieve a list of downlines starting from F0 and return an object containing downline information.
const getTheAgencyLevel = async (masterAgentId) => {
    let arrEx = {};
    try {
        for (var i = 1; i <= 1000; i++) {
            if (i == 1) {
                const getDownlines = await AgencyRefModel.findAll({
                    where: { agency: masterAgentId },
                    include: [
                        {
                            model: UserModel.scope('withRoleAgency', 'withAgencyInfo'),
                            as: "userInfo",
                            attributes: { exclude: ["password", "deletedAt", "code", "status", "updatedAt"] },
                            require: false
                        }
                    ],
                    attributes: { exclude: ["deletedAt", "updatedAt"] },
                    raw: true,
                    nest: true
                });

                if (getDownlines.length > 0) {
                    arrEx["cap" + i] = getDownlines;
                } else {
                    break;
                }
            } else {
                if (arrEx.hasOwnProperty(["cap" + (i - 1)]) && arrEx["cap" + (i - 1)].length > 0) {
                    arrEx["cap" + i] = [];
                    for (const agent of arrEx["cap" + (i - 1)]) {
                        if (!!agent) {
                            const downlinesAgent = await AgencyRefModel.findOne({
                                where: { agency: agent.userInfo.AgencyInfo.id },
                                include: [
                                    {
                                        model: UserModel.scope('withRoleAgency', 'withAgencyInfo'),
                                        as: "userInfo",
                                        attributes: { exclude: ["password", "deletedAt", "code", "status", "updatedAt"] },
                                        require: false
                                    }
                                ],
                                attributes: { exclude: ["deletedAt", "updatedAt"] },
                                raw: true,
                                nest: true
                            });
                            if (!!downlinesAgent) arrEx["cap" + i].push(downlinesAgent);
                        }
                    }
                    if (arrEx["cap" + i].length <= 0) delete arrEx["cap" + i];
                } else {
                    break;
                }
            }
        }

        return arrEx;

    } catch (e) {
        console.log(e);
        return arrEx;
    }
}

const getUserAndAgencyList = async (masterAgentId, exportType = true) => {
    let arrUserUid = [];
    let arrAgencyId = [];
    const getDownlinesAgency = await getTheAgencyLevel(masterAgentId);
    for (const [level, dataAgency] of Object.entries(getDownlinesAgency)) {
        //console.log(level, dataAgency);
        dataAgency.forEach(agency => {
            arrUserUid.push(agency.userInfo.id);
            arrAgencyId.push(agency.userInfo.AgencyInfo.id);
        });
    }

    const refUserByAgency = await AgencyRefModel.findAll({ where: { agency: arrAgencyId }, attributes: ["uid"] });
    refUserByAgency.forEach((ref) => arrUserUid.push(ref.uid));

    arrUserUid = [...new Set(arrUserUid)];

    return arrUserUid;
}

const getCurrentUserList = async (masterAgentId, exportType = true) => {
    let match = {};
    let assocScopes = [];
    // add condition agency = curent agency id
    match.agency = masterAgentId;

    assocScopes.push(
        { method: ['withUserInfo'] },
        { method: ['withRoleUser'] },
        //{ method: ['withRoleUser'] }
    );

    let getUsers = await AgencyRefModel.scope(assocScopes).findAll({
        where: match,
        order: [["id", "ASC"]],
        attributes: { exclude: ["password", "deletedAt"] },
    });

    let expListUser = [];
    for (const user of getUsers) {
        (exportType) ? expListUser.push(user.userInfo) : expListUser.push(user.userInfo.id);
    }
    return expListUser;
}

module.exports = {
    getTheAgencyLevel,
    getUserAndAgencyList,
    getCurrentUserList
};
