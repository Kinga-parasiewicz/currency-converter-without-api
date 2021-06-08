import React from "react";
import { TextBox, ResultText, SourceAmount, TargetAmount } from "./styled";

export const Result = ({ result }) => (
    result !== undefined && (
        <TextBox>
            <ResultText>
                <SourceAmount>
                    {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;
                </SourceAmount>
                    to&nbsp;
                <TargetAmount>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </TargetAmount>
            </ResultText>
        </TextBox>
    )
);
