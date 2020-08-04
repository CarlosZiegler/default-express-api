
module.exports = {
    async index(req, res, next) {
        try {

            res.json({ message: "Ok" })
        } catch (error) {
            res.json(error)
        }
    },
    async show(req, res, next) {
        try {

            res.json({ message: "show" })
        } catch (error) {
            res.status(404).json(error)
        }
    },
    async store(req, res, next) {

        res.json({ message: "store" })

    },
    async destroy(req, res, next) {
        res.json({ message: "destroy" })
    },
    async update(req, res, next) {
        res.json({ message: "update" })
    }
}
