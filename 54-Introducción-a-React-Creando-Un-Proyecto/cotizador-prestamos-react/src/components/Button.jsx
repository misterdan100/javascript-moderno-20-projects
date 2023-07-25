function Button(props) {
  return (
    <button
        type='button'
        className='h-10 w-10 flex items-center justify-center font-bold text-white bg-lime-500 text-2xl rounded-full hover:bg-lime-500 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500'
        onClick={props.fn}
    >{props.operador}</button>
  )
}

export default Button