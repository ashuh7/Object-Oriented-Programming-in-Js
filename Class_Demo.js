class Product{

    // Data members
    #name;
    #price;
    category;
    description;
    rating;
    constructor(productName, productPrice, productCategory, productDescription, productRating){
        if(productName === undefined || productPrice === undefined || productCategory === undefined
            || productDescription === undefined || productRating === undefined){
                console.log("Invalid parameters");
                return;
            }
        
        this.#name = productName;
        if(productPrice > 0 && typeof(productPrice) === "number"){
            this.#price = productPrice;
        }
        this.category = productCategory;
        this.description = productDescription;
        this.rating = productRating;
    }
    // Member functions

    // getter functions
    getPrice(){
        return this.#price;
    }

    //setter functions
    setPrice(p){
        if(p>0){
            this.#price = p;
        }else{
            console.log("Invalid Price");
            
        }
    }

    addToCart(){
        console.log("Product added to cart");
    }

    removefromcart(){
        console.log("Product removed from cart");
    }

    displayProduct(){
        console.log("Product displayed", this);
    }

    buyProduct(){
        console.log("Product bought");
        
    }
}

let iphone = new Product();
console.log(iphone);

iphone.name = 'Iphone 12';
// iphone.price = 25000;
iphone.category = "Electronics";

iphone.setPrice(35000); // setting new Iphone price using setter method

iphone.displayProduct();