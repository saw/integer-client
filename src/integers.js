
async function doFetch() {
    return fetch('https://69njvwhnvj.execute-api.us-west-1.amazonaws.com/default/Integer');
}

export async function getInt() {
    let response = await doFetch();
    return response.json();
}