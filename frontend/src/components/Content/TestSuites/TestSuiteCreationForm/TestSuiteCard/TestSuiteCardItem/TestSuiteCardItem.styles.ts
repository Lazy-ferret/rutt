import styled from 'styled-components';

export const TestSuiteCardItemWrapper = styled.div<{ value: any, type: 'id' | 'title' | 'description' | 'count' | 'date' | 'checked' }>`
width: ${(props) => {
        if (props.type === 'checked') return `8px`
        if (props.type === 'id') return `64px`
        if (props.type === 'title') return `240px`
        if (props.type === 'description') return `675px`
        if (props.type === 'count') return `31px`
        if (props.type === 'date') return `161px`
    }};
height: ${(props) => {
        if (props.type === 'checked') return `8px`
    }};
background-color: ${(props) => {
        if (props.type === 'checked'
            || props.type === 'count'
            || props.type === 'date') return props.theme.colors.second
    }};
border: ${(props) => {
        if (props.type === 'checked') return `1px solid ${props.theme.colors.main}`
    }};
border-radius: ${(props) => {
        if (props.type === 'checked') return `50%`
        if (props.type === 'count' || props.type === 'date') return `12px`
    }};
font-weight: ${(props) => {
        if (props.type !== 'id') return 700
    }};
font-size: ${(props) => {
        if (props.type === 'description') return '16px'
        if (props.type === 'count' || props.type === 'date') return '12px'
    }};
`;
