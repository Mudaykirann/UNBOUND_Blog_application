// import { Link } from "react-router-dom"
// import PostAuthor from "./PostAuthor"

// function PostItem({ postID, id, thumbnail, createdAt, category, title, desc, authID }) {
//     const shortDesc = desc.length > 145 ? desc.substr(0, 175) + "....." : desc;
//     const shortTitle = title.length > 30 ? title.substr(0, 50) + "..." : title;
//     return (
//         <article className="post">
//             <div className="post__thumbnail">
//                 <img src={`${import.meta.env.VITE_REACT_APP_ASSETS_URL}/uploads/${thumbnail}`} alt={title} />
//             </div>
//             <div className="post__content">
//                 <Link to={`/posts/${postID}`}>
//                     <h3>{shortTitle}</h3>
//                 </Link>
//                 <p>{shortDesc}</p>
//                 <div className="post__footer">
//                     <PostAuthor authorID={authID} createdAt={createdAt} />
//                     <Link to={`/posts/categories/${category}`} className="btn category">{category}</Link>
//                 </div>
//             </div>
//         </article>
//     )
// }

// export default PostItem


import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import DOMPurify from 'dompurify';

function PostItem({ postID, id, thumbnail, createdAt, category, title, desc, authID }) {
    const shortDesc = desc.length > 145 ? desc.substr(0, 255) + "....." : desc;
    const shortTitle = title.length > 30 ? title.substr(0, 50) + "..." : title;

    const sanitizedDesc = DOMPurify.sanitize(shortDesc);

    return (
        <article className="post">
            <div className="post__thumbnail">
                <img src={`${import.meta.env.VITE_REACT_APP_ASSETS_URL}/uploads/${thumbnail}`} alt={title} />
            </div>
            <div className="post__content">
                <Link to={`/posts/${postID}`}>
                    <h3>{shortTitle}</h3>
                </Link>
                {/* Render the description with HTML formatting */}
                <p dangerouslySetInnerHTML={{ __html: sanitizedDesc }} />
                <div className="post__footer">
                    <PostAuthor authorID={authID} createdAt={createdAt} />
                    <Link to={`/posts/categories/${category}`} className="btn category">{category}</Link>
                </div>
            </div>
        </article>
    );
}

export default PostItem;
