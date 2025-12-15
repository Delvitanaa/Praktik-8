import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Data produk dummy (sama dengan di Products.jsx)
  const products = [
    { id: 1, name: 'Laptop', price: 12000000, category: 'Electronics', description: 'Laptop gaming dengan spesifikasi tinggi untuk kebutuhan gaming dan kerja.' },
    { id: 2, name: 'Smartphone', price: 5000000, category: 'Electronics', description: 'Smartphone flagship dengan kamera berkualitas tinggi dan baterai tahan lama.' },
    { id: 3, name: 'Headphones', price: 800000, category: 'Electronics', description: 'Headphone wireless dengan noise cancellation dan kualitas suara premium.' },
    { id: 4, name: 'Book', price: 150000, category: 'Education', description: 'Buku panduan lengkap untuk belajar pemrograman modern.' },
    { id: 5, name: 'Desk Lamp', price: 300000, category: 'Home', description: 'Lampu meja LED dengan adjustable brightness dan color temperature.' },
  ];

  // Cari produk berdasarkan ID
  const product = products.find(p => p.id === parseInt(id));

  // Jika produk tidak ditemukan
  if (!product) {
    return (
      <div className="page product-detail">
        <h1>Product Not Found</h1>
        <p>Produk dengan ID {id} tidak ditemukan.</p>
        <div className="product-actions">
          <Link to="/products" className="btn btn-primary">
            Back to Products
          </Link>
          <Link to="/" className="btn btn-secondary">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page product-detail">
      <h1>&#128717;&#65039; Product Details</h1>
      
      <div className="product-detail-content">
        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="price">Rp {product.price.toLocaleString('id-ID')}</p>
          <p className="category"><strong>Category:</strong> {product.category}</p>
          <p className="description"><strong>Description:</strong> {product.description}</p>
          <p className="product-id"><strong>Product ID:</strong> {product.id}</p>
        </div>

        <div className="product-actions">
          <button 
            onClick={() => navigate('/products')} 
            className="btn btn-primary"
          >
            Back to Products
          </button>
          <button 
            onClick={() => navigate(-1)} 
            className="btn btn-secondary"
          >
            Go Back
          </button>
          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;