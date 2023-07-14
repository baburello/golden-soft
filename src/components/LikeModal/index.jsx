import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {
    CloseBtn,
    HeaderTitle,
    ModalBox,
    ModalBoxHeader,
} from "components/CartModal/style";
import { CloseIcon } from "assets/images/svgIcons";

export default function LikeModal({ likeModal, handleLike }) {
    return (
        <div>
            <Button onClick={handleLike}>Open modal</Button>
            <Modal
                open={likeModal}
                onClose={handleLike}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <ModalBox>
                    <ModalBoxHeader>
                        <HeaderTitle>hii</HeaderTitle>
                            <CloseBtn onClick={() => handleLike()}>
                                <CloseIcon></CloseIcon>
                            </CloseBtn>
                        
                    </ModalBoxHeader>
                </ModalBox>
            </Modal>
        </div>
    );
}
