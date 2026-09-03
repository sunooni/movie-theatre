import { SearchOutlined } from "@ant-design/icons";
import { useSearchModal } from "../model/useSearchModal";
import { SearchModal } from "./SearchModal";

import styles from "@/widgets/header/ui/Header.module.css";

export const Search = () => {
  const { isOpen, open, close } = useSearchModal();

  return (
    <>
      <button
        type="button"
        className={styles.iconButton}
        onClick={open}
        aria-label="Поиск по сайту"
      >
        <SearchOutlined />
      </button>

      {isOpen && <SearchModal onClose={close} />}
    </>
  );
};
