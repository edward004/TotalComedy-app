import { DesignSystem } from "@microsoft/fast-foundation"
import { allComponents } from '@microsoft/fast-components';
import React = require("react");

DesignSystem.getOrCreate().register(
    Object.values(allComponents).map(definition => definition())
);

export class AppRoute {

    private test = [];

    
    func(){
        
    }

    render() {
        return(
        <div>
            <div>Hello world</div>
            <fast-button></fast-button>
        </div>
        );
    }

}