export const Structure = ()=>{



	return(`
		<div class="container">
			<div class="row mt-4">
				<div class="col-md-8 offset-md-2 mt-3">
				<h3>Register Here</h3>
				<form id="productForm" enctype="multipart/form-data">
					<div class="mb-3">
						<label for="exampleFormControlInput1" class="form-label">Name</label>
						<input type="text" class="form-control" id="name name="name" placeholder="Write a Name" required>
					</div>
					<div class="mb-3">
						<label for="exampleFormControlInput1" class="form-label">E-mail</label>
						<input type="email" class="form-control" id="email" name="email" placeholder="E-mail" required>
					</div>
					<div class="mb-3">
						<label for="exampleFormControlInput1" class="form-label">City</label>
						<input type="text" class="form-control" id="city" name="city" placeholder="City" required>
					</div>
					<div class="mb-3">
						<label for="exampleFormControlInput1" class="form-label">Phone</label>
						<input type="text" class="form-control" id="phone" name="phone" placeholder="Phone" required>
					</div>
					<div class="mb-3">
					    <label for="formFile" class="form-label">Add an Image</label>
					    <input class="form-control" type="file" name="img" accpet="image/*" id="img" required>
					</div>
					<div class="col-auto">
				        <button type="submit" name="addProduct" class="btn btn-danger mb-3">Register Here</button>
				    </div>
				</form>
				</div>
			</div>
		<div>
		`);

	
};

