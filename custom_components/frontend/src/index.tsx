import {ComponentProps, withStreamlitConnection, Streamlit} from "streamlit-component-lib";
import React, {useEffect} from "react"
import ReactDOM from "react-dom"
import componentsMap from "./components";

//select component
const StreamlitComponent = (props: ComponentProps) => {
    const { id, kw, height } = props.args;

    //set height conditionally
    useEffect(() => {
        if (height === 0) {
            Streamlit.setFrameHeight();
        } else {
            Streamlit.setFrameHeight(height);
        }
    }, [height]);
    
    const component = componentsMap[id]
    if (component === undefined) {
        return <></>
    } else {
        return component(kw)
    }

};

//wrap component
const MyComponent = withStreamlitConnection(StreamlitComponent)

//render component
ReactDOM.render(
    <React.StrictMode>
        <MyComponent/>
    </React.StrictMode>,
    document.getElementById("root")
)