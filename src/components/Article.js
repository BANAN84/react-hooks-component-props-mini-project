import React from "react";
function Article(title ,  date ="January 1, 1970" , perview){
    return (
        <article>
            <h3>{title}</h3>
            <small> {date}</small>
            <p>{perview}</p>

            
        </article>

    
    )
}
export default Article ;