import React, { Component } from 'react';
import { KeyboardAvoidingView } from "react-native"
import { SGradient, SHr, SIcon, SImage, SNavigation, SScrollView2, SText, STheme, SView, } from 'servisofts-component';
import SSocket from 'servisofts-socket'
import Usuario from '../../../../Usuario';
import Actions from '../../../Actions';

export default class ListaChats extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (

            <SView col={"xs-12"} height style={{
                position: 'absolute',
            }} >

                <SScrollView2 disableHorizontal  >
                    <SView height={60} />
                    <SView col={"xs-12"} center >
                        <SView height={24} />
                        <SView flex col={"xs-12"}    >
                            <SView flex col={"xs-8.5"} height style={{
                                borderRadius: 5,
                                padding: 10,
                                backgroundColor: STheme.color.card,
                            }}>
                                <SText>
                                    Can you believe this amazing chat bubbles?It's all CSS. Can you believe this amazing chat bubbles? It's al CSS.Can you believe this amazing chat bubbles?It's all CSS.
                                    &#x1f60d;
                                </SText>

                                <SView height={10} />
                                <SText fontSize={8} style={{ alignItems: 'flex-end', }} >10: 21 pm</SText>
                                <SView height={4} />
                            </SView>
                        </SView>
                        <SView height={24} />
                        <SView col={"xs-12"} row style={{ justifyContent: 'flex-end', }}>
                            <SView style={{
                                maxWidth: '80%',
                                borderRadius: 5,
                                backgroundColor: STheme.color.card,
                            }}>
                                <SText>
                                    asdasd  &#x1f60d;
                                </SText>
                                <SView height={10} />
                                <SText fontSize={8} style={{ alignItems: 'flex-end', }} >10: 21 pm</SText>
                                <SView height={4} />
                            </SView>
                        </SView>
                        <SView height={24} />

                        <SView col={"xs-12"} row style={{ justifyContent: 'flex-start', }}>
                            <SView style={{
                                //maxWidth: '80%',
                                minWidth: '10%',

                                borderRadius: 5,
                                backgroundColor: STheme.color.card,
                            }}>
                                <SText>
                                    asdasd  &#x1f60d;

                                </SText>
                                <SView height={10} />
                                <SText fontSize={8} style={{ alignItems: 'flex-end', }} >10: 21 pm</SText>
                                <SView height={4} />
                            </SView>

                            <SView flex style={{
                                //minWidth: '80%',

                            }}>
                            </SView>
                        </SView>
                        <SView height={24} />
                        <SView col={"xs-12"} row style={{ justifyContent: 'flex-end' }}>

                            <SView style={{
                                maxWidth: '80%',
                                borderRadius: 5,
                                padding: 4,
                                backgroundColor: STheme.color.card,
                            }}>
                                <SText>
                                    &#x1f60d;
                                    asdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasd
                                </SText>
                                <SView height={10} />
                                <SText fontSize={8} style={{ alignItems: 'flex-end', }} >10: 21 pm</SText>
                                <SView height={4} />
                            </SView>


                        </SView>
                        <SView height={24} />
                        <SView col={"xs-12"} row style={{ justifyContent: 'flex-end' }}>

                            <SView style={{
                                maxWidth: '80%',
                                borderRadius: 5,
                                padding: 4,
                                backgroundColor: STheme.color.card,
                            }}>
                                <SText>
                                    &#x1f60d;
                                    asdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasd
                                </SText>
                                <SView height={10} />
                                <SText fontSize={8} style={{ alignItems: 'flex-end', }} >10: 21 pm</SText>
                                <SView height={4} />
                            </SView>


                        </SView>
                        <SView height={24} />
                        <SView col={"xs-12"} row style={{ justifyContent: 'flex-end' }}>

                            <SView style={{
                                maxWidth: '80%',
                                borderRadius: 5,
                                padding: 4,
                                backgroundColor: STheme.color.card,
                            }}>
                                <SText>
                                    &#x1f60d;
                                    asdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasd
                                </SText>
                                <SView height={10} />
                                <SText fontSize={8} style={{ alignItems: 'flex-end', }} >10: 21 pm</SText>
                                <SView height={4} />
                            </SView>


                        </SView>
                        <SView height={24} />
                        <SView col={"xs-12"} row style={{ justifyContent: 'flex-end' }}>

                            <SView style={{
                                maxWidth: '80%',
                                borderRadius: 5,
                                padding: 4,
                                backgroundColor: STheme.color.card,
                            }}>
                                <SText>
                                    &#x1f60d;
                                    asdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasd
                                </SText>
                                <SView height={10} />
                                <SText fontSize={8} style={{ alignItems: 'flex-end', }} >10: 21 pm</SText>
                                <SView height={4} />
                            </SView>


                        </SView>
                        <SView height={24} />
                        <SView col={"xs-12"} row style={{ justifyContent: 'flex-end' }}>

                            <SView style={{
                                maxWidth: '80%',
                                borderRadius: 5,
                                padding: 4,
                                backgroundColor: STheme.color.card,
                            }}>
                                <SText>
                                    &#x1f60d;
                                    asdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasd
                                </SText>
                                <SView height={10} />
                                <SText fontSize={8} style={{ alignItems: 'flex-end', }} >10: 21 pm</SText>
                                <SView height={4} />
                            </SView>


                        </SView>
                        <SView height={24} />
                        <SView col={"xs-12"} row style={{ justifyContent: 'flex-end' }}>

                            <SView style={{
                                maxWidth: '80%',
                                borderRadius: 5,
                                padding: 4,
                                backgroundColor: STheme.color.card,
                            }}>
                                <SText>
                                    &#x1f60d;
                                    asdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasd
                                </SText>
                                <SView height={10} />
                                <SText fontSize={8} style={{ alignItems: 'flex-end', }} >10: 21 pm</SText>
                                <SView height={4} />
                            </SView>


                        </SView>
                        <SView height={24} />
                        <SView col={"xs-12"} row style={{ justifyContent: 'flex-end' }}>

                            <SView style={{
                                maxWidth: '80%',
                                borderRadius: 5,
                                padding: 4,
                                backgroundColor: STheme.color.card,
                            }}>
                                <SText>
                                    &#x1f60d;
                                    asdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasd
                                </SText>
                                <SView height={10} />
                                <SText fontSize={8} style={{ alignItems: 'flex-end', }} >10: 21 pm</SText>
                                <SView height={4} />
                            </SView>


                        </SView>

                    </SView>
                </SScrollView2 >

                {/* </KeyboardAvoidingView> */}



            </SView >

        );
    }
}
