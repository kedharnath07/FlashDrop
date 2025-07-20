import React from 'react';
import { Link } from 'react-router-dom';

function UserRegister() {
  return (
    <div className="d-flex justify-content-center align-items-start min-vh-100 bg-light pt-0">
      <div className="card shadow-lg p-4 rounded-4" style={{ width: '100%', maxWidth: '420px', marginTop: '20px' }}>
        <div className="card-body">
          <h2 className="text-center text-primary fw-bold mb-4">Create an Account</h2>

          <form>
            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-semibold">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="form-label fw-semibold">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Re-enter your password"
                required
              />
            </div>

            {/* Register Button */}
            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-primary rounded-pill py-2">
                Register
              </button>
            </div>

            {/* Login Link */}
            <p className="text-center text-muted">
              Already a user?{' '}
              <Link to="/login" className="fw-bold text-decoration-none">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserRegister;
