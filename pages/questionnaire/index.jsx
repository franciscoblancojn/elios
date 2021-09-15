import React, { Component } from "react"

import Islogin from "@/components/checkLogin/isLogin";
import Content from "@/components/content";
import Points from '@/components/points';
import TitelQuestionnaire from '@/components/title/titelQuestionnaire';
import FormQuestionnaire from '@/components/form/questionnaire';

class Questionnaire extends React.Component {
    render() {
        return (
            <Islogin>
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
            </Islogin>
        )
    }
}
export default Questionnaire