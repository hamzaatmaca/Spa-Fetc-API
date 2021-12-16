export const Structure = ()=>{



	return(`
		<div class="container">
			<div class="row mt-4">
				<div class="col-md-8 offset-md-2 mt-3">
				<h3>Login Now</h3>
				<form id="productForm" enctype="multipart/form-data">
					
					<div class="mb-3">
						<label for="exampleFormControlInput1" class="form-label">E-mail</label>
						<input type="email" class="form-control" id="email" name="email" placeholder="E-mail" required>
					</div>
					
					<div class="mb-3">
						<label for="exampleFormControlInput1" class="form-label">Password</label>
						<input type="Password" class="form-control" id="pass" name="pass" placeholder="Password" required>
					</div>
					
					<div class="col-auto">
				        <button type="submit" name="addProduct" class="btn btn-danger mb-3">Login</button>
				    </div>
				</form>
				</div>
			</div>
		<div>
		`);

	
};

