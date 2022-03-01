import React, {useState} from "react";

export default function Tabs(props) {

    const [toggleState, setToggleState] = useState(props.labels.length-1);


    const toggleTab = (index) => {
        setToggleState(index);
    };


    return (
        <div className="container">
            <div className="bloc-tabs">
                {
                    props.labels.map((label, index) => {
                        return (
                            <button
                                className={toggleState ===  index ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(index)} key={index}> {label}</button>
                        );
                    })
                }
            </div>
            <div className="content-tabs">
                {
                    props.contents.map((content, index)=>{
                        return(
                            <div className={toggleState === index ? "content  active-content" : "content"}>{content}</div>
                        )
                    })
                }
            </div>
        </div>
    );
}

