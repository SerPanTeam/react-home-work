import { UseFormRegisterReturn } from "react-hook-form";

export default function Select({ defaultValue, optionsArray, register }: { defaultValue: string, optionsArray: string[], register: UseFormRegisterReturn }) {
    return (
        <select aria-label={defaultValue} {...register}>
            <option value="">
                {defaultValue}
            </option>
            {
                optionsArray.map((val, i) => {
                    return (<option key={i} value={val}>{val}</option>);
                })
            }
        </select>
    );
}