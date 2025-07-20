import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section
      className="text-center text-lg-start d-flex align-items-center justify-content-center"
      style={{
        background: 'linear-gradient(to right, #f8f9fa, #e0f7fa)',
        minHeight: '100vh',
        padding: '50px 0',
      }}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-5 mb-md-0">
            <h1 className="display-5 fw-bold text-dark mb-4">
              Welcome to FlashDrop
            </h1>
            <p className="text-muted mb-4 lead">
              Get the best products delivered to your doorstep with lightning speed. Enjoy exclusive discounts, daily deals, and seamless checkout.
            </p>
            <Link to="/products">
              <button className="btn btn-success btn-lg px-5 py-3 rounded-pill shadow-3-strong hover-shadow">
                Start Shopping
              </button>
            </Link>
          </div>
          <div className="col-md-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
              className="img-fluid rounded-5 shadow-4"
              alt="Shopping illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
