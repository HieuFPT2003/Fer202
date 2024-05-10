function Slice2({ ...props }) {
    return (
        <h1 className={props.className}>
            {`My name is ${props.firstName} ${props.name}`}
        </h1>
    );
}

export default Slice2;
