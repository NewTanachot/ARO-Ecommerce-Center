'use client';

import sortEnum from "../../Types&Interfaces/sortEnum";
import OrderList from "../../component/order/orderList";
import orderData from "../../seed/seedOrderListData";
import OrderData from "../../seed/seedOrderListData";
import React from 'react';

export default function OrderHome() {

    // React useState
    const [orderFilter, setOrderFilter] = React.useState<string>("All");
    const [sortState, setSortState] = React.useState<sortEnum>("desc");
    const [orderTotalPerPage, setOrderTotalPerPage] = React.useState<number>(5);
    const [paginationState, setPaginationState] = React.useState<number>(0); 

    // SetState method
    const changeFilter = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setOrderFilter(event.target.value);
    }

    const clickSortState = (event: React.MouseEvent<HTMLButtonElement>): void => {
        OrderData.reverse();
        sortState === "asc" ? setSortState("desc") : setSortState("asc");
    }
    
    const changeOrderTotalPerPage = (event : React.ChangeEvent<HTMLSelectElement>): void => {
        setOrderTotalPerPage(Number(event.target.value));
    }

    const clickNextPage = (event : React.MouseEvent<HTMLButtonElement>): void => {
        if (paginationState !== Math.ceil(displayOrderNumber / orderTotalPerPage) - 1) {
            setPaginationState(paginationState + 1);
        }
    }
    
    const clickPreviousPage = (event : React.MouseEvent<HTMLButtonElement>): void => {
        if (paginationState !== 0) {
            setPaginationState(paginationState - 1);
        }
    }
    
    // Business logic
    let filteredOrder = OrderData;
    let displayOrderNumber: number = orderData.length;

    if (orderFilter !== "All") {
        filteredOrder = filteredOrder.filter(data => data.orderFrom === orderFilter);
        displayOrderNumber = filteredOrder.length;
    }

    if (orderTotalPerPage !== 0) {
        const skipPageNumber = paginationState * orderTotalPerPage;
        filteredOrder = filteredOrder.slice(skipPageNumber, skipPageNumber + orderTotalPerPage);
    }

    return (
        <>
            <div className='bg-primary bg-gradient rounded-3 text-center text-light h1 py-2'>
                รายการคำสั่งซื้อ
                <i className="bi bi-journal-text ms-3"></i>
            </div>
            <div className="my-4 row">
                <div className="col-2 text-start">
                    <div className='btn btn-lg btn-primary bg-gradient shadow px-4 mx-2'>
                        จำนวน: {displayOrderNumber}
                    </div>
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
                    <div className="btn btn-lg btn-primary bg-gradient shadow px-4 mx-2 w-25">
                        <div className="row">
                            <div className="col p-0 text-nowrap">
                                แสดง:
                            </div>
                            <div className="col p-0">
                                <select 
                                    className="form-select form-select-sm"
                                    defaultValue="2" 
                                    onChange={changeOrderTotalPerPage}
                                >
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="0">All</option>
                                </select>
                            </div>
                            <div className="col p-0">
                                รายการ
                            </div>
                        </div>
                    </div>
                    <div className="btn btn-lg btn-primary bg-gradient shadow px-4 w-25">
                        <div className="row">
                            <div className="col-5 p-0 text-start">
                                <i className="bi bi-filter me-1"></i>
                               Filter
                            </div>
                            <div className="col-7 p-0">
                                <select 
                                    className="form-select form-select-sm" 
                                    defaultValue="All" 
                                    onChange={changeFilter}
                                >
                                    <option value="All">All</option>
                                    <option value="Website">Website</option>
                                    <option value="Shopee">Shopee</option>
                                    <option value="Lazada">Lazada</option>
                                    <option value="Facebook">Facebook</option>
                                    <option value="Instagram">Instagram</option>
                                    <option value="Line">Line</option>
                                    <option value="Tiktok">Tiktok</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                filteredOrder.length > 0 
                    ? filteredOrder?.map((data, index) => <OrderList key={index} data={data}></OrderList>) 
                    : <h2 className="text-center">-ไม่พบรายการ-</h2>
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
        </>
    )
  }