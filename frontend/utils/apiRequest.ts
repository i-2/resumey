
export function createNewResume(data: any) : Promise<any> {
    return fetch("/v1/resume/", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        (x) => x.json()
    );
}