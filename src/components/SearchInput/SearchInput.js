import SearchIcon from "@material-ui/icons/Search";
import styles from "./searchinput.module.css";

const SearchInput = ({ ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <SearchIcon />
      <input className={styles.input} {...rest} />
    </div>
  );
};

export default SearchInput;
