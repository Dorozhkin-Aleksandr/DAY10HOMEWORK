import { useContext, useState } from "react"
import { PostListContext } from "../../../contexts/PostListContext"

//6ое создаём ещё один компонент "form":
const Form = () => {

    //7ое создаём состояние за отслеживанием Input (первый в форме)
    const [input, setInput] = useState('')
    // для input значением по умолчанию дб пустая строка ''
    // useState не выносим в контекст, так как он используется только здесь в форме

    const [input2, setInput2] = useState('')
    //Эксперимент со вторым полем!

    const { createPost } = useContext(PostListContext)
    //хук для получения данных из контекста



    //8 делаем функцию ченджхэндлер и сабмит хандлер 
    const changeHandlerInput1 = (e) => setInput(e.target.value)
    //ченджхэндлер для первого поля input

    const changeHandlerInput2 = (e) => setInput2(e.target.value)
    //ченджхэндлер для второго поля input
    //!!! аргумент дб "value" в обоих случаях

    const submitHandler = (e) => {
        e.preventDefault()

        const inputTrim = input.trim()
        const inputTrim2 = input2.trim()
        //для того, чтобы выврезать лишние пробелы в сообщении в input

        if (inputTrim && inputTrim2) {
            createPost(inputTrim, inputTrim2)
            setInput('')
            setInput2('')
            //для очистки полей вводо после отправки формы 

            // console.log(inputTrim)
            // console.log(inputTrim2)
            // проверял работоспособность форм в консоле
        }


    }

    return (
        <div className="container w-50">
            <form onSubmit={submitHandler} className="d-flex flex-column align-item-center mb=3">
                <div className="mb-3">
                    <label for="exampleInput1" className="form-label">Pictures:</label>
                    <input onChange={changeHandlerInput1} value={input} type="text" className="form-control" id="exampleInput1" aria-describedby="textHelp" />
                    <div id="textHelp" className="form-text">Укажите URL адрес публикуемого изображения</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInput2" className="form-label">Message:</label>
                    <input onChange={changeHandlerInput2} value={input2} type="text" className="form-control" id="exampleInput2" aria-describedby="textHelp" />
                    <div id="textHelp" className="form-text">Напишите Ваше сообщение</div>
                </div>
                {/* <div className="mb-3">
                <label for="exampleInput3" className="form-label">Pictures URL:</label>
                <input value={input} type="text" className="form-control" id="exampleInput3" aria-describedby="textHelp" />
                <div id="textHelp" className="form-text">Укажите URL адрес публикуемого изображения</div>
            </div>
            <div className="mb-3">
                <label for="exampleInput4" className="form-label">Tags:</label>
                <input value={input} type="text" className="form-control" id="exampleInput4" aria-describedby="textHelp" />
                <div id="textHelp" className="form-text">Укажите теги</div>
            </div> */}
                <button type="submit" className="btn btn-primary">Done</button>
            </form>
        </div>

    )
}

export default Form
// саму форму я взял из бутстрап и немного её модифицировал
// чтобы бутстрап классы работали class меняю на className
// одиночные теги в jsx разметке должны быть закрыты (в моём случае input)
// всем тегам imput добавил аттрибуты value={input}
// !!!оставил пока в форме 2 инпута, возникла сложность с отслеживанием нескольких инпутов
// !!!в 12 видео на 40 минуте Семён предложил использовать аттрибут name, я так делал в первом задании

//---------------ниже оставлю на всякий пожарный кусочки кода из различных иттераций
// createPost(input, input2)
// setInput('')
// setInput2('')
// console.log(input)
// console.log(input2)