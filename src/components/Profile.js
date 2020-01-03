import React from 'react';
import PropTypes from 'prop-types';


class Profile extends React.Component {
    render() {

        const { avatar } = this.props;
        return (
            <div className="profile">
                <div className="preview_card-image js__profile-image" style={{ backgroundImage: `url(${avatar})` }}></div>
            </div>
        );
    }
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired
};

export default Profile;