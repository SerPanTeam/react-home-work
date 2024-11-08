

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_FILTER":
            return { ...state, filter: action.payload };
        default:
            return state;
    }
}

const initState =
{
    filter: "",
    list: [{ id: 1, name: "Алексей" }, { id: 2, name: "Мария" }, { id: 3, name: "Иван" }, { id: 4, name: "Елена" }, { id: 5, name: "Дмитрий" }, { id: 6, name: "София" }, { id: 7, name: "Максим" }, { id: 8, name: "Анастасия" }, { id: 9, name: "Николай" }, { id: 10, name: "Виктория" }, { id: 11, name: "Кирилл" }, { id: 12, name: "Ольга" }, { id: 13, name: "Андрей" }, { id: 14, name: "Наталья" }, { id: 15, name: "Григорий" }, { id: 16, name: "Татьяна" }, { id: 17, name: "Сергей" }, { id: 18, name: "Юлия" }, { id: 19, name: "Павел" }, { id: 20, name: "Екатерина" }],
}
