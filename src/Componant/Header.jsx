import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { navbarTitle } from '../Constants/Constants'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <>
    <div className="min-h-full shadow">
        <Disclosure as="nav" className="bg-slate-200">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="py-3 items-center justify-between">
            <div className=' flex px-3 h-16 items-center justify-between '>
                <div className="flex-shrink-0">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                    className="h-8 w-8"
                  />
                </div>
                <div className="hidden md:block">
                <ul className="flex items-baseline list-none px-5 py-1 space-x-4 text-black">
                    <li><Link className=' hover:bg-cyan-950 hover:text-white focus:bg-cyan-950 focus:text-white  hover: 
                          rounded-md px-3 py-2 text-sm font-medium' to={'/app'}>{navbarTitle.dashboard}</Link></li>

                    <li>
                      <Menu as="div" className="relative inline-block text-left">
                        <div>
                          <MenuButton className="inline-flex w-full justify-center gap-x-1.5  hover:bg-cyan-950 hover:text-white focus:bg-cyan-950 focus:text-white hover: 
                          rounded-md px-3 py-2 text-sm font-medium">
                            {navbarTitle.product}
                          </MenuButton>
                        </div>

                        <MenuItems
                          transition
                          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                          <div className="py-1">
                            <MenuItem>
                              <Link
                                to="/app/category"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                              >
                                {navbarTitle.category}
                              </Link>
                            </MenuItem>
                            <MenuItem>
                              <Link
                                to="/app/product"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                              >
                                {navbarTitle.product}
                              </Link>
                            </MenuItem>
                          </div>
                        </MenuItems>
                      </Menu>
                    </li>

                    <li>
                      <Menu as="div" className="relative inline-block text-left ">
                        <div>
                          <MenuButton className="inline-flex w-full justify-center gap-x-1.5  hover:bg-cyan-950 hover:text-white focus:bg-cyan-950 focus:text-white hover: 
                          rounded-md px-3 py-2 text-sm font-medium">
                            {navbarTitle.purchase}
                          </MenuButton>
                        </div>

                        <MenuItems
                          transition
                          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                          <div>
                            <MenuItem>
                              <Link
                                to="/app/material"
                                className="block block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                              >
                                {navbarTitle.material}
                              </Link>
                            </MenuItem>
                            <MenuItem>
                              <Link
                                to="/app/purchase-order"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                              >
                                {navbarTitle.purchase + ' ' + navbarTitle.order}
                              </Link>
                            </MenuItem>
                            <MenuItem>
                              <Link
                                to="/app/purchase-inward"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                              >
                                {navbarTitle.purchase + ' ' + navbarTitle.inward}
                              </Link>
                            </MenuItem>
                          </div>
                        </MenuItems>
                      </Menu>
                    </li>

                    <li>
                      <Menu as="div" className="relative inline-block text-left ">
                        <div>
                          <MenuButton className="inline-flex w-full justify-center gap-x-1.5  hover:bg-cyan-950 hover:text-white focus:bg-cyan-950 focus:text-white hover: 
                          rounded-md px-3 py-2 text-sm font-medium">
                            {navbarTitle.sales}
                          </MenuButton>
                        </div>

                        <MenuItems
                          transition
                          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                          <div>
                            <MenuItem>
                              <Link
                                to="/app/quotation"
                                className="block block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                              >
                                {navbarTitle.quotation}
                              </Link>
                            </MenuItem>
                            <MenuItem>
                              <Link
                                to="/app/proforma"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                              >
                                {navbarTitle.proforma}
                              </Link>
                            </MenuItem>
                            <MenuItem>
                              <Link
                                to="/app/order"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                              >
                                {navbarTitle.order}
                              </Link>
                            </MenuItem>
                          </div>
                        </MenuItems>
                      </Menu>
                    </li>
                    
                    <li>
                      <Menu as="div" className="relative inline-block text-left">
                        <div>
                          <MenuButton className="inline-flex w-full justify-center gap-x-1.5  hover:bg-cyan-950 hover:text-white focus:bg-cyan-950 focus:text-white hover: 
                          rounded-md px-3 py-2 text-sm font-medium">
                            {navbarTitle.stock}
                          </MenuButton>
                        </div>

                        <MenuItems
                          transition
                          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                          <div className="py-1">
                            <MenuItem>
                              <Link
                                to="/app/stock-material"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                              >
                                {navbarTitle.stock + ' ' + navbarTitle.material}
                              </Link>
                            </MenuItem>
                            <MenuItem>
                              <Link
                                to="/app/stock-product"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                              >
                                {navbarTitle.stock + ' ' + navbarTitle.product}
                              </Link>
                            </MenuItem>
                          </div>
                        </MenuItems>
                      </Menu>
                    </li>

                    <li><Link className=' hover:bg-cyan-950 hover:text-white focus:bg-cyan-950 focus:text-white  hover: 
                          rounded-md px-3 py-2 text-sm font-medium' to={'/app/setting'}>{navbarTitle.setting}</Link></li>

                   
                  </ul>
                </div>
              
              <div className="hidden md:block">
                <div className="ml-4 flex items-center gap-1 md:ml-6">
                  <button
                    type="button"
                    className="relative rounded-full text-black hover: hover:bg-gray-700 hover: 
                          rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img alt="" src={user.imageUrl} className="h-8 w-8 rounded-full" />
                      </MenuButton>
                    </div>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          <a
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                          >
                            {item.name}
                          </a>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                </div>
              </div>
             
             
             
             
              <div className="mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover: focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>
            </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <ui className="flex flex-row flex-wrap w-full
             items-center space-y-1 px-2 pb-3 pt-2 sm:px-3 list-none">
                    <li><Link className=' hover:bg-cyan-950 hover:text-white focus:bg-cyan-950 focus:text-white  hover: 
                          rounded-md px-3 py-2 text-sm font-medium' to={'/app'}>{navbarTitle.dashboard}</Link></li>


                    <li>
                      <Menu as="div" className="relative inline-block text-left">
                        <div>
                          <MenuButton className="inline-flex w-full justify-center gap-x-1.5  hover:bg-cyan-950 hover:text-white focus:bg-cyan-950 focus:text-white hover: 
                          rounded-md px-3 py-2 text-sm font-medium">
                            {navbarTitle.product}
                          </MenuButton>
                        </div>

                        <MenuItems
                          transition
                          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                          <div className="py-1">
                            <MenuItem>
                              <Link
                                to="/app/category"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                              >
                                {navbarTitle.category}
                              </Link>
                            </MenuItem>
                            <MenuItem>
                              <Link
                                to="/app/product"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                              >
                                {navbarTitle.product}
                              </Link>
                            </MenuItem>
                          </div>
                        </MenuItems>
                      </Menu>
                    </li>

                    <li>
                      <Menu as="div" className="relative inline-block text-left ">
                        <div>
                          <MenuButton className="inline-flex w-full justify-center gap-x-1.5  hover:bg-cyan-950 hover:text-white focus:bg-cyan-950 focus:text-white hover: 
                          rounded-md px-3 py-2 text-sm font-medium">
                            {navbarTitle.purchase}
                          </MenuButton>
                        </div>

                        <MenuItems
                          transition
                          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                          <div>
                            <MenuItem>
                              <Link
                                to="/app/material"
                                className="block block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                              >
                                {navbarTitle.material}
                              </Link>
                            </MenuItem>
                            <MenuItem>
                              <Link
                                to="/app/purchase-order"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                              >
                                {navbarTitle.purchase + ' ' + navbarTitle.order}
                              </Link>
                            </MenuItem>
                            <MenuItem>
                              <Link
                                to="/app/purchase-inward"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                              >
                                {navbarTitle.purchase + ' ' + navbarTitle.inward}
                              </Link>
                            </MenuItem>
                          </div>
                        </MenuItems>
                      </Menu>
                    </li>

                    <li>
                      <Menu as="div" className="relative inline-block text-left ">
                        <div>
                          <MenuButton className="inline-flex w-full justify-center gap-x-1.5  hover:bg-cyan-950 hover:text-white focus:bg-cyan-950 focus:text-white hover: 
                          rounded-md px-3 py-2 text-sm font-medium">
                            {navbarTitle.sales}
                          </MenuButton>
                        </div>

                        <MenuItems
                          transition
                          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                          <div>
                            <MenuItem>
                              <Link
                                to="/app/quotation"
                                className="block block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                              >
                                {navbarTitle.quotation}
                              </Link>
                            </MenuItem>
                            <MenuItem>
                              <Link
                                to="/app/proforma"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                              >
                                {navbarTitle.proforma}
                              </Link>
                            </MenuItem>
                            <MenuItem>
                              <Link
                                to="/app/order"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                              >
                                {navbarTitle.order}
                              </Link>
                            </MenuItem>
                          </div>
                        </MenuItems>
                      </Menu>
                    </li>
                    
                    <li>
                      <Menu as="div" className="relative inline-block text-left">
                        <div>
                          <MenuButton className="inline-flex w-full justify-center gap-x-1.5  hover:bg-cyan-950 hover:text-white focus:bg-cyan-950 focus:text-white hover: 
                          rounded-md px-3 py-2 text-sm font-medium">
                            {navbarTitle.stock}
                          </MenuButton>
                        </div>

                        <MenuItems
                          transition
                          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                          <div className="py-1">
                            <MenuItem>
                              <Link
                                to="/app/stock-material"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                              >
                                {navbarTitle.stock + ' ' + navbarTitle.material}
                              </Link>
                            </MenuItem>
                            <MenuItem>
                              <Link
                                to="/app/stock-product"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                              >
                                {navbarTitle.stock + ' ' + navbarTitle.product}
                              </Link>
                            </MenuItem>
                          </div>
                        </MenuItems>
                      </Menu>
                    </li>

                    <li><Link className=' hover:bg-cyan-950 hover:text-white focus:bg-cyan-950 focus:text-white  hover: 
                          rounded-md px-3 py-2 text-sm font-medium' to={'/app/setting'}>{navbarTitle.setting}</Link></li>

            </ui> 
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img alt="" src={user.imageUrl} className="h-10 w-10 rounded-full" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none ">{user.name}</div>
                  <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover: focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:"
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </>
  )
}
