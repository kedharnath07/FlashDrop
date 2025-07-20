import React from "react";
import { Link } from "react-router-dom";
function ProductCard({ product, onIncrement, onDecrement }) {
    const { image, brand, price, discount } = product;

    return (
        <div className="col-md-4 col-lg-3 mb-4">
            <Link className="nav-link" to={`/${product.id}`}>
                <div className="card shadow-sm h-100 border-0 rounded-4">
                    <img
                        src={image}
                        alt={brand}
                        className="card-img-top p-3"
                        style={{ height: "220px", objectFit: "contain" }}
                    />

                    <div className="card-body">
                        <h5 className="card-title text-dark fw-bold">{brand}</h5>
                        <p className="card-text fs-5 text-primary fw-semibold">
                            &#8377;{price}
                        </p>

                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <button className="btn btn-sm btn-outline-primary rounded-pill px-3">
                                Add to Cart
                            </button>
                            <div className="d-flex align-items-center">
                                <i
                                    className="fa fa-plus-circle text-success fs-5 me-2 cursor-pointer"
                                    onClick={onIncrement}
                                    style={{ cursor: "pointer" }}
                                ></i>
                                <span className="fw-semibold">{discount}</span>
                                <i
                                    className="fa fa-minus-circle text-danger fs-5 ms-2 cursor-pointer"
                                    onClick={onDecrement}
                                    style={{ cursor: "pointer" }}
                                ></i>
                            </div>
                        </div>
                    </div>

                    <div className="card-footer bg-white border-0">
                        {discount > 10 && (
                            <p className="text-success fw-semibold mb-0">✅ In Stock</p>
                        )}
                        {discount <= 10 && discount > 0 && (
                            <p className="text-warning fw-semibold mb-0">⚠️ Limited Stock</p>
                        )}
                        {discount <= 0 && (
                            <p className="text-danger fw-semibold mb-0">❌ Out of Stock</p>
                        )}
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ProductCard;
