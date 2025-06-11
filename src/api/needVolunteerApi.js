export const myVolunteerNeedPromise = email => {
    return fetch(`http://localhost:5000/myVolunteerNeedPost?email=${email}`).then(res => res.json());
}