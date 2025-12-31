import { useState, useEffect } from "react";
export default function ProductForm({ addProduct, editingProduct, updateProduct }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    status: "Active",
  });

  useEffect(() => {
    if (editingProduct) setFormData(editingProduct);
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingProduct) {
      updateProduct(formData);
    } else {
      addProduct(formData);
    }

    setFormData({ name: "", price: "", category: "", status: "Active" });
  };

  return (
    <form className="simple-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="field">
          <label>Product Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="field">
          <label>Price</label>
          <input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            required
          />
        </div>

        <div className="field">
          <label>Category</label>
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Enter category"
          />
        </div>

        <div className="field">
          <label>Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>

      <button className="primary-btn" type="submit">
        {editingProduct ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
}
