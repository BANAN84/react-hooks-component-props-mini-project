import React from "react";
import Article from './Article';
function ArticleList( props){
    return (
        <main>
        { props.map( (post) =>  ( 
            <Article 
            key= {post.id}
            title={post.title}
            date={post.date}
            perview={post.perview} />
        ))}
        </main>
    
         )
}
export default ArticleList ;