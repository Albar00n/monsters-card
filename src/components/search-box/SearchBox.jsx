
import './search.css'
const SearchBox = ({className,placeholder,onChangeHandler}) =>

        // const {onSearchChange} = props;
         (
					<input
						className={`search-box ${className}`}
						type="search"
						placeholder={placeholder}
						onChange={onChangeHandler}
					/>
				);


export default SearchBox;