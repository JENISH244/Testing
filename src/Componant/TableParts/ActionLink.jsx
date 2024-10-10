import React from "react"

export default function ActionLink({clickHandler, data}) {

  

  return (
    <div>
        <button onClick={() => clickHandler({action: "Edit", data})} type="button" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
        <button onClick={() => clickHandler({action: "Delete", data})} type="button" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</button>
    </div>
  )
}
