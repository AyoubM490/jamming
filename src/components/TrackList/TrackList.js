import React, { Component } from 'react'
import Track from '../Track/Track'
import "./TrackList.css"

class TrackList extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    render() {
        return (
            <div className="TrackList">
                {this.props.tracks.map((track) => { return <Track track={track} key={track.id} /> })}
            </div>
        )
    }
}

export default TrackList;