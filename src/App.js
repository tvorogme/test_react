import React from 'react';
import Film from './Film.js'
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            films: [
                {
                    name: 'Lol',
                    url: 'http://ya.ru/',
                    desc: "Самый крутой фильм",
                    pathname: '/lol'
                },
                {
                    name: 'Test',
                    url: 'http://ya.ru/',
                    desc: "Самый крутой фильм",
                    pathname: '/lol1'
                },
                {
                    name: 'Value',
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

    handleChange = (el) => {
        this.setState({[el.target.name]: el.target.value.toLocaleLowerCase()});
    };

    render() {
        if (window.location.pathname === "/") {
            return <div>

                <label htmlFor={'test'}>Test:</label>
                <input name={'search'} id={'test'} onChange={this.handleChange}/>


                <ul>
                    {this.state.films.filter(el => el.name.toLocaleLowerCase().includes(this.state.search)).map(
                        (film, index) =>
                            <Film desc={film.desc}
                                  name={film.name}
                                  url={film.url}
                                  pathname={film.pathname}
                                  key={index}/>)}
                </ul>
            </div>
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
