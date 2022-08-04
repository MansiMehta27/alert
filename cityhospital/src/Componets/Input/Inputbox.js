import React from 'react';
import { FormFeedbackStyled, InputBoxStyled } from './inputbox.style';

function Inputbox({children, error=false, errorMessage='', ...rest}) {
          return (
                    <>
                        <InputBoxStyled {...rest}>
                        {children}
                        </InputBoxStyled>
                        <FormFeedbackStyled error={error}>
                        {errorMessage}
                        </FormFeedbackStyled>
                    </>
          );
}

export default Inputbox;