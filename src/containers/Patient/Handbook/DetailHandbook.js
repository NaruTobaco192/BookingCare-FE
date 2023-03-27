import React, { Component } from 'react';
import { connect } from "react-redux";
import './DetailHandbook.scss';
import { LANGUAGES } from '../../../utils';
import HomeHeader from '../../HomePage/HomeHeader';
import { getAllDetailHandbookById } from '../../../services/userService';
import _ from 'lodash';

class DetailClinic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataDetailHandbook: {},
        }
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            let res = await getAllDetailHandbookById({
                id: id,
            });

            if (res && res.errCode === 0) {
                this.setState({
                    dataDetailHandbook: res.data,
                })
            }
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    render() {
        let { dataDetailHandbook } = this.state;
        let { language } = this.props
        return (
            <div className='detail-handbook-container'>
                <HomeHeader />
                <div className='detail-handbook-body'>
                    <div className='description-handbook'>
                        {dataDetailHandbook && !_.isEmpty(dataDetailHandbook)
                            &&
                            <div
                                dangerouslySetInnerHTML={{ __html: dataDetailHandbook.descriptionHTML }}
                            >
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailClinic);
