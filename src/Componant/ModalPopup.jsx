export default function ModalPopup({ children, closeHandle}) {
    return (
        <div className="flex backdrop-blur-sm h-screen w-full top-0 fixed z-50 items-center justify-center">
            <div onClick={() => {closeHandle(false)}} className="fixed w-full h-full bg-[#000000aa] z-50 inset-0">
            </div>
            <div className="bg-black z-50 rounded-2xl shadow-2xl">
                {children}
            </div>
        </div>
    )
}
