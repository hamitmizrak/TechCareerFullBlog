import React, { Component } from 'react';
import Users from './Users';

class ComponentlerArasiIletisim extends Component {
    state = {
        user44:[
            {
                id:1,
                adi:"Hamit11",
                soyadi:"Mızrak11"
            },
            {
                id:2,
                adi:"Hamit22",
                soyadi:"Mızrak22"
            }
        ]
    } ;

    render() {
        return (
            <div>
                <Users users={this.state.user44} />                   
            </div>
        );
    }
}

export default ComponentlerArasiIletisim;