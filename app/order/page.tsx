'use client';

import IOrderListData from "../../Types&Interfaces/order/IOrderListData";
import sortEnum from "../../Types&Interfaces/sortEnum";
import OrderList from "../../component/order/orderList";
import OrderData from "../../seed/seedOrderListData";
import React from 'react';

export default function OrderHome() {

    // React useState
    const [filterOrder, setOrderFilter] = React.useState("All");
    const [sortState, setSortState] = React.useState<sortEnum>("desc")

    // SetState method
    const changeFilter : React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setOrderFilter(event.currentTarget.value);
    }

    const clickSortState = (event : React.MouseEvent<HTMLButtonElement>) => {
        OrderData.reverse();
        sortState === "asc" ? setSortState("desc") : setSortState("asc");
    } 

    // Business logic
    let FilterData = OrderData;

    if (filterOrder !== "All") {
        FilterData = FilterData.filter(data => data.orderFrom === filterOrder);
    }

    return (
        <>
            <div className='bg-primary bg-gradient rounded-3 text-center text-light h1 py-2'>
                รายการคำสั่งซื้อ
                <i className="bi bi-journal-text ms-3"></i>
            </div>
            <div className="my-4 row">
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
                FilterData.length > 0 
                    ? FilterData?.map((data, index) => <OrderList key={index} data={data}></OrderList>) 
                    : <h2 className="text-center">-ไม่พบรายการ-</h2>
            }
        </>
    )
  }