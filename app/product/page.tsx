'use client';

import ProductTable from "../../component/product/producttable";
import ProductData from "../../seed/seedProductData";
import React, { useState } from 'react';

export default function productHome() {
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
                        จำนวนสินค้า: {ProductData.length} ชิ้น
                    </div>
                    <a href="" className='btn btn-lg btn-outline-danger bg-gradient shadow-sm border-0 fw-bold'>
                        <i className="bi bi-trash3-fill"></i>
                    </a>
                </div>
                <div className="col text-end">
                    <div className="btn btn-lg btn-primary bg-gradient shadow px-4 mx-2 w-50">
                        <div className="row">
                            {/* <div className="col-1"></div> */}
                            <div className="col p-0 text-nowrap">
                                แสดง:
                            </div>
                            <div className="col p-0">
                                <select className="form-select form-select-sm" aria-label=".form-select-lg example">
                                    <option value="10" selected>10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">50</option>
                                    <option value="">All</option>
                                </select>
                            </div>
                            <div className="col p-0">
                                รายการ
                            </div>
                            {/* <div className="col-1"></div> */}
                        </div>
                    </div>
                    <a href="" className="btn btn-lg btn-primary bg-gradient shadow">
                        <i className="bi bi-database-add"></i>
                        เพิ่มสินค้า
                    </a>
                </div>
            </div>
            <ProductTable datas={ProductData}></ProductTable>
        </div>
    );
}