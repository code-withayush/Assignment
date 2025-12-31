export default function ProductList({ products, editProduct, deleteProduct }) {
  return (
    <div className="table-box">
      <h3>Product List</h3>

      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <table className="simple-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p._id}>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.category}</td>
                <td>{p.status}</td>

                <td>
                  <button onClick={() => editProduct(p)} className="btn-edit">
                    Edit
                  </button>

                  <button onClick={() => deleteProduct(p._id)} className="btn-delete">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
