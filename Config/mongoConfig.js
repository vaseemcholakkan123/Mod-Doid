const mongo = require('mongodb').MongoClient

const state = {
    db:null
}

module.exports.connect=(done)=>{

    const dbUrl = 'mongodb://localhost:27017'
    const dbname = 'modDroidDb'

    mongo.connect(dbUrl,(err,data)=>{
        if(err) return done(err)
        state.db=data.db(dbname)
    })
    done()
}

module.exports.get=()=>{
    return state.db
}