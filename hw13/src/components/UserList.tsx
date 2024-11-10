import style from "../styles/UserList.module.css";

import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import { useState, useRef } from "react";

interface AppState {
  filter: string;
  list: User[];
}

interface User {
  id: number;
  name: string;
}

interface ListProps {
  options: User[];
  filter: string;
  setFilter: (filter: string) => void;
}

export function UserList({ options, filter, setFilter }: ListProps) {
  const [hasFocus, setHasFocus] = useState(false);
  const [inputValue, setinputValue] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  function onSelectOption(e: React.MouseEvent<HTMLDivElement>) {
    console.log(e.currentTarget.innerText);
    setinputValue(e.currentTarget.innerText);
    setHasFocus(false);
  }

  function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setinputValue(e.currentTarget.value);
    setFilter(e.currentTarget.value);
    setHasFocus(true);
  }

  function onFocusInput(e: React.FocusEvent<HTMLInputElement>) {
    setFilter(e.currentTarget.value);
    setHasFocus(true);
  }

  function handleInputBlur(e: React.FocusEvent<HTMLInputElement>) {
    const relatedTarget = e.relatedTarget as Node | null;
    if (optionsRef.current && optionsRef.current.contains(relatedTarget)) {
      return;
    }
    setHasFocus(false);
  }

  return (
    <div>
      <input
        onChange={onChangeInput}
        type="text"
        onFocus={onFocusInput}
        value={inputValue}
        onBlur={handleInputBlur}
        ref={inputRef}
      />
      {hasFocus && (
        <div className={style.options} tabIndex={-1} ref={optionsRef}>
          {options
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((val) => {
              if (val.name.toLowerCase().includes(filter.toLowerCase())) {
                const startPos = val.name
                  .toLocaleLowerCase()
                  .indexOf(filter.toLocaleLowerCase());
                const newName =
                  val.name.slice(0, startPos) +
                  "<b>" +
                  val.name.slice(startPos, startPos + filter.length) +
                  "</b>" +
                  val.name.slice(startPos + filter.length, val.name.length);
                return (
                  <div
                    onClick={onSelectOption}
                    key={val.id}
                    className={style.option}
                    dangerouslySetInnerHTML={{ __html: newName }}
                  ></div>
                );
              }
            })}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  options: state.list,
  filter: state.filter,
});

const mapDispatchToProps = {
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
