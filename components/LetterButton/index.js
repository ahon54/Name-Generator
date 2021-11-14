import React from "react";

import { Wrapper } from './LetterButton.styles.js'

const Button = ({ text, callback }) => (
    <Wrapper type="Button" onPress={callback}>
        {text}
    </Wrapper>
)

export default Button;