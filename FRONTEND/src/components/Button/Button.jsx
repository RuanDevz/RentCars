const Button = ({children, onClick}) => {
  return (
    <div>
        <button 
         onClick={onClick} className='bg-primary text-white py-2 px-10 rounded-md font-primary  cursor-pointer z-50 hover:bg-hovercolor'>{children}
         </button>
    </div>
  )
}

export default Button