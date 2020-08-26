## Linx - Challenge | Frontend Developer
 ![stable](https://img.shields.io/badge/stable-v1.1.1-blue?labelColor=black&style=flat)  
 
**[Preview here...](https://alessondejesus.github.io/linx-test-email-template-dsn/")**
###### _  The ideal resolution is 600px,  check your settings for the best experience :D_

### v1.1.1 - Features

- Getting by API
- Responsive email layout
- Code improvements

### Folder Structure
  ```sh
.
├── index.html
├── favicon.io
├── js
│   └── main.js
│   └── models
│   	└── Product.js
│   └── service
│   	└── product.js
├── css
│   └── style.css
4 directories, 6 files
```
For the project to build,  **these files must exist with exact filenames**:

-   `index.html`  is the page template;
-   `js/main.js`  is the JavaScript entry point.

### Usage Functions
##### Requests
 ```sh
.
├── js
│   └── service
│   	└── product.js
```

```javascript
Request.product(apiUrl) // get products by API URL
 ```
 ##### Product model
 ```sh
.
├── js
│   └── models
│   	└── Product.js

```

```javascript
productModel.create({
  imageUrl,
  name,
  description,
  oldPrice,
  price,
  installmentCount,
  installmentValue
}) 

// create and return a model. @product is a object and should return:
imageUrl // example: '//images.site.com/back-cat.jpg'
name // example: 'paint'
decription // example: 'paints is so is beautiful'
oldPrice  // example: 6.99
price // example: 5.99
installments.count // example: 10
installments.value // example: 0.69
 ```
