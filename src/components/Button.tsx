
type ButtonProps = {
    handleClick: () => void;
    text: string
}

export function Button(props: ButtonProps) {
  return (
    <button onClick={props.handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">{props.text}</button>
  )
}
