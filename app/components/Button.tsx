
function Button(props:{Text:string,className?:string}) {
    return (
        <button className={`cursor-pointer rounded-[20px] border-2 p-3 px-8 w-fit h-fit ${props.className}`}>{props.Text}</button>
    )
}

export default Button