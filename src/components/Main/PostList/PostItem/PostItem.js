import { useContext } from "react"
import { PostListContext } from "../../../../contexts/PostListContext"

// 12ое создаём компонент PostItem:
const PostItem = ({ id, url, message }) => {
    //импортируем из newPost id url message
    const { deletePost } = useContext(PostListContext)
    //импортировали из контекста функцию deletePost

    const deleteHandler = () => deletePost(id)
    //будем вешать функцию deletePost на кнопку удаления поста через onClick

    return (
        <div className="d-flex justify-content-center mb-5">
            <div className="card w-50 p-3">
                <img src={url} className="card-img-top" alt="pic" />
                <div className="card-body">
                    <p className="card-text text-center">{message}</p>
                </div>
                <button onClick={deleteHandler} type="button" className="btn btn-danger">Delete Post</button>
            </div>
        </div>
    )
}

export default PostItem

//взял в бутстрап простую карточку с изображением и описанием, в дальнейшем можно использовать более сложный шаблон
//временно убрал style="width: 18rem;" из div
//картинка не отображалась, пока не поменля src на - src={url}