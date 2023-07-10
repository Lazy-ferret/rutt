import React, { useState } from "react";
import { ContentWrapper } from "./Content.styles";
import ActionBar from "./ActionBar/ActionBar";
import TestSuiteCreationForm from "./TestSuites/TestSuiteCreationForm/TestSuiteCreationForm";
import { ContentItemStateType } from "../../types/types";
import TestSuiteCard from "./TestSuites/TestSuiteCreationForm/TestSuiteCard/TestSuiteCard";

type ContentPropsType = {
    type: 'main' | 'requirements' | 'cases' | 'tests'
}

const Content: React.FC<ContentPropsType> = (props) => {
    const [activated, setActivated] = useState(false)

    const isActivated = (state: ContentItemStateType) => {
        const isActivatedValue = state.some((element: { isActive: boolean }) => element.isActive === true)
        setActivated(isActivatedValue)
    }

    const testSuites = [{
        id: 't345',
        title: 'Login page',
        description: 'Lorem ipsum dolor sit amet',
        count: 15,
        date: '11/11/2011 13:13:13',
        checked: false
    },
    {
        id: 't346',
        title: 'Login page',
        description: 'Lorem ipsum dolor sit amet',
        count: 15,
        date: '11/11/2011 13:13:13',
        checked: false
    },
    {
        id: 't346',
        title: 'Login page',
        description: 'Lorem ipsum dolor sit amet',
        count: 15,
        date: '11/11/2011 13:13:13',
        checked: false
    },
    ]

    return <ContentWrapper>
        {props.type === 'main' &&
            <>
                <ActionBar isActivated={isActivated} />
                {activated && <TestSuiteCreationForm />}
            </>
        }
        {props.type === 'requirements' &&
            <div>REQUIEMENTS</div>
        }
        {props.type === 'cases' &&
            <div>USE CASES</div>
        }
        {props.type === 'tests' &&
            testSuites.map(item => <TestSuiteCard {...item} />)}
    </ContentWrapper>
}

export default Content;
