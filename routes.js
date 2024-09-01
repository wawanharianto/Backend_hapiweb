const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            const { name, location } = request.query;
            if (name && location) {
                return `Hello, ${name} from ${location}`;
            }
            return 'Homepage';
        },
    },
    {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            const { username, password } = request.payload;

            if (!username || !password) {
                return h.response({ error: 'Username and password are required' }).code(400);
            }

            return `Welcome ${username}!`;
        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
];

module.exports = routes;
