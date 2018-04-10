class SuperheroApi{
    static getAllSuperHeroes()
    {
        return fetch('/api/superheroes', {
            credentials: 'same-origin'
        }).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}
export default SuperheroApi;