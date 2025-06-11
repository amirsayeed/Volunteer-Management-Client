export const myVolunteerRequestPromise = email => {
    return fetch(`http://localhost:5000/myVolunteerRequests?email=${email}`).then(res => res.json());
}