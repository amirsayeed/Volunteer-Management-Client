export const myVolunteerNeedPromise = (email, accessToken) => {
    return fetch(`https://volunteer-management-server-tawny.vercel.app/myVolunteerNeedPost?email=${email}`, {
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    }).then(res => res.json());
}