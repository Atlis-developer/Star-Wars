import React, { useState } from 'react';
import s from './Paginator.module.css'
import cn from 'classnames'

const Paginator = (props) => {


    let pagesCount = Math.ceil(props.contentPage.users.length / props.contentPage.pageSize)
    let page = [];
    for (let i = 1; i <= pagesCount; i++) {
        page.push(i)
    }

    return <div>
            {page
            .map(page => {             
                return <span className={ cn({[s.numberPage] : props.contentPage.numberPage === page}, s.numb)}
                    key = {page} 
                    onClick={() => { props.getCurrentPage(page) }}>{page}</span>
            })}
        </div>
    
}
export default Paginator;