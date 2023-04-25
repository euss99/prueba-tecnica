import axios from "axios";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmFmYWFmOTQ2ZmI2ZjU1ZmY3OTRhZWVhMzYwNWU4ZiIsInN1YiI6IjY0NDgxMjA3Yjc2Y2JiMDJmY2EzYWY4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FseDKj1OVBQ-oH22fF-iBt36c8AZ7uoPHUypgwXMEmk";

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${token}`, // Token de autenticación para la API
    },
});
