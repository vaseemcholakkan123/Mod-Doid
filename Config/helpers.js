const { resolve, reject } = require('promise');
const db = require('./mongoConfig')
const stringToId = require('mongodb').ObjectId


module.exports={

    add_app(data){
        
        db.get().collection('apps').insertOne(data).then((data)=>{
        
           
        })

    },
    
    
    

    get_app_data(query){
        
        return new Promise(async(resolve,reject)=>{
            let appDAta =await db.get().collection('apps').find(query).toArray()
           
            resolve(appDAta)

        })
    },

    delete_app(id){

        

        db.get().collection('apps').deleteOne({_id:stringToId(id)})

    },

    find_app(id){

        return  new Promise (async(resolve,reject)=>{

           let data = await db.get().collection('apps').findOne({_id:stringToId(id)})
                resolve(data)
        })

    },

    update_app(data){

        return new Promise ((resolve,reject)=>{

                db.get().collection('apps').updateOne({appname:data.appname},{$set:data})

                resolve()

        })

    }



}