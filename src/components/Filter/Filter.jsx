
import css from './Filter.module.css'

export const Filter = ({ filterValue, onChange }) => (
    <>
        <label className={css.label_filter}
            htmlFor="filter-field"
        >
            <p className={css.paragraph_filter}>Find contacts by name</p>
            <input className={css.input_filter}
                id="filter-field"
                type="text"
                value={filterValue}
                onChange={onChange}
            />
        </label>
    </>
);


