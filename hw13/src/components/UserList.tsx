import style from "../styles/UserList.module.css"

import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';
import { useRef, useState } from "react";

interface User {
    id: number,
    name: string
}

interface ListProps {
    options: User[],
    filter: string,
    setFilter: (filter: string) => void,
}

export function UserList({ options, filter, setFilter }: ListProps) {
    const [hasFocus, setHasFocus] = useState(false);
    //let hasFocus = false;
    const [inputValue, setinputValue] = useState("");
    //const refInput = useRef();

    function onSelectOption(e) {
        console.log(e.target.innerText);
        setinputValue(e.target.innerText);
        //refInput.current.value = e.target.innerText;
        setHasFocus(false);
    }

    function onChangeInput(e) {
        //console.log(e.target.value);
        setFilter(e.target.value);
    }

    return (
        <div>
            <input onChange={(e) => onChangeInput(e)} type="text" /* onBlur={() => setHasFocus(false)} */ onFocus={() => setHasFocus(true)} value={inputValue}/>
            {(hasFocus) &&
                <div className={style.options}>

                    {options.map(val => {
                        if (val.name.toLowerCase().includes(filter.toLowerCase())) {
                            const name = val.name.replace(filter, `<b>${filter}</b>`)
                            return <div onClick={(e) => onSelectOption(e)} key={val.id} className={style.option} dangerouslySetInnerHTML={{ __html: name }}></div>
                        }
                    })
                    }

                </div>
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    options: state.list,
    filter: state.filter,
});

const mapDispatchToProps = {
    setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
