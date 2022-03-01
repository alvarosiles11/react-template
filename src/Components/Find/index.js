import React, { Component } from 'react';
import { SIcon, SInput, STheme, SView } from 'servisofts-component';

type typeProps = {
}

class Find extends Component<typeProps> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <SView col={"xs-12"} height={32} >
                <SInput
                    height
                    placeholder={"Search for chats and people"}
                    icon={
                        <SView width={30} center>
                            <SIcon name={"Search"} width={20} fill={STheme.color.secondary} />
                        </SView>
                    }
                    style={{
                        backgroundColor: STheme.color.card,
                        borderRadius: 8,
                    }} />
            </SView>
        );
    }
}
export default Find;