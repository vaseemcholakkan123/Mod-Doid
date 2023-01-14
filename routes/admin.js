var express = require('express');
var router = express.Router();
const helperf = require('../Config/helpers')



/* GET users listing. */
router.get('/', function(req, res, next) {

  
  
  helperf.get_app_data().then((data)=>{
    apps = data
    res.render('adminPanel/adminHome', { admin : true , data});

  })

  
 
});

router.get('/add-app',(req,res)=>{

  res.render('adminPanel/add-app', { admin : true});

})

router.get('/test',(req,res)=>{

  res.render('adminPanel/test')

})
router.post('/testSubmit' , (req,res)=>{

  console.log(req.body);

})

router.post('/addApp',(req,res)=>{
  
  helperf.add_app(req.body)
  
  res.redirect('/admin/add-app')
  
})
router.post('/updateApp',(req,res)=>{

  helperf.update_app(req.body).then(()=>{

    res.redirect('/admin')

  })
    
  
  
})


router.get('/delete-app/',(req,res)=>{

  let deleteID = req.query.id

  helperf.delete_app(deleteID)

  res.redirect('/admin')
  
})
router.get('/edit-app/',(req,res)=>{

  let selectedItem = req.query.id

  helperf.find_app(selectedItem).then((selectedApp)=>{

    res.render('adminPanel/edit-app',{admin:true , selectedApp})
    

  })

  
  


})



module.exports = router;
