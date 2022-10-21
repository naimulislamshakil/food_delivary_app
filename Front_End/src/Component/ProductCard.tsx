import React from 'react';
import { SingleProduct } from '../Redux/Action/ActionType/GetByIdActionType';

interface Props {
	product: SingleProduct;
}

const ProductCard = ({ product }: Props) => {
	return (
		<div
			className="col-12 col-lg-3 col-md-6 mx-auto card shadow mt-3"
			style={{ width: '18rem' }}
		>
			<img className="card-img-top" src={product.img} alt="" />
			<div className="card-body">
				<h5 className="card-title">{product.name}</h5>
				{product.status === 'In-Stock' ? (
					<span className="card-text bg-success text-white p-1 rounded-pill px-2">
						{product.status}
					</span>
				) : (
					<span className="card-text bg-warning text-white p-1 rounded-pill px-2">
						{product.status}
					</span>
				)}
				<div className="d-flex align-items-center justify-content-between mt-2">
					<h6>Price: {product.price}৳</h6>
					<div className="d-flex align-items-center">
						<h6>{product.quantity}</h6>
						<h6 className="ms-1"> {product.unit}</h6>
					</div>
				</div>
				<p className="card-text">{product.description}</p>
			</div>
			<div className="card-footer">
				<small className="text-muted">Last updated 3 mins ago</small>
			</div>
		</div>
	);
};

export default ProductCard;
