import * as React from "react";
import Modal from "@mui/material/Modal";
import {
    CloseBtn,
    HeaderTitle,
    ModalBox,
    ModalBoxHeader,
} from "components/CartModal/style";
import { CloseIcon } from "assets/images/svgIcons";
import MainContext from "context/CartContext";

export default function LikeModal({ likeModal, handleLike }) {

    const { likeItems } = React.useContext(MainContext);
    return (
        <div>
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
                    <div>
                        {likeItems.map((el) => (
                            <p>{el.name }</p>
                        ))}
                    </div>
                </ModalBox>
            </Modal>
        </div>
    );
}
