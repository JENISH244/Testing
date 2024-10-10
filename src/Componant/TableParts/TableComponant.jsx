import React from 'react'
import CheckBox from './CheckBox'
import ActionLink from './ActionLink'
export default function TableComponent({ header, records }) {
    return (
        <>
            <div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="my-4">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th className='px-4 py-3'></th>
                                        {header && header.map((head) => (
                                            <th scope="col" key={head.field} className="px-6 py-3 ">
                                                {head.label}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {records && records.map((record, index) => (
                                        <tr key={"record-" + index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="w-4 px-8 py-4">
                                               <CheckBox />
                                            </td>
                                            {header && header.map((head) => (
                                                <td scope="col" key={head.field} className="px-4 py-1">
                                                    {head.type === 'link' && <><ActionLink data={record} clickHandler={head.clickHandler} /></>} 
                                                    {head.type === 'text' && <>{record[head.field]}</>}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
