

const validator = values => {

    let errors = {};

    if (!values.email) {
        errors.email = 'Заполните поле';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Неверный адрес';
    };

    if (!values.password) {
        errors.password = 'Заполните поле';
    };

    return errors
}

export default validator;