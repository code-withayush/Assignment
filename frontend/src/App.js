import { useEffect, useState } from "react";
import { api } from "./api";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const loadProducts = async () => {
    const res = await api.get("/");
    setProducts(res.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const addProduct = async (product) => {
    await api.post("/", product);
    loadProducts();
  };

  const updateProduct = async (product) => {
    await api.put(`/${product._id}`, product);
    setEditingProduct(null);
    loadProducts();
  };

  const deleteProduct = async (id) => {
    await api.delete(`/${id}`);
    loadProducts();
  };

  return (
    <div className="app-container">
      <header className="header">
        <h2>Product Management Application</h2>
        <p className="subtitle">
          A simple application to add, edit and manage products
        </p>
      </header>

      <div className="content">

        <div className="card">
          <h3>{editingProduct ? "Edit Product" : "Add Product"}</h3>

          <ProductForm
            addProduct={addProduct}
            editingProduct={editingProduct}
            updateProduct={updateProduct}
          />
        </div>

        <div className="card">
          <ProductList
            products={products}
            editProduct={setEditingProduct}
            deleteProduct={deleteProduct}
          />
        </div>

      </div>
    </div>
  );
}

export default App;
