
export default function Button({children, onClick}) {
    return (
      <button type='button'  className='px-4 py-2 bg-cyan-950 text-white rounded-xl shadow ' onClick={onClick}>{children}</button>
    )
  }
  