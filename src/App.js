import React from 'react';
import Film from './Film.js'
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [
                {
                    name: 'Lol',
                    url: 'http://ya.ru/',
                    desc: "Самый крутой фильм",
                    pathname: '/lol'
                },
                {
                    name: 'Lol1',
                    url: 'http://ya.ru/',
                    desc: "Самый крутой фильм",
                    pathname: '/lol1'
                },
                {
                    name: 'Lol2',
                    url: 'http://ya.ru/',
                    desc: "Самый крутой фильм",
                    pathname: '/lol2'
                },
            ]
        }
    }

    getFilmByPathname = () => {
        const filtered = this.state.films.filter(x => x.pathname === window.location.pathname);

        return filtered.length > 0 ? filtered[0] : null
    };

    render() {
        if (window.location.pathname === "/") {
            return <ul>
                {this.state.films.map((film, index) =>
                    <Film desc={film.desc}
                          name={film.name}
                          url={film.url}
                          pathname={film.pathname}
                          key={index}/>)}
            </ul>
        } else {
            const film = this.getFilmByPathname();

            return film ? <Film desc={film.desc}
                                name={film.name}
                                url={film.url}
                                pathname={film.pathname}/> : <h2>Not found</h2>
        }

    }
}

export default App;
