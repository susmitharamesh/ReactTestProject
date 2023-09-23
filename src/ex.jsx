
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const api = "https://fakestoreapi.com/products";
// // const List = () => {
// //   const [products, setProducts] = useState([]);
// //   const [search, setSearch] = useState("");
// //   const [filteredProducts, setFilteredProducts] = useState([]);
// //   const [selectedProduct, setSelectedProduct] = useState(null);

// //   useEffect(() => {
// //     async function fetchData() {
// //       try {
// //         const response = await axios.get(api);
// //         const data = response.data;
// //         setProducts(data);
// //       } catch (error) {
// //         console.error("Error fetching data:", error.message);
// //       }
// //     }
// //     fetchData();
// //   }, []);

// //   useEffect(() => {
// //     const filterData = products.filter((product) =>
// //       product.title.toLowerCase().includes(search.toLowerCase())
// //     );

// //     setFilteredProducts(filterData);
// //   }, [search, products]);

// //   const handleProductClick = (product) => {
// //     setSelectedProduct(product);
// //   };

// //   return (
// //     <div className="listSearch">
// //       <input
// //         type="text"
// //         placeholder="Search..."
// //         value={search}
// //         onChange={(e) => setSearch(e.target.value)}
// //       />

// //       <div className="products">
// //       {filteredProducts.length === 0 ? (
// //          <small className="err">No matching products found.</small>
// //       ) :(
// // filteredProducts.map((product) => (
// //           <div key={product.id}
// //             className={`unique ${selectedProduct === product ? "selected" : ""}`}
// //             onClick={() => handleProductClick(product)}
// //           >
// //             <h2>{product.title}</h2>
// //             <img src={product.image} alt={product.title} id="img" />
// //             <h2>Rs.{product.price}</h2>
// //           </div>
// //         )))}
// //       </div>

// //       {selectedProduct && (
// //         <div className="selected-product">
// //           <h2>{selectedProduct.title}</h2>
// //           <img src={selectedProduct.image} alt={selectedProduct.title} />
// //           <h2>Rs.{selectedProduct.price}</h2>
// //           <p>{selectedProduct.description}</p>
         
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default List;
// // src/List.js
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Cart from "./Cart"; // Import the Cart component

// const api = "https://fakestoreapi.com/products";
// const List = () => {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   // const [selectedProduct, setSelectedProduct] = useState(null);
//   const [cartItems, setCartItems] = useState([]); // State to store items in the cart

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get(api);
//         const data = response.data;
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching data:", error.message);
//       }
//     }
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const filterData = products.filter((product) =>
//       product.title.toLowerCase().includes(search.toLowerCase())
//     );

//     setFilteredProducts(filterData);
//   }, [search, products]);


//   const handleAddToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

//   return (
//     <div className="listSearch">
//       <input
//         type="text"
//         placeholder="Search..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <div className="products">
//         {/* ...Existing product mapping */}
//         {filteredProducts.length === 0 ? (
//          <small className="err">No matching products found.</small>
//       ) :(
// filteredProducts.map((product) => (
//           <div key={product.id}
//            className="unique"
            
//           >
//             <h2>{product.title}</h2>
//             <img src={product.image} alt={product.title} id="img" />
//             <h2>Rs.{product.price}</h2>
//             <button onClick={() => handleAddToCart(product)}>
//             Add to Cart
//           </button>
//           </div>
//         )))}
//       </div>
// {/* 
//       {selectedProduct && (
//         <div className="selected-product">
//           {/* ...Selected product details */}
//           {/* <h2>{selectedProduct.title}</h2>
//           <img src={selectedProduct.image} alt={selectedProduct.title} />
//          <h2>Rs.{selectedProduct.price}</h2>
//          <p>{selectedProduct.description}</p>
        
//         </div> */} 
//       {/* )} */}

    
//     </div>
//   );
//   <Cart cartItems={cartItems} />

// };

// export default List;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Cart from "./Cart"; // Import the Cart component

// const api = "https://fakestoreapi.com/products";

// const List = () => {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [cartItems, setCartItems] = useState([]); // State to store items in the cart
//   const [counters, setCounters] = useState(0);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get(api);
//         const data = response.data;
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching data:", error.message);
//       }
//     }
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const filterData = products.filter((product) =>
//       product.title.toLowerCase().includes(search.toLowerCase())
//     );

//     setFilteredProducts(filterData);
//   }, [search, products]);

//   const handleAddToCart = (product) => {
//     setCartItems([...cartItems, product]);
//     setCounters(counters + 1);
//   };

//   const handleDeleteItem = (itemId) => {
//     const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
//     setCartItems(updatedCartItems);
//     setCounters(counters - 1);
//   };

//   return (
//     <div className="listSearch">
//       <input
//         type="text"
//         placeholder="Search..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <div className="products">
//         {filteredProducts.length === 0 ? (
//           <small className="err">No matching products found.</small>
//         ) : (
//           filteredProducts.map((product) => (
//             <div key={product.id} className="unique">
//               <h2>{product.title}</h2>
//               <img src={product.image} alt={product.title} id="img" />
//               <h2>Rs.{product.price}</h2>
//               <button onClick={() => handleAddToCart(product)}>
//                 Add to Cart
//               </button>
//             </div>
//           ))
//         )}
//       </div>

//       <Cart cartItems={cartItems} onDeleteItem={handleDeleteItem} counters={counters} />
//     </div>
//   );
// };

// export default List;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Cart from "./Cart"; // Import the Cart component

const api = "https://fakestoreapi.com/products";

const List = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]); // State to store items in the cart
  const [counters, setCounters] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(api);
        const data = response.data;
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const filterData = products.filter(
      (product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredProducts(filterData);
  }, [search, products]);
  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };
  const handleAddToCart = (product) => {
    // Check if the product is already in the cart
    const existingItem = cartItems.find((item) => item.id === product.id);
  
    if (existingItem) {
      // If the product already exists, update its quantity
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setCounters(counters + 1);
  };
  

  const handleDeleteItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    setCounters(counters - 1);
  };

  return (
    <div className="listSearch">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="products">
        {filteredProducts.length === 0 ? (
          <small className="err">No matching products found.</small>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="unique">
              <h2>{product.title}</h2>
              <img src={product.image} alt={product.title} id="img" />
              <h2>Rs.{product.price}</h2>
              <button
                onClick={() => handleAddToCart(product)}
                disabled={isProductInCart(product.id)}
              >
                {isProductInCart(product.id) ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          ))
        )}
      </div>

      <Cart cartItems={cartItems} onDeleteItem={handleDeleteItem} counters={counters} />
    </div>
  );
};

export default List;
