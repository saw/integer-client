
export async function getGuid() {
    let response = await fetch('https://r0et6lk8xa.execute-api.us-east-1.amazonaws.com/default/uuid');
    return response.json();
}