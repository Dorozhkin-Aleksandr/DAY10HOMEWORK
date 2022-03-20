import { createContext, useEffect, useState } from "react";

const LSpostsKey = 'posts'

// 1ое пишем контекст:
const PostListContext = createContext()


// 2ое создаём провайдер:
const PostListProvider = ({ children }) => {
    const [posts, setPosts] = useState([])
    //создали состояние реакта

    const createPost = (url, message) => {

        const newPost = {
            id: Date.now(),
            url,
            message
        }
        //добавил в объект и функцию поля из второго инпута
        setPosts(prev => [...prev, newPost])
        // console.log(newPost) объект создаётся 100%
    }

    // 9ое напишем и прокинем сразу несколько функций для удаления постов
    const deletePost = (id) => {
        setPosts(prev => prev.filter((post) => post.id !== id))
    }

    const clearAllPost = () => {
        setPosts([])
    }
    //эта функция скорее всего не понадобится ткже как и функция комплиттуду из примера 10 семинара


    //!!!создаём хук useEffect для работы с локальным хронилищем
    useEffect(() => {
        const dataFromLS = localStorage.getItem(LSpostsKey)
        if (dataFromLS) {
            setPosts(JSON.parse(dataFromLS))
        }
    }, [])
    //для работы с localst нам подходит 2ой вариант использования useEffect, т.е. с пустым массивом зависимостей 
    //внутри хука функция проверяет наличие данных в строке локалсторэдж
    //если там, что-нибудь есть, то передаём их в setPosts
    //!!! для корректной работы с LS (решаем проблему синхрогизации) нужен еще один хук useEffect:
    useEffect(() => {
        localStorage.setItem(LSpostsKey, JSON.stringify(posts))
    }, [posts])
    //каждый раз когда состояние posts будет меняться, будет срабатывать вышеописанная колбэк функция


    return (
        <PostListContext.Provider value={{ posts, createPost, deletePost, clearAllPost }}>
            {
                children
            }

        </PostListContext.Provider>
    )
}
//children - зарезервированный пропс (используем для динамической работы с оборачиваемыми компонентами, чтобы не писать их в виде списка, допустимо для небольших приложений)
//value для передачи данных, которыми будем делиться между компонентами (в двойных усах: 1ые - то,что это js выражение в разметке, 2ое - объект с 2мя ключами)


// 3ье отдаём на экспорт провайдер:
export default PostListProvider

//экспортируем также контекст
export {
    PostListContext
}

//useEffect работает в 3ех режимах (в зав от параметров, их два  -колбэк ф-уия и массива зависимостей)
//1 вариант без массива зависимости - запускается колбэк ф при монтировании компонента и каждом его ререндере
//2 вариант с пустым массивом зависимостей - срабатывает только при монтировании компонента
//3 вариант с заполненным массивом зависимостей (зависимость - любая js сущность, их мб бесконечное кол-во) - сробатывает при монтировании и когда меняется зависимость
//текущие значение LocalStorage можно найти в браузере в разделе инструменты разработчика в разделе application (см там наш host3000)

