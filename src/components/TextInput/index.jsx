import "./styles.css";

export const TextInput = (props) => {
    const { type, searchValue, onChange } = props;
    return(
        <>
            <input
            className="text-input"
            type={type}
            value={searchValue} 
            onChange={onChange}
            placeholder="Search"
            /> <br /><br /><br />
        </>
    )
}