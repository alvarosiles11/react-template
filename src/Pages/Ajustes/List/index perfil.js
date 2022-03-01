import React, { Component } from 'react';
import { SIcon, SScrollView2, SText, STheme, SView } from 'servisofts-component';

export default class List extends Component {
constructor(props) {
super(props);
this.state = {

};
}
getBackIcon() {
return <SView height center>
<SView width={14} height={14} style={{ transform: [{ rotate: '180deg' }], }} >
<SIcon name="Back" fill={STheme.color.card} />
</SView>
</SView>
}


render() {

const auxColor001 = 'red';
const auxColor002 = 'grenn';
const auxColor003 = '#484848';

const centerRight = {
height: '100%',
justifyContent: 'center',
alignItems: "flex-start",
//backgroundColor: auxColor001,
};

const centerText = {
height: '100%',
justifyContent: 'center',
//ackgroundColor: auxColor002,

};

const centerLeft = {
height: '100%',
justifyContent: 'center',
alignItems: "flex-end",
//backgroundColor: auxColor001
};

const imgUser = {
width: 70,
height: 70,
borderRadius: 50, overflow: 'hidden', backgroundColor: STheme.color.card,
};
const imgQr = {
width: 40,
height: 40,
padding: 5,
borderRadius: 50, overflow: 'hidden', backgroundColor: STheme.color.card,
};
const lineaAjust = {
alignItems: "flex-end",

};

const imgGo = {
width: 10,
height: 10,
transform: [{ rotate: '180deg' }],
};

return (
<SView col={"xs-12"} flex>
<SScrollView2 disableHorizontal>
<SView height={20} />

<SView col={"xs-12 md-12 lg-10 xl-6"} height={90} center card>
<SView col={"xs-11"} row >
<SView col={"xs-2 md-1 lg-1"} style={centerRight}>
<SView style={{ width: 50, height: 50, backgroundColor: 'red' }} >
<SIcon name="Girl" fill={STheme.color.info} />
</SView>
</SView>
<SView col={"xs-10 md-10 lg-10"} >
<SView height center style={centerText} >
<SText fontSize={12} col={"xs-11 md-12"} color={STheme.color.lightBlack} >{"Ingresa tu nombre y añade una foto del perdil (opcional)."}</SText>
</SView>
</SView>
</SView>
</SView>


<SView col={"xs-12 md-12 lg-10 xl-6"} height={50} card style={{ alignItems: 'center' }}>
<SView col={"xs-11"} row >
<SView col={"xs-2 md-1 lg-1"} >
<SText fontSize={16} col={"xs-12"} style={{ color: 'blue' }} >Editar</SText>
</SView>
</SView>
</SView>


<SView col={"xs-12"} height={1.2} row >
<SView col={"xs-12"} style={centerLeft}>
<SView col={"xs-11.5"} height={1.2} style={{ backgroundColor: auxColor003 }} />
</SView>
</SView>
<SView col={"xs-12 md-12 lg-10 xl-6"} height={45} center card >
<SView col={"xs-11"} row>
<SView col={"xs-12"} style={centerRight}>
<SText fontSize={16} col={"xs-12"} >Brian Baldivieso 🕉️ 🇨🇵</SText>
</SView>
</SView>
</SView>
<SView col={"xs-12"} height={1.2} row >
<SView col={"xs-12"} style={centerLeft}>
<SView col={"xs-11.5"} height={1.2} style={{ backgroundColor: auxColor003 }} />
</SView>
</SView>

<SView height={20} card />





<SView height={15} />


<SView col={"xs-12"} height={45} center style={centerText} >
<SText fontSize={16} col={"xs-11"} >Número de teléfono</SText>
</SView>
<SView col={"xs-12 md-12 lg-10 xl-6"} >
<SView col={"xs-12"} height={0.5} style={{ backgroundColor: auxColor003 }} />
</SView>
<SView col={"xs-12 md-12 lg-10 xl-6"} height={45} center card>
<SView col={"xs-11"} row >
<SView col={"xs-10 md-11 lg-11"} height style={centerText} >
<SText fontSize={14} col={"xs-11"} >+59177161521</SText>
</SView>
<SView col={"xs-2 md-1 lg-1"} center style={centerLeft}>
{this.getBackIcon()}
</SView>
</SView>
</SView>
<SView col={"xs-12 md-12 lg-10 xl-6"} >
<SView col={"xs-12"} height={0.5} style={{ backgroundColor: auxColor003 }} />
</SView>




<SView height={15} />

<SView col={"xs-12"} height={45} center style={centerText} >
<SText fontSize={16} col={"xs-11"} >Info.</SText>
</SView>
<SView col={"xs-12 md-12 lg-10 xl-6"} >
<SView col={"xs-12"} height={0.5} style={{ backgroundColor: auxColor003 }} />
</SView>
<SView col={"xs-12 md-12 lg-10 xl-6"} height={45} center card>
<SView col={"xs-11"} row >
<SView col={"xs-11 md-11 lg-11"} height style={centerText} >
<SText fontSize={14}>Nos convertimos en lo que pensamos 🕉️</SText>
</SView>
<SView col={"xs-1 md-1 lg-1"} center style={centerLeft}>
{this.getBackIcon()}
</SView>
</SView>
</SView>
<SView col={"xs-12 md-12 lg-10 xl-6"} >
<SView col={"xs-12"} height={0.5} style={{ backgroundColor: auxColor003 }} />
</SView>



</SScrollView2 >
</SView >
);
}
}

