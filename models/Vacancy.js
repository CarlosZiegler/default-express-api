// User model here
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vacancySchema = new Schema({
    title: String,
    description: String,
    tags: [String],
    location: String,
    companyId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    applications: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

const Vacancy = mongoose.model("Vacancy", vacancySchema);

module.exports = Vacancy;