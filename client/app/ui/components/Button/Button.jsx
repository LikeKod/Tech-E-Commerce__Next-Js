
export default function Button({title, className}) {
    return (
        <button className={`${className}`}>
            <p>{title}</p>
        </button>
    )
}