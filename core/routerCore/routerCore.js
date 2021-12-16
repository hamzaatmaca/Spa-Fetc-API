class Router{
	constructor(){
		this.routes = [];

	}
	get(url,callback){
		if(!url || !callback){
			console.log(`URL or Callback invalid`)
		}
		if(typeof url !== 'string'){
			console.log(`typeof uri must be a string`)		
		}
		if(typeof callback !== "function"){
			console.log(`Url must be a function`)
		}
		this.routes.forEach(route=>{
			if(route.url === url) throw new Error(`the uri ${route.url} already exists`);
		})

		const route = {
			url,
			callback
		}

		this.routes.push(route)
	}
	run(){

		this.routes.some(route=>{

            let regEx = new RegExp(`^${route.url}$`); 
            let path = window.location.pathname;

            if(path.match(regEx)){
                // our route logic is true, return the corresponding callback

                let req = { path } // i'll also explain this code below
                return route.callback.call(this, req);
            }
        })


	}
	error(){

		let path = window.location.pathname;
		let urlArray = [];

		for(var i = 0; i<this.routes.length; i++){
			
			 urlArray.push(this.routes[i].url)	
		}

		if(urlArray.includes(path) == false){
			window.location = 'http://localhost:3000/error'
		}
	}
	
}

let router = new Router();
export default router;