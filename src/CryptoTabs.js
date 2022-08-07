import React, { useEffect, useState } from "react";
import "./CryptoTabs.css";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import MultiLineGraph from "./MultiLineGraph";

const CryptoTabs = ({ menu }) => {

    // const [open, setOpen] = useState(false);
    // const handleGraph = () => {

    // }

  const [menuData, setMenuData] = useState(menu);
  const [pageNum, setPageNum] = useState(0);


  useEffect(() => {
    setMenuData(menu);
  }, [menu]);

  const coinsPerPage = 10;
  const pagesVisited = pageNum * coinsPerPage;

  const displayCoins = menuData
    .slice(pagesVisited, pagesVisited + coinsPerPage)
    .map((coins) => {
      return (
        <>
            
          <Link to="/multiLineGraph"  style={{ textDecoration: "none" } } >
            <MultiLineGraph id={coins.id} name={coins.fullName} />
            <div className="container" key={coins.id}>
              <div>
                <div className="main" key={coins.id}>
                  <h2>Coin Analysis</h2>
                  <p>Name: {coins.name}</p>
                  <p>Full-Name: {coins.fullName}</p>
                  <p>Symbol: {coins.symbol}</p>
                  <p>Rank: {coins.rank}</p>
                  <p>Price: {coins.price}</p>
                  <p>Tags: {coins.tags}</p>
                  {/* <button onClick={() => {setOpen(true)}}>Show Graph</button>
                  {open && <MultiLineGraph id={coins.id} name={coins.name}/>} */}
                </div>
              </div>
            </div>
          </Link>
        </>
      );
    });

  const pageCount = Math.ceil(menuData.length / coinsPerPage);

  const changePage = ({ selected }) => {
    setPageNum(selected);
  };
  return (
    <>
      <div className="page">
        {displayCoins}

        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </>
  );
};

export default CryptoTabs;
