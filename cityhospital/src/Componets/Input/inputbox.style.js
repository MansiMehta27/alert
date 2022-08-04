import { Input, FormFeedback } from "reactstrap";
import styled from "styled-components";

export const InputBoxStyled = styled(Input)` `;
export const FormFeedbackStyled = styled(FormFeedback)`
color:red;
display:${props=>props.error?'block':'none'}
`;