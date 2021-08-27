import React, { Component } from "react"

import Content from "@/components/content";
import Points from '@/components/points';
import TitelQuestionnaire from '@/components/title/titelQuestionnaire';
import FormQuestionnaire from '@/components/form/questionnaire';

class Questionnaire extends React.Component {
    render() {
        return (
            <Content 
            title="Questionnaire"
            className="page-questionnaire cMenu"
            >
                <br />
                <Points
                    n={2}
                    s={0}
                ></Points>
                <TitelQuestionnaire></TitelQuestionnaire>
                <FormQuestionnaire></FormQuestionnaire>
            </Content>
        )
    }
}
export default Questionnaire