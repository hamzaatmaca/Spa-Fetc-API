import router from '../core/routerCore/routerCore.js';
import { Layout } from '../controller/layoutController.js'

let root = document.getElementById('root');

router.get('/',(url)=>{
      Layout(url);
});
router.get('/register',(url)=>{
      Layout(url) 
});
router.get('/login',(url)=>{
      Layout(url) 
});
router.get('/error',(url)=>{
      Layout(url)  
});



router.run();
router.error();
