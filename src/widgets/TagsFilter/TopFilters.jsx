'use server'

import { SubmitButton } from '../SubmitButton/SubmitButton'
import { setParams } from '../../shared/lib/utils/actions'

export default async function TopFilters({ filters }) {

    return (
        <div className="flex gap-6 text-lg font-medium">
            {filters?.tags?.map((filter) =>
                <form key={filter.id} action={setParams}>
                        <input type="hidden" id = {filter.id} name="tagId" value={filter.id} />
                        <SubmitButton text={filter.name} />
                </form>
            )}
        </div>
    );
}