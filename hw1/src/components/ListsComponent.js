const ListsComponent = (props) => {
    return (
        <>
            <h2>{props.title}</h2>
            <props.type>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </props.type>
        </>
    )
}

export default ListsComponent;