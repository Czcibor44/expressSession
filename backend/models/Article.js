const mongoose = require ('mongoose');
const schema = mongoose.Schema;

let articleSchema = new schema({
        title: {
            type: String
        },
        author: {
            type: String
        },
        content: {
            type: String
        },
    }, {
        collection: 'atricles'
    }
)

module.exports = mongoose.model('Article', articleSchema)