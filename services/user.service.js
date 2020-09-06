let user = require('../models/user')

module.exports = {
    getUsers: async (req, res) => {
        try{
            let results = await user.all()
            return res.status(200).json(results);
        }catch (e) {
            console.log(e)
            return res.status(500).json({ status: 500, message: JSON.stringify(e) });
        }
    },

    getUser: async (req, res) => {
        try{
            let results = await user.one(req.params.id)
            return res.status(200).json(results);
        }catch (e) {
            console.log(e)
            return res.status(500).json({ status: 500, message: JSON.stringify(e) });
        }
    }
}