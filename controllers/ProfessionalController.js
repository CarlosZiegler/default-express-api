const Profissional = require('../models/Profissional.js')


module.exports = {
    async index(req, res, next) {
        try {
            const profissionals = await Profissional.find()
            res.json(profissionals)
        } catch (error) {
            res.json(error)
        }
    },
    async show(req, res, next) {
        try {
            const profissional = await Profissional.findOne({ _id: req.params.id })
            res.json(profissional)
        } catch (error) {
            res.status(404).json(error)
        }
    },
    async store(req, res, next) {

        if (req.user.role !== 'professional') {
            return res.json({ error: "not permitted" });
        }

        const {
            position,
            location,
            contact,
            userId = req.user._id,
        } = req.body

        try {
            const result = await Profissional.create({
                position,
                location,
                userId,
                contact: {
                    ...contact, email: req.user.email,
                }
            })
            return res.json({ result });
        } catch (error) {
            console.log(error)
        }

    },
    async destroy(req, res, next) {
        const _id = req.params.id
        try {
            const result = await Profissional.deleteOne({ _id: _id })
            if (result.deletedCount === 1) {
                return res.status(200).json({ message: "Profissional deleted" })
            }
        } catch (error) {
            return res.status(404).json(error)
        }
    },
    async update(req, res, next) {
        const _id = req.params.id
        let data = req.body
        try {
            const result = await Profissional.updateOne({ _id: _id }, data)
            if (result.nModified === 1) {
                return res.status(200).json({ message: "Profissional updated" })
            }
        } catch (error) {
            return res.status(404).json(error)
        }
    }
}
