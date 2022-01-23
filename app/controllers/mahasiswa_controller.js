const model = require('../models/index');
const mahasiswa = {}

mahasiswa.getAll = async (req, res) => {
    try {
        await model.mahasiswa.findAll().then((result) => {
            if (result.length > 0) {
                res.status(200).json({
                    message: 'OK',
                    data: result
                })
            }
        })
    } catch (error) {
        res.status(404).json({
            data: error
        })
    }
}

module.exports = mahasiswa;