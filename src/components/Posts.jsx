import  { useState, useEffect } from 'react';
import axios from 'axios';

function PaginationComponent() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const fetchPosts = async () => {
            try{
                const response = await axios.get(`https://dummyjson.com/posts?limit=10&skip=${currentPage  * 10}`)
                setPosts(response.data.posts)
            }catch (e){
                console.log("Ошибка при получении постов:", e)
            }

        };
        fetchPosts()
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="pagination-container">
            <div className="posts">
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            </div>
            <div className="pagination">
                {[1, 2, 3, 4, 5].map(page => (
                    <button key={page} onClick={() => handlePageChange(page)}>
                        {page}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default PaginationComponent;