function Form({
    enable = false,
    text = 'A Button',
    placeholder = 'input value...',
    size = 50,
    name = 'Label',
}) {
    return (
        <section>
            <label htmlFor={name}>{name}</label>
            <input
                type='text'
                placeholder={placeholder}
                size={size}
                name={name}
            />
            <button disabled={!enable}>{text}</button>
        </section>
    );
}

export default Form;
