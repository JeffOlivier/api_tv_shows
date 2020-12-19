import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import StarRating from "./StarRating";
import styles from "./SingleShow.module.scss";

class SingleShow extends Component {
    imageUrl =
        this.props.image != null && this.props.image.medium != null
            ? this.props.image.medium
            : "../images/no-image.png";
    title = this.props.name != null ? this.props.name : "Untitled";
    summary = this.props.summary != null ? this.props.summary : "";
    rating =
        this.props.rating && this.props.rating.average != null
            ? this.props.rating.average
            : 0;

    episodesButtonClasses = `btn ${styles.btn_episodes}`;

    handleEpisodes = () => {
        this.props.history.push(`/show/${this.props.id}`);
    };

    render() {
        return (
            <div className={styles.showBlock}>
                <img src={this.imageUrl} alt="show pic" />
                <div className={styles.showInfo}>
                    <h1>{this.title}</h1>
                    <StarRating rating={this.rating} />
                    <div
                        className={styles.showSummary}
                        dangerouslySetInnerHTML={{ __html: this.summary }}
                    ></div>

                    <button
                        className={this.episodesButtonClasses}
                        // onClick={() => props.updateShowId(props.id)}
                        onClick={this.handleEpisodes}
                        type="button"
                    >
                        Episodes
                    </button>
                </div>
            </div>
        );
    }
}

export default withRouter(SingleShow);
