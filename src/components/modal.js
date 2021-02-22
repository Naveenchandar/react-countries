import React from 'react';
import {
    Modal,
    Button
} from 'react-bootstrap'

export default function CountryModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.counrtryDetails?.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='modal-country-flagdiv'>
                    <img src={props.counrtryDetails?.flag} />
                </div>
                <div className='modal-country-details'>
                    <ul>
                        <li>Demonym</li>
                        <li>Capital</li>
                        <li>Currency</li>
                        <li>Region</li>
                        <li>Native name</li>
                        <li>Timezone</li>
                        <li>Numeric Code</li>
                        <li>Calling Codes</li>
                    </ul>
                    <ul>
                        <li>{props.counrtryDetails?.demonym}</li>
                        <li>{props.counrtryDetails?.capital}</li>
                        <li>{props.counrtryDetails?.currencies[0]?.name}</li>
                        <li>{props.counrtryDetails?.region}</li>
                        <li>{props.counrtryDetails?.nativeName}</li>
                        <li>{props.counrtryDetails?.timezones[0]}</li>
                        <li>{props.counrtryDetails?.numericCode}</li>
                        <li>{props.counrtryDetails?.callingCodes}</li>
                    </ul>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
