import { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from "./Pagination.jsx";
import { useSearchParams } from "react-router-dom";

function PaginationComponent() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/posts?limit=10&skip=${(currentPage - 1) * 10}`)
                setPosts(response.data.posts)
            } catch (e) {
                console.log("Ошибка при получении постов:", e)
            }
        };
        fetchPosts()
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setSearchParams({ ...searchParams, page: page.toString() }); // Обновление параметра page в URL
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
                <Pagination handlePageChange={handlePageChange} currentPage={currentPage} />
            </div>
        </div>
    );
}

export default PaginationComponent;

