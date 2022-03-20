import { useContext } from "react"
import { PostListContext } from "../../../contexts/PostListContext"
import PostItem from "./PostItem/PostItem"

// 11ое создаём компонент PostList:
const PostList = () => {

    const { posts } = useContext(PostListContext)
    // console.log(posts) использовал для отладки, всё работает

    return (
        <div>
            {posts.map((post) => (
                <PostItem key={post.id} id={post.id} url={post.url} message={post.message} />
            ))
            }

        </div>
    )
}

export default PostList

//можно в return импортировать index для номерации постов
//ключ для массива key={post.id} необходим реакту для более точного отслеживания состояния, короче, без него могут быть ошибки
//этот ключ д б уникальным и постоянным