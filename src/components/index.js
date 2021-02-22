import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    Container,
    Col,
    Form
} from 'react-bootstrap';
import {
    fetchCountriesList,
    fetchCountryByName,
    fetchCountryDetails
} from '../helper/index';
import CountriesList from './countries';
import CountryModal from './modal';

class Countries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            showCountryDetails: false
        }
    }

    componentDidMount() {
        fetchCountriesList();
    }

    handleClick = (countryDetails) => {
        fetchCountryDetails({ countryDetails })
        this.setState({
            showCountryDetails: true
        })
    }

    handleSearch = (event) => {
        const targetValue = event?.target?.value;
        this.setState({
            searchValue: targetValue
        })
        if (targetValue) {
            fetchCountryByName({ targetValue });
        }
    }

    render() {
        const { counrtriesList, errorMsg, counrtryDetails } = this.props;
        return (
            <Container>
                <Form.Row>
                    <Form.Group as={Col} md="12" controlId="validationCustom01" className='search-input'>
                        <Form.Control
                            required
                            type="text"
                            id='searchValue'
                            name='searchValue'
                            placeholder="Search by country"
                            value={this.state.searchValue}
                            onChange={(e) => this.handleSearch(e)}
                        />
                    </Form.Group>
                </Form.Row>
                {!errorMsg ?
                    <CountriesList
                        counrtriesList={counrtriesList}
                        handleClick={this.handleClick}
                    /> : errorMsg
                }
                {this.state.showCountryDetails &&
                    <CountryModal
                        show={this.state.showCountryDetails}
                        onHide={() => this.setState({ showCountryDetails: false })}
                        counrtryDetails={counrtryDetails}
                    />
                }
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        counrtriesList: state.counrtriesList,
        errorMsg: state.errorMsg,
        counrtryDetails: state.counrtryDetails,
    }
}

export default connect(mapStateToProps)(Countries);
