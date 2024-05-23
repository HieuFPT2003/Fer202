import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Ex3() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <button
                onClick={() => {
                    setShow(true);
                }}
            >
                Show
            </button>

            <Modal show={show}>
                <button
                    onClick={() => {
                        setShow(false);
                    }}
                >
                    Hide
                </button>
                Toggle me!
            </Modal>
        </div>
    );
}

export default Ex3;
