'use client'

import MainLayout from "../layouts/MainLayout"
import PaginatedItems from "../ui/components/pagination/Pagination"
import Filter from '../ui/components/filter/Filter'

export default function Catalog({ }) {
    return (
        <MainLayout>

            <div className="container">
                <div>
                    Home -- Catalog -- Smartphones
                </div>

                <div className="flex justify-between">
                    <div className="min-w-[256px] pt-[3.5rem] mr-[28px]">
                        <Filter />
                    </div>

                    <div>
                        <div className="py-14">
                        <PaginatedItems itemsPerPage={4} />
                        </div>
                    </div>

                </div>


            </div>

        </MainLayout>
    )
}