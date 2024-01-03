'use client'

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';


export default function Breadcrumbs() {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse ">
                <li className="inline-flex items-center">
                    <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-black-600 transition duration-300 ease-in-out">
                        <HomeIcon className='mr-3 text-gray-500' fontSize='small' />
                        Home
                    </a>
                </li>
                <li>
                    <div className="flex items-center">
                        <NavigateNextIcon className='text-gray-500' />
                        <a href="#" className="ms-1 text-sm font-medium text-gray-500 hover:text-black-600 md:ms-2 transition duration-300 ease-in-out">
                            Catalog
                        </a>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        <NavigateNextIcon className='text-gray-500' />
                        <a href="#" className="ms-1 text-sm font-medium text-gray-500 hover:text-black-600 md:ms-2 transition duration-300 ease-in-out">
                            Smartphones
                        </a>
                    </div>
                </li>

                <li>
                    <div className="flex items-center">
                        <NavigateNextIcon className='text-gray-500' />
                        <a href="#" className="ms-1 text-sm font-medium text-gray-500 hover:text-black-600 md:ms-2 transition duration-300 ease-in-out">
                            Apple
                        </a>
                    </div>
                </li>
                <li aria-current="page">
                    <div className="flex items-center">
                        <NavigateNextIcon className='text-gray-500' />
                        <span className="ms-1 text-sm font-medium text-black md:ms-2 dark:text-gray-400">
                            iPhone 14 Pro Max
                        </span>
                    </div>
                </li>
            </ol>
        </nav>
    )
}