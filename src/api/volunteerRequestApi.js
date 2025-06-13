export const myVolunteerRequestPromise = (email, accessToken) => {
    return fetch(`https://volunteer-management-server-tawny.vercel.app/myVolunteerRequests?email=${email}`, {
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    }).then(res => res.json());
}