/*GET ALL PRODUCTS*/
fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then((json)=>{
    console.log(json)
    json.forEach( product => {
        let card = document.createElement('div');
        card.style.width="100%";
        card.innerHTML=`

            <div class="card mb-3" >
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="${product.image}"style="height:300px" class="img-fluid rounded-start">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title text-warning">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <p style="width:100px;font-weight:bold"><h2><b>${product.price} $</b></h2> </p>
                    <p class="card-text">
                        <small style="width:100px;font-weight:bold;color:white!important" class="text-muted me-5 btn btn-danger "><i class="fas fa-sort-amount-up"></i> ${product.rating.count}</small>
                        <small style="width:100px;font-weight:bold;color:white!important" class="text-muted ml-5 btn btn-danger "><i class="fas fa-hand-point-right"></i> ${product.rating.rate}</small>
                        <button style="width:100px;margin-left:50px; font-weight:bold;color:white" class="btn btn-warning "><i class="fas fa-search-plus"></i> Detail</button>
                    </p>

                  </div>
                </div>
              </div>
            </div>

        `
        document.getElementById('homePage').appendChild(card)
    })
})

