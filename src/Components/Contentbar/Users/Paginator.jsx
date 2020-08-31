import React, { useState } from 'react';

const Paginator = (props) => {
    let countPages = Math.ceil(props.totalCount / 10);
    let pages = [];

    const onClickPage = (e) => {
        let numberOfPage = Number(e.target.textContent);
        props.onSetPage(numberOfPage);
    };

    for (let i = 1; i <= countPages; i++) {
        let page = <span onClick={onClickPage} key={i}> {i} </span>;
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
        <div>
            {portion !== 1 ? <button onClick={() => setPortion(1)}>First</button> : ''}
            {portion !== 1 ? <button onClick={() => setPortion(portion - 1)}>Prev.</button> : ''}
            {portionsPages}
            {portion !== countPortions ? <button onClick={() => setPortion(portion + 1)}>Next</button> : ''}
            {portion !== countPortions ? <button onClick={() => setPortion(countPortions)}>Last</button> : ''}
        </div>
    )
};

export default Paginator;