import React from "react";
import { TestSuiteCardWrapper } from "./TestSuiteCard.styles";
import TestSuiteCardItem from "./TestSuiteCardItem/TestSuiteCardItem";

type TestSuiteCardPropsType = {
    id: string,
    title: string,
    description: string,
    count: number | null,
    date: string,
    checked: boolean
}

const TestSuiteCard: React.FC<TestSuiteCardPropsType> = (props) => {
    const {id, title, description, count, date, checked} = props

    return <TestSuiteCardWrapper>
        <TestSuiteCardItem value={checked} type='checked' />
        <TestSuiteCardItem value={id} type='id' />
        <TestSuiteCardItem value={title} type='title' />
        <TestSuiteCardItem value={description} type='description' />
        <TestSuiteCardItem value={count} type='count' />
        <TestSuiteCardItem value={date} type='date' />
    </TestSuiteCardWrapper>
}

export default TestSuiteCard;
