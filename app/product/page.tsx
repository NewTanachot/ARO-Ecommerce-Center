'use client';

import sortEnum from "../../Types&Interfaces/sortEnum";
import ProductTable from "../../component/product/producttable";
import ProductData from "../../seed/seedProductData";
import React from 'react';

export default function ProductHome() {

    // React useState
    const [productTotalPerPage, setProductTotalPerPage] = React.useState<number>(10);
    const [sortState, setSortState] = React.useState<sortEnum>("desc");
    const [paginationState, setPaginationState] = React.useState<number>(0); 

    // SetState method
    const changeProductTotalPerPage = (event : React.ChangeEvent<HTMLSelectElement>): void => {
        setProductTotalPerPage(Number(event.target.value));
    }

    const clickSortState = (event : React.MouseEvent<HTMLButtonElement>): void => {
        ProductData.reverse();
        sortState === "asc" ? setSortState("desc") : setSortState("asc");
    } 

    const clickNextPage = (event : React.MouseEvent<HTMLButtonElement>): void => {
        if (paginationState !== Math.ceil(productTotal / productTotalPerPage) - 1) {
            setPaginationState(paginationState + 1);
        }
    }

    const clickPreviousPage = (event : React.MouseEvent<HTMLButtonElement>): void => {
        if (paginationState !== 0) {
            setPaginationState(paginationState - 1);
        }
    }

    // Business logic
    const productTotal = ProductData.length;
    let filteredProduct = ProductData;

    if (productTotalPerPage !== 0) {

        const skipPageNumber = paginationState * productTotalPerPage;
        filteredProduct = filteredProduct.slice(skipPageNumber, skipPageNumber + productTotalPerPage);
    }
    
    return (
        <div>
            <div className='bg-primary bg-gradient rounded-3 text-center text-light h1 py-2'>
                สินค้าของฉัน
                <i className="bi bi-cart3 ms-2"></i>
            </div>
            <div className="row my-4">
                <div className="col">
                    <a href='' className='btn btn-lg btn-primary bg-gradient shadow'>
                        <i className="bi bi-gear me-1"></i>
                        แก้ไขสต๊อค
                    </a>
                    <div className='btn btn-lg btn-primary bg-gradient shadow px-4 mx-2'>
                        จำนวนสินค้า: {productTotal} ชิ้น
                    </div>
                    <a href="" className='btn btn-lg btn-outline-danger bg-gradient shadow-sm border-0 fw-bold'>
                        <i className="bi bi-trash3-fill"></i>
                    </a>
                </div>
                <div className="col text-end">
                    <button 
                        className='btn btn-lg btn-primary bg-gradient shadow border-0 fw-bold'
                        onClick={clickSortState}
                    >
                        {
                            sortState === "asc" ? <i className="bi bi-sort-down-alt"></i> : <i className="bi bi-sort-down"></i>
                        }
                    </button>
                    <div className="btn btn-lg btn-primary bg-gradient shadow px-4 mx-2 w-50">
                        <div className="row">
                            <div className="col p-0 text-nowrap">
                                แสดง:
                            </div>
                            <div className="col p-0">
                                <select 
                                    className="form-select form-select-sm"
                                    defaultValue="10" 
                                    onChange={changeProductTotalPerPage}
                                >
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                    <option value="0">All</option>
                                </select>
                            </div>
                            <div className="col p-0">
                                รายการ
                            </div>
                        </div>
                    </div>
                    <a href="" className="btn btn-lg btn-primary bg-gradient shadow">
                        <i className="bi bi-database-add me-1"></i>
                        เพิ่มสินค้า
                    </a>
                </div>
            </div>
            {
                productTotal > 0 
                    ? <ProductTable datas={filteredProduct}></ProductTable> 
                    : <h2 className="text-center my-5">-ไม่พบรายการ-</h2>
            }
            <div className="row mb-4">
                <div className="col text-end">
                    <button 
                        className='btn btn-lg btn-primary bg-gradient shadow-sm border border-primary border-2 fw-bold me-2'
                        onClick={clickPreviousPage}
                    >
                        <i className="bi bi-caret-left-fill"></i>
                    </button>
                    <button 
                        className='btn btn-lg btn-primary bg-gradient shadow-sm border border-primary border-2 fw-bold'
                        onClick={clickNextPage}
                    >
                        <i className="bi bi-caret-right-fill"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}