var express = require('express');
var router = express.Router();
var helperf = require('../Config/helpers')

/* GET home page. */
router.get('/', function(req, res, next) {

    var apps =[]
    var games=[]
    var paid_apps=[]
    

  helperf.get_app_data().then((appDATA)=>{

    
    
    for(i = 0 ; i < appDATA.length ; i++){
      if(appDATA[i].category == 'app'){
        apps.push(appDATA[i])
      }else if(appDATA[i].category == 'game'){
        games.push(appDATA[i])
      }else{
        paid_apps.push(appDATA[i])
      }
    }
  })

  setTimeout(() => {
    console.log("Sorting Data");
  }, 2000);

  res.render('index', {apps,games,paid_apps ,admin : false});

});

module.exports = router;
