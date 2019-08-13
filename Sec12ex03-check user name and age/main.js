const user = (name = "", age) => {
    let userName = name;
    let userAge = age;

    const checkAge = () => {
        console.log(`Hi ${userName}!, ${userAge >18? "You can drink beer":"You can't drink beer"}`);
    }
    return checkAge;
}

const maciej = user("Maciej", 28);
const kiddo = user("Bobby", 15);

maciej();
kiddo();