import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
  render() {

    let artist = {
      name: '',
      followers: {total: ''},
      images: [{url:''}],
      genres: []
    }

    //if artist exists
    if(this.props.artist !== null) {
        artist = this.props.artist;
    }
    
    return(
      <section className="Profile">
        <img
          alt="profile"
          className="artist-image"
          src={artist.images[0].url}
        />
        <div className="artist-info">
          <h3>{artist.name}</h3>
          <p><span className="bold-label">followers:</span> {artist.followers.total}</p>
          <p className="artist-info-genres"><span className="bold-label">genres:</span>
          {
            artist.genres.map((genre, k)=> {
              genre = genre !== artist.genres[artist.genres.length-1] 
                          ? ` ${genre},` 
                          : ` ${genre}`;
              return (
                <span key={k}>{genre}</span>
              )
            })
          }
          </p>
        </div>
      </section>
    );
  }
}

export default Profile;