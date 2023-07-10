import React from "react";
import { TestSuiteCardItemWrapper } from "./TestSuiteCardItem.styles";

type TestSuiteCardItemPropsType = {
    value: any, 
    type: 'id' | 'title' | 'description' | 'count' | 'date' | 'checked' 
}

const TestSuiteCardItem: React.FC<TestSuiteCardItemPropsType> = (props) => {
    
    return <TestSuiteCardItemWrapper {...props}>
        {props.value}
    </TestSuiteCardItemWrapper>
}

export default TestSuiteCardItem;
