import React, { useState } from 'react';
import style from './Paginator.module.css';

const Paginator = (props) => {
    let countPages = Math.ceil(props.totalCount / 10);
    let pages = [];

    const onClickPage = (e) => {
        let numberOfPage = Number(e.target.textContent);
        props.onSetPage(numberOfPage);
    };

    for (let i = 1; i <= countPages; i++) {
        let page;
        if (i === props.currentPage) {
            page = <div className={style.button + ' ' + style.currentPageButton} onClick={onClickPage} key={i}><b> {i} </b></div>;
        } else {
            page = <div className={style.button} onClick={onClickPage} key={i}><span> {i} </span></div>;
        };
        pages.push(page);
    };

    let weightPortion = 5;
    let countPortions = Math.ceil(pages.length / weightPortion);

    let [portion, setPortion] = useState(1);

    let firstPortionsPage = weightPortion * (portion - 1);
    let lastPortionPage = weightPortion * portion;
    let portionsPages = [];
    for (let i = firstPortionsPage; i < lastPortionPage; i++) {
        portionsPages.push(pages[i]);
    };

    return (
        <div className={style.paginatorBox}>
            <div className={style.pages}>
                {portion !== 1 ? <div onClick={() => setPortion(1)} className={style.button}>First</div> : <div></div>}
                {portion !== 1 ? <div onClick={() => setPortion(portion - 1)} className={style.button}>Prev.</div> : <div></div>}
            
                {portionsPages}
            
                {portion !== countPortions ? <div onClick={() => setPortion(portion + 1)} className={style.button}>Next</div> : ''}
                {portion !== countPortions ? <div onClick={() => setPortion(countPortions)} className={style.button}>Last</div> : ''}
            </div>
        </div>
    )
};

export default Paginator;