import React, { Component } from 'react'



class Film extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            poster: '',
            comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    fetch() {
        const url = "http://92.175.11.66:3001/api/quests/movies/";
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };
        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert("Votre film a bien été ajouté !");
                }
            }).catch(e => {
                alert('Salade Tomate Oignon il y a une erreur chef !');
            });
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitForm(e) {
        e.preventDefault();
        this.fetch()
    }

    render() {


        return (
            <div>
                <h1>Votre film :</h1>

                <form onSubmit={this.submitForm}>
                        <div>
                            <label htmlFor="name">Film :</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onChange={this.onChange}
                                value={this.state.name}
                            />
                        </div>

                        <div>
                            <label htmlFor="poster">Poster :</label>
                            <input
                                type="text"
                                id="poster"
                                name="poster"
                                onChange={this.onChange}
                                value={this.state.poster}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="comment">Commentaire :</label>
                            <input
                                type="textarea"
                                id="comment"
                                name="comment"
                                onChange={this.onChange}
                                value={this.state.comment}
                            />
                        </div>
                        <hr />
                        <div className="form-data">
                            <input type="submit" value="Envoyer" />
                        </div>
                </form>
            </div>
        );
    }
}

export default Film;