export function apiService(url, method = 'GET', headers = {}, body) {
    return new Promise(async (resolve, reject) => {
        const response = await fetch(url, {
            method,
            headers,
            body: body ? JSON.stringify(body) : undefined
        });
        if (response.ok || response.status === 200) {
            resolve(await response.json());
        } else {
            reject({message: 'Something went wrong!'});
        }
    });
    
}
