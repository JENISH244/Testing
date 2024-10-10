import React from 'react'
import TableComponent from '../../Componant/TableParts/TableComponant';
import { navbarTitle } from '../../Constants/Constants';

export default function AppSetting() {
  const header = [
    { type: 'text', field: 'Site_name', label: "Site name" },
    { type: 'text', field: 'Block_name', label: "Block name" },
    { type: 'text', field: 'House_number', label: "House number" },
    { type: 'text', field: 'Rate', label: "Rate" },
    { type: 'text', field: 'Total_cost', label: "Total cost" },
    { type: 'text', field: 'Final_cost', label: "Final cost" },
    { type: 'text', field: 'Advance_amount', label: "Advance amount" },
    { type: 'text', field: 'Next_installment', label: "Next installment" },
    {  }
  ];
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">
          <div className="flex justify-between py-4 items-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{navbarTitle.setting}</h1>
          </div>
        </div>
      </header>
      <TableComponent header={header} records={header} />
    </>
  )
}
