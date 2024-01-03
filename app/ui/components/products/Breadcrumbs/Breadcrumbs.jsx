'use client'

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';


export default function Breadcrumbs()  {
    return (
        <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center">
                    <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <HomeIcon className='mr-3' fontSize='small'/>
                        Home
                    </a>
                </li>
                <li>
                    <div class="flex items-center">
                        <NavigateNextIcon/>
                        <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                            Catalog
                        </a>
                    </div>
                </li>
                <li>
                    <div class="flex items-center">
                        <NavigateNextIcon/>
                        <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                            Smartphones
                        </a>
                    </div>
                </li>
                
                <li>
                    <div class="flex items-center">
                        <NavigateNextIcon/>
                        <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                            Apple
                        </a>
                    </div>
                </li>
                <li aria-current="page">
                    <div class="flex items-center">
                        <NavigateNextIcon/>                        
                        <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                            iPhone 14 Pro Max
                        </span>
                    </div>
                </li>
            </ol>
        </nav>
    )
}