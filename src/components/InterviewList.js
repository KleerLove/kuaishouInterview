import React, { useEffect } from 'react';

function InterviewList() {
    useEffect(() => {
        const links = document.getElementsByTagName('a');
        for (let i = 0; i < links.length; i++) {
            links[i].target = '_blank';
        }
    }, []);

    return (
        <div className="container">
            <div>
                <h1>HTML&&CSS</h1>
                <ul>
                    <li></li>
                </ul>
            </div>
            <div>
                <h1>javascript</h1>
            </div>
            <div>
                <h1>vue</h1>
            </div>
            <div>
                <h1>技术类</h1>
            </div>
            <div>
                <h1>代码算法</h1>
            </div>
            <div>
                <h1>其他类</h1>
            </div>
        </div>
    );
}

export default InterviewList;
