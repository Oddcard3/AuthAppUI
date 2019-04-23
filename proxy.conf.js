const PROXY_CONFIG = [
    {
        context: [
            "/auth/*",
            "/api/*"
        ],
        target: "http://localhost:8080",
        secure: false
    },
    {
        context: [
            "/ws/*"
        ],
        target: "http://localhost:8080",
        secure: false,
        ws: true
    }
]

module.exports = PROXY_CONFIG;