import React from "react";
import Shimmer from "./Shimmer";
import ProductCard from "./ProductCard";


import useFetchapi from "./Util";
import { filterByCategory, filterBySearch } from "./filterUtils";


function Products() {
    const [
        pro, isLoading, errmsg, textsearch, filterditems,
        GetProd, setfilterditems, seterrmsg, setpro, settextserach
    ] = useFetchapi();

    function ProDec(id) {
        const updated = pro.map((ele) => {
            if (ele.id === id) {
                return { ...ele, discount: Math.max(0, ele.discount - 1) };
            }
            return ele;
        });
        setpro(updated);
        setfilterditems(updated);
    }
    function ProInc(id) {
        const updated = pro.map((ele) => {
            if (ele.id === id) {
                return { ...ele, discount: ele.discount + 1 };
            }
            return ele;
        });
        setpro(updated);
        setfilterditems(updated);
    }


    function Handlesearch() {
        const updateditems = filterBySearch(pro,textsearch)
        setfilterditems(updateditems);
    }

    function HandleCategory(category) {
        const updateditems = filterByCategory(pro, category);
        setfilterditems(updateditems);
    }

    return (
        <>
            
            <div className="container-fluid mt-3">
                <div className="row align-items-center">
                    
                    <div className="col-md-4 d-flex  justify-content-center mb-2">


                        <button className="btn m-1 " onClick={() => HandleCategory('tv')}>
                            <i className="fa-solid fa-tv"></i>
                        </button>
                        <button className="btn  m-1" onClick={()=> HandleCategory('audio')}>
                            <i className="fa-solid fa-volume-high me-1" ></i>
                        </button>
                        <button className="btn  m-1" onClick={()=> HandleCategory('laptop')}>
                            <i className="fa-solid fa-laptop me-1"></i>
                        </button>

                    </div>
                    
                    <div className="col-md-4 d-flex  justify-content-center mb-2">
                        <button className="btn m-1" onClick={()=> HandleCategory('mobile')}>
                            <i className="fa-solid fa-mobile-screen-button me-1"></i> 
                        </button>
                        <button className="btn m-1"onClick={()=> HandleCategory('gaming')}>
                            <i className="fa-solid fa-gamepad me-1"></i>
                        </button>
                        <button className="btn  m-1" onClick={()=> HandleCategory('appliances')}>
                            <i className="fa-solid fa-blender me-1"></i> 
                        </button>
                    </div>


                    
                    <div className="col-md-4">
                        <div className="d-flex">
                            <input
                                type="search"
                                placeholder="Search items"
                                className="form-control me-2"
                                value={textsearch}
                                onChange={(e) => settextserach(e.target.value)}
                            />
                            <button className="btn btn-info" onClick={Handlesearch}>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="container mt-5">
                <div className="row">
                    {isLoading && <Shimmer/>}
                    {!errmsg && !isLoading && filterditems.map((item) => (
                        <ProductCard
                            key={item.id}
                            product={item}
                            onIncrement={() => ProInc(item.id)}
                            onDecrement={() => ProDec(item.id)}
                        />
                    ))}
                    {errmsg && <h1 className="text-danger">{errmsg}</h1>}
                </div>
            </div>
        </>
    );
}

export default Products;
