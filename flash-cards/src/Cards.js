import './index.css'
export default function Cards({content, isFlipped,onClick}){
    const {question,answer}=content
    return (
        <div className={isFlipped?'answerContainer':'questionContainer'} onClick={onClick}>
        <h2>{isFlipped? answer : question}</h2>
        </div>
    )
}