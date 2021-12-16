export const Structure = ()=>{
	return `
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		  <div class="container-fluid">
		    <a class="navbar-brand text-warning" style="letter-spacing:4px; font-weight:bold; text-shadow: 0 0 3px yellow" href="https://www.hamzaatmaca.net">PRODUCTS<h6>hamzaatmaca.net</h6></a>
		    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		      <span class="navbar-toggler-icon"></span>
		    </button>
		    <div class="collapse navbar-collapse display-flex justify-content-end" id="navbarNav">
		      <ul class="navbar-nav">
		        <li class="nav-item  me-3">
		          <a class="nav-link text-danger" aria-current="page" href="/" style="letter-spacing:2px; text-shadow: 0 0 1px red"><i class="fas fa-house-damage"></i> Home</a>
		        </li>
		        <li class="nav-item  me-3">
		       	  <a class="nav-link text-danger" aria-current="page" href="/register" style="letter-spacing:2px; text-shadow: 0 0 1px red"><i class="fas fa-user-shield"></i> Register</a>
		        </li>
		        <li class="nav-item  me-3">
		       	  <a class="nav-link text-danger" aria-current="page" href="/login" style="letter-spacing:2px; text-shadow: 0 0 1px red"><i class="fas fa-sign-in-alt"></i> Login</a>
		        </li>
		      </ul>
		    </div>
		  </div>
		</nav>`;
};


